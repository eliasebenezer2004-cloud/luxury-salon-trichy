"use client";

import dynamic from "next/dynamic";
import { PageTransitionProvider } from "@/components/providers/PageTransitionProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const SmoothScrollProvider = dynamic(
  () =>
    import("@/components/providers/SmoothScrollProvider").then(
      (m) => m.SmoothScrollProvider
    ),
  { ssr: false }
);

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageTransitionProvider>
        <SmoothScrollProvider>
          <Navbar />
          <div className="relative z-10 mb-[100vh] bg-[#FAF9F6] pt-20">
            {children}
          </div>
        </SmoothScrollProvider>
        <Footer />
      </PageTransitionProvider>
      <CustomCursor />
    </>
  );
}
