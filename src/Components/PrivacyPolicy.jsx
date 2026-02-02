import React from 'react';
///import '../Styles/CoursePage.css'; // अपनी CSS फाइल का पाथ सही रखें

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container" style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif', lineHeight: '1.8', color: '#333', border:"1px solid gray" }}>
      
      <h1 style={{ borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Privacy Policy</h1>
      <p><strong>Last updated:</strong> February 02, 2026</p>

      <p>
        This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
      </p>
      <p>
        We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
      </p>

      <h2>Interpretation and Definitions</h2>
      
      <h3>Definitions</h3>
      <ul>
        <li><strong>Company</strong> refers to w3coder.in.</li>
        <li><strong>Website</strong> refers to <a href="https://www.w3coder.in">https://www.w3coder.in</a>.</li>
        <li><strong>Country</strong> refers to Uttar Pradesh, India.</li>
        <li><strong>Personal Data</strong> means any information relating to an identifiable person.</li>
        <li><strong>Usage Data</strong> is data collected automatically when using the Service (e.g., IP address, browser type).</li>
      </ul>

      <h2>Tracking Technologies and Cookies</h2>
      <p>
        We use cookies and similar tracking technologies to track activity on our website and store certain information.
      </p>

      {/* --- ADSENSE SPECIFIC SECTION (Most Important) --- */}
      <div style={{ background: '#f4f4f4', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
        <h3>Google DoubleClick DART Cookie</h3>
        <p>
          Google is a third-party vendor on our site. It uses cookies, including DART cookies, to serve ads to users based on their visit to our website and other sites on the internet.
        </p>
        <p>
          Users may opt out of personalized advertising by visiting <strong>Google Ads Settings</strong> here: <br />
          <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer">https://adssettings.google.com/authenticated</a>
        </p>
        <p>
          For more information about how Google uses data from sites that use its services, please visit: <br />
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">How Google uses data from sites or apps that use our services</a>
        </p>
      </div>

      <h3>Advertising Partners</h3>
      <p>Our advertising partner is <strong>Google AdSense</strong>.</p>
      <p>
        w3coder.in has no access to or control over cookies used by third-party advertisers. We advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
      </p>

      <h2>Use of Your Personal Data</h2>
      <ul>
        <li>To provide and maintain our Service.</li>
        <li>To contact you via email or other communication methods.</li>
        <li>To improve website performance and content.</li>
      </ul>

      <h2>Children’s Information</h2>
      <p>
        w3coder.in does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately.
      </p>

      <h2>Consent</h2>
      <p>
        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
      </p>

      <h2 style={{ marginTop: '30px' }}>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, You can contact us:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:adarsh.shakya_cs20@gla.ac.in">adarsh.shakya_cs20@gla.ac.in</a></li>
        <li><strong>Contact Page:</strong> <a href="https://www.w3coder.in/contact" target="_blank" rel="noopener noreferrer">https://www.w3coder.in/contact</a></li>
      </ul>

    </div>
  );
};

export default PrivacyPolicy;