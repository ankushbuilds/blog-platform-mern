import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">

        <h2 className="mb-3 text-center">About BlogSphere</h2>

        <p className="text-muted text-center">
          A simple and modern blogging platform built with the MERN Stack.
        </p>

        <hr />

        <p>
          <strong>BlogSphere</strong> allows users to create, edit, delete,
          and read blog posts in an easy-to-use interface.
        </p>

        <p>
          This project is developed using modern web technologies and
          demonstrates authentication, authorization, CRUD operations,
          and responsive UI design.
        </p>

        <h4 className="mt-4">🚀 Technologies Used</h4>

        <ul>
          <li>React.js</li>
          <li>React Router</li>
          <li>Bootstrap</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>JWT Authentication</li>
        </ul>

        <h4 className="mt-4">✨ Features</h4>

        <ul>
          <li>User Registration & Login</li>
          <li>Create Blog Posts</li>
          <li>Edit Your Posts</li>
          <li>Delete Your Posts</li>
          <li>Read Full Articles</li>
          <li>Secure Authentication using JWT</li>
        </ul>

      </div>
    </div>
  );
};

export default About;