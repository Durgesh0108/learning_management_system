import { auth } from "@clerk/nextjs";
import { createUploadthing } from "uploadthing/server";
import type { FileRouter } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = () => {
    const { userId } = auth()
    if (!userId) throw new Error("UnAuthorized")
    return { userId }
}

export const ourFileRouter = {
    courseImage: f({
        image: {
            maxFileSize: "4MB",
            maxFileCount: 1
        }
    })
        .middleware(() => handleAuth())
        .onUploadComplete(() => { }),
    courseAttachment: f(["text", "image", "video", "audio", "pdf"])
        .middleware(() => handleAuth())
        .onUploadComplete(() => { }),
    chapterVideo: f({
        video: {
            maxFileSize: "512GB",
            maxFileCount: 1
        }
    })
        .middleware(() => handleAuth())
        .onUploadComplete(() => { })
    ,

} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;