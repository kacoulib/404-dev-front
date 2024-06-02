import { ReactNode } from "react";

export function reactToString(element: ReactNode): string {
  if (!element) {
    return "";
  }

  if (typeof element === "string" || typeof element === "number") {
    return String(element);
  }

  if (Array.isArray(element)) {
    return element.map((subElement) => reactToString(subElement)).join("");
  }

  if (typeof element === "object" && "props" in element) {
    return reactToString(element.props.children);
  }

  return "";
}

export default reactToString;
