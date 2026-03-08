import {
  Building2,
  Code2,
  GraduationCap,
  HandHeart,
  Heart,
  Laptop,
  MapPin,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

import type {
  Feature,
  LandingBrand,
  LandingCta,
  LandingNavLink,
  Testimonial,
} from "@/components/landing/types";

const brand: LandingBrand = { name: "sayaLuqmanHakim", href: "/" };

const navLinks: LandingNavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#features" },
  { label: "Impact", href: "#impact" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const navbarCta: LandingCta = { label: "Get Involved", href: "#contact" };

const sections = {
  features: {
    title: "Four Pillars. One Mission.",
    description:
      "We operate across four interconnected areas — each addressing a real gap, and together forming a cohesive ecosystem of empowerment and service.",
  },
  testimonials: {
    title: "Voices From Our Community",
    description:
      "Real words from the youth we've trained, the volunteers we've mobilized, and the partners we've worked alongside.",
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Everything you need to know about sayaLuqmanHakim.",
  },
};

const hero = {
  badge: "Technology · Youth · Community · Sustenance",
  headline: "Building Impact. Empowering Communities. Delivering Change.",
  subheadline:
    "sayaLuqmanHakim is a multi-disciplinary individual driving real-world impact — from building digital products and training future leaders, to mobilizing volunteers and delivering food to those who need it most.",
  primaryCta: { label: "Get Involved", href: "#contact" } satisfies LandingCta,
  secondaryCta: { label: "Explore What We Do", href: "#features" } satisfies LandingCta,
};

const about = {
  title: "Who We Are",
  description:
    "sayaLuqmanHakim is a purpose-driven individual who believes meaningful change happens at the intersection of technology, people, and community. Working across four complementary pillars — each designed to address a real gap, and together forming a cohesive ecosystem of empowerment and service.",
  accordion: [
    {
      id: "mission",
      label: "Our Mission",
      content:
        "To build, train, connect, and sustain — creating lasting impact for individuals, communities, and organizations through innovation and compassion.",
    },
    {
      id: "vision",
      label: "Our Vision",
      content:
        "A Malaysia where every youth has the skills to lead, every community has the infrastructure to thrive, and no one goes without their basic needs.",
    },
    {
      id: "why",
      label: "Why We Exist",
      content:
        "Too many initiatives operate in silos. We bridge the gap — combining digital capability with grassroots community work, so that the people we serve don't just get a solution for today, but the foundation to grow tomorrow.",
    },
    {
      id: "how",
      label: "How We're Different",
      content:
        "We don't specialize in one area — we integrate across four. A youth we train may use the applications we build. A volunteer we mobilize may help distribute the food we supply. Everything we do reinforces everything else. That's the sayaLuqmanHakim difference.",
    },
  ],
  highlights: [
    "Purpose-driven work across technology, training, and community",
    "Integrated ecosystem — each pillar reinforces the others",
    "Nationwide reach across all 13 states in Malaysia",
    "Transparent, mission-first partnerships with NGOs and organizations",
    "Mentorship-led youth programs with real career outcomes",
    "Community-embedded food distribution with dignity at the core",
  ],
};

const features: Feature[] = [
  {
    title: "Web & Mobile Application Development",
    description:
      "We design and develop responsive web and mobile applications tailored to the needs of users and organizations. From concept to deployment, we build products that are clean, scalable, and built to solve real problems.",
    icon: Laptop,
  },
  {
    title: "Youth Training & Development",
    description:
      "We run structured training programs, mentorship initiatives, and expert-led sessions designed to equip youth with practical skills, professional confidence, and the leadership mindset to make an impact.",
    icon: GraduationCap,
  },
  {
    title: "Volunteer Community Building",
    description:
      "We create and manage volunteer networks that are structured, motivated, and mission-aligned. We help organizations build the human infrastructure they need to scale their impact — for events, outreach, or long-term programs.",
    icon: HandHeart,
  },
  {
    title: "Food Supply & Distribution",
    description:
      "We source and distribute dry food essentials to underserved communities across Malaysia. Our distribution network ensures reliable, dignified access to basic food supplies — reaching those who need it most, where they need it most.",
    icon: Truck,
  },
];

const stats = [
  { value: "500+", label: "Youth Trained & Mentored", description: "Through programs, mentorship, and expert talks", icon: GraduationCap },
  { value: "1,200+", label: "Volunteers Mobilized", description: "Structured networks driving real community impact", icon: Users },
  { value: "50+", label: "Applications Deployed", description: "Web and mobile solutions for users and organizations", icon: Code2 },
  { value: "10,000+", label: "Individuals Reached", description: "Through food distribution initiatives nationwide", icon: Heart },
  { value: "13", label: "States Covered", description: "Serving communities across all of Malaysia", icon: MapPin },
  { value: "30+", label: "Partner Organizations", description: "NGOs, agencies, and community collaborators", icon: Building2 },
];

const partners = {
  label: "Trusted by organizations across Malaysia",
  names: [
    "Jabatan Belia & Sukan Negara",
    "Bank Makanan Malaysia",
    "MERCY Malaysia",
    "Majlis Belia Malaysia",
    "Agensi Inovasi Malaysia",
    "Universiti Malaya",
    "Pertubuhan IKRAM Malaysia",
    "Yayasan Pembangunan Belia",
  ],
};

const story = {
  title: "Our Story",
  description:
    "This didn't start as a brand — it started as a belief. A belief that one individual, with the right determination, can create meaningful change across multiple dimensions of community life.",
  milestones: [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "Started with a simple mission: build digital tools for communities that couldn't afford them. The first web project was delivered pro bono to a local NGO.",
    },
    {
      year: "2021",
      title: "Youth Training Launched",
      description:
        "Formalized the first youth development cohort — 30 participants, one mentor, a curriculum built from real-world experience, not textbooks.",
    },
    {
      year: "2022",
      title: "Volunteer Network Formed",
      description:
        "Grew the volunteer network to over 300 active members across three states. Became a trusted mobilization partner for community events and relief programs.",
    },
    {
      year: "2023",
      title: "Food Distribution Begins",
      description:
        "Responded to community need by launching a dry food distribution program. First run reached 500 families across two states.",
    },
    {
      year: "2024",
      title: "Going Nationwide",
      description:
        "Expanded operations to all 13 states. Reached 10,000+ individuals through food distribution and trained over 500 youth across multiple cohorts.",
    },
    {
      year: "Today",
      title: "One Brand. Four Forces.",
      description:
        "sayaLuqmanHakim now operates as an integrated ecosystem — where every pillar supports the others, and every action compounds toward lasting impact.",
    },
    {
      year: "2026 →",
      title: "What's Next",
      description:
        "We're creating an innovative platform that streamlines food supply and delivery, empowering volunteers and organizations to feed communities across Malaysia more effectively than ever.",
    },
  ],
};

const partnerships = {
  title: "Partner With Us",
  description:
    "Whether you want to co-fund a program, contribute expertise, or build long-term impact together — there's a partnership model that fits.",
  tiers: [
    {
      name: "Community Partner",
      recommended: false,
      description:
        "For organizations that want to contribute in-kind support, expertise, or resources to specific community programs.",
      contributions: [
        "In-kind support for food distribution drives",
        "Venue or logistics contribution",
        "Volunteer mobilization support",
        "Co-branding on community events",
        "Certificate of appreciation",
      ],
      cta: "Become a Community Partner",
      href: "#contact",
    },
    {
      name: "Impact Partner",
      recommended: true,
      description:
        "For organizations ready to co-fund specific programs and be recognized as a driving force behind our community initiatives.",
      contributions: [
        "Everything in Community Partner",
        "Co-fund a youth training cohort",
        "Sponsor food distribution for a region",
        "Named recognition in program materials",
        "Quarterly impact reports",
        "Joint press & social media visibility",
      ],
      cta: "Become an Impact Partner",
      href: "#contact",
    },
    {
      name: "Strategic Partner",
      recommended: false,
      description:
        "For partners who want deep, long-term integration across multiple pillars of the sayaLuqmanHakim ecosystem.",
      contributions: [
        "Everything in Impact Partner",
        "Access to youth talent pipeline",
        "Custom application development collaboration",
        "Dedicated volunteer network for your programs",
        "Strategic planning alignment sessions",
        "Annual impact summit participation",
      ],
      cta: "Explore Strategic Partnership",
      href: "#contact",
    },
  ],
};

const updates = {
  title: "Impact Updates",
  description: "Stories, milestones, and moments from across the sayaLuqmanHakim ecosystem.",
  posts: [
    {
      category: "Food Distribution",
      title: "Reaching 10,000 Families: Our Nationwide Distribution Milestone",
      excerpt:
        "What started as a local initiative in two states has grown into a nationwide operation. Here's how we got there — and what's next.",
      date: "February 2026",
    },
    {
      category: "Youth Training",
      title: "Cohort 5 Graduates: 80 Youth Leaders Ready to Make Their Mark",
      excerpt:
        "Our fifth training cohort completed their program with certifications, mentor connections, and the confidence to lead. Meet this year's graduates.",
      date: "January 2026",
    },
    {
      category: "Community",
      title: "500+ Volunteers, One Network: How We Build People-Powered Impact",
      excerpt:
        "Behind every program we run is a network of dedicated volunteers. This is the story of how we mobilize, support, and grow that network.",
      date: "December 2025",
    },
  ],
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Before joining sayaLuqmanHakim's training program, I had no idea how to present myself professionally or lead a team. The mentorship I received didn't just teach me skills — it changed how I see my own potential. I walked out ready to lead.",
    name: "Amirah Zulkifli",
    role: "Program Participant",
  },
  {
    quote:
      "I've volunteered with many organizations, but this one actually treats volunteers like they matter. The coordination is excellent, the mission is clear, and you can see the real impact of your time. I keep coming back because it genuinely feels worth it.",
    name: "Hafiz Ramlan",
    role: "Community Volunteer",
  },
  {
    quote:
      "We brought sayaLuqmanHakim in to help us digitize our operations and train our youth cohort. What we got was far beyond a vendor — they became a real partner. The team understood our mission and delivered solutions that actually fit our community's context.",
    name: "Puan Norashikin Md. Yusof",
    role: "NGO Program Manager",
  },
];

