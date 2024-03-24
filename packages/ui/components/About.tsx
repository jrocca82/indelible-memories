import { Flex, Text, Image, chakra, Heading } from "@chakra-ui/react";

const About = () => (
	<Flex
		paddingX={{ base: "20px", md: "50px" }}
		pos="relative"
		align="center"
		fontSize="20px"
		flexDirection="column"
	>
		<Heading w="100%" textAlign="left">
			What we do
		</Heading>
		<Flex flexDir={{base: "column", md:"row"}} alignItems="center">
			<Flex flexDir="column">
				<Paragraph>
					At Indelible memories we understand how difficult it can be to process
					and reconcile the loss of your loved one. We also understand memories
					holds immense power in your healing journey and our passion is help
					you preserve those memories. We specialise in crafting heartfelt
					narratives that celebrate the lives of those who have passed, ensuring
					their stories continue to live for generations to come.
				</Paragraph>
				<Paragraph>
					Our Mission is simple: To honour the legacy of the departed by
					capturing the essence of who they were and the moments that defined
					them. Through compassionate storytelling and personalised attention to
					detail, we strive to provide solace and comfort to grieving families.
				</Paragraph>
			</Flex>
			<Image src="flowers.jpg" alt="flowers" boxSize="300px" m="20px" />
		</Flex>
		<Flex flexDir={{base: "column-reverse", md:"row"}}  alignItems="center">
			<Image src="sunset.jpg" alt="sunset" boxSize="300px" m="20px"/>
			<Flex flexDir="column">
				<Paragraph>
					With a team of empathetic professional who themselves have gone
					through the grief journey, we are confident you are in the right
					hands. We are dedicated to preserving cherished memories ion a way
					that resonate deeply with those left behind.
				</Paragraph>
				<Paragraph>
					At Indelible Memories we believe every life deserves to be remembered
					and every story deserves to be told. Let us help you honour your loved
					one's legacy with compassion, dignity and reverence.
				</Paragraph>
			</Flex>
		</Flex>
	</Flex>
);

export default About;

const Paragraph = chakra(Text, {
	baseStyle: {
		my: "20px",
	},
});
