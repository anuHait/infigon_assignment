import Image from "next/image";
import Faq from "@/components/Faq";
import Waitlist from "@/components/Waitlist";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import Software from "@/components/Software";
import BestFit from "@/components/BestFit";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
    <Navbar />
    <BestFit />
    <Software />
    <Testimonial />
    <Pricing />
    <Faq />
    <Waitlist />
    </>
  );
}
