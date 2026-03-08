import type { Metadata } from "next"
import { LandingPageContent } from "@/components/landing/landing-page-content"

export const metadata: Metadata = {
  title: "sayaLuqmanHakim – Building Impact. Empowering Communities. Delivering Change.",
  description: "sayaLuqmanHakim drives real-world impact through web & mobile development, youth training, volunteer community building, and food distribution across Malaysia.",
  keywords: ["sayaLuqmanHakim", "youth training", "volunteer community", "food distribution Malaysia", "web development", "impact brand"],
  openGraph: {
    title: "sayaLuqmanHakim – Building Impact. Empowering Communities. Delivering Change.",
    description: "sayaLuqmanHakim drives real-world impact through web & mobile development, youth training, volunteer community building, and food distribution across Malaysia.",
  },
  twitter: {
    title: "sayaLuqmanHakim – Building Impact. Empowering Communities. Delivering Change.",
    description: "sayaLuqmanHakim drives real-world impact through web & mobile development, youth training, volunteer community building, and food distribution across Malaysia.",
  },
}

export default function HomePage() {
  return <LandingPageContent />
}
