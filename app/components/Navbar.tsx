import Link from "next/link";

const Navbar = () => {
	return (
		<div className="fixed flex w-screen h-12  justify-between p-4">

			<Link href="/">
				<h2 className='px-2 text-center text-3xl text-transparent font-extrabold font-valorant bg-gradient-to-b from-[#f11f30]   to-[#ffffff9c] to-98% bg-clip-text hover:scale-105 transition duration-150'>ValorApp</h2>
			</Link>

		</div>
	);
};
export default Navbar;