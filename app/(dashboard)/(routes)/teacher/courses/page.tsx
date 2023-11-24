import { Button } from "@/components/ui/button";
import Link from "next/link";

const TeacherCoursesPage = () => {
	return (
		<div className="">
			<Link href={"/teacher/create"}>
				<Button>New Course</Button>
			</Link>
		</div>
	);
};

export default TeacherCoursesPage;