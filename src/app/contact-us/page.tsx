"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import Contact from "@/components/Contact";
import Pagetitle from "./../../components/Pagetitle";
const backgroundImageUrl = "/images/contact-us.jpg";

const ContactUs = () => {
  return (
    <>
      <Pagetitle
        title="Contact Us"
        subheading="Thank you for considering HornBill for your medical equipment needs. We look forward to the opportunity to serve you and contribute to the success of your healthcare facility. For more information about our products and services, please feel free to contact us."
        backgroundImageUrl={backgroundImageUrl}
      />
      <Contact />
    </>
  );
};

export default ContactUs;
