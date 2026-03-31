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
                <h4>Technical Product Manager</h4>
                <h5>Opn (Omise), Bangkok</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading product releases and stakeholder management at Southeast Asia's leading payment infrastructure company. Working across engineering, QA, and DevOps to ensure smooth, on-time product releases. Managing dependencies across multiple payment feature tracks and using AI tools to optimize workflow efficiency.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Quality Engineer</h4>
                <h5>Opn (Omise), Bangkok</h5>
              </div>
              <h3>2023–26</h3>
            </div>
            <p>
              Built and owned UI and API automation for payment workflows using Playwright and Robot Framework. Connected automation suites to CI/CD pipelines via Buildkite, Jenkins, and GitLab. Started using AI tools like Gemini and Cursor AI for faster test design, leading internal workshops to share knowledge with the QA team.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Test Automation Engineer</h4>
                <h5>Allianz Malaysia, KL</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Maintained automation scripts for large vendor engagement projects. Conducted R&D on OCR tools including Docparser and Tabula for document processing improvements in insurance workflows. Performed manual testing across web and mobile applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Test Engineer</h4>
                <h5>Robotico Digital, Bengaluru</h5>
              </div>
              <h3>2020-22</h3>
            </div>
            <p>
              Built TestNG automation framework from scratch using Selenium and Java with Jenkins CI/CD setup. Worked directly with clients to scope automation projects and create project plans. Conducted performance testing using JMeter and managed test data with SQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Test Automation Analyst</h4>
                <h5>IKS Health, Navi Mumbai</h5>
              </div>
              <h3>2019-20</h3>
            </div>
            <p>
              Developed Selenium WebDriver automation scripts using .NET for healthcare applications with cross-browser coverage. Maintained regression test suites and handled troubleshooting of automation pipeline issues.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>QA Automation Engineer</h4>
                <h5>Kale Logistics Solutions, Thane</h5>
              </div>
              <h3>2018-19</h3>
            </div>
            <p>
              Built hybrid automation framework from scratch using Selenium and Java for logistics platform with email-based reporting. Conducted performance testing with JMeter across full SDLC from requirement review through regression testing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
