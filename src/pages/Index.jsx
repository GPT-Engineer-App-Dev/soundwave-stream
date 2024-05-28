import { Box, Container, Flex, Heading, HStack, VStack, Text, Link, Image, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaHome, FaSearch, FaMusic, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.900" color="white" p={4} align="center">
        <HStack spacing={8}>
          <NavLink to="/" exact>
            <HStack spacing={2}>
              <FaHome />
              <Text>Home</Text>
            </HStack>
          </NavLink>
          <NavLink to="/browse">
            <HStack spacing={2}>
              <FaSearch />
              <Text>Browse</Text>
            </HStack>
          </NavLink>
          <NavLink to="/library">
            <HStack spacing={2}>
              <FaMusic />
              <Text>Library</Text>
            </HStack>
          </NavLink>
          <NavLink to="/profile">
            <HStack spacing={2}>
              <FaUser />
              <Text>Profile</Text>
            </HStack>
          </NavLink>
        </HStack>
      </Flex>

      {/* Main Section */}
      <Box as="main" p={4}>
        <Heading as="h1" size="xl" mb={4}>Featured Playlists</Heading>
        <Flex wrap="wrap" justify="space-around">
          <VStack spacing={4} align="start">
            <Image src="https://via.placeholder.com/150" alt="Playlist 1" boxSize="150px" />
            <Text>Playlist 1</Text>
          </VStack>
          <VStack spacing={4} align="start">
            <Image src="https://via.placeholder.com/150" alt="Playlist 2" boxSize="150px" />
            <Text>Playlist 2</Text>
          </VStack>
          <VStack spacing={4} align="start">
            <Image src="https://via.placeholder.com/150" alt="Playlist 3" boxSize="150px" />
            <Text>Playlist 3</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justify="space-between" wrap="wrap">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/terms">Terms of Service</Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;