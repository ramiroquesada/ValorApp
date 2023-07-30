import { DefaultButton } from "../components/DefaultButton";

const HomePage = () => {

	return (
		<section className="flex flex-col  w-full  h-full ">

			<div className="flex justify-center items-center w-full h-3/6">
				<h1 className="text-3xl md:text-5xl font-bold text-center">Welcome to the Home Page <br /> of the Valorant App</h1>
			</div>
			<div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full gap-16  h-1/6 ">

				<DefaultButton text="All Agents" link="/agents" />
				<DefaultButton text="Random Agent" />
				
			</div>
		</section>

	);
};

export default HomePage;
