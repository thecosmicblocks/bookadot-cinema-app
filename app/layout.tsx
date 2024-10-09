import "./globals.css";
import { themes } from "@app/themes";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { TCBFooter } from "@/app/components/Footer";
import { Inter } from "next/font/google";
import { Container } from "./components/Container";
import { Suspense } from "react";
import { FilmContextProvider } from "./context/FilmContext";
import { BookingContextProvider } from "./context/BookingContext";

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
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0" />
            </head>
            <body className={"bookadot-body flex w-full flex-col items-center"}>
                <Flowbite theme={{ mode: "dark", theme: themes }}>
                    <Container className={`min-h-[50vh] w-full`}>
                        <main className="min-h-screen relative">
                            <Suspense fallback="Loading ...">
                                <FilmContextProvider>
                                    <BookingContextProvider>
                                        {children}
                                    </BookingContextProvider>
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
