import { FC } from "react";
import { Tabs as TabsUI, Tab, TabList } from "@chakra-ui/react";

import { Panel } from "@components/Panel";

import styles from "./Tabs.module.css";

type Props = {
  items: string[];
};

export const Tabs: FC<Props> = ({ items }) => (
  <Panel className={styles.block}>
    <TabsUI variant="soft-rounded" colorScheme="teal">
      <TabList>
        {items.map((el) => (
          <Tab key={el}>{el}</Tab>
        ))}
      </TabList>
    </TabsUI>
  </Panel>
);
