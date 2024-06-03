import React from "react";
import Image from "next/image";
import Link from "next/link";

const Textwithimage = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6  pe-md-5 pb-5">
            <h6 className="border-heading  left-border text-primary position-relative px-3 fw-600 mb-2">
              About Us
            </h6>
            <h2 className="text-primary">
              Welcome to Our <span className="text-secondary">HornBill</span>
            </h2>
            <p className="mt-4 mb-5">
              At HornBill, we are dedicated to enhancing healthcare through the
              provision of top-quality medical equipment. As an authorized
              distributor in the Pakistan market, we take pride in being a
              trusted partner for healthcare providers, ensuring that they have
              access to the best tools to deliver exceptional care.
            </p>
            <div className="div">
              <Link href="#" className="btn-secondary text- ">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <Image
              src="/images/rightpic.png"
              width="0"
              height="0"
              sizes="100vw"
              className="w-100 h-100"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Textwithimage;
