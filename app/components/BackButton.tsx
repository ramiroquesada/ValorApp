'use client';


import { useRouter } from "next/navigation";

const BackButton = () => {

	const router = useRouter();

	const handleClick = () => {
		router.back();
	};

	return (
		<div
			onClick={ handleClick }
			className=" bg-white text-black px-6 py-3 rounded-md shadow-md cursor-pointer hover:text-white hover:bg-black transition-all duration-200">
			<p className="font-roboto text-base font-bold">Go Back</p>
		</div>
	);
};
export default BackButton;