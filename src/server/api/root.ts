import { createTRPCRouter } from "./trpc";
import { roomRouter } from "./routers/rooms";
import { messagesRouter } from "./routers/messages";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  room: roomRouter,
  message: messagesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
