import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import HomeButton from './components/HomeButton';

export const metadata: Metadata = {
	title: 'Valorant Info',
	description: 'Know more about Valorant',
};

import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {


	return (
		<html lang="en">
			<body className={ inter.className }>
				<HomeButton />


				<main className="flex flex-col items-center min-h-screen  w-full px-4">

					<header className='w-full'>

						<h1 className='p-4 text-center text-2xl text-transparent font-extrabold font-sans bg-gradient-to-b from-[#f11f30]   to-[#ffffff9c] to-98% bg-clip-text'>ValorApp</h1>
					</header>
					<div className='flex w-full items-center max-w-screen-xl justify-center h-full'>

						{ children }
					</div>
				</main>
			</body>
		</html>
	);
}
