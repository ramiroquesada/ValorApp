
export default async function getRandomAgentName(): Promise<string > {


	try {
		const response = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=es-MX', { cache: 'no-cache' })
			.then(response => response.json());

		const randomAgentIndex = Math.floor(Math.random() * response.data.length);
		const randomAgentName = response.data[randomAgentIndex].displayName;

		if ( randomAgentName === 'KAY/O' ){
			return `/agents/KAY-O`
		}

		return `/agents/${randomAgentName}`;

	} catch (error) {
		throw new Error('error');
	}
}