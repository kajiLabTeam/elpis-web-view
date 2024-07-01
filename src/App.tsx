import {
  Box,
  Center,
  Text,
} from "@chakra-ui/react";
import { User } from "./types/User";
import { HomeCard } from "./component/HomeCard/HomeCard";

function App() {

  const users: User[] = [
    { id: "1", name: "山田太郎", from: "東京", role: "admin" },
    { id: "2", name: "田中花子", from: "大阪", role: "user" },
    { id: "3", name: "佐藤次郎", from: "福岡", role: "user" },
  ];

  return (
    <>
      <Box m={6} width={"100%"}>
        <Text fontSize="4xl">StudentRoom🏠</Text>

        <Center>
          <HomeCard users={users} />
        </Center>
      </Box>
    </>
  );
}

export default App;
