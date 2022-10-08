import { FC } from "react";
import cx from "classnames";

import styles from "./Typography.module.css";

type As = "h1" | "h2" | "h3" | "span";

type Props = {
  as?: As;
  children: string;
  className?: string;
};

export const Typography: FC<Props> = ({
  as: As = "span",
  children,
  className,
}) => <As className={cx(styles[As], className)}>{children}</As>;
