// src/lib/metaPixel.ts

export type MetaPixelEvent =
  | "Lead"
  | "CompleteRegistration"
  | "Contact";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackMetaPixelEvent(
  eventName: MetaPixelEvent,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;

  window.fbq("track", eventName, params ?? {});
}