export type IconName =
    | "shield"
    | "badge"
    | "dollar"
    | "clock"
    | "wrench"
    | "phone"
    | "drain"
    | "heater"
    | "drop"
    | "pipe"
    | "flame"
    | "faucet"
    | "check"
    | "star"
    | "map"
    | "file"
    | "alert"
    | "search";

export type DayOfWeek =
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";

export interface ImageAsset {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface LinkItem {
    label: string;
    href: string;
}

export interface NavChild extends LinkItem {
    description?: string;
}

export interface NavItem extends LinkItem {
    children?: NavChild[];
}

export interface SectionText {
    eyebrow: string;
    title: string;
    description?: string;
}

export interface IconItem {
    title: string;
    text: string;
    icon: IconName;
}

export interface BreadcrumbItem {
    name: string;
    path: string;
}

export interface DemoConfig {
    enabled: boolean;
    builderName: string;
    barText: string;
    footerNote: string;
    dismissLabel: string;
}

export interface AddressConfig {
    street: string;
    city: string;
    region: string;
    regionCode: string;
    postalCode: string;
    country: string;
    countryCode: string;
}

export interface BusinessConfig {
    name: string;
    legalName: string;
    tagline: string;
    description: string;
    foundingYear: number;
    phone: string;
    phoneHref: string;
    email: string;
    address: AddressConfig;
    geo: { latitude: number; longitude: number };
    priceRange: string;
    siteUrl: string;
    licenseLine: string;
    licenseNumber: string;
}

export interface ThemeColors {
    bg: string;
    surface: string;
    surfaceDark: string;
    text: string;
    textOnDark: string;
    muted: string;
    accent: string;
    accentStrong: string;
    accent2: string;
    highlight: string;
    border: string;
}

export interface ThemeConfig {
    colors: ThemeColors;
    headingFont: string;
    bodyFont: string;
    fontsUrl: string;
    themeColor: string;
}

export interface BrandingConfig {
    logoSrc: string;
    logoAlt: string;
    faviconSrc: string;
    ogImageSrc: string;
    ogImageAlt: string;
    appleTouchIconSrc: string;
}

export interface CtaConfig {
    primary: LinkItem;
    call: LinkItem;
    callLabel: string;
    requestLabel: string;
    banner: {
        eyebrow: string;
        title: string;
        text: string;
        primary: LinkItem;
        secondary: LinkItem;
    };
}

export interface HeroConfig {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    subtext: string;
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
    trustRow: string[];
    imageNote: string;
}

export interface MarqueeConfig {
    items: string[];
    ariaLabel: string;
}

export interface StatItem {
    label: string;
    value: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
}

export interface TestimonialItem {
    name: string;
    location: string;
    service: string;
    text: string;
    rating: number;
}

export interface TestimonialsConfig {
    section: SectionText;
    items: TestimonialItem[];
    previousLabel: string;
    nextLabel: string;
    dotLabel: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQConfig {
    section: SectionText;
    items: FAQItem[];
}

export interface HoursEntry {
    label: string;
    days: DayOfWeek[];
    opens: string;
    closes: string;
    closed?: boolean;
    displayTime: string;
}

export interface HoursConfig {
    title: string;
    entries: HoursEntry[];
    emergencyNote: string;
}

export interface SocialLink {
    label: string;
    href: string;
    platform: "facebook" | "instagram" | "google" | "youtube" | "nextdoor";
}

export interface FormFieldText {
    label: string;
    placeholder: string;
    error: string;
}

export interface FormConfig {
    title: string;
    intro: string;
    fields: {
        name: FormFieldText;
        phone: FormFieldText;
        email: FormFieldText;
        zip: FormFieldText;
        service: FormFieldText;
        urgency: FormFieldText;
        message: FormFieldText;
    };
    servicePlaceholder: string;
    submitLabel: string;
    successMessage: string;
    mailtoSubject: string;
    errorSummary: string;
}

export interface ContactConfig {
    formAction: string;
    mapEmbedUrl: string;
    bookingUrl: string;
    mapTitle: string;
    detailsTitle: string;
    form: FormConfig;
}

export interface SeoPageMeta {
    title: string;
    description: string;
}

export interface SeoConfig {
    lang: string;
    locale: string;
    titleTemplate: string;
    defaultTitle: string;
    defaultDescription: string;
    twitterHandle: string;
    pages: {
        home: SeoPageMeta;
        services: SeoPageMeta;
        emergency: SeoPageMeta;
        about: SeoPageMeta;
        contact: SeoPageMeta;
        notFound: SeoPageMeta;
    };
}

export interface GlowImages {
    orange: string;
    steel: string;
}

export interface ImagesConfig {
    hero: ImageAsset;
    about: ImageAsset;
    emergency: ImageAsset;
    cta: ImageAsset;
    serviceDrain: ImageAsset;
    serviceHeater: ImageAsset;
    serviceLeak: ImageAsset;
    servicePipe: ImageAsset;
    serviceHeating: ImageAsset;
    serviceFixtures: ImageAsset;
    team1: ImageAsset;
    team2: ImageAsset;
    team3: ImageAsset;
    team4: ImageAsset;
    glow: GlowImages;
}

export interface ServiceItem {
    id: string;
    anchor: string;
    name: string;
    shortDescription: string;
    description: string;
    priceLabel: string;
    icon: IconName;
    typicalProblems: string[];
    included: string[];
    image: ImageAsset;
}

export interface ServicesConfig {
    section: SectionText;
    items: ServiceItem[];
    includedLabel: string;
    problemsLabel: string;
    viewAllLabel: string;
    learnMoreLabel: string;
}

export interface EmergencyTip {
    id: string;
    title: string;
    summary: string;
    icon: IconName;
    steps: string[];
}

export interface EmergencyConfig {
    barText: string;
    headline: string;
    subheadline: string;
    phone: string;
    phoneHref: string;
    callLabel: string;
    responsePromise: {
        title: string;
        text: string;
        minutes: number;
    };
    tipsSection: SectionText;
    tips: EmergencyTip[];
    safetyNote: string;
}

export interface ServiceAreasConfig {
    section: SectionText;
    cities: string[];
    zipCodes: string[];
    checker: {
        title: string;
        label: string;
        placeholder: string;
        button: string;
        invalid: string;
        inArea: string;
        outOfArea: string;
    };
}

export interface GuaranteeConfig {
    section: SectionText;
    items: IconItem[];
    warrantyText: string;
    diagnosticFeeText: string;
}

export interface HowItWorksConfig {
    section: SectionText;
    steps: IconItem[];
}

export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: ImageAsset;
}

export interface TeamConfig {
    section: SectionText;
    members: TeamMember[];
}

export interface UrgencyOption {
    value: string;
    label: string;
    description: string;
}

export interface PageHero {
    eyebrow: string;
    title: string;
    description: string;
}

export interface PagesConfig {
    home: {
        servicesSection: SectionText;
        statsLabel: string;
        emergencyTeaser: { title: string; text: string; cta: string };
    };
    services: { hero: PageHero };
    emergency: {
        hero: PageHero;
        stepsSection: SectionText;
        steps: IconItem[];
    };
    about: {
        hero: PageHero;
        story: { eyebrow: string; title: string; paragraphs: string[] };
        standardsSection: SectionText;
        standards: IconItem[];
        valuesSection: SectionText;
        values: IconItem[];
    };
    contact: {
        hero: PageHero;
        infoLabels: {
            phone: string;
            email: string;
            address: string;
            hours: string;
        };
    };
    notFound: {
        eyebrow: string;
        title: string;
        text: string;
        primary: LinkItem;
        secondary: LinkItem;
    };
}

export interface FooterConfig {
    blurb: string;
    copyright: string;
    linkGroups: { title: string; links: LinkItem[] }[];
}

export interface UiConfig {
    skipLinkLabel: string;
    menuOpenLabel: string;
    menuCloseLabel: string;
    backToTopLabel: string;
    primaryNavLabel: string;
    breadcrumbLabel: string;
    socialLabel: string;
    servicesMenuLabel: string;
    licenseLabel: string;
    hoursLabel: string;
}

export interface SiteConfig {
    demo: DemoConfig;
    business: BusinessConfig;
    theme: ThemeConfig;
    branding: BrandingConfig;
    ui: UiConfig;
    nav: NavItem[];
    cta: CtaConfig;
    hero: HeroConfig;
    marquee: MarqueeConfig;
    stats: StatItem[];
    trustBadges: IconItem[];
    testimonials: TestimonialsConfig;
    faq: FAQConfig;
    hours: HoursConfig;
    social: SocialLink[];
    contact: ContactConfig;
    seo: SeoConfig;
    images: ImagesConfig;
    services: ServicesConfig;
    emergency: EmergencyConfig;
    serviceAreas: ServiceAreasConfig;
    guarantee: GuaranteeConfig;
    howItWorks: HowItWorksConfig;
    team: TeamConfig;
    urgencyOptions: UrgencyOption[];
    pages: PagesConfig;
    footer: FooterConfig;
}
