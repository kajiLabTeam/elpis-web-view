import { Tr, Td } from "@chakra-ui/react";
import { User } from "../../types/User";

export const HomeCardCell = (props: User) => {
  return (
    <Tr>
      <Td>{props.name}</Td>
      <Td>{props.from}</Td>
      <Td>{props.role}</Td>
    </Tr>
  );
};
