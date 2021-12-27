import React from 'react';
import './About.css'

const About = () => {
    return (
      <div id="abouts" className="section-1">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="panel">
              <nav>
                <div
                  className="nav nav-tabs justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  <a
                    className="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    <i className="fa fa-user me-2"></i>
                    About Me
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    <i className="fa fa-rocket me-2"></i>
                    My Skill
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    <i className="fas fa-address-card me-2"></i>
                    Contact Info
                  </a>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active mt-5"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                 <p> Myself Mehjabin Johra. I'm a graduated CSE student at United
                  International University. My CGPA is 3.57 out of 4.00. In my
                  University life, I have worked as an executive at Computer
                  Club. I have also worked as a content writer at UIU CSE Alumni
                  Association. I hosted different programs in my university.
                  . I'm interested in the web development field and seeking
                  exciting opportunity related to the same. I think I am fully
                  efficient, dedicated, dynamic, quick responder, and also very
                  friendly. I believe hard work beats talent when talent doesn't
                  work hard.</p>
                  <div className="social text-black">
                      
                          <p><a href="https://github.com/mjohra" target="_blank"><i className="fab fa-github "></i></a></p>
                          <p><a href="https://www.linkedin.com/in/mehjabin-johra/" target="_blank"><i className="fab fa-linkedin "></i></a></p>
                          <p><a href="https://www.facebook.com/mehjabin.mouri000/" target="_blank"><i className="fab fa-facebook"></i></a></p>
                      
                  </div>
                </div>
                <div
                  className="tab-pane fade mt-5"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <h3>Comfortable Technical Skill</h3>
                  
                  <button type="button" className="btn-skill px-2 btn-sm me-3 m-2" disabled>JavaScript</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>ES6</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>React.js</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>React Router</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>React Bootstrap</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>React Hook</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>HTML</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>Bootstrap</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>CSS</button>

                  <h3 className="mt-2">Familiar Technical Skill</h3>
                  
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>MongoDB</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>Node.js</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>Express.js</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>Material UI</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>Tailwind</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>React Native</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>Axios</button>

                  <h3 className="mt-2">Tools</h3>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>Git</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>Netlify</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>Firebase</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>Heroku</button>
                  <button type="button" className="btn-skill  px-2 btn-sm me-3 m-2" disabled>Figma</button>
                 
                </div>
                <div
                  className="tab-pane fade mt-3"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <p>Hello there <br /> Its me Mehjabin Johra. I live in Dhaka,Bangladesh. I'm a full-stack Developer. If you want to contact with me,here's some information-  </p>
                  <p><span> Mobile:</span> (+88)01734570053</p>
                  <p><span> Gmail:</span> mehjabin.johra00@gmail.com</p>
                  <p><span>GitHub:</span>  https://github.com/mjohra</p>
                  <p><span>LinkedIn:</span>  https://www.linkedin.com/in/mehjabin-johra/</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default About;