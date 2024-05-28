import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";

const CreatePlaylist = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState("");

  const handleAddSong = () => {
    if (newSong.trim() !== "") {
      setSongs([...songs, newSong]);
      setNewSong("");
    }
  };

  const handleSavePlaylist = () => {
    // Logic to save the playlist
    console.log("Playlist saved:", { name, description, songs });
  };

  return (
    <Container maxW="container.md" p={4}>
      <Heading as="h1" size="xl" mb={4}>Create New Playlist</Heading>
      <VStack spacing={4} align="stretch">
        <FormControl id="playlist-name">
          <FormLabel>Playlist Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter playlist name"
          />
        </FormControl>
        <FormControl id="playlist-description">
          <FormLabel>Description</FormLabel>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter playlist description"
          />
        </FormControl>
        <FormControl id="add-song">
          <FormLabel>Add Song</FormLabel>
          <Flex>
            <Input
              type="text"
              value={newSong}
              onChange={(e) => setNewSong(e.target.value)}
              placeholder="Enter song name"
            />
            <Button onClick={handleAddSong} ml={2}>Add</Button>
          </Flex>
        </FormControl>
        <Box>
          <Heading as="h2" size="md" mb={2}>Songs</Heading>
          <VStack spacing={2} align="stretch">
            {songs.map((song, index) => (
              <Box key={index} p={2} bg="gray.100" borderRadius="md">
                {song}
              </Box>
            ))}
          </VStack>
        </Box>
        <Button colorScheme="blue" onClick={handleSavePlaylist}>Save Playlist</Button>
      </VStack>
    </Container>
  );
};

export default CreatePlaylist;