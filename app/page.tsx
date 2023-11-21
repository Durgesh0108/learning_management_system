import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div>
			<p className="bg-black text-4xl text-orange-500">Hello World</p>
			<Button variant="ghost" >Button</Button>
		</div>
	);
}
