import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/lib/storeProvider";
import SideBar from "./ui-components/SideBar";

export const metadata: Metadata = {
  title: "Nextjs-app",
  description: "Plutus NextJS BoilerPlate for new NextJS projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <main className="size-screen flex flex-row gap-[15px] overflow-hidden">
            <SideBar />
            <section className="h-screen flex-1 flex flex-col items-center">
              <div className="size-full">
                {children}
              </div>
            </section>
          </main>
        </body>
      </html>
    </StoreProvider>
  );
}