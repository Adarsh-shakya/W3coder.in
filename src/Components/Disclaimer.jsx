import React from 'react';
import '../Styles/LegalPages.css'; // Common CSS file

const Disclaimer = () => {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1>Disclaimer</h1>
        <p className="last-updated">Last updated: February 06, 2026</p>

        <section>
          <h2>1. Educational Purpose Only</h2>
          <p>
            The information provided on <strong>W3coder.in</strong> is for general educational purposes only. 
            While we strive to keep the tutorials accurate and up-to-date, we make no representations or warranties of any kind regarding the completeness or accuracy of the information.
          </p>
        </section>

        <section>
          <h2>2. No Professional Advice</h2>
          <p>
            The code snippets (Java, Python, etc.) found on this website are intended for learning. 
            They should not be considered as professional software engineering advice for critical production systems. 
          </p>
        </section>

        <section>
          <h2>3. Liability for Code Usage</h2>
          <p>
            <strong>Use of our code is at your own risk.</strong> W3coder.in will not be liable for any errors, bugs, or system crashes 
            that may occur from using our code snippets in your projects. We accept no liability for any loss or damage of any nature resulting from the use of this website.
          </p>
        </section>

        <section>
          <h2>4. External Links</h2>
          <p>
            Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with W3coder.in. 
            Please note that the W3coder.in does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;