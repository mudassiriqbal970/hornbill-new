"use client";
import React, { useState } from "react";
import { FaHeartbeat } from "react-icons/fa";
import Image from "next/image";

const Team = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Mudassar iqbal",
      role: "CEO",
      image: "/images/team1.jpg",
    },
    {
      id: 2,
      name: "Engr. Mudassar Iqbal",
      role: "CTO",
      image: "/images/team2.jpg",
    },
    {
      id: 3,
      name: "Mr. Ali Raza",
      role: "CFO",
      image: "/images/team3.jpg",
    },
    // Add more members as needed
  ]);

  const backgroundImage = "/images/team-bg.jpg";

  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "80px 0px",
    boxShadow: "inset 0 0 0 932px rgb(30 141 243 / 45%)"
  };
  let iconStyles = {
    color: "var(--primary-color)",
    backgroundColor: "var(--secondary-color)",
  };

  return (
    <section>
      <div className="container">
        <div className="row bg-primary align-items-center">
          <div
            className="col-lg-4 d-flex justify-content-center align-items-center "
            style={bannerStyle}
          >
            <div className="top-icon-box text-center">
              <div className="icon-top mb-2">
                <FaHeartbeat className="heart-icon" style={iconStyles} />
              </div>
              <div className="icon-top-text">
                <h2 className="text-white">With a Touch of Kindness</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-8 py-lg-0 py-5">
            <div className="row">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="col-md-3 team-member-box text-center mb-md-0 mb-4"
                >
                  <div className="">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="member-image"
                    />
                  </div>
                  <h5 className="member-name text-white mb-0 my-2">{member.name}</h5>
                  <h6 className="member-role text-secondary pt-1">{member.role}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
