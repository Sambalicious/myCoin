import { Checkbox } from "@chakra-ui/checkbox";
import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from "@chakra-ui/react";
import {
  Box,
  Divider,
  Flex,
  List,
  ListItem,
  Spacer,
  Stack,
} from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { allCoins } from "./mycoins";
import { CoinType } from "../../types";
import { _getFromLocalStorage, _postToLocalStorage } from "./helpers/utils";

interface IhandleSearch {
  handleSearch: () => void;
}

// interface filter {
//   filter: (a: CoinType) => string[];
// }

const SearchInput = () => {
  const [coins, setCoins] = useState<CoinType[]>(allCoins);
  const [coin, setCoin] = useState<string>("");
  const [fixed, setFixed] = useState<boolean>(false);
  const [status, setStatus] = useState("sold");

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

    // allOrderProduct[productIndex].Quantity =
    // //     Number(item.Quantity || 0) + Number(quantity);
    // //   const newProducts = [...allOrderProduct];
    // //   setCartItems(newProducts);

    // const index = coins[id + -1];

    setStatus(status === "bought" ? "bought" : "sold");

    _postToLocalStorage("myCoins", newCoinStatus);
  };

  const getAllCoins = () => {
    let result = _getFromLocalStorage("myCoins");
    setCoins(result);
  };

  useEffect(() => {
    getAllCoins();
  }, [status]);

  // const handleBought = (id: number) => {
  //   console.log(id);
  //   setStatus("bought");
  // };

  // const handleSold = (id: number) => {
  //   console.log(id);
  //   setStatus("sold");
  // };

  const handleCheckbox = (e) => {
    console.log("shot fired", e?.target?.checked);
    setFixed(!fixed);
  };
  console.log(status);
  return (
    <div>
      <Stack spacing={3}>
        <Input
          variant="filled"
          placeholder="Search Coin"
          size="md"
          value={coin}
          onChange={handleSearch}
        />
      </Stack>

      <div>
        <List spacing={4} mt={5} w="100%">
          {coins ? (
            coins.map((coin) => (
              <Flex py={4} w="100%" key={coin.id}>
                <ListItem>
                  <Flex display="flex" justify="space-between" align="center">
                    <Box w="100%">
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
                      <Box p={1}>{coin.name}</Box>
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
