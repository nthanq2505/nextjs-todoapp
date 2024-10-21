import "./page.module.css";
import { Providers } from "./providers";
import { inter } from "./fonts";

export const metadata = {
  title: "Todo App",
  description: "A simple todo app",
  image: "/og.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
