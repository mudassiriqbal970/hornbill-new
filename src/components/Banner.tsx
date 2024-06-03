import React from "react";
import Link from "next/link";

const Banner = () => {
  const backgroundImage = "/images/banner.jpg";

  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className="home-banner d-flex justify-content-center align-items-center"
      style={bannerStyle}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-white">
              Better <span className="text-primary">Healthcare</span> you can
              get
            </h1>
            <p className="text-white my-4 pb-2">
            With years of experience in the medical equipment industry, our team possesses the knowledge and expertise to provide tailored solutions that meet the specific needs of healthcare providers.            </p>
            <Link href="#" className="btn-secondary text-dark">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
