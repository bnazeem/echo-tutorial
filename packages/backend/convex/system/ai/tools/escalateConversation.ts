import { createTool } from "@convex-dev/agent";
import { z } from "zod";
import { internal } from "../../../_generated/api";
import { supportAgent } from "../agents/supportAgent";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const escalateConversation = createTool({
  description: "Escalate a conversation",
  args: z.object({}) as any, // <-- force any to stop deep recursion
  handler: async (ctx: any): Promise<string> => {
    if (!ctx.threadId) return "Missing thread ID";

    await ctx.runMutation(internal.system.conversations.escalate, {
      threadId: ctx.threadId,
    });

    await supportAgent.saveMessage(ctx, {
      threadId: ctx.threadId,
      message: {
        role: "assistant",
        content: "Conversation escalated to a human operator",
      },
    });

    return "Conversation escalated to a human operator";
  },
});

// import { createTool } from "@convex-dev/agent";
// import { z } from "zod";
// import { internal } from "../../../_generated/api";
// import { supportAgent } from "../agents/supportAgent";

// export const escalateConversation = createTool({
//   description: "Escalate a conversation",
//   args: z.object({}),
//   handler: (async (ctx: any) => {
//     if (!ctx.threadId) {
//       return "Missing thread ID";
//     }
//     await ctx.runMutation(internal.system.conversations.escalate, {
//       threadId: ctx.threadId,
//     });
//     await supportAgent.saveMessage(ctx, {
//       threadId: ctx.threadId,
//       message: {
//         role: "assistant",
//         content: "Conversation escalated to a human operator",
//       },
//     });
//     return "Conversation escalated to a human operator";
//   }) as any,
// });
