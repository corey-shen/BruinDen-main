import React from "react";
import Image from "next/image";
import { FaUserAlt, FaRocket } from 'react-icons/fa'; //for aesthetics 

const About = () => {
  return (
    <div style={{ padding: "100px", color: "#2F4858" }}>
      <h1 style={{ fontSize: "50px", marginBottom: "20px", display: "flex", alignItems: "center", fontWeight:"bold"}}>
        <FaRocket/>  Our Mission
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
          <h3 style={{ fontSize: "2vw", color: "#FFFFFF", marginBottom: "20px", fontWeight:"bold"}}>
            The Problem</h3>
          <hr style={{ border: "3px solid #FFFFFF", marginBottom: "20px" }} />
          <p style={{ fontSize: "1.2vw", color: "#FFFFFF" }}>
            Many students struggle to find college-budget-friendly apartments. The process requires figuring out logistics with roommates, subleasing, and scouring the web for listings.
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
            Our Solution</h3>
          <hr style={{ border: "3px solid #FFFFFF", marginBottom: "20px" }} />
          <p style={{ fontSize: "1.2vw", color: "#FFFFFF" }}>
            BruinDen makes the process of moving off-campus more accessible and organized by developing an app specifically meant to serve Bruins.
          </p>
        </div>
      </div>

      <p style={{ fontSize: "1.2vw", color: "#2F44858", marginTop: "30px", marginBottom: "20px", textAlign: "center"  }}>
      When trying to move off-campus many students struggle to find college-budget friendly apartments. The process is incredibly taxing and requires figuring out logistics with roommates, subleasing, and scouring the web for listing.
      Many resort to using platforms like Reddit, Facebook, or Snapchat to find peers interested in taking over a lease or subleasing for the summer, but these platforms they lack sufficient reach, have potential security risks, and are often not an effective solution.
      </p>

      <p style={{ fontSize: "1.2vw", color: "#2F44858", marginTop: "30px", marginBottom: "20px", textAlign: "center"  }}>
      With BruinDen our goal is to make the process of moving off-campus more accessible and organized, by developing an app specifically meant to serve Bruins. BruinDen will allow renters to find places that match their needs, communicate with peers, and facilitate apartment transfers for the summer or post-graduation. 
      The platform features user authentication via UCLA Login, dynamic apartment listings with an interactive map using Google Maps API, and advanced filtering options for price, size, and other preferences. Additional features include personalized user profiles, post-saving, recommendations, and a rating system to foster trust and ease of use.
      </p>

      <h1 style={{ fontSize: "50px", marginBottom: "20px", display: "flex", alignItems: "center", fontWeight:"bold"}}>
        <FaUserAlt /> Meet the Team
      </h1>
      <hr style={{ border: "3px solid #F6AE2D", marginBottom: "20px" }} />
      <p style={{ fontSize: "1.2vw", color: "#2F44858" }}>
        We are a group of UCLA students working to make the lives of our peers a little easier!
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
            {/*ADD HEADSHOT IMAGE FOR EACH TEAM MEMBER*/}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
