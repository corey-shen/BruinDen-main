import React from "react";
import Image from "next/image";
import { FaUserAlt, FaRocket } from 'react-icons/fa'; 

const About = () => {
  return (
    <div style={{ padding: "100px", color: "#2F4858" }}>
      <h1 style={{ fontSize: "50px", marginBottom: "20px", display: "flex", alignItems: "center", fontWeight:"bold"}}>
        <FaRocket/> Our Mission
      </h1>
      <hr style={{ border: "3px solid #F6AE2D", marginBottom: "20px" }} />

      {/* Problem and Solution Section */}
      <div style={{ display: "flex", gap: "2vw", marginBottom: "20px" }}>
        <div style={{ 
          flex: "1", 
          backgroundColor: "#F6AE2D", 
          padding: "2vw", 
          borderRadius: "1vw", 
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)" 
        }}>
          <h3 style={{ fontSize: "2vw", color: "#FFFFFF", marginBottom: "20px", fontWeight:"bold" }}>
            The Problem
          </h3>
          <hr style={{ border: "3px solid #FFFFFF", marginBottom: "20px" }} />
          <p style={{ fontSize: "1.2vw", color: "#FFFFFF" }}>
            Many students struggle to find college-budget-friendly apartments. The process requires complex logistics with roommates, subleasing, and extensive web searching.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
          <div style={{
            width: "0", 
            height: "0", 
            borderTop: "15px solid transparent",
            borderBottom: "15px solid transparent",
            borderLeft: "30px solid #F26419",
            position: "absolute", 
            left: "50%",
            top: "50%", 
            transform: "translate(-50%, -50%)" 
          }}></div>
        </div>
        <div style={{ 
          flex: "1", 
          backgroundColor: "#F6AE2D", 
          padding: "2vw", 
          borderRadius: "1vw", 
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)" 
        }}>
          <h3 style={{ fontSize: "2vw", color: "#FFFFFF", marginBottom: "20px", fontWeight:"bold" }}>
            Our Solution
          </h3>
          <hr style={{ border: "3px solid #FFFFFF", marginBottom: "20px" }} />
          <p style={{ fontSize: "1.2vw", color: "#FFFFFF" }}>
            BruinDen simplifies off-campus housing by offering a dedicated app for Bruins.
          </p>
        </div>
      </div>

      <p style={{ fontSize: "1.2vw", color: "#2F44858", marginTop: "30px", marginBottom: "20px", textAlign: "center" }}>
        Many students struggle to find affordable housing. They often use platforms like Reddit, Facebook, or Snapchat, which lack sufficient reach, have potential security risks, and are often ineffective.
      </p>

      <p style={{ fontSize: "1.2vw", color: "#2F44858", marginTop: "30px", marginBottom: "20px", textAlign: "center" }}>
        BruinDen aims to make the off-campus housing process easier. Our app features UCLA Login, interactive maps, advanced filtering options, personalized profiles, post-saving, recommendations, and a rating system.
      </p>

      <h1 style={{ fontSize: "50px", marginBottom: "20px", display: "flex", alignItems: "center", fontWeight:"bold" }}>
        <FaUserAlt /> Meet the Team
      </h1>
      <hr style={{ border: "3px solid #F6AE2D", marginBottom: "20px" }} />
      <p style={{ fontSize: "1.2vw", color: "#2F44858" }}>
        We are UCLA students dedicated to making housing easier for our peers!
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", gap: "20px" }}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div 
            key={index} 
            style={{ 
              flex: "1",
              height: "20vw", 
              backgroundColor: "#86BBD8",
              borderRadius: "1vw"
            }}
          >
            {/* ADD HEADSHOT IMAGE FOR EACH TEAM MEMBER */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
