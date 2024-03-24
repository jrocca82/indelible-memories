import { Flex, Button } from "@chakra-ui/react";
import { NextPage } from "next";
import MainHeader from "@indeliblememories/ui/components/Header";
import About from "@indeliblememories/ui/components/About";
import Hero from "@indeliblememories/ui/components/Hero";
import { sendEmail } from "@indeliblememories/ui/helpers/sendEmail";


const HomePage: NextPage = () => (
	<Flex w="100%" flexDirection="column">
		<MainHeader />
		<Flex w="100%" justify="center">
			<Button
				onClick={sendEmail}
				mt={4}
				bgColor="primary.500"
				color="white"
				w="200px"
			>
				Contact Us
			</Button>
		</Flex>

		<Hero />
		<About />
		<Button
			onClick={sendEmail}
			marginBottom="50px" 
			alignSelf="center"
			bgColor="primary.500"
			color="white"
			w="200px"
		>
			Get in Touch
		</Button>
	</Flex>
);

export default HomePage;
