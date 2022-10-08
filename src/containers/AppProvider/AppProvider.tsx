import { FC, ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

export const AppProvider: FC<Props> = ({ children }) => (
  <ChakraProvider>{children}</ChakraProvider>
);
