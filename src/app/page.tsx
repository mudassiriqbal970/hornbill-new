import React from "react";
import Banner from "@/components/Banner";
import Textwithimage from "@/components/Textwithimage";
import Team from "@/components/Team";
import Medicaldevices from "@/components/Medicaldevices";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Ourvalues from "@/components/Ourvalues";

export default function Home() {
  return (
    <main>
      <Banner />
      <Textwithimage />
      <Team />
      <Medicaldevices />
      <Services />
      <Ourvalues />
      <Contact />
    </main>
  );
}
