"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import Services from "@/components/Services";
import Pagetitle from "./../../components/Pagetitle";

const backgroundImageUrl = "/images/services.jpg";

const ServicePage = () => {
  return (
    <>
      <Pagetitle title="Services" backgroundImageUrl={backgroundImageUrl} />
      <div className="section-padding">
        <Services />
      </div>
    </>
  );
};

export default ServicePage;
