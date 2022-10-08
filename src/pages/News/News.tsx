import { FC } from "react";
import { AppLayout } from "@components/AppLayout";
import { Tabs } from "@components/Tabs";
import { InfoItem } from "@components/InfoItem";
import { Typography } from "@components/Typography";

import styles from "./News.module.css";

export const News: FC = () => (
  <AppLayout>
    <div className={styles.content}>
      <Tabs items={["Гендир", "Бухгалтер"]} />
      <div className={styles.digestContainer}>
        <Typography as="h1" className={styles.header}>
          Дайджест
        </Typography>
        <InfoItem isSkeleton={true} />
      </div>
      <div className={styles.trendsContainer}>
        <Typography as="h1" className={styles.header}>
          Тренды
        </Typography>
        <InfoItem isSkeleton={true} />
      </div>
    </div>
  </AppLayout>
);
