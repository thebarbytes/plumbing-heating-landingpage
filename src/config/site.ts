import type { ImageAsset, ImagesConfig, SiteConfig } from "../types/site";

export const IMAGE_HOST = "https://images.unsplash.com";

const FOUNDING_YEAR = 2007;
const HERO_PHOTO_ID = "photo-1585704032915-c3400ca199e7";

function photo(
    id: string,
    width: number,
    height: number,
    alt: string,
): ImageAsset {
    return {
        src: `${IMAGE_HOST}/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=80`,
        alt,
        width,
        height,
    };
}

const images: ImagesConfig = {
    hero: photo(
        HERO_PHOTO_ID,
        1920,
        1080,
        "Plumber repairing pipes with a wrench",
    ),
    about: photo(
        "photo-1581244277943-fe4a9c777189",
        1400,
        1000,
        "Tradesperson at work on a home plumbing job",
    ),
    emergency: photo(
        "photo-1607472586893-edb57bdc0e39",
        1400,
        1000,
        "Plumber fixing a leak under a sink",
    ),
    cta: photo(
        "photo-1621905251189-08b45d6a269e",
        1600,
        900,
        "Plumbing tools and fittings on a workbench",
    ),
    serviceDrain: photo(
        "photo-1607472586893-edb57bdc0e39",
        1000,
        750,
        "Plumber clearing a drain under a sink",
    ),
    serviceHeater: photo(
        HERO_PHOTO_ID,
        1000,
        750,
        "Plumber working on a water heater and pipes",
    ),
    serviceLeak: photo(
        "photo-1621905251189-08b45d6a269e",
        1000,
        750,
        "Tools and fittings used for leak repair",
    ),
    servicePipe: photo(
        "photo-1581244277943-fe4a9c777189",
        1000,
        750,
        "Technician installing new piping",
    ),
    serviceHeating: photo(
        "photo-1621905251189-08b45d6a269e",
        1000,
        750,
        "Heating system components and tools",
    ),
    serviceFixtures: photo(
        "photo-1584622650111-993a426fbf0a",
        1000,
        750,
        "Modern bathroom faucet and sink",
    ),
    team1: photo(
        "photo-1560250097-0b93528c311a",
        800,
        1000,
        "Portrait of Dale Whitaker, owner and master plumber",
    ),
    team2: photo(
        "photo-1573496359142-b8d87734a5a2",
        800,
        1000,
        "Portrait of Maria Delgado, service manager",
    ),
    team3: photo(
        "photo-1507003211169-0a1dd7228f2d",
        800,
        1000,
        "Portrait of Tom Ostrander, lead heating technician",
    ),
    team4: photo(
        "photo-1494790108377-be9c29b29330",
        800,
        1000,
        "Portrait of Priya Nair, emergency dispatch lead",
    ),
    glow: {
        orange: "",
        steel: "",
    },
};

