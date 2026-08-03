type Nusarav1ErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type Nusarav1Events = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: Nusarav1ErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __nusarav1Events?: Nusarav1Events;
    __nusarav1ReportRuntimeError?: (payload: {
      message: string;
      stack?: string;
      filename?: string;
    }) => void;
  }
}

export function reportNusarav1Error(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__nusarav1Events?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  window.__nusarav1ReportRuntimeError?.({
    message,
    stack: error instanceof Error ? error.stack : undefined,
    filename: window.location.pathname,
  });
}
