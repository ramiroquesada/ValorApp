'use client'

import { useRouter, usePathname } from "next/navigation";

const HomeButton = () => {
	
	const router = useRouter();

	const path = usePathname();
	
	if( path == "/" ){
		return
	}

	return (
		<div className="fixed top-4 left-4" onClick={() => router.push("/")} role="button">HOME</div>
	)
}
export default HomeButton