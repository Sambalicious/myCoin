import Home from "../src/components/home/Home";
import Wrapper from "../src/components/layouts/Wrapper";
import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"

export default function App() {
  return (
    <ChakraProvider>
    <Wrapper>
      <Home />
    </Wrapper>
    </ChakraProvider>
  );
}

