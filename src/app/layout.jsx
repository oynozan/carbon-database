import { Inter, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Modals from "@/components/Modal/Modals";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "../assets/main.scss";

const inter = Inter({
	subsets: ["latin"],
	variable: "--inter",
});
const poppins = Poppins({
	subsets: ["latin"],
	variable: "--poppins",
	weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Carbon Database - Powered by Hedera Guardian",
  description:
    "Carbon Database has a goal to create a public database with carbon emissions of cars with Hedera Guardian policies.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${poppins.variable}`}>
				<Toaster position="top-center" />
				<Modals />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
