import React from 'react';
import '../Styles/LegalPages.css'; // Common CSS file

const PrivacyPolicy = () => {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: February 06, 2026</p>

        <p>
          At <strong>W3coder.in</strong>, accessible from https://www.w3coder.in, one of our main priorities is the privacy of our visitors. 
          This Privacy Policy document contains types of information that is collected and recorded by W3coder.in and how we use it.
        </p>

        <section>
          <h2>Log Files</h2>
          <p>
            W3coder.in follows a standard procedure of using log files. These files log visitors when they visit websites. 
            The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), 
            date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>
        </section>

        <section>
          <h2>Cookies and Web Beacons</h2>
          <p>
            Like any other website, W3coder.in uses 'cookies'. These cookies are used to store information including visitors' preferences, 
            and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by 
            customizing our web page content based on visitors' browser type and/or other information.
          </p>
        </section>

        {/* AdSense Specific Section - Important for Approval */}
        <section className="mission-box"> {/* Used existing blue box style for emphasis */}
          <h3>Google DoubleClick DART Cookie</h3>
          <p>
            Google is a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.w3coder.in and other sites on the internet.
          </p>
          <p>
            However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: 
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer"> https://policies.google.com/technologies/ads</a>
          </p>
        </section>

        <section>
          <h2>Third Party Privacy Policies</h2>
          <p>
            W3coder.in's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective 
            Privacy Policies of these third-party ad servers for more detailed information.
          </p>
        </section>

        <section>
          <h2>Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
          </p>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;