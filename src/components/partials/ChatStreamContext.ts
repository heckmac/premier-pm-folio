import { createContext, useContext } from "react";

/**
 * Context provided by the chat page so child partials (e.g. project cards)
 * can inject new partials into the chat stream instead of navigating.
 */
export interface ChatStreamActions {
  /** Inject a partial by its registry ID into the chat stream */
  injectPartial: (partialId: string) => void;
}

export const ChatStreamContext = createContext<ChatStreamActions | null>(null);

/** Returns chat stream actions if inside chat, or null if on a regular page */
export const useChatStream = () => useContext(ChatStreamContext);
