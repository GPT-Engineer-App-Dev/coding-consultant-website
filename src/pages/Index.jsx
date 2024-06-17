import { Container, Text, VStack, Box, Heading, Button, Flex, Image } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">Welcome to Our Coding Consultancy</Heading>
        <Text fontSize="lg">We provide top-notch coding solutions to help your business thrive in the digital world.</Text>
        <Flex justifyContent="center" wrap="wrap" spacing={4}>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" m={2}>
            <FaCode size="3em" />
            <Heading fontSize="xl" mt={4}>Custom Development</Heading>
            <Text mt={4}>Tailored software solutions to meet your unique business needs.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" m={2}>
            <FaLaptopCode size="3em" />
            <Heading fontSize="xl" mt={4}>Consulting Services</Heading>
            <Text mt={4}>Expert advice to optimize your technology stack and processes.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" m={2}>
            <FaProjectDiagram size="3em" />
            <Heading fontSize="xl" mt={4}>Project Management</Heading>
            <Text mt={4}>Efficient project management to ensure timely delivery and success.</Text>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg" mt={8}>Get in Touch</Button>
      </VStack>
    </Container>
  );
};

export default Index;