import { FC } from "react";
import { Tabs as TabsUI, Tab, TabList } from "@chakra-ui/react";

import { Panel } from "@components/Panel";

import styles from "./Tabs.module.css";

type Props = {
  items: string[];
  setTab?: (index: number) => void;
};

export const Tabs: FC<Props> = ({ items, setTab }) => (
  <Panel className={styles.block}>
    <TabsUI
      onChange={(index) => setTab?.(index)}
      variant="soft-rounded"
      colorScheme="teal"
    >
      <TabList>
        {items.map((el) => (
          <Tab key={el}>{el}</Tab>
        ))}
      </TabList>
    </TabsUI>
  </Panel>
);
