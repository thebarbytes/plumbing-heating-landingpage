export type IconKey =
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
    | "search"
    | "arrow-right"
    | "arrow-up"
    | "chevron-down"
    | "menu"
    | "close"
    | "mail"
    | "facebook"
    | "instagram"
    | "google"
    | "youtube"
    | "nextdoor";

export interface IconDefinition {
    paths: string[];
    filled?: boolean;
}

export const iconPaths: Record<IconKey, IconDefinition> = {
    shield: {
        paths: [
            "M12 3l8 3v6c0 4.5-3.2 8.2-8 9-4.8-.8-8-4.5-8-9V6l8-3z",
            "M9 12l2 2 4-4",
        ],
    },
    badge: {
        paths: [
            "M12 3a6 6 0 1 0 0 12 6 6 0 0 0 0-12z",
            "M8.5 14 7 21l5-3 5 3-1.5-7",
            "M9.5 9l1.8 1.8L15 7.2",
        ],
    },
    dollar: {
        paths: [
            "M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0",
            "M14.5 9.5c-.4-1-1.3-1.5-2.5-1.5-1.4 0-2.5.8-2.5 2s1 1.6 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1.2 0-2.1-.5-2.5-1.5",
            "M12 6.5V8m0 8v1.5",
        ],
    },
    clock: {
        paths: ["M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0", "M12 7v5l3 2"],
    },
    wrench: {
        paths: [
            "M14.7 6.3a4 4 0 0 0-5.4 5.1L3 17.7 6.3 21l6.3-6.3a4 4 0 0 0 5.1-5.4l-2.4 2.4-2.3-.6-.6-2.3 2.3-2.5z",
        ],
    },
    phone: {
        paths: [
            "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
        ],
    },
    drain: {
        paths: ["M3 5h18l-7 8v6l-4 2v-8L3 5z"],
    },
    heater: {
        paths: [
            "M7 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5z",
            "M10 7h4",
            "M12 11.5c1.5 1.5 2 2.5 2 3.5a2 2 0 0 1-4 0c0-1 .5-2 2-3.5z",
        ],
    },
    drop: {
        paths: ["M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"],
    },
    pipe: {
        paths: ["M3 6h9a5 5 0 0 1 5 5v10", "M3 11h4", "M14 21h6"],
    },
    flame: {
        paths: [
            "M12 22c4 0 7-2.8 7-7 0-3-2-5.5-4-7.5-.5 2-1.5 3-3 3.5C12 8 11 5 9 3c0 3-4 5.5-4 10 0 5 3 9 7 9z",
        ],
    },
    faucet: {
        paths: [
            "M5 9h8a4 4 0 0 1 4 4v1",
            "M5 5h5v4",
            "M8 5V3",
            "M17 17v1.5",
            "M17 21v.01",
        ],
    },
    check: {
        paths: ["M5 12.5l4.5 4.5L19 7.5"],
    },
    star: {
        paths: [
            "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z",
        ],
        filled: true,
    },
    map: {
        paths: [
            "M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z",
            "M9.5 9.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0z",
        ],
    },
    file: {
        paths: ["M7 3h7l5 5v13H7z", "M14 3v5h5", "M10 13h6", "M10 17h6"],
    },
    alert: {
        paths: ["M12 3l10 18H2L12 3z", "M12 10v5", "M12 18v.01"],
    },
    search: {
        paths: ["M5 11a6 6 0 1 0 12 0 6 6 0 0 0-12 0z", "M20 20l-4-4"],
    },
    "arrow-right": {
        paths: ["M5 12h14", "M13 6l6 6-6 6"],
    },
    "arrow-up": {
        paths: ["M12 19V5", "M6 11l6-6 6 6"],
    },
    "chevron-down": {
        paths: ["M6 9l6 6 6-6"],
    },
    menu: {
        paths: ["M4 7h16", "M4 12h16", "M4 17h16"],
    },
    close: {
        paths: ["M6 6l12 12", "M18 6L6 18"],
    },
    mail: {
        paths: ["M3 6h18v12H3z", "M3 7l9 6 9-6"],
    },
    facebook: {
        paths: [
            "M14 8V6.5c0-.8.4-1 1-1h2V2h-3c-3 0-4 2-4 4v2H8v3.5h2V22h4V11.5h2.7L17 8h-3z",
        ],
        filled: true,
    },
    instagram: {
        paths: [
            "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z",
            "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
            "M17.5 6.5h.01",
        ],
    },
    google: {
        paths: ["M18.9 6.2A9 9 0 1 0 21 12h-9"],
    },
    youtube: {
        paths: [
            "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z",
        ],
        filled: true,
    },
    nextdoor: {
        paths: ["M12 3l9 8v10h-6v-6H9v6H3V11l9-8z"],
        filled: true,
    },
};
