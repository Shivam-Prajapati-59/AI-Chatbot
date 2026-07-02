import "stream-chat";

declare module "stream-chat" {
  interface CustomMessageData {
    ai_generated?: boolean;
    custom?: Record<string, unknown>;
  }
}
