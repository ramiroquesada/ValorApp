'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import getRandomAgentUuid from "../libs/getRandomAgentUuid";

interface DefaultButtonProps {
	text: string;
	link?: string;

}

export const DefaultButton: React.FC<DefaultButtonProps> = ({ text, link }) => {

	const [resolvedLink, setResolvedLink] = useState<string | null>(link || null);

	useEffect(() => {
		const resolveLink = async () => {
			if (!link) {
				const newLink = await getRandomAgentUuid();
				setResolvedLink(newLink);
			}
			else {
				setResolvedLink(link);
			}
		};

		resolveLink();
	}, [link]);

	if (!resolvedLink) {
		return (
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-2xl">
				{ text }
			</button>
		);
	}


	return (
		<Link href={ resolvedLink } >
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-2xl">
				{ text }
			</button>
		</Link>
	);
};