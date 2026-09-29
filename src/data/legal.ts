// Placeholder legal copy — have it reviewed before going live

export type LegalSection = { heading: string; paragraphs: string[] };

export type LegalDocument = {
  title: string;
  description: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
};

const updatedAt = "2026-09-29";
const contactEmail = "support@bytespace.com";

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  description:
    "How ByteSpace collects, uses and protects your personal information.",
  updatedAt,
  intro:
    "Your privacy matters to us. This policy explains what information ByteSpace collects when you use our platform, how we use it, and the choices you have.",
  sections: [
    {
      heading: "Information we collect",
      paragraphs: [
        "Account details you provide, such as your name, email address and password, and profile information if you become a creator.",
        "Usage information, such as the courses you view, lessons you complete and the device and browser you use to access ByteSpace.",
      ],
    },
    {
      heading: "How we use your information",
      paragraphs: [
        "To create and manage your account, deliver the courses you enroll in, track your learning progress and process payments.",
        "To improve our platform, personalise course recommendations and send you updates you've agreed to receive. You can unsubscribe at any time.",
      ],
    },
    {
      heading: "Sharing your information",
      paragraphs: [
        "We never sell your personal information. We share it only with service providers who help us run ByteSpace, such as payment and hosting partners, and when required by law.",
        "Creators can see basic enrollment information, like your name, for the courses you take with them.",
      ],
    },
    {
      heading: "Data security and retention",
      paragraphs: [
        "We use industry-standard safeguards to protect your data. We keep your information for as long as your account is active or as needed to provide our services.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        `You can access, update or delete your personal information from your account settings, or by contacting us at ${contactEmail}.`,
      ],
    },
  ],
};

export const termsOfService: LegalDocument = {
  title: "Terms of Service",
  description:
    "The terms that apply when you use ByteSpace as a learner or creator.",
  updatedAt,
  intro:
    "By creating an account or using ByteSpace, you agree to these terms. Please read them carefully.",
  sections: [
    {
      heading: "Your account",
      paragraphs: [
        "You're responsible for keeping your login details secure and for all activity under your account. You must provide accurate information when signing up.",
      ],
    },
    {
      heading: "Courses and access",
      paragraphs: [
        "When you enroll in a course, you receive a personal, non-transferable license to access it for the period stated at purchase, such as lifetime access.",
        "Course content may not be copied, shared or resold without the creator's permission.",
      ],
    },
    {
      heading: "Payments and refunds",
      paragraphs: [
        "Prices are shown at checkout. If a course doesn't meet your expectations, you can request a refund within 14 days of purchase, provided you haven't completed most of the course.",
      ],
    },
    {
      heading: "Creators",
      paragraphs: [
        "Creators keep ownership of the content they publish and are responsible for ensuring it is original, accurate and does not infringe anyone else's rights.",
      ],
    },
    {
      heading: "Acceptable use",
      paragraphs: [
        "Don't misuse ByteSpace: no harassment, spam, illegal content or attempts to disrupt the platform. We may suspend accounts that break these rules.",
      ],
    },
    {
      heading: "Changes to these terms",
      paragraphs: [
        `We may update these terms from time to time. We'll let you know about significant changes. Questions? Contact us at ${contactEmail}.`,
      ],
    },
  ],
};

export const cookiePolicy: LegalDocument = {
  title: "Cookies Settings",
  description:
    "Learn how ByteSpace uses cookies and manage your cookie preferences.",
  updatedAt,
  intro:
    "Cookies are small files stored on your device that help ByteSpace work properly and improve your experience. You can choose which optional cookies to allow below.",
  sections: [
    {
      heading: "How we use cookies",
      paragraphs: [
        "Essential cookies keep you signed in and remember your settings. Analytics cookies help us understand how the platform is used, and marketing cookies help us show you relevant content.",
      ],
    },
    {
      heading: "Managing cookies",
      paragraphs: [
        "You can change your preferences at any time on this page. You can also block or delete cookies in your browser settings, though some parts of ByteSpace may not work as expected.",
      ],
    },
  ],
};
