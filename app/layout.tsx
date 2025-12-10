import type { Metadata } from "next";
import "./globals.css";
import { MessageProvider } from "@/components/message-provider";
import Wrapper from "@/components/wrapper";

export const metadata: Metadata = {
  title: "MIRAHMADOV",
  description: "Mirahmadov - website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body
      >
        <Wrapper>
          {children}
        </Wrapper>
        
        <MessageProvider />
      </body>
    </html>
  );
}
