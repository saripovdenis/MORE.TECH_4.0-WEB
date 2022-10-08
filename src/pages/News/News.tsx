import { FC } from "react";
import { AppLayout } from "@components/AppLayout";
import { Tabs } from "@components/Tabs";

export const News: FC = () => (
  <AppLayout>
    <Tabs items={["Гендир", "Бухгалтер"]} />
  </AppLayout>
);
