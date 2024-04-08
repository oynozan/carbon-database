import { Inter, Poppins } from "next/font/google";

import Header from "@/components/Header";

import "../assets/main.scss";

const inter = Inter({
	subsets: ["latin"],
	variable: "--inter",
});
const poppins = Poppins({
	subsets: ["latin"],
	variable: "--poppins",
});

export const metadata = {
  title: "Carbon Database - Powered by Hedera Guardian",
  description:
    "Carbon Database has a goal to create a public database with carbon emissions of cars with the help of Hedera Guardian.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${poppins.variable}`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
