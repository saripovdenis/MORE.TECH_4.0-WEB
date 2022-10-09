import { FC, useState, useCallback, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Button, useDisclosure } from "@chakra-ui/react";

import { AppLayout } from "@components/AppLayout";
import { Tabs } from "@components/Tabs";
import { Panel } from "@components/Panel";
import { NewsBlock } from "./NewsBlock";

import { newsApi } from "@sources/newsApi";
import type {
  DigestData,
  TrendsData,
  InsitesData,
} from "@sources/newsApi/types";
import { Roles } from "@sources/newsApi/types";
import { RoleModal } from "@containers/RoleModal";

import styles from "./News.module.scss";
import {
  skeletonsCount,
  digestLabel,
  trendsLabel,
  tabsLabels,
  tabsItems,
} from "./News.const";
import { InsitesList } from "@containers/InsitesList";

export const News: FC = () => {
  const [role, setRole] = useState<Roles>(Roles.Director);
  const [isDigSkeleton, setIsDigestSkeleton] = useState<boolean>(true);
  const [isTrendSkeleton, setIsTrendsSkeleton] = useState<boolean>(true);

  const queryClient = useQueryClient();

  const digestQuery = useQuery<DigestData>(
    "digestQuery",
    ({ signal }) => newsApi.getDigest(role, signal, false),
    {
      refetchOnWindowFocus: false,
    }
  );
  const trendsQuery = useQuery<TrendsData>(
    "trendsQuery",
    ({ signal }) => newsApi.getTrends(role, signal, false),
    {
      refetchOnWindowFocus: false,
    }
  );

  const insitesQuery = useQuery<InsitesData>(
    "insitesQuery",
    () => newsApi.getInsites(),
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    setIsDigestSkeleton(digestQuery.error ? true : digestQuery.isFetching);
    setIsTrendsSkeleton(trendsQuery.error ? true : trendsQuery.isFetching);
  }, [digestQuery, trendsQuery]);

  const setTab = useCallback(
    (index: number) => {
      setIsDigestSkeleton(true);
      setIsTrendsSkeleton(true);
      Promise.all([
        queryClient.cancelQueries("digestQuery"),
        queryClient.cancelQueries("trendsQuery"),
      ])
        .then(() => setRole(tabsItems[index]?.role ?? Roles.Director))
        .then(() => {
          digestQuery.refetch();
          trendsQuery.refetch();
          insitesQuery.refetch();
        });
    },
    [tabsItems, digestQuery, trendsQuery, insitesQuery]
  );

  const digestItems =
    digestQuery?.data?.items ?? Array(skeletonsCount).fill(undefined);

  const trendsItems =
    trendsQuery?.data?.items ?? Array(skeletonsCount).fill(undefined);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <AppLayout>
      <div className={styles.content}>
        <div className={styles.tabsNBtn}>
          <Tabs items={tabsLabels} setTab={setTab} />
          <Panel className={styles.panel}>
            <Button
              colorScheme="teal"
              variant="ghost"
              style={{ margin: "auto" }}
              className={styles.button}
              size="sm"
              onClick={onOpen}
            >
              Создать роль
            </Button>
          </Panel>
        </div>
        <NewsBlock
          header={digestLabel}
          items={digestItems}
          isSkeleton={isDigSkeleton}
        />
        <NewsBlock
          header={trendsLabel}
          items={trendsItems}
          isSkeleton={isTrendSkeleton}
        />
        <RoleModal
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={(data) => newsApi.createRole(data.title, data.description)}
        />
        {!insitesQuery.isFetching &&
          !insitesQuery.error &&
          insitesQuery?.data?.items && (
            <InsitesList items={insitesQuery.data.items} />
          )}
        {/*{true && (*/}
        {/*  <InsitesList*/}
        {/*    items={[*/}
        {/*      { hypothesis: "1", situation: "2", onsite: "3" },*/}
        {/*      { hypothesis: "1", situation: "2", onsite: "3" },*/}
        {/*    ]}*/}
        {/*  />*/}
        {/*)}*/}
      </div>
    </AppLayout>
  );
};
