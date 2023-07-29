'use client';

import Image from 'next/image';
import { Agent } from '../../types/agent';
import { useRouter } from 'next/navigation';


interface AgentCardProps { agent: Agent; }

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {


	const router = useRouter();


	const handleClick = (uuid: string) => {
	
		router.push(`/agents/${uuid}`);
	};

	return (
		<div
			onClick={ () => handleClick(agent.uuid) }
			className="group flex  items-center justify-around  bg-[#0a25417a] rounded-lg shadow-[0_35px_120px_-5px_rgba(0,0,0,0_02)] px-12  mx-1 py-[-2]
					 hover:bg-[#232f58a2] transition-all duration-200 ease-in-out cursor-pointer gap-4 overflow-y-clip">
			<h2 className="text-xl font-bold text-center">{ agent.displayName }</h2>
			<Image className="transition-all duration-200 ease-in-out cursor-pointer group-hover:scale-110" layout="fixed" objectFit="cover" objectPosition="center" quality={ 100 } priority={ true } placeholder="blur" blurDataURL={ agent.displayIcon } src={ agent.displayIcon } width={ 96 } height={ 96 } alt={ agent.displayName } />
		</div>
	);
};
export default AgentCard;