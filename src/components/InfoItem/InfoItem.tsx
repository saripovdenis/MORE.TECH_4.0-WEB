import { FC } from "react";
import { Panel } from "@components/Panel";
import { SkeletonText } from "@chakra-ui/react";

import styles from "./InfoItem.module.css";

type Props = {
  isSkeleton?: boolean;
};

export const InfoItem: FC<Props> = ({ isSkeleton }) => (
  <Panel className={styles.block}>
    <SkeletonText
      isLoaded={!isSkeleton}
      style={{ width: "100%" }}
      mt="4"
      noOfLines={5}
      spacing="5"
      fadeDuration={2}
    >
      <span>hui</span>
    </SkeletonText>
  </Panel>
);
