import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "vi" | "en";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: TranslationShape;
}

const STORAGE_KEY = "nlf_language";

const translations = {
  vi: {
    languageToggle: {
      english: "English",
      vietnamese: "Ti\u1ebfng Vi\u1ec7t",
    },
    nav: {
      about: "V\u1ec1 Ch\u00fang T\u00f4i",
      projects: "D\u1ef1 \u00c1n",
      transparency: "Minh B\u1ea1ch",
      holdings: "V\u1ec1 NhiLe Holding",
      contact: "Li\u00ean H\u1ec7",
    },
    hero: {
      title:
        "Lan T\u1ecfa Y\u00eau Th\u01b0\u01a1ng, Ch\u1eafp C\u00e1nh T\u01b0\u01a1ng Lai",
      subtitle:
        "M\u1ed7i \u0111\u00f3ng g\u00f3p, d\u00f9 nh\u1ecf nh\u1ea5t, \u0111\u1ec1u g\u00f3p ph\u1ea7n t\u1ea1o n\u00ean nh\u1eefng thay \u0111\u1ed5i l\u1edbn lao cho cu\u1ed9c \u0111\u1eddi c\u00e1c em nh\u1ecf c\u00f3 ho\u00e0n c\u1ea3nh kh\u00f3 kh\u0103n.",
      cta: "Chung Tay H\u00e0nh \u0110\u1ed9ng",
    },
    about: {
      title: "S\u1ee9 M\u1ec7nh & T\u1ea7m Nh\u00ecn",
      missionTitle: "S\u1ee9 m\u1ec7nh:",
      mission:
        "NhiLe Foundation \u0111\u01b0\u1ee3c th\u00e0nh l\u1eadp v\u1edbi m\u1ee5c ti\u00eau h\u1ed7 tr\u1ee3 v\u00e0 t\u1ea1o \u0111i\u1ec1u ki\u1ec7n ph\u00e1t tri\u1ec3n to\u00e0n di\u1ec7n cho tr\u1ebb em c\u00f3 ho\u00e0n c\u1ea3nh \u0111\u1eb7c bi\u1ec7t kh\u00f3 kh\u0103n t\u1ea1i Vi\u1ec7t Nam, t\u1eadp trung v\u00e0o gi\u00e1o d\u1ee5c, s\u1ee9c kh\u1ecfe v\u00e0 dinh d\u01b0\u1ee1ng.",
      visionTitle: "T\u1ea7m nh\u00ecn:",
      vision:
        "Tr\u1edf th\u00e0nh m\u1ed9t t\u1ed5 ch\u1ee9c v\u1eefng m\u1ea1nh, minh b\u1ea1ch, l\u00e0 c\u1ea7u n\u1ed1i tin c\u1eady gi\u1eefa c\u1ed9ng \u0111\u1ed3ng v\u00e0 nh\u1eefng m\u1ea3nh \u0111\u1eddi c\u1ea7n gi\u00fap \u0111\u1ee1, g\u00f3p ph\u1ea7n x\u00e2y d\u1ef1ng m\u1ed9t th\u1ebf h\u1ec7 t\u01b0\u01a1ng lai kh\u1ecfe m\u1ea1nh v\u00e0 tr\u00ed tu\u1ec7.",
    },
    stats: {
      raisedLabel: "VN\u0110 \u0110\u00c3 QUY\u00caN G\u00d3P",
      projectsCompleted: "D\u1ef1 \u00c1n Ho\u00e0n Th\u00e0nh",
      currentHeading: "D\u1ef1 \u00c1n Hi\u1ec7n T\u1ea1i",
      currentDescription:
        "Qu\u1ef9 h\u1ed7 tr\u1ee3 NSA Kid - Qu\u1ea3n l\u00fd b\u1edfi NhiLe Foundation & NSA",
      cta: "Xem chi ti\u1ebft & \u0111\u00f3ng g\u00f3p",
    },
    projects: {
      heading: "C\u00e1c D\u1ef1 \u00c1n N\u1ed5i B\u1eadt",
      subheading:
        "Nh\u1eefng h\u00e0nh tr\u00ecnh y\u00eau th\u01b0\u01a1ng m\u00e0 ch\u00fang ta \u0111\u00e3 c\u00f9ng nhau th\u1ef1c hi\u1ec7n.",
      items: [
        {
          title: "N\u1ee5 c\u01b0\u1eddi chi\u1ebfn binh nh\u00ed",
          description:
            "T\u1ea1i B\u1ec7nh vi\u1ec7n Ph\u1ee5 s\u1ea3n - Nhi \u0110\u00e0 N\u1eb5ng, c\u00e1c em nh\u1ecf \u0111i\u1ec1u tr\u1ecb ung th\u01b0 v\u1eabn gi\u1eef n\u1ee5 c\u01b0\u1eddi l\u1ea1c quan, ti\u1ebfp th\u00eam s\u1ee9c m\u1ea1nh v\u00e0 ni\u1ec1m tin cho nh\u1eefng ng\u01b0\u1eddi xung quanh.",
        },
        {
          title: "Trao qu\u00e0, nh\u1eadn y\u00eau th\u01b0\u01a1ng",
          description:
            "T\u1ea1i x\u00e3 A Ting (Qu\u1ea3ng Nam), nh\u1eefng m\u00f3n qu\u00e0 nh\u1ecf mang l\u1ea1i ni\u1ec1m vui l\u1edbn cho c\u00e1c em nh\u1ecf. Kho\u1ea3nh kh\u1eafc \u00e1nh m\u1eaft v\u00e0 n\u1ee5 c\u01b0\u1eddi h\u1ed3n nhi\u00ean \u0111\u00e3 tr\u1edf th\u00e0nh m\u00f3n qu\u00e0 qu\u00fd gi\u00e1 nh\u1ea5t m\u00e0 ch\u00fang t\u00f4i nh\u1eadn l\u1ea1i sau chuy\u1ebfn \u0111i.",
        },
        {
          title: "Mang n\u1ee5 c\u01b0\u1eddi \u0111\u1ebfn L\u00e0ng Hy V\u1ecdng",
          description:
            "NhiLe Foundation \u0111\u00e3 trao t\u1eb7ng qu\u00e0, s\u1eefa v\u00e0 d\u1ee5ng c\u1ee5 h\u1ecdc t\u1eadp cho c\u00e1c em nh\u1ecf t\u1ea1i L\u00e0ng Hy V\u1ecdng, \u0110\u00e0 N\u1eb5ng, kh\u00f4ng ch\u1ec9 mang \u0111\u1ebfn v\u1eadt ch\u1ea5t m\u00e0 c\u00f2n t\u1ea1o n\u00ean kho\u1ea3nh kh\u1eafc g\u1eafn k\u1ebft, s\u1ebb chia v\u00e0 ti\u1ebfng c\u01b0\u1eddi r\u1ea1ng r\u1ee1.",
        },
        {
          title: "T\u1ebft \u1ea5m no t\u1ea1i Ngh\u1ec7 An",
          description:
            "NhiLe Foundation kh\u1edfi \u0111\u1ed9ng ch\u01b0\u01a1ng tr\u00ecnh T\u1ebft \u1ea5m no 2025 t\u1ea1i Trung t\u00e2m Nh\u00e2n \u0111\u1ea1o \u0110\u1ee9c L\u01b0\u01a1ng, Ngh\u1ec7 An, mang \u0111\u1ebfn n\u1ee5 c\u01b0\u1eddi, t\u00ecnh y\u00eau th\u01b0\u01a1ng v\u00e0 nh\u1eefng c\u00e1i \u00f4m \u1ea5m \u00e1p cho c\u00e1c em nh\u1ecf.",
        },
        {
          title: "Trao y\u00eau th\u01b0\u01a1ng t\u1ea1i ch\u00f9a T\u1eeb H\u1ea1nh",
          description:
            "NhiLe Team \u0111\u00e3 g\u1eedi t\u1eb7ng 55 ph\u1ea7n qu\u00e0 cho c\u00e1c em nh\u1ecf, 55 ph\u1ea7n qu\u00e0 cho c\u00e1c c\u1ee5 gi\u00e0 v\u00e0 qu\u00e0 cho c\u00e1c s\u01b0 t\u1ea1i ch\u00f9a T\u1eeb H\u1ea1nh, TP.HCM, mang \u0111\u1ebfn ni\u1ec1m vui v\u00e0 nh\u1eafc nh\u1edf ch\u00fang ta v\u1ec1 gi\u00e1 tr\u1ecb c\u1ee7a s\u1ef1 s\u1ebb chia v\u00e0 l\u00f2ng nh\u00e2n \u00e1i.",
        },
        {
          title:
            "V\u1ebd l\u1ea1i tu\u1ed5i th\u01a1 b\u1eb1ng gam m\u00e0u y\u00eau th\u01b0\u01a1ng",
          description:
            "NhiLe Foundation mang \u0111\u1ebfn ni\u1ec1m vui cho c\u00e1c em nh\u1ecf b\u1ecb \u1ea3nh h\u01b0\u1edfng b\u1edfi ch\u1ea5t \u0111\u1ed9c da cam, v\u1edbi nh\u1eefng ti\u1ebfng c\u01b0\u1eddi, tr\u00f2 ch\u01a1i, m\u00f3n qu\u00e0 nh\u1ecf v\u00e0 kho\u1ea3nh kh\u1eafc \u1ea5m \u00e1p \u0111\u01b0\u1ee3c v\u1ebd n\u00ean b\u1eb1ng t\u00ecnh th\u01b0\u01a1ng.",
        },
        {
          title:
            "Gh\u00e9 th\u0103m ng\u00f4i tr\u01b0\u1eddng \u0111\u1eb7c bi\u1ec7t \u1edf \u0110\u00e0 N\u1eb5ng",
          description:
            "NhiLe Foundation \u0111\u1ebfn th\u0103m tr\u01b0\u1eddng d\u00e0nh cho c\u00e1c em nh\u1ecf b\u1ecb \u1ea3nh h\u01b0\u1edfng b\u1edfi ch\u1ea5t \u0111\u1ed9c da cam, mang theo qu\u00e0 t\u1eb7ng v\u00e0 tr\u00f2 ch\u01a1i, nh\u1eadn l\u1ea1i nh\u1eefng n\u1ee5 c\u01b0\u1eddi, \u00e1nh m\u1eaft h\u00e1o h\u1ee9c c\u00f9ng kho\u1ea3nh kh\u1eafc \u1ea5m \u00e1p kh\u00f3 qu\u00ean.",
        },
        {
          title: "T\u00ecm l\u1ea1i y\u00eau th\u01b0\u01a1ng qua s\u1ebb chia",
          description:
            "C\u1ed1ng hi\u1ebfn cho c\u1ed9ng \u0111\u1ed3ng v\u00e0 tham gia c\u00e1c ho\u1ea1t \u0111\u1ed9ng t\u1eeb thi\u1ec7n c\u00f9ng NhiLe Foundation kh\u00f4ng ch\u1ec9 mang \u0111\u1ebfn ni\u1ec1m vui cho nh\u1eefng m\u1ea3nh \u0111\u1eddi k\u00e9m may m\u1eafn m\u00e0 c\u00f2n gi\u00fap ch\u00fang ta t\u00ecm l\u1ea1i s\u1ef1 k\u1ebft n\u1ed1i v\u00e0 y\u00eau th\u01b0\u01a1ng trong cu\u1ed9c s\u1ed1ng.",
        },
        {
          title: "N\u1ee5 c\u01b0\u1eddi t\u1ea1i L\u00e0ng Hy V\u1ecdng",
          description:
            "T\u1ea1i L\u00e0ng Hy V\u1ecdng, NhiLe Foundation mang \u0111\u1ebfn nh\u1eefng ph\u1ea7n qu\u00e0 cho c\u00e1c em nh\u1ecf khi\u1ebfm th\u00ednh v\u00e0 khuy\u1ebft t\u1eadt, nh\u1eadn l\u1ea1i nh\u1eefng c\u00e1i \u00f4m, \u00e1nh m\u1eaft s\u00e1ng r\u1ee1 c\u00f9ng n\u1ee5 c\u01b0\u1eddi h\u1ed3n nhi\u00ean \u0111\u1ea7y \u1ea5m \u00e1p.",
        },
      ],
      cta: "Xem chi ti\u1ebft",
    },
    callToAction: {
      heading: "Chung Tay C\u00f9ng Ch\u00fang T\u00f4i",
      description:
        "M\u1ed7i h\u00e0nh \u0111\u1ed9ng c\u1ee7a b\u1ea1n \u0111\u1ec1u c\u00f3 s\u1ee9c m\u1ea1nh thay \u0111\u1ed5i m\u1ed9t cu\u1ed9c \u0111\u1eddi. H\u00e3y ch\u1ecdn c\u00e1ch b\u1ea1n mu\u1ed1n \u0111\u1ed3ng h\u00e0nh c\u00f9ng NhiLe Foundation.",
      donate: "Quy\u00ean G\u00f3p Ngay",
      volunteer: "Tr\u1edf Th\u00e0nh T\u00ecnh Nguy\u1ec7n Vi\u00ean",
    },
    transparency: {
      heading: "Minh B\u1ea1ch L\u00e0 N\u1ec1n T\u1ea3ng C\u1ee7a Ni\u1ec1m Tin",
      description:
        "Ch\u00fang t\u00f4i cam k\u1ebft c\u00f4ng khai m\u1ecdi ho\u1ea1t \u0111\u1ed9ng thu chi. To\u00e0n b\u1ed9 sao k\u00ea v\u00e0 b\u00e1o c\u00e1o t\u00e0i ch\u00ednh \u0111\u1ec1u \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt v\u00e0 x\u00e1c th\u1ef1c qua C\u1ed5ng th\u00f4ng tin \u0111i\u1ec7n t\u1eed nh\u00e2n \u0111\u1ea1o qu\u1ed1c gia.",
      badgeTitle: "Sao K\u00ea Minh B\u1ea1ch",
      badgeDescription:
        "M\u1ecdi kho\u1ea3n \u0111\u00f3ng g\u00f3p c\u1ee7a b\u1ea1n \u0111\u1ec1u \u0111\u01b0\u1ee3c ghi nh\u1eadn v\u00e0 c\u00f4ng khai tr\u00ean h\u1ec7 th\u1ed1ng c\u1ee7a C\u1ed5ng th\u00f4ng tin \u0111i\u1ec7n t\u1eed nh\u00e2n \u0111\u1ea1o qu\u1ed1c gia.",
      badgeCta: "Xem Sao K\u00ea tr\u00ean thiennguyen.app",
    },
    contact: {
      title: "Li\u00ean H\u1ec7",
      subtitle: "H\u00e3y k\u1ebft n\u1ed1i v\u1edbi ch\u00fang t\u00f4i \u0111\u1ec3 c\u00f9ng nhau lan t\u1ecfa y\u00eau th\u01b0\u01a1ng",
      email: "Email",
      address: "\u0110\u1ecba \u0111i\u1ec3m",
      mapTitle: "B\u1ea3n \u0111\u1ed3",
      getInTouch: "Li\u00ean h\u1ec7 v\u1edbi ch\u00fang t\u00f4i",
      sendMessage: "G\u1eedi tin nh\u1eafn",
      name: "H\u1ecd v\u00e0 t\u00ean",
      message: "Tin nh\u1eafn",
      send: "G\u1eedi",
    },
    footer: {
      tagline: "Tr\u00e1i tim c\u1ee7a h\u1ec7 sinh th\u00e1i NhiLe Holding.",
      copyright: "\u00a9 2024 NhiLe Foundation. Gi\u1eef m\u1ecdi quy\u1ec1n.",
    },
  },
  en: {
    languageToggle: {
      english: "English",
      vietnamese: "Tiếng Việt",
    },
    nav: {
      about: "About Us",
      projects: "Projects",
      transparency: "Transparency",
      holdings: "About NhiLe Holding",
      contact: "Contact",
    },
    hero: {
      title: "Spreading Love, Empowering Futures",
      subtitle:
        "Every contribution, no matter how small, helps create life-changing opportunities for children facing hardship.",
      cta: "Take Action Together",
    },
    about: {
      title: "Mission & Vision",
      missionTitle: "Mission:",
      mission:
        "NhiLe Foundation was established to support and create holistic development opportunities for children in vulnerable situations across Vietnam, focusing on education, healthcare, and nutrition.",
      visionTitle: "Vision:",
      vision:
        "To become a resilient, transparent organisation that connects supporters with families in need, helping nurture a healthy and well-educated future generation.",
    },
    stats: {
      raisedLabel: "VND Raised",
      projectsCompleted: "Projects Completed",
      currentHeading: "Current Campaign",
      currentDescription:
        "NSA Kid Support Fund \u2013 Managed by NhiLe Foundation & NSA",
      cta: "View details & donate",
    },
    projects: {
      heading: "Featured Initiatives",
      subheading: "Acts of kindness we have brought to life together.",
      items: [
        {
          title: "Smiles of Little Warriors",
          description:
            "At Da Nang Maternity and Pediatrics Hospital, young cancer patients keep their bright smiles, inspiring strength and hope in everyone around them.",
        },
        {
          title: "Gifts of Love Shared",
          description:
            "In A Ting commune (Quang Nam), small gifts sparked immense joy for local children. Their eyes and carefree laughter became the most precious reward of the entire journey.",
        },
        {
          title: "Hopeful Smiles in the Village",
          description:
            "NhiLe Foundation delivered gifts, milk, and school supplies to children at Hope Village in Da Nang, creating moments of togetherness, compassion, and shining smiles.",
        },
        {
          title: "A Warm Tet in Nghe An",
          description:
            "We launched the Warm Tet 2025 program at Duc Luong Humanitarian Center, bringing hugs, love, and festive warmth to children in Nghe An.",
        },
        {
          title: "Sharing Love at Tu Hanh Pagoda",
          description:
            "NhiLe Team prepared 55 care packages for children, 55 gifts for elders, and offerings for the nuns at Tu Hanh Pagoda in Ho Chi Minh City, celebrating generosity and compassion.",
        },
        {
          title: "Recoloring Childhood with Kindness",
          description:
            "We brought games, gifts, and heartfelt moments to children affected by Agent Orange, painting their days with love and cheerful laughter.",
        },
        {
          title: "Visiting a Special School in Da Nang",
          description:
            "NhiLe Foundation visited a school supporting children impacted by Agent Orange, bringing presents and playtime while cherishing every smile and gleam of excitement.",
        },
        {
          title: "Finding Love Through Giving",
          description:
            "By joining community work with NhiLe Foundation, we not only brighten the lives of those in need but also rediscover connection and kindness within ourselves.",
        },
        {
          title: "Smiles at Hope Village",
          description:
            "At Hope Village, we delivered gifts to children with hearing and physical difficulties, receiving warm embraces, sparkling eyes, and innocent, heartfelt smiles in return.",
        },
      ],
      cta: "Explore",
    },
    callToAction: {
      heading: "Join Hands With Us",
      description:
        "Every action you take can transform a life. Choose how you want to walk alongside NhiLe Foundation.",
      donate: "Donate Now",
      volunteer: "Become a Volunteer",
    },
    transparency: {
      heading: "Transparency Builds Trust",
      description:
        "We are committed to full financial transparency. All statements and reports are updated and verified via the National Humanitarian Information Portal.",
      badgeTitle: "Transparency Star Ledger",
      badgeDescription:
        "Every contribution you make is recorded and published on the National Humanitarian Information Portal.",
      badgeCta: "View ledger on thiennguyen.app",
    },
    contact: {
      title: "Contact",
      subtitle: "Connect with us to spread love together",
      email: "Email",
      address: "Address",
      mapTitle: "Map",
      getInTouch: "Get in Touch",
      sendMessage: "Send Message",
      name: "Name",
      message: "Message",
      send: "Send",
    },
    footer: {
      tagline: "The heart of the NhiLe Holding ecosystem.",
      copyright: "\u00a9 2024 NhiLe Foundation. All rights reserved.",
    },
  },
} as const;

type TranslationShape = typeof translations.vi | typeof translations.en;

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("vi");

  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (stored === "vi" || stored === "en") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (value: Language) => {
    setLanguageState(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      translations: translations[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return {
    language: context.language,
    setLanguage: context.setLanguage,
  };
};

export const useTranslations = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslations must be used within a LanguageProvider");
  }
  return context.translations;
};

export const LANGUAGE_OPTIONS: Array<{
  code: Language;
  shortLabel: string;
  fullLabel: string;
}> = [
  {
    code: "en",
    shortLabel: translations.en.languageToggle.english,
    fullLabel: "English",
  },
  {
    code: "vi",
    shortLabel: translations.vi.languageToggle.vietnamese,
    fullLabel: translations.vi.languageToggle.vietnamese,
  },
];

export const translationKeys = translations;
