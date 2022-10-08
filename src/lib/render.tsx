import ReactDOM from "react-dom/client";
import { ReactNode } from "react";

export const render = (root: ReactNode) =>
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    root
  );
