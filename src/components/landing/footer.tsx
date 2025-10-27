import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function LandingFooter() {
    return (
        <>
            {/* Social Proof Section */}
            <section id="social-proof" className="py-20 bg-secondary">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-gray-900">Trusted by Innovators</h2>
                    </div>

                    {/* Testimonials */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="card-interactive border border-gray-200 group">
                            <CardContent className="p-6">
                                <p className="text-gray-600 mb-4 italic">
                                    &ldquo;This was super cool to see. For years, I’ve been hoping for something like this — a way to deliver a high-quality product experience to users in a familiar setting.&rdquo;
                                </p>
                                <div className="flex items-center">
                                    
                                    <div>
                                        <div className="font-semibold text-gray-900">Juan Benet</div>
                                        <div className="text-sm text-gray-500">Founder & CEO, Protocol Labs</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="card-interactive border border-gray-200 group">
                            <CardContent className="p-6">
                                <p className="text-gray-600 mb-4 italic">
                                    &ldquo;Clearly frames the usability gap in decentralized storage. The product is compelling, and I’m excited to see how it continues to differentiate from other storage + search solutions, AI or otherwise.&rdquo;
                                </p>
                                <div className="flex items-center">
                                    <div>
                                        <div className="font-semibold text-gray-900">Patrick Woodhead</div>
                                        <div className="text-sm text-gray-500">Co-Founder, Space Meridian</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="card-interactive border border-gray-200 group">
                            <CardContent className="p-6">
                                <p className="text-gray-600 mb-4 italic">
                                    &ldquo;There’s everything under the sun when it comes to file storage — but not with a paywall. Its a really powerful unique selling proposition.&rdquo;
                                </p>
                                <div className="flex items-center">
                                    <div>
                                        <div className="font-semibold text-gray-900">Sabeen Ali</div>
                                        <div className="text-sm text-gray-500">Founder & CEO, AngelHack</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Trust badges */}
                    <div className="mt-16 text-center">
                        <p className="text-sm text-gray-500 mb-6">Powered by industry-leading technologies</p>
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            <div className="flex items-center space-x-2 relative">
                                <Image src="/logos/filecoin.png" alt="Filecoin Logo" width={48} height={48} className="object-contain" />
                            </div>
                            <div className="flex items-center space-x-2 relative">
                                <Image src="/logos/ethereum.png" alt="Ethereum Logo" width={48} height={48} className="object-contain" />
                            </div>
                            <div className="flex items-center space-x-2 relative">
                                <Image src="/logos/filcdn.png" alt="FilCDN Logo" width={48} height={48} className="object-contain" />
                            </div>
                            <div className="flex items-center space-x-2 relative">
                                <Image src="/logos/openai.png" alt="OpenAI Logo" width={48} height={48} className="object-contain p-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Ready to Experience the Future of Storage?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://app.fildos.cloud/get-started" className="w-full sm:w-auto">
                            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 w-full">
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                    <div className="relative pt-[56.25%] w-full max-w-3xl mx-auto mt-10">
                        <iframe 
                            className="absolute top-0 left-0 w-full h-full border border-white rounded-lg"
                            src="https://www.youtube.com/embed/fFJgACii3tM?si=vz6sEukN3K1oRKfn" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white pt-12 pb-4">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Image src="/FILDOS.png" alt="FilDOS Logo" width={32} height={32} className="w-8 h-8" />

                                <h3 className="text-xl font-bold">FilDOS</h3>
                            </div>
                            <p className="text-gray-400">
                                The future of decentralized storage. Semantic, secure, and AI-native.
                            </p>
                        </div>
                    </div>

                    <Separator className="mt-8 mb-4 bg-gray-800" />

                    <div className="text-center text-gray-400">
                        <p>&copy; 2025 FilDOS. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </>
    );
}