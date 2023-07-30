import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Roboto_Flex } from 'next/font/google'

const valorantFont = localFont({
	src: [
		{
			path: './fonts/subset-VALORANT-Regular.woff',
			weight: 'normal',
			style: 'normal'

		},
		{
			path: './fonts/subset-VALORANT-Regular.woff2',
			weight: 'normal',
			style: 'normal'

		}
	],
	variable: '--font-valorant',
	display: 'swap',
});
const tungstenFont = localFont({
	src: [
		{
			path: './fonts/subset-Tungsten-Bold.woff',
			weight: 'bold',
			style: 'normal'

		},
		{
			path: './fonts/subset-Tungsten-Bold.woff2',
			weight: 'bold',
			style: 'normal'


		}
	],
	variable: '--font-tungsten',
	display: 'swap',
});

const roboto = Roboto_Flex({	subsets: ['latin', 'latin-ext'], weight: 'variable', display: 'swap', variable: '--font-roboto' });


export const metadata: Metadata = {
	title: 'Valorant Info',
	description: 'Know more about Valorant',
};

import Navbar from './components/Navbar';

import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {


	return (
		<html lang="en" className={`${tungstenFont.variable} ${roboto.variable} ${valorantFont.variable}  `}>
			<body >
				<Navbar />

				<main className="flex justify-center min-h-screen  w-full px-4 pt-8 font-roboto text-2xl">
					<div className='flex w-full  items-center max-w-screen-xl justify-center'>
						{ children }
					</div>
				</main>


			</body>
		</html>
	);
}
