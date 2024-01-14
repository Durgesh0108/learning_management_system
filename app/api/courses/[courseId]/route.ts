import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { error } from "console";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: { courseId: string } }
) {
    try {
        const { userId } = auth()
        const { courseId } = params;
        const values = await req.json()

        console.log(values)
        // return new NextResponse(values);
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const course = await db.course.update({
            where: {
                id: courseId,
                userId
            },
            data: {
                ...values
            }
        })
        // console.log(course)
        return new NextResponse(course)
    }
    catch (err) {
        console.log("[Course ID]", error)
        return new NextResponse("Internal Error", { status: 500 });
    }
}