import { HStack, Text, IconButton } from "@chakra-ui/react";
import { HiOutlineLogout } from "react-icons/hi";

const Header = () => {
  return (
    <HStack justify="space-between" w="100%" px="24px">
      <HStack gap="8px">
        <Text fontSize="18px" fontWeight="600" color="#1A202C">
          Welcome,
        </Text>
        <Text fontSize="18px" fontWeight="500" color="#1A202C">
          John Holland
        </Text>
      </HStack>
      <IconButton
        isRound={true}
        variant="solid"
        bgColor="#1F2A37"
        color="white"
        colorScheme="red"
        aria-label="logout"
        fontSize="24px"
        icon={<HiOutlineLogout />}
      ></IconButton>
    </HStack>
  );
};

export default Header;