const faq = [
  {
    question: "What kind of organizations do you work with?",
    answer:
      "We work with NGOs, government agencies, startups, educational institutions, and community-based organizations. If your mission involves people and impact, we're open to a conversation.",
  },
  {
    question: "Do you offer training programs for individuals or only for organizations?",
    answer:
      "Both. We run open youth programs that individuals can join, as well as tailored training engagements for organizations looking to develop their teams or beneficiaries.",
  },
  {
    question: "How do I request food distribution support for my community?",
    answer:
      "You can reach us through the contact form on this page or via email. We'll assess the need, verify the location, and coordinate delivery. We operate nationwide across Malaysia.",
  },
  {
    question: "Can I volunteer with sayaLuqmanHakim even if I have no prior experience?",
    answer:
      "Absolutely. We welcome volunteers at all experience levels. What matters most is your commitment and willingness to contribute. We provide orientation and support to help you hit the ground running.",
  },
  {
    question: "I have a project idea — can sayaLuqmanHakim help build it?",
    answer:
      "Yes. Our development team takes on web and mobile projects from both organizations and individuals. Reach out with your idea and we'll schedule a discovery call to understand your needs.",
  },
  {
    question: "Are your community programs free to attend?",
    answer:
      "Many of our youth training and community programs are offered at no cost or low cost, especially those funded through partnerships and sponsorships. Contact us for details on specific initiatives.",
  },
  {
    question: "How do I know my contribution is making a real difference?",
    answer:
      "We provide transparent quarterly impact reports to all partners and sponsors, detailing exactly how resources were used, who was reached, and what changed. Accountability is core to how we operate.",
  },
  {
    question: "Is sayaLuqmanHakim a registered organization?",
    answer:
      "Yes. We operate as a registered entity in Malaysia. For formal verification, collaboration agreements, or due diligence inquiries, please reach out through our contact form.",
  },
];

