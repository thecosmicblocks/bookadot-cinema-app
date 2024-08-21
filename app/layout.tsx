import "./globals.css";
import { themes } from "@app/themes";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { TCBFooter } from "@app/components/Footer";
import { Inter } from "next/font/google";
import { Container } from "./components/Container/Container";
import { Suspense } from "react";
import { FilmContextProvider } from "./context/FilmContext";

const fontIter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Bookadot",
    description: "Bookadot",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={fontIter.className}>
            <head>
                <ThemeModeScript />
                <title>Bookadot</title>
            </head>
            <body className={"bookadot-body flex w-full flex-col items-center"}>
                <Flowbite theme={{ mode: "dark", theme: themes }}>
                    <Container className={`min-h-[70vh] w-full`}>
                        <main className="p-4 min-h-screen">
                            <Suspense fallback="Loading ...">
                                <FilmContextProvider>
                                    {children}
                                </FilmContextProvider>
                            </Suspense>
                        </main>
                        <TCBFooter></TCBFooter>
                    </Container>
                </Flowbite>
            </body>
        </html>
    );
}
