import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Steps from "@/components/Steps";
import Subsciption from "@/components/Subsciption";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Steps />
      <Subsciption />
      <Portfolio />
    </div>
  );
}
