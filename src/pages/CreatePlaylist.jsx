import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea, VStack, IconButton, Text, HStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

const CreatePlaylist = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState({
    title: "Sample Song",
    artist: "Sample Artist",
  });

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

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    // Logic to go to the next song
    console.log("Next song");
  };

  const handlePrevious = () => {
    // Logic to go to the previous song
    console.log("Previous song");
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

      {/* Playback Controls */}
      <Box bg="gray.800" color="white" p={4} mt={8}>
        <Flex justify="space-between" align="center">
          <Box>
            <Text fontSize="lg">{currentSong.title}</Text>
            <Text fontSize="sm">{currentSong.artist}</Text>
          </Box>
          <HStack spacing={4}>
            <IconButton
              icon={<FaStepBackward />}
              onClick={handlePrevious}
              aria-label="Previous"
            />
            <IconButton
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              onClick={handlePlayPause}
              aria-label="Play/Pause"
            />
            <IconButton
              icon={<FaStepForward />}
              onClick={handleNext}
              aria-label="Next"
            />
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default CreatePlaylist;