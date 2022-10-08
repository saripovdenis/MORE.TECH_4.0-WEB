import { FC, useState, useCallback, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";

import { AppLayout } from "@components/AppLayout";
import { Tabs } from "@components/Tabs";
import { NewsBlock } from "./NewsBlock";

import { newsApi } from "@sources/newsApi";
import type { DigestData, TrendsData } from "@sources/newsApi/types";
import { Roles } from "@sources/newsApi/types";

import styles from "./News.module.scss";
import {
  skeletonsCount,
  digestLabel,
  trendsLabel,
  tabsLabels,
  tabsItems,
} from "./News.const";

export const News: FC = () => {
  const [role, setRole] = useState<Roles>(Roles.Director);
  const [isDigSkeleton, setIsDigestSkeleton] = useState<boolean>(true);
  const [isTrendSkeleton, setIsTrendsSkeleton] = useState<boolean>();

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
        });
    },
    [tabsItems, digestQuery, trendsQuery]
  );

  const digestItems =
    digestQuery?.data?.items ?? Array(skeletonsCount).fill(undefined);

  const trendsItems =
    trendsQuery?.data?.items ?? Array(skeletonsCount).fill(undefined);

  return (
    <AppLayout>
      <div className={styles.content}>
        <Tabs items={tabsLabels} setTab={setTab} />
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
      </div>
    </AppLayout>
  );
};
