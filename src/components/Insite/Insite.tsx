import { FC } from "react";

import styles from "./Insite.module.css";
import { Typography } from "@components/Typography";

type Props = {
  hypothesis: string;
  situation: string;
  insite: string;
};

export const Insite: FC<Props> = ({ hypothesis, situation, insite }) => (
  <div className={styles.block}>
    <div className={styles.content}>
      <Typography as="p">{"Условие: " + hypothesis}</Typography>
      <Typography as="p">{"Ситуация: " + situation}</Typography>
      <Typography as="p">{"Инсайт: " + insite}</Typography>
    </div>
  </div>
);
