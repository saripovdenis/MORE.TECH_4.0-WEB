import { FC } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import styles from "./InfoItem.module.scss";
import { SkeletonCircle } from "@chakra-ui/react";

type Props = {
  items: [string, string, string] | [undefined, undefined, undefined];
  isSkeleton?: boolean;
};

export const LinkList: FC<Props> = ({ items, isSkeleton = false }) => (
  <div className={styles.linksContainer}>
    {items.map((el, i) => (
      <SkeletonCircle
        key={el ?? i}
        startColor="teal.300"
        isLoaded={!isSkeleton}
        size="10"
        fadeDuration={2}
      >
        <a href={el} target="_blank">
          <div className={styles.linkWrapper}>
            <ExternalLinkIcon w={4} h={4} />
          </div>
        </a>
      </SkeletonCircle>
    ))}
  </div>
);
