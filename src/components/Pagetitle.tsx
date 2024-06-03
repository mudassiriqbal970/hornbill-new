import React from "react";

const PageTitle = ({
  title = "Default Title",
  subheading = "",
  backgroundImageUrl = "",
}) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  return (
    <section
      className="page-title-section d-flex justify-content-center align-items-center text-center"
      style={backgroundImageStyle}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h1 className="text-white">{title}</h1>
            <h6 className="text-white">{subheading}</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
