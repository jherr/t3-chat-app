import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const roomRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.room.findMany();
  }),
});
