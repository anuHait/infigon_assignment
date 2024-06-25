import Image from "next/image";
import Faq from "@/components/Faq";
import Waitlist from "@/components/Waitlist";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
export default function Home() {
  return (
    <>
    <Testimonial />
    <Pricing />
    <Faq />
    <Waitlist />
    </>
  );
}