export const siteConfig: SiteConfig = {
    demo: {
        enabled: true,
        builderName: "Your Studio Name",
        barText: "Demo website: sample design by {builder}. Not yet live.",
        footerNote: "This is a sample website for demonstration purposes.",
        dismissLabel: "Dismiss demo notice",
    },

    business: {
        name: "Summit Plumbing & Heating",
        legalName: "Summit Plumbing & Heating LLC",
        tagline: "Fast fixes. Fair prices. Done right.",
        description:
            "Residential and light-commercial plumbing, water heater, drain cleaning, heating, and 24/7 emergency repair serving Columbus, Ohio and nearby suburbs.",
        foundingYear: FOUNDING_YEAR,
        phone: "(614) 555-0142",
        phoneHref: "tel:+16145550142",
        email: "service@summitplumbing.example",
        address: {
            street: "1420 Foundry Street",
            city: "Columbus",
            region: "Ohio",
            regionCode: "OH",
            postalCode: "43215",
            country: "United States",
            countryCode: "US",
        },
        geo: { latitude: 39.9612, longitude: -82.9988 },
        priceRange: "$$",
        siteUrl: "https://summit-plumbing.example.com",
        licenseLine:
            "Ohio Plumbing License #PL-000000 (sample) · Fully licensed, bonded and insured",
        licenseNumber: "PL-000000",
    },

    theme: {
        colors: {
            bg: "#F6F7F9",
            surface: "#FFFFFF",
            surfaceDark: "#14181F",
            text: "#11151C",
            textOnDark: "#F3F5F8",
            muted: "#5E6875",
            accent: "#FF6A1F",
            accentStrong: "#E4520A",
            accent2: "#2F6FA8",
            highlight: "#FFC83D",
            border: "rgba(17, 21, 28, 0.10)",
        },
        headingFont:
            "'Barlow Condensed', 'Arial Narrow', Impact, system-ui, sans-serif",
        bodyFont:
            "'Barlow', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        fontsUrl:
            "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Barlow:wght@400;500;600;700&display=swap",
        themeColor: "#14181F",
    },

    branding: {
        logoSrc: "/favicon.svg",
        logoAlt: "Summit Plumbing & Heating logo",
        faviconSrc: "/favicon.svg",
        ogImageSrc: photo(HERO_PHOTO_ID, 1200, 630, "Summit Plumbing & Heating")
            .src,
        ogImageAlt:
            "Summit Plumbing & Heating: 24/7 emergency plumbing in Columbus, Ohio",
        appleTouchIconSrc: "/favicon.svg",
    },

    ui: {
        skipLinkLabel: "Skip to main content",
        menuOpenLabel: "Open menu",
        menuCloseLabel: "Close menu",
        backToTopLabel: "Back to top",
        primaryNavLabel: "Primary navigation",
        breadcrumbLabel: "Breadcrumb",
        socialLabel: "Social media",
        servicesMenuLabel: "Toggle services menu",
        licenseLabel: "License",
        hoursLabel: "Hours",
    },

    nav: [
        { label: "Home", href: "/" },
        {
            label: "Services",
            href: "/services",
            children: [
                {
                    label: "Drain Cleaning",
                    href: "/services#drain-cleaning",
                    description: "Clogs, slow drains, sewer lines",
                },
                {
                    label: "Water Heaters",
                    href: "/services#water-heaters",
                    description: "Tank and tankless repair & install",
                },
                {
                    label: "Leak Repair",
                    href: "/services#leak-repair",
                    description: "Find it, fix it, protect your home",
                },
                {
                    label: "Pipe Replacement",
                    href: "/services#pipe-replacement",
                    description: "Repiping and line replacement",
                },
                {
                    label: "Heating",
                    href: "/services#heating",
                    description: "Boilers, radiators, in-floor systems",
                },
                {
                    label: "Fixtures",
                    href: "/services#fixtures",
                    description: "Faucets, toilets, disposals, sinks",
                },
            ],
        },
        { label: "Emergency", href: "/emergency" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ],

    cta: {
        primary: { label: "Request Service", href: "/contact" },
        call: { label: "(614) 555-0142", href: "tel:+16145550142" },
        callLabel: "Call Now",
        requestLabel: "Request Service",
        banner: {
            eyebrow: "Ready when you are",
            title: "Plumbing problem? Let’s get it fixed today.",
            text: "Call now for a fast dispatch, or send a request and we’ll reach out within 15 minutes during business hours.",
            primary: { label: "Request Service", href: "/contact" },
            secondary: {
                label: "Call (614) 555-0142",
                href: "tel:+16145550142",
            },
        },
    },

    hero: {
        eyebrow: "Columbus’s 24/7 plumbing team",
        headline: "Fast fixes. Fair prices.",
        headlineAccent: "Done right.",
        subtext:
            "From burst pipes at midnight to a new water heater next week, licensed Summit technicians show up on time, quote in writing, and stand behind every job for a full year.",
        primaryCta: { label: "Call (614) 555-0142", href: "tel:+16145550142" },
        secondaryCta: { label: "Request Service", href: "/contact" },
        trustRow: ["Licensed & bonded", "Fully insured", "Upfront pricing"],
        imageNote: "Average arrival time: 45 minutes",
    },

    marquee: {
        ariaLabel: "Services and guarantees",
        items: [
            "24/7 Emergency Service",
            "Drain Cleaning",
            "Water Heaters",
            "Leak Repair",
            "Upfront Pricing",
            "Pipe Replacement",
            "1-Year Workmanship Guarantee",
            "Heating & Boilers",
            "Licensed & Insured",
            "Fixture Installation",
        ],
    },

    stats: [
        {
            label: "Years in business",
            value: new Date().getFullYear() - FOUNDING_YEAR,
            suffix: "+",
        },
        { label: "Jobs completed", value: 12400, suffix: "+" },
        { label: "Avg. response (minutes)", value: 45 },
        { label: "Five-star reviews", value: 980, suffix: "+" },
    ],

    trustBadges: [
        {
            title: "Licensed & Bonded",
            text: "State-licensed master plumbers on every call.",
            icon: "badge",
        },
        {
            title: "Fully Insured",
            text: "Your home is protected from start to finish.",
            icon: "shield",
        },
        {
            title: "Upfront Pricing",
            text: "Written quotes before any work begins.",
            icon: "dollar",
        },
        {
            title: "On-Time Arrival",
            text: "Text updates and a tight arrival window.",
            icon: "clock",
        },
    ],

    testimonials: {
        section: {
            eyebrow: "Reviews",
            title: "Neighbors who called us first",
            description: "Sample reviews for demonstration purposes.",
        },
        previousLabel: "Previous review",
        nextLabel: "Next review",
        dotLabel: "Go to review",
        items: [
            {
                name: "Karen M.",
                location: "Grandview Heights",
                service: "Emergency leak repair",
                text: "A pipe burst at 2 a.m. Summit had someone at my door in under 40 minutes, shut everything off, and had it repaired by breakfast. Calm, professional, and the price matched the quote.",
                rating: 5,
            },
            {
                name: "James R.",
                location: "Westerville",
                service: "Water heater replacement",
                text: "Quoted in writing, installed the same day, and cleaned up after themselves. The old tank was gone before I even finished my coffee.",
                rating: 5,
            },
            {
                name: "Alicia T.",
                location: "Bexley",
                service: "Drain cleaning",
                text: "Two other companies told me I needed a new line. Summit ran a camera, found a root blockage, cleared it, and saved me thousands.",
                rating: 5,
            },
            {
                name: "Greg and Dana P.",
                location: "Dublin",
                service: "Boiler service",
                text: "Our boiler was making noise for years. They explained exactly what was wrong, fixed it, and it has run quietly all winter.",
                rating: 5,
            },
            {
                name: "Marcus L.",
                location: "Hilliard",
                service: "Fixture installation",
                text: "Replaced three faucets and a disposal in one visit. Tidy, fast, and honest about what I actually needed.",
                rating: 5,
            },
        ],
    },

    faq: {
        section: {
            eyebrow: "FAQ",
            title: "Straight answers before you call",
            description: "The questions we hear most from Columbus homeowners.",
        },
        items: [
            {
                question: "Do you really answer emergencies 24/7?",
                answer: "Yes. A live dispatcher answers every hour of every day, including holidays, and sends the nearest available technician. Our average arrival time is about 45 minutes in the Columbus area.",
            },
            {
                question: "How much does a service call cost?",
                answer: "Our diagnostic fee is $79 and is credited toward your repair if you approve the work. You always get a written quote before we start, so there are no surprises.",
            },
            {
                question: "Are your plumbers licensed and insured?",
                answer: "Every technician works under our state plumbing license and our company carries full liability and workers’ compensation insurance. Proof of coverage is available on request.",
            },
            {
                question: "Do you offer financing for larger jobs?",
                answer: "For water heater replacements, repiping, and other larger projects, we offer financing options with approved credit. Ask your technician for details when you receive your quote.",
            },
            {
                question: "What does your guarantee cover?",
                answer: "All workmanship is guaranteed for one year. If something we installed or repaired fails because of our work, we return and make it right at no charge. Manufacturer warranties apply to parts and equipment.",
            },
            {
                question: "Can you work on commercial properties?",
                answer: "Yes. We handle light-commercial work such as restaurants, offices, small retail, and multi-unit buildings, including after-hours scheduling to avoid disrupting business.",
            },
            {
                question: "How do I know if you serve my area?",
                answer: "Use the service area checker on this page and enter your zip code. If we don’t list it, call us. We often make exceptions for nearby neighborhoods.",
            },
        ],
    },

    hours: {
        title: "Hours",
        entries: [
            {
                label: "Monday – Friday",
                days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "18:00",
                displayTime: "7:00 AM – 6:00 PM",
            },
            {
                label: "Saturday",
                days: ["Saturday"],
                opens: "08:00",
                closes: "16:00",
                displayTime: "8:00 AM – 4:00 PM",
            },
            {
                label: "Sunday",
                days: ["Sunday"],
                opens: "00:00",
                closes: "00:00",
                closed: true,
                displayTime: "Emergency calls only",
            },
        ],
        emergencyNote:
            "Emergency service available 24 hours a day, 7 days a week.",
    },

    social: [
        { label: "Facebook", href: "#", platform: "facebook" },
        { label: "Instagram", href: "#", platform: "instagram" },
        { label: "Google Business", href: "#", platform: "google" },
        { label: "YouTube", href: "#", platform: "youtube" },
    ],

    contact: {
        formAction: "",
        mapEmbedUrl:
            "https://www.google.com/maps?q=Columbus,+Ohio&output=embed",
        bookingUrl: "",
        mapTitle:
            "Map of the Summit Plumbing & Heating service area in Columbus, Ohio",
        detailsTitle: "Contact details",
        form: {
            title: "Request service",
            intro: "Tell us what’s going on and how soon you need us. For emergencies, please call.",
            fields: {
                name: {
                    label: "Full name",
                    placeholder: "Jane Smith",
                    error: "Please enter your name.",
                },
                phone: {
                    label: "Phone number",
                    placeholder: "(614) 555-0100",
                    error: "Please enter a valid phone number.",
                },
                email: {
                    label: "Email",
                    placeholder: "you@example.com",
                    error: "Please enter a valid email address.",
                },
                zip: {
                    label: "Zip code",
                    placeholder: "43215",
                    error: "Please enter a 5-digit zip code.",
                },
                service: {
                    label: "Service needed",
                    placeholder: "Select a service",
                    error: "Please choose a service.",
                },
                urgency: {
                    label: "How urgent is it?",
                    placeholder: "",
                    error: "Please choose how soon you need service.",
                },
                message: {
                    label: "Describe the problem",
                    placeholder:
                        "Tell us what’s happening, where it is, and anything we should know.",
                    error: "Please add a short description (at least 10 characters).",
                },
            },
            servicePlaceholder: "Select a service",
            submitLabel: "Send request",
            successMessage:
                "Thanks! Your request is ready to send. We’ll be in touch shortly.",
            mailtoSubject: "Service request from website",
            errorSummary: "Please fix the highlighted fields:",
        },
    },

    seo: {
        lang: "en",
        locale: "en_US",
        titleTemplate: "%s | Summit Plumbing & Heating",
        defaultTitle:
            "Summit Plumbing & Heating | 24/7 Plumber in Columbus, Ohio",
        defaultDescription:
            "Licensed Columbus plumbers for emergency repair, drain cleaning, water heaters, leaks, and heating. Upfront pricing and a 1-year workmanship guarantee.",
        twitterHandle: "",
        pages: {
            home: {
                title: "Summit Plumbing & Heating | 24/7 Plumber in Columbus, Ohio",
                description:
                    "Licensed Columbus plumbers for emergency repair, drain cleaning, water heaters, leaks, and heating. Upfront pricing and a 1-year workmanship guarantee.",
            },
            services: {
                title: "Plumbing & Heating Services",
                description:
                    "Drain cleaning, water heaters, leak repair, pipe replacement, heating, and fixture installation across Columbus, Ohio. See what’s included and typical prices.",
            },
            emergency: {
                title: "24/7 Emergency Plumber",
                description:
                    "Burst pipe, no hot water, or a gas smell? Call Summit’s 24/7 emergency line for a fast response and see what to do right now.",
            },
            about: {
                title: "About Us",
                description:
                    "Meet the licensed, insured Summit team. Family-run since 2007, serving Columbus homeowners and local businesses with honest, upfront plumbing service.",
            },
            contact: {
                title: "Contact & Request Service",
                description:
                    "Request plumbing service in Columbus, Ohio. Choose your urgency, check your service area, and reach our team by phone or form.",
            },
            notFound: {
                title: "Page Not Found",
                description:
                    "The page you’re looking for doesn’t exist or has moved.",
            },
        },
    },

    images,

    services: {
        section: {
            eyebrow: "What we do",
            title: "Plumbing and heating, handled",
            description:
                "One licensed team for every pipe, drain, heater, and fixture in your home or small business.",
        },
        includedLabel: "What’s included",
        problemsLabel: "Typical problems we solve",
        viewAllLabel: "View all services",
        learnMoreLabel: "Learn more",
        items: [
            {
                id: "drain-cleaning",
                anchor: "drain-cleaning",
                name: "Drain Cleaning",
                shortDescription:
                    "Clogs, slow drains, and sewer backups cleared fast.",
                description:
                    "We clear stubborn clogs with professional cabling and hydro-jetting, then confirm the line with a camera inspection so the problem stays gone.",
                priceLabel: "From $129",
                icon: "drain",
                typicalProblems: [
                    "Slow or gurgling drains",
                    "Kitchen and bathroom clogs",
                    "Main sewer line backups",
                    "Tree root intrusion",
                ],
                included: [
                    "Cable or hydro-jet clearing",
                    "Camera inspection on request",
                    "Written findings and options",
                    "30-day clog-free assurance",
                ],
                image: images.serviceDrain,
            },
            {
                id: "water-heaters",
                anchor: "water-heaters",
                name: "Water Heaters",
                shortDescription:
                    "Tank and tankless repair, replacement, and installation.",
                description:
                    "No hot water or a tank that’s past its prime? We repair what can be saved and replace what can’t, often the same day, with haul-away of your old unit.",
                priceLabel: "From $199 repair · Free replacement estimate",
                icon: "heater",
                typicalProblems: [
                    "No hot water or lukewarm water",
                    "Leaking tank",
                    "Rumbling or popping noises",
                    "Rusty or discolored water",
                ],
                included: [
                    "Full diagnostic and safety check",
                    "Code-compliant installation",
                    "Old unit removal and disposal",
                    "Manufacturer warranty registration",
                ],
                image: images.serviceHeater,
            },
            {
                id: "leak-repair",
                anchor: "leak-repair",
                name: "Leak Repair",
                shortDescription:
                    "Find it, fix it, and protect your home from water damage.",
                description:
                    "Hidden leaks cost you money and damage your home. We use acoustic and thermal detection to locate the source, then repair it with minimal disruption.",
                priceLabel: "From $149",
                icon: "drop",
                typicalProblems: [
                    "Dripping or sweating pipes",
                    "Unexplained high water bills",
                    "Water stains on walls or ceilings",
                    "Low water pressure",
                ],
                included: [
                    "Non-invasive leak detection",
                    "Repair or replacement of the affected section",
                    "Pressure test after repair",
                    "Photos of the problem and fix",
                ],
                image: images.serviceLeak,
            },
            {
                id: "pipe-replacement",
                anchor: "pipe-replacement",
                name: "Pipe Replacement",
                shortDescription:
                    "Spot repairs to whole-home repiping with PEX or copper.",
                description:
                    "Aging galvanized, polybutylene, or corroded pipes put your home at risk. We replace problem lines cleanly and keep disruption to walls and ceilings low.",
                priceLabel: "Free estimate",
                icon: "pipe",
                typicalProblems: [
                    "Repeated pinhole leaks",
                    "Discolored or metallic-tasting water",
                    "Galvanized or polybutylene pipes",
                    "Frozen and burst pipe damage",
                ],
                included: [
                    "Written, itemized quote",
                    "Permits and inspections handled",
                    "Drywall protection and cleanup",
                    "Choice of PEX or copper",
                ],
                image: images.servicePipe,
            },
            {
                id: "heating",
                anchor: "heating",
                name: "Heating",
                shortDescription:
                    "Boiler, radiator, and hydronic heating service.",
                description:
                    "Keep your home warm through Ohio winters. We service and repair boilers, radiators, and in-floor hydronic systems, and offer seasonal tune-ups.",
                priceLabel: "From $129 tune-up",
                icon: "flame",
                typicalProblems: [
                    "Boiler not firing or short cycling",
                    "Cold radiators or uneven heat",
                    "Strange noises or leaks",
                    "Annual maintenance",
                ],
                included: [
                    "Combustion and safety inspection",
                    "Pressure and flow checks",
                    "Cleaning and adjustment",
                    "Clear service report",
                ],
                image: images.serviceHeating,
            },
            {
                id: "fixtures",
                anchor: "fixtures",
                name: "Fixtures",
                shortDescription:
                    "Faucets, toilets, disposals, sinks, and more.",
                description:
                    "Upgrading or replacing a fixture? We install customer-supplied or recommended fixtures and make sure everything is sealed, level, and leak-free.",
                priceLabel: "From $109",
                icon: "faucet",
                typicalProblems: [
                    "Dripping or damaged faucets",
                    "Running or clogged toilets",
                    "Garbage disposal jams",
                    "Fixture upgrades and remodels",
                ],
                included: [
                    "Removal and disposal of old fixture",
                    "New supply lines and shutoffs as needed",
                    "Leak and function test",
                    "Workmanship guarantee",
                ],
                image: images.serviceFixtures,
            },
        ],
    },

    emergency: {
        barText: "Emergency? Call now",
        headline: "24/7 emergency plumbing. We pick up.",
        subheadline:
            "Burst pipe, sewer backup, no heat, or a gas smell: a real dispatcher answers day or night and sends the nearest technician.",
        phone: "(614) 555-0142",
        phoneHref: "tel:+16145550142",
        callLabel: "Call emergency line",
        responsePromise: {
            title: "Our response promise",
            text: "We aim to have a licensed technician on the way within minutes and at your door in about 45 minutes across most of our service area.",
            minutes: 45,
        },
        tipsSection: {
            eyebrow: "Do this first",
            title: "What to do right now",
            description:
                "Quick steps to limit damage while help is on the way.",
        },
        tips: [
            {
                id: "burst-pipe",
                title: "Burst or leaking pipe",
                summary: "Stop the water and protect your home.",
                icon: "drop",
                steps: [
                    "Shut off the main water valve, usually near your water meter or where the line enters the house.",
                    "Turn off electricity to wet areas if you can do so safely.",
                    "Open faucets to drain remaining water from the lines.",
                    "Move valuables away and call us right away.",
                ],
            },
            {
                id: "no-hot-water",
                title: "No hot water",
                summary: "Check the basics while we head your way.",
                icon: "heater",
                steps: [
                    "Check that the pilot light is on or the breaker hasn’t tripped.",
                    "Look for water around the base of the tank. If you see any, shut off the water supply to the heater.",
                    "Do not attempt to relight a gas heater if you smell gas.",
                    "Call us and describe what you see.",
                ],
            },
            {
                id: "clogged-drain",
                title: "Clogged drain or sewer backup",
                summary: "Stop using water and avoid chemicals.",
                icon: "drain",
                steps: [
                    "Stop using sinks, tubs, toilets, and the washing machine.",
                    "Avoid chemical drain cleaners; they can damage pipes and harm technicians.",
                    "Keep children and pets away from backed-up water.",
                    "Call us for fast clearing and a camera inspection.",
                ],
            },
            {
                id: "gas-smell",
                title: "Gas smell",
                summary: "Safety first. Leave, then call.",
                icon: "alert",
                steps: [
                    "Do not use switches, lighters, or phones inside the home.",
                    "Get everyone, including pets, outside immediately.",
                    "From a safe distance, call your gas utility’s emergency line and 911.",
                    "Call us once you are safe so we can help after the utility clears the home.",
                ],
            },
        ],
        safetyNote:
            "If you smell gas or feel unsafe, leave the building and call 911 and your gas utility first.",
    },

    serviceAreas: {
        section: {
            eyebrow: "Where we work",
            title: "Serving Columbus and nearby suburbs",
            description:
                "Enter your zip code to see if we cover your neighborhood.",
        },
        cities: [
            "Columbus",
            "Bexley",
            "Grandview Heights",
            "Upper Arlington",
            "Worthington",
            "Dublin",
            "Hilliard",
            "Westerville",
            "Gahanna",
            "Reynoldsburg",
            "Grove City",
        ],
        zipCodes: [
            "43201",
            "43202",
            "43203",
            "43204",
            "43205",
            "43206",
            "43207",
            "43209",
            "43210",
            "43211",
            "43212",
            "43213",
            "43214",
            "43215",
            "43219",
            "43220",
            "43221",
            "43224",
            "43228",
            "43229",
            "43230",
            "43231",
            "43232",
            "43016",
            "43017",
            "43026",
            "43068",
            "43081",
            "43082",
            "43085",
            "43123",
        ],
        checker: {
            title: "Check your service area",
            label: "Zip code",
            placeholder: "Enter zip code",
            button: "Check",
            invalid: "Please enter a valid 5-digit zip code.",
            inArea: "Good news: we serve your area. Call or request service now.",
            outOfArea:
                "We don’t list that zip code, but we may still be able to help. Call to confirm.",
        },
    },

    guarantee: {
        section: {
            eyebrow: "Our promise",
            title: "Upfront pricing. Guaranteed work.",
            description: "No surprises, no pressure, and no vague estimates.",
        },
        items: [
            {
                title: "Written quotes",
                text: "You approve the price before we pick up a tool.",
                icon: "file",
            },
            {
                title: "Transparent diagnostic fee",
                text: "A flat fee that’s credited toward approved repairs.",
                icon: "search",
            },
            {
                title: "1-year workmanship guarantee",
                text: "If our work fails, we make it right at no charge.",
                icon: "shield",
            },
            {
                title: "Clean and respectful",
                text: "Boot covers, drop cloths, and a tidy workspace every time.",
                icon: "check",
            },
        ],
        warrantyText:
            "Every repair and installation is backed by our 1-year workmanship guarantee. Manufacturer warranties apply to parts and equipment.",
        diagnosticFeeText:
            "Diagnostic fee: $79, credited toward your repair when you approve the work.",
    },

    howItWorks: {
        section: {
            eyebrow: "How it works",
            title: "Call. Diagnose. Fix.",
            description:
                "A simple process built to get your water and heat back fast.",
        },
        steps: [
            {
                title: "Call",
                text: "A live dispatcher takes your details and sends the nearest technician.",
                icon: "phone",
            },
            {
                title: "Diagnose",
                text: "We find the root cause and give you a written, upfront quote.",
                icon: "search",
            },
            {
                title: "Fix",
                text: "Once you approve, we repair it right and clean up before we leave.",
                icon: "wrench",
            },
        ],
    },

    team: {
        section: {
            eyebrow: "The team",
            title: "People you’ll be glad to see",
            description: "Sample team members for demonstration purposes.",
        },
        members: [
            {
                name: "Dale Whitaker",
                role: "Owner & Master Plumber",
                bio: "Started Summit in 2007 with one truck and a simple rule: do the job right or don’t do it.",
                image: images.team1,
            },
            {
                name: "Maria Delgado",
                role: "Service Manager",
                bio: "Keeps every schedule tight and every customer informed from first call to final cleanup.",
                image: images.team2,
            },
            {
                name: "Tom Ostrander",
                role: "Lead Heating Technician",
                bio: "Boilers, radiators, and hydronic systems are his specialty. Twenty winters and counting.",
                image: images.team3,
            },
            {
                name: "Priya Nair",
                role: "Emergency Dispatch Lead",
                bio: "The calm voice on the line at 3 a.m. who gets help rolling in minutes.",
                image: images.team4,
            },
        ],
    },

    urgencyOptions: [
        {
            value: "emergency",
            label: "Emergency",
            description: "Active leak, no heat, or a backup. Please call.",
        },
        {
            value: "today",
            label: "Today",
            description: "Needs attention as soon as possible.",
        },
        {
            value: "this-week",
            label: "This week",
            description: "Not urgent but shouldn’t wait.",
        },
        {
            value: "quote",
            label: "Quote",
            description: "Planning a project and need a price.",
        },
    ],

    pages: {
        home: {
            servicesSection: {
                eyebrow: "What we do",
                title: "Plumbing and heating, handled",
                description:
                    "One licensed team for every pipe, drain, heater, and fixture in your home or small business.",
            },
            statsLabel: "Summit Plumbing by the numbers",
            emergencyTeaser: {
                title: "Water where it shouldn’t be?",
                text: "Our emergency line is staffed every hour of every day.",
                cta: "See emergency tips",
            },
        },
        services: {
            hero: {
                eyebrow: "Services",
                title: "Everything your plumbing needs",
                description:
                    "Transparent pricing, licensed technicians, and a one-year workmanship guarantee on every job.",
            },
        },
        emergency: {
            hero: {
                eyebrow: "Emergency service",
                title: "Plumbing emergency? Call now.",
                description:
                    "We answer 24/7, dispatch fast, and walk you through what to do until we arrive.",
            },
            stepsSection: {
                eyebrow: "What happens next",
                title: "From your call to a fixed problem",
                description:
                    "Here’s what to expect when you call our emergency line.",
            },
            steps: [
                {
                    title: "You call",
                    text: "A live dispatcher answers and gathers the key details.",
                    icon: "phone",
                },
                {
                    title: "We dispatch",
                    text: "The nearest technician heads your way and texts you an arrival estimate.",
                    icon: "clock",
                },
                {
                    title: "We stabilize",
                    text: "We stop the damage first, then explain your options and price in writing.",
                    icon: "shield",
                },
                {
                    title: "We repair",
                    text: "Once you approve, we complete the repair and clean up.",
                    icon: "wrench",
                },
            ],
        },
        about: {
            hero: {
                eyebrow: "About us",
                title: "Family-run. Licensed. Local.",
                description:
                    "Summit started in 2007 with one truck and a belief that homeowners deserve straight answers.",
            },
            story: {
                eyebrow: "Our story",
                title: "Built on showing up",
                paragraphs: [
                    "Summit Plumbing & Heating began with a single service truck and a simple promise: arrive on time, explain the problem in plain English, and charge a fair price.",
                    "Today we’re a team of licensed plumbers, heating specialists, and dispatchers serving homeowners and small businesses across Columbus. The truck count has grown, but the promise hasn’t changed.",
                    "This is sample placeholder copy for demonstration purposes and will be replaced with your real story.",
                ],
            },
            standardsSection: {
                eyebrow: "Standards",
                title: "Licensed and insured, every job",
                description: "The credentials and coverage behind every visit.",
            },
            standards: [
                {
                    title: "State-licensed plumbers",
                    text: "Work performed under our Ohio plumbing license.",
                    icon: "badge",
                },
                {
                    title: "Fully insured",
                    text: "General liability and workers’ compensation coverage.",
                    icon: "shield",
                },
                {
                    title: "Background-checked",
                    text: "Every team member is vetted before entering your home.",
                    icon: "check",
                },
                {
                    title: "Code-compliant",
                    text: "Permits pulled and inspections passed, every time.",
                    icon: "file",
                },
            ],
            valuesSection: {
                eyebrow: "Values",
                title: "How we work",
                description: "Four principles that guide every call.",
            },
            values: [
                {
                    title: "Be on time",
                    text: "Your time matters. We give tight windows and keep them.",
                    icon: "clock",
                },
                {
                    title: "Be honest",
                    text: "We recommend only what you need, never what we can upsell.",
                    icon: "check",
                },
                {
                    title: "Be clear on price",
                    text: "Written quotes first, always.",
                    icon: "dollar",
                },
                {
                    title: "Do it right",
                    text: "We stand behind our work with a one-year guarantee.",
                    icon: "wrench",
                },
            ],
        },
        contact: {
            hero: {
                eyebrow: "Contact",
                title: "Request service",
                description:
                    "Tell us what you need. For emergencies, skip the form and call, because we answer 24/7.",
            },
            infoLabels: {
                phone: "Phone",
                email: "Email",
                address: "Office",
                hours: "Hours",
            },
        },
        notFound: {
            eyebrow: "Error 404",
            title: "This page is down the drain",
            text: "The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track.",
            primary: { label: "Back to home", href: "/" },
            secondary: { label: "View services", href: "/services" },
        },
    },

    footer: {
        blurb: "Licensed, insured plumbing and heating for Columbus homes and small businesses. Open 24/7 for emergencies.",
        copyright: "© {year} Summit Plumbing & Heating. All rights reserved.",
        linkGroups: [
            {
                title: "Services",
                links: [
                    {
                        label: "Drain Cleaning",
                        href: "/services#drain-cleaning",
                    },
                    { label: "Water Heaters", href: "/services#water-heaters" },
                    { label: "Leak Repair", href: "/services#leak-repair" },
                    {
                        label: "Pipe Replacement",
                        href: "/services#pipe-replacement",
                    },
                    { label: "Heating", href: "/services#heating" },
                    { label: "Fixtures", href: "/services#fixtures" },
                ],
            },
            {
                title: "Company",
                links: [
                    { label: "About", href: "/about" },
                    { label: "Emergency", href: "/emergency" },
                    { label: "Contact", href: "/contact" },
                    { label: "Request Service", href: "/contact" },
                ],
            },
        ],
    },
};
