'use client';

import getAgentById from "@/app/libs/getAgentById";
import { Agent } from "@/app/types/agent";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const AgentPage = () => {

	const [agent, setAgent] = useState<Agent>();

	const params = useParams();

	useEffect(() => {
		getAgentById(params.id)
			.then(res => {
				setAgent(res);
			});

	}, [params.id]);


	return (
		<>
			{ agent
				?
				<div className="flex  items-center  ">
					<div>
						<h2 className="text-8xl font-bold">
							{ agent.displayName }
						</h2>
					</div>
					<div className="h-full">
						<Image src={ agent.fullPortrait } alt={ agent.displayName } width={ 550 } height={ 500 } quality={ 100 }  />
					</div>
				</div>
				:
				<div></div>
			}
		</>
	);
};
export default AgentPage;