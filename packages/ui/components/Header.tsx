import { Flex, Heading, Image, Text } from "@chakra-ui/react";

const MainHeader = () => (
	<Flex
		w="100%"
		align="center"
		justify="center"
		flexDir="column"
	>
		<Heading mt="50px" fontSize="48px">Indelible Memories: Legacy Worth Preserving</Heading>
		<Image
			src="logo.png"
			boxSize="300px"
			objectFit="contain"
		/>
	</Flex>
);

export default MainHeader;
