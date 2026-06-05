import type { ReactNode } from "react";
import { V2Header } from "./V2Header";
import { V2Footer } from "./V2Footer";

interface V2LayoutProps {
  children: ReactNode;
}

export function V2Layout({ children }: V2LayoutProps) {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#06080F", color: "#F1F5F9" }}
    >
      <V2Header />
      <main>{children}</main>
      <V2Footer />
    </div>
  );
}
