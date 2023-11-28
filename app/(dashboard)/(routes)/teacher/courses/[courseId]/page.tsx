import React from "react";

export default function CourseId({ params }: { params: { courseId: String } }) {
	return <div>Course Id: {params.courseId}</div>;
}
