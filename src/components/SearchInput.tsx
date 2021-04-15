import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Divider, List, ListIcon, ListItem, Stack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { MdCheckCircle } from "react-icons/md";

interface IhandleSearch {
  handleSearch: () => void;
}

// interface filter {
//   filter: (a: CoinType) => string[];
// }

type CoinType = {
  id: number;
  name: string;
};

let allCoins: CoinType[] = [
  {
    id: 1,
    name: "ANKR",
  },
  {
    id: 2,
    name: "DATA",
  },
  {
    id: 3,
    name: "STORJ",
  },
  {
    id: 4,
    name: "HIVE",
  },
  {
    id: 5,
    name: "TFUEL",
  },
  {
    id: 6,
    name: "VITE",
  },
  {
    id: 7,
    name: "BCHA / BUSD",
  },
  {
    id: 8,
    name: "MITH",
  },
  {
    id: 9,
    name: "MATIC",
  },
  {
    id: 10,
    name: "CTSI",
  },
  {
    id: 11,
    name: "BLZ",
  },
  {
    id: 12,
    name: "PERL",
  },
  {
    id: 13,
    name: "AUDIO",
  },
  {
    id: 14,
    name: "MANA",
  },
  {
    id: 15,
    name: "MBL",
  },
  {
    id: 16,
    name: "ARPA",
  },
  {
    id: 17,
    name: "HNT",
  },
  {
    id: 18,
    name: "NBS",
  },
  {
    id: 19,
    name: "DENT",
  },
  {
    id: 20,
    name: "VTHO",
  },
  {
    id: 21,
    name: "BTT",
  },
  {
    id: 22,
    name: "NPXS",
  },
  {
    id: 23,
    name: "WIN",
  },
  {
    id: 24,
    name: "STMX",
  },
  {
    id: 25,
    name: "DREP",
  },
  {
    id: 26,
    name: "BTCST",
  },
  {
    id: 27,
    name: "ONE",
  },
  {
    id: 28,
    name: "BAT",
  },
  {
    id: 29,
    name: "IQ",
  },
  {
    id: 30,
    name: "WING",
  },
  {
    id: 31,
    name: "HOT",
  },
  {
    id: 32,
    name: "COCOS",
  },
  {
    id: 33,
    name: "AKRO",
  },
  {
    id: 34,
    name: "POND",
  },
  {
    id: 35,
    name: "SUPER",
  },
  {
    id: 36,
    name: "WTC",
  },
  {
    id: 37,
    name: "GTO",
  },
  {
    id: 38,
    name: "OG",
  },
  {
    id: 39,
    name: "OGN",
  },
  {
    id: 40,
    name: "MTL",
  },
  {
    id: 41,
    name: "WRX",
  },
  {
    id: 42,
    name: "NKN",
  },
  {
    id: 43,
    name: "PHA / BUSD",
  },
  {
    id: 44,
    name: "VIDT / BUSD",
  },
  {
    id: 45,
    name: "FIL",
  },
  {
    id: 46,
    name: "DEGO",
  },
  {
    id: 47,
    name: "GRT",
  },
  {
    id: 48,
    name: "COTI",
  },
  {
    id: 49,
    name: "",
  },
  {
    id: 50,
    name: "CHZ",
  },
  {
    id: 51,
    name: "AXS",
  },
  {
    id: 52,
    name: "TOMO",
  },
  {
    id: 53,
    name: "THETA",
  },
  {
    id: 54,
    name: "SXP",
  },
  {
    id: 55,
    name: "NMR",
  },
  {
    id: 56,
    name: "GXS",
  },
  {
    id: 57,
    name: "FOR / BUSD",
  },
  {
    id: 58,
    name: "PSG",
  },
  {
    id: 59,
    name: "WAVES",
  },
  {
    id: 60,
    name: "ARDR",
  },
  {
    id: 61,
    name: "BEAM",
  },
  {
    id: 62,
    name: "EGLD",
  },
  {
    id: 63,
    name: "CHR",
  },
  {
    id: 64,
    name: "ANT",
  },
  {
    id: 65,
    name: "VET",
  },
  {
    id: 66,
    name: "BZRX",
  },
  {
    id: 67,
    name: "BIFI / BUSD",
  },
  {
    id: 68,
    name: "OM",
  },
  {
    id: 69,
    name: "SFP",
  },
  {
    id: 70,
    name: "HBAR",
  },
  {
    id: 71,
    name: "FIO",
  },
  {
    id: 72,
    name: "ATOM",
  },
  {
    id: 73,
    name: "SAND",
  },
  {
    id: 74,
    name: "RUNE",
  },
  {
    id: 75,
    name: "ROSE",
  },
  {
    id: 76,
    name: "ZIL",
  },
  {
    id: 77,
    name: "KAVA",
  },
  {
    id: 78,
    name: "IOTX",
  },
  {
    id: 79,
    name: "IOST",
  },
  {
    id: 80,
    name: "SC",
  },
  {
    id: 81,
    name: "KEY",
  },
  {
    id: 82,
    name: "RSR",
  },
  {
    id: 83,
    name: "BAL",
  },
  {
    id: 84,
    name: "HARD",
  },
  {
    id: 85,
    name: "KSM",
  },
  {
    id: 86,
    name: "PERP",
  },
  {
    id: 87,
    name: "ONT",
  },
  {
    id: 88,
    name: "AVA",
  },
  {
    id: 89,
    name: "ICX",
  },
  {
    id: 90,
    name: "DIA",
  },
  {
    id: 91,
    name: "CFX",
  },
  {
    id: 92,
    name: "STX",
  },
  {
    id: 93,
    name: "IDEX / BUSD",
  },
];

const SearchInput = () => {
  const [coins, setCoins] = useState<CoinType[]>([]);
  const [coin, setCoin] = useState<string>("");
  const [fixed, setFixed] = useState<boolean>(false);
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

  const handleCheckbox = (id) => {
    console.log(id);
    setFixed(!fixed);
  };
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
        <List spacing={4} mt={5}>
          {coins.length > 0 ? (
            coins.map((coin) => (
              <div key={coin.id} style={{ display: "flex" , padding:"4px 0 "}}>
                {/* <input
                  type="checkbox"
                  checked={fixed}
                  onChange={() => handleCheckbox(coin.id)}
                /> */}

                <ListItem>
                  <div style={{ display: "flex" }}>
                    <ListIcon
                      key={coin.id}
                      as={MdCheckCircle}
                      color="green.500"
                    />
                    {coin.name}
                  </div>
                </ListItem>

                <Divider />
              </div>
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
