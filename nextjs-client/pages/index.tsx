import type { NextPage } from "next";
import { Test,Header,Footer } from "../components/index";

const Home: NextPage = () => {
	return (
		<div>
			<main>
				<Test/>
				<Header/>
				<Footer/>
			</main>
		</div>
	);
};

export default Home;
