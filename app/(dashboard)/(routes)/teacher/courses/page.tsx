import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

const TeacherCoursesPage = async () => {
	const user = auth();
	const currentUserCourses = await db.course.findMany({
		where: {
			userId: user.userId,
		},
	});

	return (
		<div className="flex flex-col gap-y-4">
			<div className="">
				{currentUserCourses.map((course) => (
					<div key={course.id} className="flex flex-col gap-y-2">
						<Link href={`/teacher/courses/${course.id}`}>
							<Button variant={"ghost"}>{course.title}</Button>
						</Link>
					</div>
				))}
			</div>
			<Link href={"/teacher/create"}>
				<Button>New Course</Button>
			</Link>
		</div>
	);
};

export default TeacherCoursesPage;
