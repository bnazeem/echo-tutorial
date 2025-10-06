import { createTool } from "@convex-dev/agent";
import { z } from "zod";
import { internal } from "../../../_generated/api";
import { supportAgent } from "../agents/supportAgent";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const resolveConversation = createTool({
  description: "Resolve a conversation",
  args: z.object({}) as any, // <-- force any
  handler: async (ctx: any): Promise<string> => {
    if (!ctx.threadId) return "Missing thread ID";

    await ctx.runMutation(internal.system.conversations.resolve, {
      threadId: ctx.threadId,
    });

    await supportAgent.saveMessage(ctx, {
      threadId: ctx.threadId,
      message: {
        role: "assistant",
        content: "Conversation resolved successfully",
      },
    });

    return "Conversation resolved successfully";
  },
});

// import { createTool } from "@convex-dev/agent";
// import z from "zod";
// import { internal } from "../../../_generated/api";
// import { supportAgent } from "../agents/supportAgent";

// export const resolveConversation = createTool({
//   description: "Resolve a conversation",
//   args: z.object({}),
//   handler: (async (ctx: any) => {
//     if (!ctx.threadId) {
//       return "Missing thread ID";
//     }
//     await ctx.runMutation(internal.system.conversations.resolve, {
//       threadId: ctx.threadId,
//     });
//     await supportAgent.saveMessage(ctx, {
//       threadId: ctx.threadId,
//       message: {
//         role: "assistant",
//         content: "Conversation resolved",
//       },
//     });
//     return "Conversation resolved";
//   }) as any,
// });
