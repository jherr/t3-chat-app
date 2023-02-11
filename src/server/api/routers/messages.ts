import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const messagesRouter = createTRPCRouter({
  post: protectedProcedure
    .input(z.object({ text: z.string(), roomId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const message = await ctx.prisma.message.create({
        data: {
          authorId: ctx.session.user.id,
          text: input.text,
          roomId: input.roomId,
        },
      });
      return message.id;
    }),

  getAll: protectedProcedure
    .input(z.object({ roomId: z.string() }))
    .query(({ ctx, input: { roomId } }) => {
      return ctx.prisma.message.findMany({
        where: {
          roomId: {
            equals: roomId,
          },
        },
      });
    }),
});
