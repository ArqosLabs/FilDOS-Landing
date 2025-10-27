import { Bot, Brain, Cpu, FileText, Folder, Lock, Package, Search, Shield, Users, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export function LandingAbout() {
    return (
        <TooltipProvider>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6 text-gray-900">What Is It?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            <strong>FilDOS</strong> is a decentralized drive built on Filecoin, reimagined for the AI era.{" "}
                            It lets you store, search, and share files by meaning, not by raw identifiers like{" "}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span className="underline decoration-dotted cursor-help text-primary">
                                        CIDs
                                        <HelpCircle className="inline w-3 h-3 ml-1" />
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent className="tooltip-content">
                                    <p>Content Identifiers - unique cryptographic hashes used in IPFS/Filecoin to identify content</p>
                                </TooltipContent>
                            </Tooltip>.
                        </p>
                        <br />
                        <p className="text-lg text-gray-600 leading-relaxed">
                            With AI-native and agent-compatible access, FilDOS transforms decentralized storage into a semantic memory layer — 
                            where data becomes intelligent, discoverable, and alive.
                        </p>
                    </div>
                </div>
            </section>

            <section id="features" className="py-20 bg-secondary">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-gray-900">What makes us different?</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Revolutionary features that make FilDOS the future of decentralized storage
                            </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="card-interactive border-2 border-secondary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl group">
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 card-icon group-hover:shadow-lg transition-all">
                                    <Folder className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">NFT Folders — Ownership Reimagined</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                                    Folders aren&apos;t just file paths. They&apos;re NFTs with logic, metadata, and intelligence.<br />
                                    Own your storage. Program it. Compose it.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="card-interactive border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-2xl group">
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 card-icon group-hover:shadow-lg transition-all">
                                    <Search className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">Meaning-First Search</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                                    Search naturally — like “photos of Delhi.”<br />
                                    FilDOS understands context using CLIP and Sentence Transformer embeddings, making every search feel intuitive and human.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="card-interactive border-2 border-secondary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl group">
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 card-icon group-hover:shadow-lg transition-all">
                                    <Bot className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">AI-Native & Agent-Ready</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                                    FilDOS is built for the next generation of intelligent systems.<br />
                                    Agents can organize, label, and access files autonomously — turning FilDOS into the semantic backbone of decentralized AI.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="card-interactive border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-2xl group">
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 card-icon group-hover:shadow-lg transition-all">
                                    <Package className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">Seamless User Experience</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                                    No CIDs. No friction.<br />
                                    Just a beautiful, intuitive web app that makes decentralized storage feel effortless.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FolderNFT Section */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-gray-900">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span className="cursor-help">
                                        FolderNFT: Web3-Native File Organization
                                        <HelpCircle className="inline w-4 h-4 ml-2 opacity-60" />
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent className="tooltip-content">
                                    <p>Blockchain-based folder system where each folder is a unique NFT with embedded logic and metadata</p>
                                </TooltipContent>
                            </Tooltip>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Folders are not just file paths — they are <strong>NFTs with embedded logic</strong>
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="card-interactive border-2 border-secondary/20 bg-white backdrop-blur-sm group">
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <Shield className="w-6 h-6 text-primary card-icon" />
                                        <CardTitle className="group-hover:text-primary transition-colors">Ownership</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <span className="underline decoration-dotted cursor-help">
                                                    NFT defines who controls folder
                                                    <HelpCircle className="inline w-3 h-3 ml-1" />
                                                </span>
                                            </TooltipTrigger>
                                            <TooltipContent className="tooltip-content">
                                                <p>Blockchain-verified ownership through NFT tokens ensures only you can control your folders</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="card-interactive border-2 border-secondary/20 bg-white backdrop-blur-sm group">
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <Lock className="w-6 h-6 text-primary card-icon" />
                                        <CardTitle className="group-hover:text-primary transition-colors">Access</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">View/edit based on ownership or delegation</p>
                                </CardContent>
                            </Card>

                            <Card className="card-interactive border-2 border-secondary/20 bg-white backdrop-blur-sm group">
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <Cpu className="w-6 h-6 text-primary card-icon" />
                                        <CardTitle className="group-hover:text-primary transition-colors">Programmability</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <span className="underline decoration-dotted cursor-help">
                                                    Smart contract logic
                                                    <HelpCircle className="inline w-3 h-3 ml-1" />
                                                </span>
                                            </TooltipTrigger>
                                            <TooltipContent className="tooltip-content">
                                                <p>Automated blockchain code that handles sharing, revoking access, and publishing operations</p>
                                            </TooltipContent>
                                        </Tooltip> for share, revoke, publish
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="card-interactive border-2 border-secondary/20 bg-white backdrop-blur-sm group">
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <FileText className="w-6 h-6 text-primary card-icon" />
                                        <CardTitle className="group-hover:text-primary transition-colors">Metadata</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Tags, summaries, embedding index</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-gray-900">Flow of Interaction</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Simple steps to get your semantic storage up and running
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-3">
                            {[
                                {
                                    step: "1",
                                    title: "User buys storage → creates FolderNFTs",
                                    icon: Users,
                                    color: "bg-primary"
                                },
                                {
                                    step: "2",
                                    title: "Upload file → client encrypts → pushes to Filecoin Storage Providers",
                                    icon: Shield,
                                    color: "bg-secondary"
                                },
                                {
                                    step: "3",
                                    title: "Generates embeddings, tags",
                                    icon: Brain,
                                    color: "bg-primary"
                                },
                                {
                                    step: "4",
                                    title: "FolderNFT metadata updates with file entry",
                                    icon: Folder,
                                    color: "bg-secondary"
                                },
                                {
                                    step: "5",
                                    title: "Search via query like: notes from DAO call",
                                    icon: Search,
                                    color: "bg-primary"
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group">
                                    <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl transition-all`}>
                                        {item.step}
                                    </div>
                                    <div className="flex items-center align-middle my-auto space-x-3">
                                        <item.icon className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
                                        <h3 className="text-sm text-gray-900 group-hover:text-primary transition-colors">{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </TooltipProvider>
    );
}