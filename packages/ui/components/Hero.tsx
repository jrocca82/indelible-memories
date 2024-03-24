import { Flex, Text, Image, Heading } from "@chakra-ui/react";

const Hero = () => (
	<Flex
		padding={{ base: "20px", md: "50px" }}
		pos="relative"
		align="center"
		flexDir={{base: "column", md:"row"}}
	>
		<Image src="hands.jpg" alt="hands-with-flower" boxSize="300px" m="20px"/>
		<Flex flexDir="column">
		<Heading w="100%" textAlign="left" mb="50px">About Us</Heading>
		<Text fontSize="20px">
			At Indelible Memories we understand the importance of preserving memories
			of those we hold dear. Our Mission is to help you honour the legacy of
			your deceased loved ones in a way they would have loved to be remembered.
			We transform their stories into timeless books by capturing cherished
			anecdotes, personal triumphs, joys or lessons. We are here to guide you
			through the process of creating a meaningful narrative that will endure
			for generations.
		</Text>
		</Flex>
	</Flex>
);

export default Hero;
