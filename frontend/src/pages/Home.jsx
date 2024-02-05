import React from "react";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const quotes = [
  {
    text: "Books are a uniquely portable magic.",
    author: "Stephen King",
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    author: "Dr. Seuss",
  },
];

export const Home = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/books");
  };

  return (
    <Box w={{ base: "95%", md: "100%" }} m={"auto"}>
      <VStack spacing={8} align="center" justify="center" h="80vh">
        <Heading as="h1" fontSize={{ base: "3xl", md: '4xl'} } mb={4}>
          Welcome to the English Quest
        </Heading>
        <Text fontSize={{ base: "ml", md: 'lg'} } textAlign="center" mb={8}>
          Explore a world of knowledge and adventure through our vast collection
          of books.
        </Text>
        <Box>
          <Text fontSize="lg" fontStyle="italic" mb={4}>
            "{randomQuote.text}"
          </Text>
          <Text fontSize="md" textAlign="right">
            - {randomQuote.author}
          </Text>
        </Box>
        <Button colorScheme="blue" size="lg" onClick={handleNav}>
          Browse Books
        </Button>
      </VStack>
    </Box>
  );
};
