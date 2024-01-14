import { createServerHandler } from "uploadthing/server";

import { ourFileRouter } from "./core";

export const { GET, POST } = createServerHandler({
    router: ourFileRouter,
});