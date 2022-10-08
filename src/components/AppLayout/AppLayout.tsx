import { FC, ReactNode } from "react";

import styles from "./AppLayout.module.css";

type Props = {
  header?: ReactNode;
  children: ReactNode | ReactNode[];
  footer?: ReactNode;
};

export const AppLayout: FC<Props> = ({ header, children, footer }) => (
  <div className={styles.block}>
    <header>{header}</header>
    <main role="main" className={styles.main}>
      {children}
    </main>
    <footer>{footer}</footer>
  </div>
);
