"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import Services from "@/components/Services";
import Pagetitle from "./../../components/Pagetitle";

const backgroundImageUrl = "/images/services.jpg";

const ServicePage = () => {
  useEffect(() => {
    document.title = "Services ";
  }, []);
  return (
    <>
      <Head>
        <title>{document.title}</title>
        <meta name="description" content="HornBill - Elevating Healthcare Together" />
      </Head>
      <Pagetitle title="Services" backgroundImageUrl={backgroundImageUrl} />
      <div className="section-padding"><Services /></div>
    </>
  );
};

export default ServicePage;
