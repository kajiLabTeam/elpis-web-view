import {
  Card,
  CardBody,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { User } from "../../types/User";

export const HomeCard = ({ users }: { users: User[] }) => {
  const userList = Array.isArray(users) ? users : [];

  return (
    <>
      <Card m={10} width={"100%"}>
        <CardBody>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>名前</Th>
                  <Th>所属</Th>
                  <Th>ロール</Th>
                </Tr>
              </Thead>

              <Tbody>
                {userList.map((user) => (
                  <Tr key={user.id}>
                    <Td>{user.name}</Td>
                    <Td>{user.from}</Td>
                    <Td>{user.role}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </>
  );
};
