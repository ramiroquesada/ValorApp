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

	}, [params]);

	console.log(params);

	return (
		<>
			{ agent
				?
				<div className="flex flex-col items-center justify-center h-full">
					<div>
						<h2>
							{ agent.displayName }
						</h2>
					</div>
					<div>
						<Image src={ agent.bustPortrait } alt={ agent.displayName } fill />
					</div>
				</div>
				:
				<div>LOADING</div>
			}
		</>
	);
};
export default AgentPage;