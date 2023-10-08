import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ location: z.optional(z.string()), name: z.optional(z.string()), id: z.optional(z.string()), picture: z.optional(z.string()), video: z.optional(z.string()), description: z.optional(z.string()), reporterName: z.string(), reporterPhone: z.string() }))
    .query(({ input } : any) => {
      const {location, name, id, picture, video, description, reporterName, reporterPhone} =input;
      return {
        greeting: `location: ${location}, name: ${name}, id: ${id}, picture: ${picture}, video: ${video}, description: ${description}, reporterName: ${reporterName}, reporterPhone: ${reporterPhone}`,
      };
    }),
});
