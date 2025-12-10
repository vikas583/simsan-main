"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { colors } from "@/lib/colors";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";

export default function AboutUsPage() {
    const TechniciansIcon = () => (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Center person */}
                <circle cx="32" cy="18" r="6" />
                <path d="M24 38c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                {/* Left person */}
                <circle cx="16" cy="22" r="5" />
                <path d="M8 40c0-4.4 3.6-8 8-8" />
                {/* Right person */}
                <circle cx="48" cy="22" r="5" />
                <path d="M56 40c0-4.4-3.6-8-8-8" />
                {/* Heart above */}
                <path d="M32 8c-1-2-3-3-5-3-3 0-5 2-5 5 0 4 5 6 10 10 5-4 10-6 10-10 0-3-2-5-5-5-2 0-4 1-5 3z" />
            </g>
        </svg>
    );

    const SafeMethodsIcon = () => (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Hands holding */}
                <path d="M12 32c0-6 4-10 10-10h4c2 0 4 1 6 3" />
                <path d="M52 32c0-6-4-10-10-10h-4c-2 0-4 1-6 3" />
                {/* Heart in center */}
                <path d="M32 24c-2-3-5-4-8-4-5 0-8 4-8 8 0 8 8 12 16 20 8-8 16-12 16-20 0-4-3-8-8-8-3 0-6 1-8 4z" />
                {/* Sparkles */}
                <circle cx="20" cy="16" r="2" fill="currentColor" />
                <circle cx="44" cy="16" r="2" fill="currentColor" />
                <path d="M32 10v-4M28 12l-2-3M36 12l2-3" />
            </g>
        </svg>
        
    );
    // Custom SVG Icons
    const VisionIcon = () => (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Eye outline */}
                <path d="M4 24c0 0 8-12 20-12s20 12 20 12-8 12-20 12S4 24 4 24z" />
                {/* Pupil */}
                <circle cx="24" cy="24" r="6" />
                {/* Eyelashes/rays on top */}
                <path d="M24 8v-4M16 10l-2-3M32 10l2-3" />
            </g>
        </svg>
    );

    const MissionIcon = () => (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Outer circle */}
                <circle cx="24" cy="24" r="18" />
                {/* Middle circle */}
                <circle cx="24" cy="24" r="11" />
                {/* Inner circle (bullseye) */}
                <circle cx="24" cy="24" r="4" fill="currentColor" />
            </g>
        </svg>
    );
    const PricingIcon = () => (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Document/clipboard */}
                <rect x="16" y="12" width="32" height="40" rx="3" />
                <path d="M24 12v-4h16v4" />
                {/* Dollar sign */}
                <circle cx="32" cy="34" r="10" />
                <path d="M32 28v12M28 31c0-2 2-3 4-3s4 1 4 3-2 3-4 3-4 1-4 3 2 3 4 3" />
                {/* Checkmark */}
                <path d="M24 20l3 3 6-6" />
            </g>
        </svg>
    );

    const LocalExpertsIcon = () => (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Person */}
                <circle cx="32" cy="20" r="8" />
                <path d="M20 52c0-6.6 5.4-12 12-12s12 5.4 12 12" />
                {/* Location pin around */}
                <path d="M32 4c-10 0-18 7-18 16 0 12 18 24 18 24s18-12 18-24c0-9-8-16-18-16z" />
            </g>
        </svg>
    );

    const QualityIcon = () => (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Wrench */}
                <path d="M18 46l12-12" />
                <path d="M14 50l4-4" />
                <path d="M26 30c-4-4-4-10 0-14 2-2 5-3 8-3l-4 6 2 4 4 2 6-4c0 3-1 6-3 8-4 4-10 4-14 0z" />
                {/* Sparkles */}
                <path d="M40 18l2-6 2 6 6 2-6 2-2 6-2-6-6-2z" fill="currentColor" />
                <circle cx="50" cy="32" r="2" fill="currentColor" />
                <circle cx="44" cy="42" r="1.5" fill="currentColor" />
            </g>
        </svg>
    );

    const FriendlyServiceIcon = () => (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Handshake */}
                <path d="M8 28h8l6-4h8l10 10-8 8-10-6" />
                <path d="M56 28h-8l-6-4h-6" />
                <path d="M24 42l4 4" />
                <path d="M30 44l4 4" />
                {/* Heart above */}
                <path d="M32 12c-1-2-3-3-5-3-3 0-5 2-5 5 0 4 5 6 10 10 5-4 10-6 10-10 0-3-2-5-5-5-2 0-4 1-5 3z" fill="currentColor" />
            </g>
        </svg>
    );

    const FiveStarIcon = () => (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Person silhouette */}
                <circle cx="32" cy="30" r="8" />
                <path d="M20 56c0-6.6 5.4-12 12-12s12 5.4 12 12" />
                {/* Star above */}
                <path d="M32 6l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="currentColor" />
                {/* Glow lines */}
                <path d="M16 20l-4-2M48 20l4-2M20 38l-6 2M44 38l6 2" />
            </g>
        </svg>
    );

    const features = [
        {
            Icon: TechniciansIcon,
            title: "Experienced & Skilled Technicians",
            description: "Our technicians are trained, knowledgeable, and experienced in all areas of property maintenance"
        },
        {
            Icon: SafeMethodsIcon,
            title: "Safe, Professional Methods",
            description: "We use advanced tools, safe cleaning methods, and high standards to deliver premium results every time"
        },
        {
            Icon: PricingIcon,
            title: "Affordable, Transparent Pricing",
            description: "We believe in clear communication, fair pricing, and no hidden charges ever"
        },
        {
            Icon: LocalExpertsIcon,
            title: "Local Fraser Valley Experts",
            description: "Your satisfaction is our priority. We take the time to understand your needs and deliver solutions"
        },
        {
            Icon: QualityIcon,
            title: "High-Quality Results, Every Time",
            description: "We use advanced tools, safe cleaning methods, and high standards to deliver premium results every time"
        },
        {
            Icon: FriendlyServiceIcon,
            title: "Honest, Friendly Service",
            description: "We believe in clear communication, fair pricing, and no hidden charges ever"
        },
        {
            Icon: FiveStarIcon,
            title: "5-Star Customer Experience",
            description: "Your satisfaction is our priority. We take the time to understand your needs and deliver solutions"
        }
    ];

    const FeatureCard = ({ Icon, title, description }: { Icon: React.FC; title: string; description: string }) => (
        <div className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border-2 border-card-border shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-20 h-20 rounded-full border-2 border-primary bg-primary flex items-center justify-center mb-4 text-primary-foreground">
                <Icon />
            </div>
            <h3 className="text-primary font-bold text-lg mb-3 leading-tight">{title}</h3>
            <p className="text-card-foreground text-sm leading-relaxed">{description}</p>
        </div>
    );

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "About Us" },
    ];

    return (
        <Box className="w-full min-h-screen bg-[#fbfbfb] flex flex-col">
            <Header />
            {/* Hero Banner */}
            <HeroBanner
                title="About Us"
                breadcrumbs={breadcrumbs}
                backgroundImage="/homepage1.png"
                minHeight="240px"
            />

            {/* Main content card */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-card">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                                About Us
                            </h2>
                            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 leading-tight">
                                Simsan Fraser Maintenance | Fraser Valley Roof & Exterior Cleaning Experts
                            </h3>

                            <p className="text-foreground mb-4 leading-relaxed">
                                Simsan Fraser Maintenance is a trusted home-maintenance and exterior cleaning company proudly serving the Fraser Valley, including Vancouver, Burnaby, Langley, Tri Cities, Abbotsford, Chilliwack, Mission, Langley, and surrounding areas. We specialize in roof moss removal, gutter cleaning, soft washing, pressure washing, window washing, painting, and surface protection services designed to keep your home clean, safe, and looking its best year-round.
                            </p>

                            <p className="text-foreground mb-8 leading-relaxed">
                                Built on quality workmanship, fair pricing, and friendly customer care, we've become a go-to choice for homeowners and property managers searching for reliable roof and exterior maintenance in the Fraser Valley.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                                    CALL US NOW
                                    <img src="/icons/arrow-right.svg" alt="Arrow Right" className="w-4 h-4" />
                                </button>
                                <button className="inline-flex items-center gap-2 border-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                                    GET FREE QUOTE
                                    <img src="/icons/arrow-right.svg" alt="Arrow Right" className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Right Images */}
                        <div className="flex gap-4 h-[500px]">
                            <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="/home-about-img1.png"
                                    alt="Roof with moss and leaves needing maintenance"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="/home-about-img1.png"
                                    alt="Close-up of roof shingles with debris"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Choose Simsan Section - 8 Card, True Design */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 leading-tight">
                        Why Homeowners Choose Simsan<br className="hidden sm:block" /> Fraser Maintenance
                    </h2>

                    {/* Top row - 4 cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        {features.slice(0, 4).map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>

                    {/* Bottom row - 3 cards centered */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {features.slice(4).map((feature, index) => (
                            <FeatureCard key={index + 4} {...feature} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Our Approach Section */}
            <Box className="w-full flex justify-center items-center py-12 px-3 md:px-8 lg:px-4 xl:px-0">
                <Box className="flex flex-col md:flex-row gap-10 max-w-6xl w-full">
                    {/* Left: Big Image */}
                    <Box className="flex-1 flex items-center justify-center">
                        <img
                            src="/aboutImg1.png"
                            alt="Roof cleaning in progress"
                            className="w-full max-w-md rounded-[36px] object-cover"
                            style={{ height: '355px', minWidth: 200 }}
                        />
                    </Box>
                    {/* Right: Large Card with Approach Details */}
                    <Box
                        className="flex-1 flex flex-col justify-center bg-white px-5 md:px-9 xl:px-14 py-8 md:py-12 lg:py-16 rounded-[38px] shadow-2xl"
                        style={{ minWidth: 240, boxShadow: '0px 8px 32px 0px rgba(130,130,130,0.10)', marginBottom: 0 }}
                    >
                        <Typography
                            variant="h3"
                            className="font-extrabold text-[2.10rem] mb-2 xl:mb-3"
                            style={{ color: '#fd5e27', letterSpacing: '-1.5px', lineHeight: 1.13, marginTop: 0 }}
                        >
                            Our Approach
                        </Typography>
                        <Typography
                            className="font-bold text-[1.14rem] mb-4 xl:mb-5"
                            style={{ color: '#ffb23b', lineHeight: 1.25, marginTop: 0 }}
                        >
                            We don’t believe in one-size-fits-all solutions.<br />Every property is unique, and so are your needs. That’s why we focus on:
                        </Typography>
                        <Box className="mb-1 xl:mb-2">
                            <Typography className="font-bold mb-1 mt-3" style={{ color: '#fd5e27', fontSize: 17 }}>
                                Quality First
                            </Typography>
                            <Typography className="mb-3" style={{ color: '#595b5b', fontSize: 15, lineHeight: 1.65 }}>
                                Every service is performed with precision and attention to detail. Whether it’s your roof, driveway, patio, or windows — we ensure results that you can clearly see.
                            </Typography>
                            <Typography className="font-bold mb-1 mt-3" style={{ color: '#fd5e27', fontSize: 17 }}>
                                Honest Pricing
                            </Typography>
                            <Typography className="mb-3" style={{ color: '#595b5b', fontSize: 15, lineHeight: 1.65 }}>
                                We offer competitive rates without compromising on quality. No hidden fees. No unnecessary add-ons. Just transparent, simple pricing.
                            </Typography>
                            <Typography className="font-bold mb-1 mt-3" style={{ color: '#fd5e27', fontSize: 17 }}>
                                Safety & Care
                            </Typography>
                            <Typography className="mb-1" style={{ color: '#595b5b', fontSize: 15, lineHeight: 1.65 }}>
                                Your home is your most valuable asset. We combine gentle cleaning techniques with industry best practices to protect your property at every step.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* What Drives Us Forward Section */}
            <section className="py-20 px-4 md:px-8 lg:px-16  rounded-t-[3rem]">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Main Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        What Drives Us Forward
                    </h2>

                    {/* Subheading */}
                    <p className="text-primary text-lg md:text-xl font-semibold leading-relaxed mb-16 max-w-4xl mx-auto">
                        We are driven by a commitment to quality, reliability, and customer satisfaction. Every project we take on inspires us to deliver better service, exceed expectations, and continuously improve the way we care for your property.
                    </p>

                    {/* Vision & Mission Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Our Vision */}
                        <div className="flex flex-col items-center text-center px-4">
                            <div className="text-primary mb-4">
                                <VisionIcon />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Our mission is to deliver reliable, high-quality property maintenance and cleaning services that enhance the safety, appearance, and value of every home and business we work on. We aim to make property care simple and stress-free by providing honest communication, professional workmanship, and dependable results our clients can trust.
                            </p>
                        </div>

                        {/* Our Mission */}
                        <div className="flex flex-col items-center text-center px-4">
                            <div className="text-primary mb-4">
                                <MissionIcon />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Our mission is to deliver reliable, high-quality property maintenance and cleaning services that enhance the safety, appearance, and value of every home and business we work on. We aim to make property care simple and stress-free by providing honest communication, professional workmanship, and dependable results our clients can trust.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />


        </Box>
    );
}
