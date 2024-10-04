import type { Metadata } from "next";
import localFont from "next/font/local";

import { ModalProvider } from "@/providers/modal-providers";
import { ClerkProvider } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import { ToastProvider } from "@/providers/toast-providers";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    <ToastProvider />
                    <ModalProvider />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
