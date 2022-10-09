import { ComponentProps, FC } from "react";
import { Insite } from "@components/Insite";

import styles from "./InsitesList.module.scss";
import { Panel } from "@components/Panel";
import { Typography } from "@components/Typography";

type Props = {
  items: ComponentProps<typeof Insite>[];
};

export const InsitesList: FC<Props> = ({ items }) => (
  <div className={styles.block}>
    <Typography as="h1">Инсайты</Typography>
    <br />
    <div className={styles.content}>
      {items.map((el) => (
        <Panel key={el.hypothesis} className={styles.panel}>
          <Insite {...el} />
        </Panel>
      ))}
    </div>
  </div>
);
