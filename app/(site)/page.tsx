import { DefaultButton } from "../components/DefaultButton";

const HomePage = () => {

	return (
		<section className="flex flex-col  w-full  h-96 mt-14 md:mt-24">

			<div className="flex justify-center w-full h-3/6">
				<h1 className="text-4xl font-bold text-center">Welcome to the Home Page <br /> of the Valorant App</h1>
			</div>
			<div className="flex flex-col md:flex-row justify-around items-center w-full h-5/6 ">

				<DefaultButton text="All Agents" link="/agents" />
				<DefaultButton text="Random Agent" />
				
			</div>
		</section>

	);
};

export default HomePage;
