import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>Bluestock Fintech</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Contributed to fintech software development, backend integrations, and financial data modeling during a two-month software engineering internship.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <h5>Kalasalingam Academy of Research and Education</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Acquired foundational and advanced knowledge in Data Structures, Object-Oriented Programming (Java/Python), Database Management Systems, and Software Engineering lifecycles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Professional Certifications</h4>
                <h5>IEEE, CodeChef, Anthropic, NPTEL</h5>
              </div>
              <h3>ONGOING</h3>
            </div>
            <p>
              Continuously building expertise through credentials, including IEEE Code Blast, CodeChef DBMS Certification, Anthropic Claude Certification, and various NPTEL courses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
