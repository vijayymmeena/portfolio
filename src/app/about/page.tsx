const AboutPage: React.FC = () => {
  return (
    <section className="space-y-8">
      <section>
        <h3 className="pb-2 text-2xl font-bold">
          Hi, I am Vijay (Also knows as Samar)
        </h3>
        <h3 className="text-gray-400">
          I am a seasoned Full Stack Developer and Cloud Server Administrator
          with a rich background in Computer Science Engineering, a field I have
          dedicated myself to since graduating in 2020. Over the past 7 years,
          my career has been a journey of continuous growth and learning,
          allowing me to master a wide array of programming languages and
          technologies. My most recent two years have been spent at the
          forefront of cryptocurrency and educational technology, where I have
          further refined my skills in TypeScript, React, Rust, and Golang. My
          expertise lies in navigating complex projects from inception to
          deployment, ensuring they are robust, scalable, and efficient. I am
          committed to leveraging my diverse skill set to drive innovation and
          excellence in the ever-evolving tech landscape.
        </h3>
      </section>
      <section>
        <h1 className="pb-2 text-2xl font-bold">Education</h1>
        <p className="text-gray-400">
          Graduated with a degree in Computer Science Engineering, completed
          between 2016-2020.
        </p>
      </section>
      <section>
        <h1 className="pb-2 text-2xl font-bold">Work Experience</h1>
        <ul className="space-y-4 text-gray-400">
          <li>
            Duration: 7 years (4 years as beginer + 3 years as professional)
            total in development.
          </li>
          <li>
            <div className="text-sm text-gray-200">NOV 2023 - Ongoing</div>
            <div>
              Created a Customer Relationship Management (CRM) software project
              using Electron for a market-based company in Australia.
            </div>
          </li>
          <li>
            <div className="text-sm text-gray-200">MAY 2022 - OCT 2023</div>
            <div>
              I have worked as lead software developer and cloud server
              administrator in a company involved in cryptocurrency and
              educational technology (edtech).
            </div>
          </li>
          <li>
            <div className="text-sm text-gray-200">JUN 2021 - Ongoing</div>
            <div>
              Maintaining open source project called discordx. A typescript
              decorator base project.
            </div>
          </li>
          <li>
            <div className="text-sm text-gray-200">OCT 2020</div>
            <div>
              Worked on medicical database based on US with a healthcare member.
            </div>
          </li>
          <li>
            <div className="text-sm text-gray-200">SEP 2018 - Ongoing</div>
            <div>
              Created a gaming server and website using REACT, PAWN and RUST for
              SA-MP.
            </div>
          </li>
          <li>
            <div className="text-sm text-gray-200">JAN 2016 - Ongoing</div>
            <div>Begin journey as a software developer.</div>
          </li>
        </ul>
      </section>
      <section>
        <h1 className="pb-2 text-2xl font-bold">Specialization</h1>
        <ul className="space-y-2 text-gray-400">
          <li>
            Primary Role: Full Stack Developer and Cloud Server Administrator.
          </li>
          <li>
            Coding Expertise: Proficient in TypeScript, React, Rust, and GoLang.
          </li>
        </ul>
      </section>
      <section>
        <h1 className="pb-2 text-2xl font-bold">Strengths</h1>
        <ul className="space-y-2 text-gray-400">
          <li>Expertise in managing complex projects from start to finish.</li>
          <li>Ensuring solutions are robust, scalable, and efficient.</li>
          <li>Committed to driving innovation and excellence in technology.</li>
        </ul>
      </section>
      <h3>Thank you!</h3>
    </section>
  );
};

export default AboutPage;
