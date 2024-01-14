import { IconBadge } from "@/components/icon-badeg";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { LayoutDashboard, Trash, icons } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { TitleForm } from "./_components/title-form";
import React from "react";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { DescriptionForm } from "./_components/description-form";
import Link from "next/link";
import { ImageForm } from "./_components/image-form";

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

	return (
		<div className="p-6">
			<p className="text-2xl text-blue-500 font-bold mb-4">
				<Link href="/teacher/courses/">All Courses</Link>
			</p>
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-y-2">
					<h1 className="text-2xl font-medium">Course Setup</h1>
					<span className="text-sm text-slate-700">
						Complete All Fields {completionText}
					</span>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
				<div>
					<div className="flex items-center gap-x-2">
						<IconBadge icon={LayoutDashboard} />
						<h2 className="text-xl font-medium">
							Customize Your Course
						</h2>
					</div>

					<TitleForm initialData={course} courseId={course.id} />
					<DescriptionForm
						initialData={course}
						courseId={course.id}
					/>
					<ImageForm
						initialData={course}
						courseId={course.id}
					/>
				</div>
			</div>
		</div>
	);
};

export default CourseIdPage;
