// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./chakra/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider
        theme={theme}
        toastOptions={{ defaultOptions: { position: "top-right" } }}
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
