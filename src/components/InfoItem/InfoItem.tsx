import { ComponentProps, FC } from "react";
import { SkeletonText, SkeletonCircle } from "@chakra-ui/react";
import { Panel } from "@components/Panel";
import { Typography } from "@components/Typography";

import styles from "./InfoItem.module.scss";
import { LinkList } from "@components/InfoItem/LinkList";

type Props = {
  title?: string;
  links?: ComponentProps<typeof LinkList>["items"];
  isSkeleton?: boolean;
};

export const InfoItem: FC<Props> = ({
  isSkeleton,
  title = "",
  links = [undefined, undefined, undefined],
}) => (
  <Panel className={styles.block}>
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <SkeletonText
          startColor="teal.300"
          isLoaded={!isSkeleton}
          style={{ width: "100%" }}
          mt="4"
          noOfLines={5}
          spacing="5"
          fadeDuration={2}
        >
          <Typography as="h3" className={styles.title}>
            {title}
          </Typography>
        </SkeletonText>
      </div>
      <div>
        <LinkList items={links} isSkeleton={isSkeleton} />
      </div>
    </div>
  </Panel>
);
