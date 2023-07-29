
export default async function getRandomAgentUuid(): Promise<string > {


	try {
		const response = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=es-MX', { cache: 'no-cache' })
			.then(response => response.json());

		const randomAgentIndex = Math.floor(Math.random() * response.data.length);
		const randomAgentUuid = response.data[randomAgentIndex].uuid;
		
		return `/agents/${randomAgentUuid}`;

	} catch (error) {
		throw new Error('error');
	}
}