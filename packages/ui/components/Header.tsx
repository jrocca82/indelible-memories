import { Flex, Image, Text } from "@chakra-ui/react";

const MainHeader = () => (
	<Flex
		w="100%"
		align="center"
		justify="center"
		flexDir="column"
	>
		<Text mt="50px" fontSize="24px">Indelible Memories: Legacy Worth Preserving</Text>
		<Image
			src="logo.png"
			boxSize="300px"
			objectFit="contain"
		/>
	</Flex>
);

export default MainHeader;
