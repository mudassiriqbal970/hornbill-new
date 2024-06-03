"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import Textwithimage from "@/components/Textwithimage";
import Ourvision from "@/components/Ourvision";
import Pagetitle from "./../../components/Pagetitle";
import Medicaldevices from "@/components/Medicaldevices";
import Whychoose from "@/components/Whychoose";

const backgroundImageUrl = "/images/about-us.jpg";

const AboutUsPage = () => {
  
useEffect(() => {
  document.title = "About Us ";
}, []);
  return (
    <>
      <Head>
        <title>{document.title}</title>
        <meta name="description" content="HornBill - Elevating Healthcare Together" />
      </Head>
      <Pagetitle title="About Us" backgroundImageUrl={backgroundImageUrl} />
      <Textwithimage />
      <Ourvision />
      <Medicaldevices />
      <Whychoose />
    </>
  );
};

export default AboutUsPage;
