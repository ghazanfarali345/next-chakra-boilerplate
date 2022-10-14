import React from "react";
import {
  Box,
  HStack,
  Text,
  Link,
  Button,
  Image,
  Icon,
  Collapse,
  useDisclosure,
  Flex,
  IconButton,
  Stack,
  List,
  ListItem,
} from "@chakra-ui/react";
// import Logo from "/logo";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

let hoverEffectForNavbar = {
  textDecoration: "none",
  marginTop: "-5px",
};

const MobileNav = () => {
  return (
    <Stack
      pos="absolute"
      top="80px"
      w="100%"
      left="0"
      marginInlineStart="0 !important"
      bg="white"
      boxShadow="dark-lg"
      py="6"
      px="4"
    >
      <List spacing={8}>
        <ListItem>
          <Text color={"#4a5568"}>About</Text>
        </ListItem>
        <ListItem ml={3} fontWeight="medium" fontSize={"14px"}>
          <Link>How it Works</Link>
        </ListItem>
        <ListItem>
          <Link ml={3} fontWeight="medium" fontSize={"14px"}>
            Crypto
          </Link>
        </ListItem>
        <ListItem>
          <Text>Explore Market</Text>
        </ListItem>
        <ListItem>
          <Link ml={3} fontWeight="medium" fontSize={"14px"}>
            Marketplace
          </Link>
        </ListItem>
        <ListItem w={"100%"} justifyContent="space-around" display={"flex"}>
          <Button variant="link" color={"black"}>
            Signin
          </Button>
          <Button
            // px={["30px", "30px", "50px"]}
            width="150px"
            // size={["sm", "sm", "md"]}
            variant={"primary"}
          >
            Get Started
          </Button>
        </ListItem>
      </List>
    </Stack>
  );
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <HStack
      p={[2, 3, 5]}
      maxW={["100%", "95%", "75%"]}
      margin="auto"
      mt={["0", "2", "3"]}
      justifyContent="space-between"
    >
      <Box width="56px" height="42px">
        <Image src="/logo.png" alt="Dan Abramov" width="100%" />
      </Box>
      <Box display={["none", "none", "none", "flex"]}>
        <HStack
          spacing={["10", "10", "12", "16"]}
          fontWeight="semibold"
          fontSize={["sm", "sm", "md"]}
        >
          <Link _hover={hoverEffectForNavbar}>How it Works</Link>
          <Link _hover={hoverEffectForNavbar}>Crypto</Link>
          <Link _hover={hoverEffectForNavbar}>Marketplace</Link>
          <Link _hover={hoverEffectForNavbar}>Sign In</Link>
          <Box>
            <Button
              px={["30px", "30px", "50px"]}
              width="150px"
              size={["sm", "sm", "md"]}
              variant={"primary"}
            >
              Get Started
            </Button>
          </Box>
        </HStack>
      </Box>

      <Box display={{ base: "flex", md: "flex", lg: "none" }}>
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />
      </Box>
      {isOpen && <MobileNav />}
    </HStack>
  );
};

export default Navbar;
