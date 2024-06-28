import Image from "next/image";
import Faq from "@/components/Faq";
import Waitlist from "@/components/Waitlist";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import Software from "@/components/Software";
import BestFit from "@/components/BestFit";
import Landing from "@/components/Landing";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
   <Landing />
    <Section />
    <BestFit />
    <Software />
    <Testimonial />
    <Pricing />
    <Faq />
    <Waitlist />
    <Footer />
    </>
  );
}
