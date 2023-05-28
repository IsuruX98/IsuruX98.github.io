import React from "react";
import travely from "../../asserts/images/travely.JPEG";
import neighbourly from "../../asserts/images/neighbourly.jpeg";
import helpdesk from "../../asserts/images/helpdesk.JPEG";
import helthmart from "../../asserts/images/helthmart.JPEG";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Travely - Travel and Tourism Web App (MERN stack)",
    description:
      "The system simplifies the process of booking and managing travel by providing a one-stop website where travellers can easily organize their trips, book hotels, rental cars, restaurants, events, tour packages, and customized tours.I finished User management system of this and Admin panel as a project group member. in my part Users can register, log in, reset passwords, view and update their profiles, and delete their accounts. The admin panel allows administrators to view all users, delete users, change roles, generate a PDF of user lists, and search for specific users. Authentication is implemented using JWT (JSON Web Tokens).",
    img: travely,
    link: "https://github.com/IsuruX98/Travely",
    lang: "MERN stack, Tailwind CSS, VsCode, Postman",
  },
  {
    title:
      "Neighbourly - App for solution ideas to Economic crisis (Android - Kotlin)",
    description:
      "This project focuses on reducing rural poverty in Sri Lanka and assisting those in economic crises. My contribution includes user registration, login functionality, and a personalized home page displaying user-specific information, a fund overview with donation details, and a main menu for different user types. Users have the ability to donate to various funds, and the system stores donation information for testing purposes.",
    img: neighbourly,
    link: "https://github.com/IsuruX98/MAD_Project_Neighbourly",
    lang: "Android - Kotlin, Firebase, Android Studio",
  },
  {
    title: "Help Desk - Java Servlet projrct (Java)",
    description:
      "In the Java Servlet project, my focus was on user management and UI design using UI Kit CSS. I implemented features such as user registration, login, password reset, profile viewing, updating, and account deletion. Additionally, I utilized UI Kit CSS to create an attractive and user-friendly interface. The project aimed to enhance my understanding of Java web development and gain practical experience in building functional and visually appealing web applications.",
    img: helpdesk,
    link: "https://github.com/IsuruX98/Java-Project-Help-Desk",
    lang: "Java Servlet, UI Kit CSS, MySQL, eclipse, IntelliJ IDEA",
  },
  {
    title:
      "HealthMart - Online Pharmacy management system (HTML / CSS,Javascript, PHP, Sql)",
    description:
      "The project aimed to create a responsive online pharmacy portal for learning the basics of web development. The website included features such as an online shop where users could browse and purchase medications, as well as a shopping cart for managing their selected items. Additionally, the portal incorporated admin controls, user controls, and CRUD operations to ensure efficient management of the platform. The project served as a practical learning experience for HTML, CSS, JavaScript, PHP, and SQL, enabling the development of a comprehensive online pharmacy solution.",
    img: helthmart,
    link: "https://github.com/IsuruX98/HealthMart",
    lang: "HTML / CSS,Javascript, PHP, Sql, XAMPP, VsCode",
  },
];

const Projects = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <h2 className="mb-2">Projects</h2>
        <p className="mb-4">
          All the projects are in my Github{" "}
          <span>
            <Link
              to="https://github.com/IsuruX98"
              className="ms-1 text-dark badge bg-warning text-decoration-none fs-6"
            >
              Click here to vist
              <i className="bi bi-github ms-2"></i>
            </Link>
          </span>
        </p>
        <div className="col-12">
          {cardData.map((card, index) => (
            <Link
              to={card.link}
              className="card overflow-hidden shadow rounded-4 border-0 mb-5 text-decoration-none text-black"
              key={index}
            >
              <div className="card-body p-0">
                <div className="d-flex align-items-center">
                  <div className="row">
                    <div className="p-5 col-lg-7">
                      <h2 className="fw-bold fs-3">{card.title}</h2>
                      <p className="mt-5">{card.description}</p>
                      <p className="badge bg-dark">{card.lang}</p>
                    </div>
                    <div className="col-lg-5 d-flex">
                      <img src={card.img} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
