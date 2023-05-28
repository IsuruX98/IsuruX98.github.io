import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  // Array of timeline data
  const timelineData = [
    {
      date: "2021 - Present",
      title:
        "Bsc.Special (Hons) Information Technology Specialization - Software Engineering (3.5 CGPA)",
      description:
        "Currently reading for my Bachelors' Degree in Software Engineering at SriLanka Institute of Information Technology (SLIIT)",
    },
    {
      date: "2017 - 2018",
      title: "Pearson Diploma in Information Technology",
      description: "ESOFT, Galle",
    },
    {
      date: "2017 - 2018",
      title: "Pearson Diploma in English",
      description: "ESOFT, Galle",
    },
    {
      date: "2017",
      title: "Advanced Level (Index No -5854890) 2017 - Commerce Stream",
      description:
        "Passed with 2 C (Accounting, Business studies) and 1 S (Economics) Passes, Mahinda College, Galle",
    },
    {
      date: "2014",
      title: "G.C.E (O/L) Examination in 2014 (Index No – 41275888)",
      description: "7A’s, 1B, 1C",
    },
  ];

  return (
    <div className="container p-5">
      <div className="text-center my-3">
        <h2 className="display-5 fw-bolder">
          <span className="text-warning d-inline">Education</span>
        </h2>
      </div>
      <VerticalTimeline layout="1-column">
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#f8f8f8", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid #f8f8f8" }}
            date={item.date}
            iconStyle={{ background: "#f8f8f8", color: "#000" }}
            icon={<span className="icon"></span>}
          >
            <h5 className="vertical-timeline-element-title">{item.title}</h5>
            <p className="vertical-timeline-element-description">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
