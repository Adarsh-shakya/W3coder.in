import React from 'react';
import '../Styles/LegalPages.css'; // Common CSS file

const TermsAndConditions = () => {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1>Terms and Conditions</h1>
        <p className="last-updated">Last updated: February 06, 2026</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>W3coder.in</strong>. These Terms and Conditions govern your use of our website and its educational content. 
            By accessing or using our website, you agree to comply with these terms.
          </p>
        </section>

        <section>
          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, W3coder.in and/or its licensors own the intellectual property rights for all material on this website, 
            including tutorials, code snippets, and graphics. All intellectual property rights are reserved.
          </p>
        </section>

        <section>
          <h2>3. Use of Code Snippets</h2>
          <p>
            Our website provides code examples (Java, Python, React, etc.) for educational purposes. 
            You are free to use these snippets in your personal or commercial projects. However, you are <strong>not allowed</strong> to:
          </p>
          <ul>
            <li>Republish material from W3coder.in without attribution.</li>
            <li>Sell, rent, or sub-license material from W3coder.in.</li>
            <li>Reproduce, duplicate, or copy our tutorials to create a competing website.</li>
          </ul>
        </section>

        <section>
          <h2>4. Updates</h2>
          <p>
            We reserve the right to modify these terms at any time. By continuing to use the website after changes are posted, you agree to be bound by the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;