import type { ReactNode } from "react";
import { V2Header } from "./V2Header";
import { V2Footer } from "./V2Footer";

interface V2LayoutProps {
  children: ReactNode;
}

export function V2Layout({ children }: V2LayoutProps) {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#FFFFFF", color: "#0D1B3E" }}>
      <V2Header />
      <main>{children}</main>
      <V2Footer />
    </div>
  );
}
