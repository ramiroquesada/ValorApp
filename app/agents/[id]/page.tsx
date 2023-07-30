'use client';

import BackButton from "@/app/components/BackButton";
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
			{ agent &&

				<div className="flex flex-col w-full h-full py-4 items-center  ">
					<div className="flex m-6 w-full pl-2 mb-5 ">
						<BackButton />
					</div>
					<div className="h-100 flex flex-col justify-center items-center gap-8">

						<div>
							<h2 className="text-6xl font-tungsten">
								{ agent.displayName }
							</h2>
						</div>
						<div className="">
							<Image src={ agent.fullPortrait } alt={ agent.displayName } width={ 550 } height={ 500 } quality={ 100 }  priority />
						</div>
					</div>
				</div>


			}
		</>
	);
};
export default AgentPage;