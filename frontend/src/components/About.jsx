import React from "react";

const About = () => {
 return (
  <div className="about-container">
    <div className="about-card">

      <h2 className="mb-3">About BlogSphere</h2>

      <p className="text-center text-muted">
        A simple and modern blogging platform built with the MERN Stack.
      </p>

      <hr />

      <p>
        <strong>BlogSphere</strong> allows users to create, edit, delete,
        and read blog posts in an easy-to-use interface.
      </p>

      <p>
        This project demonstrates authentication, authorization, CRUD operations,
        and responsive UI design.
      </p>

      <h4>🚀 Technologies Used</h4>

      <ul>
        <li>React.js</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>JWT Authentication</li>
      </ul>

      <h4>✨ Features</h4>

      <ul>
        <li>User Authentication</li>
        <li>Create & Manage Posts</li>
        <li>Secure JWT Login</li>
      </ul>

    </div>
  </div>
);
};

export default About;