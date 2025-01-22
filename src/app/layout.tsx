import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Billing | KOREA ORBCOMM",
    description: "KOREA ORBCOMM Billing Program",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full bg-gray-100">
        <body className="h-full flex">
        {/* Sidebar 포함 Navbar */}
        <Navbar />

        {/* 페이지 콘텐츠 */}
        <div className="flex-1 pt-[112px] bg-gray-100">
            <main className="min-h-screen">
                <div className="container mx-auto">{children}</div>
            </main>
            <Footer />
        </div>
        </body>
        </html>
    );
}
