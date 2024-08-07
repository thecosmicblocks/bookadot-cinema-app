"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query-client";

const ReactQueryWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryWrapper;
