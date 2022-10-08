import { FC, ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

type Props = {
  children: ReactNode;
};

export const AppProvider: FC<Props> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>{children}</ChakraProvider>
  </QueryClientProvider>
);
