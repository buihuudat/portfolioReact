import React from 'react';

import './About.css';

export default function About() {
  return (
    <div className="about container p-4" id="about">
      <div className="about__wrap">
        <div className="about__title">
          About Me
        </div>
        <div className="about__content">
          <div className="about__content-top">
            <div className="about__img">
              <img src="https://payload.cargocollective.com/1/6/216395/5219599/tumblr_ncsroaVDel1r9mp00o1_500.gif" alt="" />
            </div>
            <div className="about__info">
              <div className="h3 text-warning about__name">Bui Huu Dat</div>
              <span>UI/UX Designer</span>

              <div className="about__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tenetur officia modi itaque praesentium qui nemo iusto dolore animi maiores vero deserunt unde rerum consequatur, nam harum velit. Quos, rem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti vel adipisci delectus debitis quam consequatur quae similique porro nam ipsam, nobis, quibusdam iste dolore esse vitae necessitatibus, quod possimus!
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, eaque praesentium ipsum modi voluptatum atque velit hic illum suscipit quidem, nulla quam accusamus odit veniam sit quo recusandae autem distinctio.
                </p>
              </div>

              <div className="about__button">
                <button className="button">Download CV</button>
                <button className="button">Hire Me</button>
              </div>
            </div>
          </div>
          <div className="about__content-bottom">

            <div className="about__journey">
              <div className="about__bottom-title">About Journey</div>
              <div className="about__skills">
                <div className="about__skill">
                  <div className="about__skill-icon bg-warning"><i className="fa-solid fa-medal text-dark"></i></div>
                  <div className="about__skill-content">
                    <div className="about__skill-title">5 Years Job</div>
                    <div className="about__skill-title-2">Experence</div>
                  </div>
                </div>
                <div className="about__skill">
                  <div className="about__skill-icon"><i className="fa-solid fa-chart-column"></i></div>
                  <div className="about__skill-content">
                    <div className="about__skill-title">500+ Projects</div>
                    <div className="about__skill-title-2">Completed</div>
                  </div>
                </div>
                <div className="about__skill">
                  <div className="about__skill-icon"><i className="fa-solid fa-cubes"></i></div>
                  <div className="about__skill-content">
                    <div className="about__skill-title">Freelance</div>
                    <div className="about__skill-title-2">Available</div>
                  </div>
                </div>
                <div className="about__skill">
                  <div className="about__skill-icon"><i className="fa-solid fa-screwdriver-wrench"></i></div>
                  <div className="about__skill-content">
                    <div className="about__skill-title">Support</div>
                    <div className="about__skill-title-2">24/7</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about__interests">
              <div className="about__bottom-title">
                About Interests
              </div>
                <div className="about__skills">
                <div className="about__skill">
                  <div className="about__skill-icon"><i className="fa-solid fa-headphones"></i></div>
                  <div className="about__skill-title">Music</div>
                </div>
                <div className="about__skill">
                  <div className="about__skill-icon"><i className="fa-solid fa-car-side"></i></div>
                  <div className="about__skill-title">Travel</div>
                </div>
                <div className="about__skill">
                  <div className="about__skill-icon"><i className="fa-solid fa-film"></i></div>
                  <div className="about__skill-title">Movie</div>
                </div>
                <div className="about__skill">
                  <div className="about__skill-icon"><i className="fa-solid fa-camera"></i></div>
                  <div className="about__skill-title">Photo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