const cta = {
  headline: "Ready to Be Part of Something Bigger?",
  subheadline:
    "Whether you're a youth looking to grow, an organization seeking impact-driven solutions, or a partner ready to collaborate — there's a place for you in the sayaLuqmanHakim ecosystem. Let's build something meaningful, together.",
  primaryCta: { label: "Join Us", href: "#contact" } satisfies LandingCta,
  secondaryCta: { label: "Collaborate With Us", href: "#contact" } satisfies LandingCta,
};

const contact = {
  title: "Let's Connect",
  description:
    "Have a question, a project, or just want to learn more about what we do? We'd love to hear from you. Whether you're looking to partner, volunteer, attend a program, or request community support — reach out and someone from our team will get back to you within 48 hours.",
  email: "sayaluqmanhakim@gmail.com",
  phone: "+60 19-470 4808",
  location: "Kuala Lumpur, Malaysia (Serving nationwide)",
  formNote:
    "We typically respond within 1–2 business days. For urgent food distribution requests, please mention it in your subject line.",
  subjectOptions: [
    "Application Development",
    "Youth Training",
    "Volunteering",
    "Food Distribution",
    "Partnership",
    "Other",
  ],
};

const footer = {
  description:
    "Building impact through technology, youth empowerment, volunteer communities, and food distribution across Malaysia.",
  note: "© " + new Date().getFullYear() + " sayaLuqmanHakim. All rights reserved.",
  columns: [
    {
      heading: "Programs",
      links: [
        { label: "Web & Mobile Development", href: "#features" },
        { label: "Youth Training", href: "#features" },
        { label: "Volunteer Network", href: "#features" },
        { label: "Food Distribution", href: "#features" },
      ],
    },
    {
      heading: "Get Involved",
      links: [
        { label: "Join as Volunteer", href: "#contact" },
        { label: "Partner With Us", href: "#partnerships" },
        { label: "Sponsor an Initiative", href: "#partnerships" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Our Story", href: "#story" },
        { label: "Impact Stats", href: "#impact" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ] satisfies LandingNavLink[],
  trust: {
    label: "Community-first",
    description: "Building impact through technology, training, and service.",
    icon: ShieldCheck,
  },
};

export const landingContent = {
  brand,
  navLinks,
  navbarCta,
  sections,
  hero,
  about,
  features,
  stats,
  partners,
  story,
  partnerships,
  updates,
  testimonials,
  faq,
  cta,
  contact,
  footer,
};
