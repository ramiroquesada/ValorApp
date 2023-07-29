import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
		<html lang="en">
			<body className={ inter.className }>
				<Navbar />

				<main className="flex justify-center min-h-screen  w-full px-4 pt-8">
					<div className='flex w-full  items-center max-w-screen-xl justify-center'>

						{ children }
					</div>
				</main>


			</body>
		</html>
	);
}
