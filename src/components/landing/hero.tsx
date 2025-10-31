"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Dither from "./dither";
import Image from "next/image";
import { useScroll, motion, useTransform } from "motion/react";
import WaitlistForm from "../ui/waitlist-form";

export function LandingHero() {
    const { scrollY } = useScroll();
    const squeeze = useTransform(scrollY, [0, 300], [1, 0]);
    const pushLeft = useTransform(scrollY, [0, 300], [0, -50]);
    const pushRight = useTransform(scrollY, [0, 300], [0, 50]);
    const pushLeftX = useTransform(pushLeft, (v) => `translateX(${v/2}px)`);
    const pushRightX = useTransform(pushRight, (v) => `translateX(${v/2}px)`);

    return (
        <section className="relative overflow-hidden flex items-center justify-center bg-primary h-screen">
            <div className="absolute inset-0 w-full h-full z-0 opacity-30">
                <Dither
                    disableAnimation={false}
                    enableMouseInteraction={true}
                    mouseRadius={0.4}
                    colorNum={2.2}
                    waveColor={[0.0078, 0.5843, 0.9647]}
                    pixelSize={1}
                    waveAmplitude={0.4}
                    waveFrequency={9}
                    waveSpeed={0.05}
                />
            </div>
            <div className="container mt-[-10rem] mx-auto px-6 flex flex-col items-center justify-center relative z-10">
                <div className="flex flex-col items-center gap-8">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-center text-slate-100 animate-fade-in-up">
                        A Secure, AI-Native, Meaning-First Decentralized Drive
                    </h1>
                    <p className="text-2xl md:text-3xl text-slate-800 mb-8 max-w-2xl text-center animate-fade-in-up delay-200">
                        <span>Where storage understands you.</span>
                    </p>
                    <div className="text-base text-slate-100 font-light text-center">Checkout early beta & join the waitlist</div>
                    <div className="w-full flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300 mx-auto justify-center items-center">
                        <Link href="https://app.fildos.cloud/get-started">
                            <Button size="lg" className="bg-white text-primary font-semibold hover:bg-white/90 shadow-xl hover:shadow-2xl px-10 py-5 rounded-md transition-all duration-300 border-2 border-white/20">
                                Try Early Beta
                                <ArrowRight className="ml-1 w-8 h-8 bg-primary/20 rounded-full" />
                            </Button>
                        </Link>
                        <WaitlistForm />
                    </div>
                    </div>
            </div>
            {/* Bottom logo row */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center z-10">
                {/* Left logos */}
                <div className="flex items-center justify-end flex-1">
                    {[
                        "audio.png",
                        "document.png",
                        "image.png",
                        "video.png"
                    ].map((logo) => (
                        <motion.img
                            key={logo}
                            src={`/logos/${logo}`}
                            alt={logo.replace('.png', '')}
                            width={50}
                            className="w-12 h-12 mx-2 bg-white/90 rounded-md"
                            style={{
                                opacity: squeeze,
                                transform: pushRightX,
                            }}
                            transition={{ opacity: { duration: 0.5 } }}
                        />
                    ))}
                </div>
                {/* Center FilDOS logo with glassmorphic bg */}
                <div className="flex items-center justify-center mx-2">
                    <Link href="https://app.fildos.cloud/get-started">
                        <div className="flex items-center justify-center px-3 py-2 rounded-3xl bg-white/20 backdrop-blur-lg shadow-lg border border-white/40 hover:scale-105 transition-transform duration-100">
                            <Image src="/FILDOS.png" alt="FilDOS Logo" width={96} height={96} className="w-24 h-24 opacity-90 z-10" />
                        </div>
                    </Link>
                </div>
                {/* Right logos */}
                <div className="flex items-center justify-start flex-1">
                    {[
                        "pdf.png",
                        "presentation.png",
                        "spreadsheet.png",
                        "other.png"
                    ].map((logo) => (
                        <motion.img
                            key={logo}
                            src={`/logos/${logo}`}
                            alt={logo.replace('.png', '')}
                            width={50}
                            height={50}
                            className="w-12 h-12 mx-2 bg-white/90 rounded-md"
                            style={{
                                opacity: squeeze,
                                transform: pushLeftX,
                            }}
                            transition={{ opacity: { duration: 0.5 } }}
                        />
                    ))}
                </div>
            </div>
        </section >
    );
}