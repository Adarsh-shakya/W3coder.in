// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import SEO from "../SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | W3Coder"
        description="The page you are looking for does not exist."
        path="/404"
      />
      <div
        style={{ textAlign: "center", padding: "80px 20px", minHeight: "60vh" }}
      >
        <h1 style={{ fontSize: "4rem", margin: "0", color: "#ff4b4b" }}>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p
          style={{ color: "#666", maxWidth: "500px", margin: "15px auto 30px" }}
        >
          We couldn't find the page you're looking for. Please check the URL or
          return home.
        </p>
        <Link
          to="/"
          style={{
            padding: "10px 24px",
            backgroundColor: "#f39c12",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold",
          }}
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
