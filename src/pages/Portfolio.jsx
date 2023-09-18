import React from "react";
import Projects from "../components/Projects";
import BaseballPic from "../assets/BaseballPic.png";
import EmployeePic from "../assets/EmployeePic.png";
import SocialPic from "../assets/SocialPic.png";
import WeatherPic from "../assets/WeatherPic.png";
import PopquizPic from "../assets/PopquizPic.png";
import KeygenPic from "../assets/KeygenPic.png";
import EcommercePic from "../assets/EcommercePic.png";
import TechblogPic from "../assets/TechblogPic.png";


function Portfolio() {
  const projectsData = [
    {
      title: "Baseball Stats and Odds",
      description: "Check current stats and odds for the ongoing MLB season.",
      imageUrl: BaseballPic,
      demoUrl: "https://jako0320.github.io/baseball_statsandodds/",
      githubUrl: "https://github.com/Jako0320/baseball_statsandodds",
    },
    {
      title: "SQL Employee Tracker",
      description: "Employee database manager using SQL",
      imageUrl: EmployeePic,
      demoUrl:
        "https://drive.google.com/file/d/1FQMc2dfAprR5j8nZu7sleuR0qBJF_bA_/view",
      githubUrl: "https://github.com/Jako0320/SQL_Employee_Tracker_JS",
    },
    {
      title: "Social Media API",
      description: "Social media database that uses a NoSQL database",
      imageUrl: SocialPic,
      demoUrl:
        "https://drive.google.com/file/d/1b-BerkdMUnTB0UC7jQCbOg0NYsF3tYS7/view",
      githubUrl: "https://github.com/Jako0320/SocialNetworkAPI_18",
    },
    {
      title: "Ecommerce Back end API",
      description: "Back end for an Ecommerce database using MySQL",
      imageUrl: EcommercePic,
      demoUrl:
        "https://drive.google.com/file/d/1SuBA_CT5Jp1AKj2bgKB2C_NbccmpGZvx/view",
      githubUrl: "https://github.com/Jako0320/EcommerceBE-JS13",
    },
    {
      title: "Tech Blog",
      description: "Blog app with user signups, posts and comments",
      imageUrl: TechblogPic,
      demoUrl: "https://techblog-js14-cb79310e3de6.herokuapp.com/",
      githubUrl: "https://github.com/Jako0320/TechBlog_JS",
    },
    {
      title: "Weather Dashboard",
      description:
        "Website pulling from a third party weather app presenting the weather for a city provided by the user.",
      imageUrl: WeatherPic,
      demoUrl: "https://jako0320.github.io/JS-WeatherDashboard/",
      githubUrl: "https://github.com/Jako0320/JS-WeatherDashboard",
    },
    {
      title: "Coding Pop Quiz",
      description: "Javascript Pop Quiz hot shot!",
      imageUrl: PopquizPic,
      demoUrl: "https://jako0320.github.io/JS-PopQuiz/",
      githubUrl: "https://github.com/Jako0320/JS-PopQuiz",
    },
    {
      title: "Password Generator",
      description: "Randomized password generator",
      imageUrl: KeygenPic,
      demoUrl: "https://jako0320.github.io/JS-Keygen/",
      githubUrl: "https://github.com/Jako0320/JS-Keygen",
    },
  ];
  return (
    <section>
      <h1>Portfolio</h1>
      <Projects projects={projectsData} />
    </section>
  );
}

export default Portfolio;
