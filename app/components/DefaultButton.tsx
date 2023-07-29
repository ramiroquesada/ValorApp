'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import getRandomAgentName from "../libs/getRandomAgentName";

interface DefaultButtonProps {
	text: string;
	link?: string;

}

export const DefaultButton: React.FC<DefaultButtonProps> = ({ text, link }) => {

	const [resolvedLink, setResolvedLink] = useState<string | null>(link || null);

	useEffect(() => {
		const resolveLink = async () => {
			if (!link) {
				const newLink = await getRandomAgentName();
				setResolvedLink(newLink);
			}
			else {
				setResolvedLink(link);
			}
		};

		resolveLink();
	}, [link]);

	if (!resolvedLink) {
		return null;
	}


	return (
		<Link href={ resolvedLink } >
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl">
				{ text }
			</button>
		</Link>
	);
};