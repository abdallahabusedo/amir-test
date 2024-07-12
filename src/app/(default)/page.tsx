"use client";

import Features from "@/src/components/features";
import Hero from "@/src/components/hero";
import Newsletter from "@/src/components/newsletter";
import Testimonials from "@/src/components/testimonials";
import Zigzag from "@/src/components/zigzag";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  );
}
