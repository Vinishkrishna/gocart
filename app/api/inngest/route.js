import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client.js";
import { syncUserCreation, syncUserDeletion, syncUserUpdation } from "./functions";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
  ],
});