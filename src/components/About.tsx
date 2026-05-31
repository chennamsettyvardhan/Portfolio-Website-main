import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <h3 className="title">About Me</h3>
        <p className="para about-bio">
          I am a passionate Computer Science and Engineering student pursuing B.Tech at Kalasalingam Academy of Research and Education. I enjoy building practical software solutions using Java, Python, HTML, Firebase, Git, and GitHub. I continuously improve my skills through projects, certifications, and real-world learning experiences.
        </p>
        <div className="about-details-row">
          <div className="about-profile-wrapper">
            <div className="profile-image-container">
              <img src="/images/profile.png" alt="Chennamsetty Dharma Vardhan" />
              <div className="profile-border"></div>
            </div>
          </div>
          <div className="about-education">
            <h4>Education</h4>
            <h5>B.Tech in Computer Science and Engineering</h5>
            <h6>Kalasalingam Academy of Research and Education</h6>
            <p className="edu-year">2023 - 2027</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
