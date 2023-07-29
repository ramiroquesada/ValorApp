
import getAgents from "../libs/getAllAgents";
import { Agent } from '../types/agent';
import AgentCard from "./components/AgentCard";

export default async function AllAgentsPage() {

	const allAgents = await getAgents();

	return (
		<div className="flex flex-col h-full w-full items-center pb-16">
			<div className="flex justify-center items-center w-full h-2/6 pt-8">
				<h1 className="text-4xl font-bold text-center">AGENTS</h1>
			</div>

			<div className="flex flex-col justify-center items-center  h-4/6  pb-8">
				<div className="flex justify-center items-center  h-full">
					<h2 className="text-xl font-bold text-center text-gray-300">Click on an agent to know more</h2>
				</div>
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