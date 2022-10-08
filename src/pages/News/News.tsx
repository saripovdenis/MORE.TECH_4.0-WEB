import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { AppLayout } from "@components/AppLayout";
import { Tabs } from "@components/Tabs";
import { InfoItem } from "@components/InfoItem";
import { Typography } from "@components/Typography";

import styles from "./News.module.scss";

export const News: FC = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 425px)",
  });

  return (
    <AppLayout>
      <div className={styles.content}>
        <Tabs items={["Гендир", "Бухгалтер"]} />
        <div className={styles.container}>
          <Typography as="h1" className={styles.header}>
            Дайджест
          </Typography>
          <div className={styles.itemsWrapper}>
            <InfoItem isSkeleton={true} />
            <InfoItem isSkeleton={true} />
            <InfoItem isSkeleton={true} />
            <InfoItem isSkeleton={true} />
            <InfoItem isSkeleton={true} />
            <InfoItem isSkeleton={true} />
            <InfoItem isSkeleton={true} />
          </div>
        </div>
        <div className={styles.container}>
          <Typography as="h1" className={styles.header}>
            Тренды
          </Typography>
          <div className={styles.itemsWrapper}>
            <InfoItem isSkeleton={true} />
            <InfoItem isSkeleton={true} />
            <InfoItem isSkeleton={true} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
