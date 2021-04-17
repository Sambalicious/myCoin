import { Checkbox } from "@chakra-ui/checkbox";
import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";
import {
  Box,
  Divider,
  Flex,
  List,
  ListItem,
  Spacer,
  Stack,
  ListIcon,
} from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { allCoins } from "./mycoins";
import { CoinType } from "../../types";
import { _getFromLocalStorage, _postToLocalStorage } from "./helpers/utils";
import { MdSettings } from "react-icons/md";

const SearchInput = () => {
  const [coins, setCoins] = useState<CoinType[]>(allCoins);
  const [coin, setCoin] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    let input = e.target as HTMLInputElement;

    let value = input.value;
    setCoin(value);
    let result: CoinType[] = allCoins.filter((coin: CoinType) =>
      coin.name.toLowerCase().includes(value.toLowerCase())
    );

    console.log(result);

    setCoins(result);
  };

  const handleCoinStatus = (status: string, id: number) => {
    const coins = [...allCoins];
    const coinIndex = coins.findIndex((coin) => coin.id === id);
    coins[coinIndex].status = status;

    const newCoinStatus = [...coins];
    setCoins(newCoinStatus);
    _postToLocalStorage("myCoins", newCoinStatus);
  };

  const getAllCoins = () => {
    let result = _getFromLocalStorage("myCoins");
    setCoins(result);
  };

  useEffect(() => {
    getAllCoins();
  }, []);

  return (
    <div>
      <Stack spacing={3}>
        <Box
          bg="#fff"
          py="10"
          px="5"
          zIndex="99"
          w="100%"
          left="0"
          boxShadow="2xl"
          position="fixed"
          top="0"
        >
          <Input
            variant="filled"
            placeholder="Search Coin"
            size="md"
            value={coin}
            onChange={handleSearch}
          />
        </Box>
      </Stack>

      <div>
        <List spacing={4} mt={20} w="100%">
          {coins.length > 0 ? (
            coins.map((coin) => (
              <Flex py={4} w="100%" key={coin.id}>
                <ListItem>
                  <Flex display="flex" justify="space-between" align="center">
                    <Box display="flex" w="100%">
                      {/* <Checkbox
                        size="md"
                        colorScheme="green"
                        spacing="1rem"
                        onChange={handleCheckbox}
                      > */}
                      {/* <div style={{ display: "flex" }}>
                    <ListIcon key={coin.id} color="green.500" />
                    {coin.name}
                  </div> */}
                      <ListIcon
                        key={coin.id}
                        as={MdSettings}
                        color="green.500"
                      />
                      <Flex flex={1} p={1}>
                        {coin.name}
                      </Flex>
                    </Box>

                    <Spacer />

                    <Spacer />
                    <Box p={4} w="100%">
                      <Checkbox
                        size="md"
                        value={coin.status}
                        isChecked={coin.status === "bought"}
                        colorScheme="green"
                        onChange={() => handleCoinStatus("bought", coin.id)}
                      />
                    </Box>
                    <Spacer />
                    <Box p={4}>
                      <Checkbox
                        size="md"
                        value={coin.status}
                        isChecked={coin.status === "sold"}
                        colorScheme="red"
                        onChange={() => handleCoinStatus("sold", coin.id)}
                      />
                    </Box>

                    <Box>
                      <Button
                        colorScheme={coin.status == "bought" ? "green" : "red"}
                      >
                        {coin.status}
                      </Button>
                    </Box>
                  </Flex>
                </ListItem>

                <Divider />
              </Flex>
            ))
          ) : (
            <div>No result found</div>
          )}
        </List>
      </div>
    </div>
  );
};

export default SearchInput;
