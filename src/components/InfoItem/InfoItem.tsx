import { FC } from "react";
import { SkeletonText, Skeleton } from "@chakra-ui/react";
import { Panel } from "@components/Panel";
import { Typography } from "@components/Typography";

import styles from "./InfoItem.module.scss";

type Props = {
  title?: string;
  isSkeleton?: boolean;
};

export const InfoItem: FC<Props> = ({ isSkeleton, title = "" }) => (
  <Panel className={styles.block}>
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <Skeleton
          startColor="teal.200"
          height="20px"
          isLoaded={!isSkeleton}
          style={{ width: isSkeleton ? "100px" : "100%", borderRadius: "20px" }}
          fadeDuration={2}
        >
          <Typography as="h3" className={styles.title}>
            {title}
          </Typography>
        </Skeleton>
      </div>
      <div>
        <SkeletonText
          startColor="teal.200"
          isLoaded={!isSkeleton}
          style={{ width: "100%" }}
          mt="4"
          noOfLines={5}
          spacing="5"
          fadeDuration={2}
        >
          <div></div>
        </SkeletonText>
      </div>
    </div>
  </Panel>
);
