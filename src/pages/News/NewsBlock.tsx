import { FC, ComponentProps } from "react";
import styles from "@pages/News/News.module.scss";
import { Typography } from "@components/Typography";
import { InfoItem } from "@components/InfoItem";

type Props = {
  header: string;
  isSkeleton?: boolean;
  items: ComponentProps<typeof InfoItem>[] | undefined[];
};

export const NewsBlock: FC<Props> = ({ header, isSkeleton = true, items }) => {
  return (
    <div className={styles.container}>
      <Typography as="h1" className={styles.header}>
        {header}
      </Typography>
      <div className={styles.itemsWrapper}>
        {items.map((el, i) => (
          <InfoItem key={el?.title ?? i} {...el} isSkeleton={isSkeleton} />
        ))}
      </div>
    </div>
  );
};
