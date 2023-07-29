export default async function getAgents() {
	try {
	const response = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=es-MX')
		.then (response => response.json())

		return response.data;
	} catch (error) {
		return console.log('Error al obtener los agentes', error);
	}
}