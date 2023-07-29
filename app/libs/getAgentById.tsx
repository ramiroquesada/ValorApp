export default async function getAgentById(id: string | string[]) {
	try {
		const response = await fetch(`https://valorant-api.com/v1/agents/${id}?language=es-MX`)
			.then(response => response.json());
		return response.data;
	} catch (error) {
		return console.log('Error al obtener el agente', error);
	}
}