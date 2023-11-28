import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
	const { userId } = auth();

	if (!userId) {
		return redirect("/");
	}
	const course = await db.course.findUnique({
		where: {
			id: params.courseId,
		},
	});

	if (!course) {
		return redirect("/");
	}

	const requiredFields = [
		course.title,
		course.description,
		course.imageUrl,
		course.price,
		course.categoryId,
	];

	const totalFields = requiredFields.length;
	const completedFields = requiredFields.filter(Boolean).length;

	const completionText = `(${completedFields}/${totalFields})`;
	// console.log(course)

	return (
		<div className="p-6">
			<div className="flex items-center justify-center">
				<div className="flex flex-col gap-y-2">
					<h1 className="text-2xl font-medium">Course Setup</h1>
				</div>
            </div>
            <div className="">
                <div>{course.title}</div>
                <div>{course.id}</div>
            </div>
		</div>
	);
};

export default CourseIdPage;
