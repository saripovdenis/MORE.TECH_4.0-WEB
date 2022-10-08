import { FC } from "react";
import { Tabs as TabsUI, Tab, TabList } from "@chakra-ui/react";

type Props = {
  items: string[];
};

export const Tabs: FC<Props> = ({ items }) => (
  <TabsUI variant="soft-rounded" colorScheme="green">
    <TabList>
      {items.map((el) => (
        <Tab key={el}>{el}</Tab>
      ))}
    </TabList>
  </TabsUI>
);
