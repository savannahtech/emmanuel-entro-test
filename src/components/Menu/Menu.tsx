import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { User } from "@prisma/client";
import React, { Dispatch, SetStateAction } from "react";

function MenuComponent({
  users,
  selectedUser,
  setSelectedUser,
}: {
  users: User[];
  setSelectedUser: Dispatch<SetStateAction<User | null>>;
  selectedUser: User | null;
}) {
  const handleSelectedUser = (user: User) => setSelectedUser(user);
  return (
    <Menu>
      <MenuButton
        fontSize="12px"
        fontWeight="700"
        lineHeight="20px"
        textColor="laminar.gray.700"
        as={Button}
        bg="none"
        _hover={{ bg: "none" }}
      >
        <Flex display="flex" alignItems="center" columnGap="8px">
          <span> {(selectedUser && selectedUser.name) || "Unassigned"}</span>
          <ChevronDownIcon width={16} height={16} />
        </Flex>
      </MenuButton>

      <MenuList>
        {users.map((user) => (
          <MenuItem key={user.id} onClick={() => handleSelectedUser(user)}>
            <span>{user.name}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default MenuComponent;
