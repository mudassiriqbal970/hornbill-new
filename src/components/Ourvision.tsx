import React from "react";
import Image from "next/image";
import Link from "next/link";

const Ourvision = () => {
  return (
    <section className="">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <Image
              src="/images/ourvision.jpg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-100 h-100"
              alt=""
            />
          </div>
          <div className="col-md-6  px-md-5 pb-5">
            <h2 className="text-primary">
            Our  <span className="text-secondary">Vision</span>
            </h2>
            <p className="mt-4 mb-5">
            Our vision is to be the leading provider of medical equipment in Pakistan, renowned for our commitment to quality, innovation, and customer satisfaction. We aim to empower healthcare providers with the tools they need to improve patient outcomes and advance the standards of healthcare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourvision;
