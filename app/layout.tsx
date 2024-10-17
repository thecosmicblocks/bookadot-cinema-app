import "./globals.css";
import { themes } from "@app/themes";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { TCBFooter } from "@/app/components/Footer";
import { Inter } from "next/font/google";
import { Container } from "./components/Container";
import { Suspense } from "react";
import { MovieContextProvider } from "./context/MovieContext";
import { BookingContextProvider } from "./context/BookingContext";
import { WagmiContext } from "./context/WagmiContext";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { wagmiAdapter } from "./utils/wagmiConfig";
import { TanstackContext } from "./context/TanstackContext";
import { UserContextProvider } from "./context/UserContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const initialState = cookieToInitialState(
        wagmiAdapter.wagmiConfig,
        headers().get('cookie')
    )
    return (
        <html lang="en" suppressHydrationWarning className={fontIter.className}>
            <head>
                <ThemeModeScript />
                <title>Bookadot</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0" />
            </head>
            <body className={"bookadot-body flex w-full flex-col items-center"}>
                <Flowbite theme={{ mode: "dark", theme: themes }}>
                    <UserContextProvider>
                        <WagmiContext initialState={initialState}>
                            <TanstackContext>
                                <Container className={`min-h-[50vh] w-full`}>
                                    <main className="min-h-screen relative">
                                        <Suspense fallback="Loading ...">
                                            <MovieContextProvider>
                                                <BookingContextProvider>
                                                    {children}
                                                </BookingContextProvider>
                                            </MovieContextProvider>
                                        </Suspense>
                                    </main>
                                    <TCBFooter></TCBFooter>
                                </Container>
                            </TanstackContext>
                        </WagmiContext>
                    </UserContextProvider>
                </Flowbite>
                <ToastContainer theme="dark" position="top-center" />
            </body>
        </html>
    );
}
