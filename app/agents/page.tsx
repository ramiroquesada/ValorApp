
import BackButton from "../components/BackButton";
import getAgents from "../libs/getAllAgents";
import { Agent } from '../types/agent';
import AgentCard from "./components/AgentCard";

export default async function AllAgentsPage() {

	const allAgents = await getAgents();

	return (
		<div className="flex flex-col h-full w-full items-center pb-10">
			<div className="flex flex-col justify-center items-center w-full h-2/6 pt-10">
				<h1 className="text-4xl font-bold text-center">AGENTS</h1>
				<h2 className="text-xl font-bold text-center text-gray-300 ">Select an agent to know more</h2>

			</div>

			<div className="flex m-6 w-full pl-2 mb-3 ">
			<BackButton />
			</div>


			<div className="grid w-full h-full gap-y-4 grid-cols-1 xs:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">

				{ allAgents?.map((agent: Agent) => (

					<AgentCard key={ agent.uuid } agent={ agent } />
				))
				}
			</div>
		</div>


	);
}