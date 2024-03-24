import { Playfair_Display, Lato } from "next/font/google";

export const playfair = Playfair_Display({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

export const lato = Lato({
	subsets: ["latin", "latin-ext"],
	weight: ["300", "400", "700"],
});

export const fonts = {
	heading: playfair.style.fontFamily,
	body: lato.style.fontFamily,
};
