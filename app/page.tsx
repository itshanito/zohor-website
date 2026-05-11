import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Approach from "@/components/Approach";
import Results from "@/components/Results";
import Process from "@/components/Process";
import Coverage from "@/components/Coverage";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#FAFAF7]">
      <Nav />
      <Hero />
      <Problem />
      <Approach />
      <Results />
      <Process />
      <Coverage />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
