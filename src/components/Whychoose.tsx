import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import Image from "next/image";

const Whychoose = () => {
  const Whychoose = [
    {
      id: 1,
      image: "/images/whychoose11.jpg",
      title: "Expertise and Experience",
      description:
        "With years of experience in the medical equipment industry, our team possesses the knowledge and expertise to provide tailored solutions that meet the specific needs of healthcare providers.",
    },
    {
      id: 2,
      image: "/images/whychoose2.jpg",
      title: "Customer-Centric Approach",
      description:
        "Our customers are at the heart of everything we do. We strive to build long-term relationships based on trust, transparency, and mutual respect. Our dedicated customer support team is always ready to assist with any inquiries or service needs.",
    },
    {
      id: 3,
      image: "/images/whychoose3.jpg",
      title: "Quality Assurance",
      description:
        "We adhere to strict quality standards and ensure that all our products meet international certifications and regulatory requirements. Our rigorous quality control processes guarantee that you receive only the best products.",
    },
    {
      id: 3,
      image: "/images/whychoose4.jpg",
      title: "Comprehensive Support",
      description:
        "Beyond providing high-quality equipment, we offer comprehensive after-sales support, including installation, maintenance, and training services to ensure that your equipment operates efficiently and effectively.",
    },
  ];
  let iconStyles = {
    color: "#fff",
    backgroundColor: "var(--primary-color)",
  };
  return (
    <section className="mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-9 text-center mx-auto mb-4">
            <div className="d-flex justify-content-center"></div>
            <h2 className="text-primary my-2">
              Why Choose <span className="text-secondary">HornBill? </span>
            </h2>
            <p>
              Expertise and Experience: With years of experience in the medical
              equipment industry, our team possesses the knowledge and expertise
              to provide tailored solutions that meet the specific needs of
              healthcare providers.
            </p>
          </div>
          <div className="col-12">
            <div className="row">
              {Whychoose.map((device) => (
                <div key={device.id} className="col-md-3 px-md-2 mb-md-0 mb-4 ">
                  <div className="text-center medical-device-box h-100">
                    <Image
                      src={device.image}
                      alt={device.title}
                      width="0"
                      height="250"
                      sizes="100vw"
                      className="w-100 object-fit-cover "
                    />

                    <div className="px-2 py-2">
                      <h4 className="why-choose-title mt-3 mb-2 text-primary">
                        {device.title}
                      </h4>
                      <p className="medical-device-description pb-2">
                        {device.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
