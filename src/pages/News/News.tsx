import { FC, useState, useCallback } from "react";
import { useQuery } from "react-query";

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
  const setTab = useCallback(
    (index: number) => setRole(tabsItems[index]?.role ?? Roles.Director),
    [tabsItems]
  );
  const digestQuery = useQuery<DigestData>("digestQuery", ({ signal }) =>
    newsApi.getDigest(role, signal, false)
  );
  const trendsQuery = useQuery<TrendsData>("trendsQuery", ({ signal }) =>
    newsApi.getTrends(role, signal, true)
  );

  const isDigestSkeleton = Boolean(digestQuery.isLoading || digestQuery.error);
  const isTrendsSkeleton = Boolean(trendsQuery.isLoading || trendsQuery.error);

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
          isSkeleton={isDigestSkeleton}
        />
        <NewsBlock
          header={trendsLabel}
          items={trendsItems}
          isSkeleton={isTrendsSkeleton}
        />
      </div>
    </AppLayout>
  );
};
