import { FC, ReactNode } from "react";
import cx from "classnames";

import styles from "./Panel.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Panel: FC<Props> = ({ children, className }) => (
  <div className={cx(styles.block, className)}>
    <div className={styles.content}>{children}</div>
  </div>
);
