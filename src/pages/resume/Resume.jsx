import React from 'react';

import './Resume.css';

export default function Resume() {
  return (
    <div className="resume" id="resume">
      <div className="resume__wrap">
        <div className="resume__title">Resume</div>
        <div className="resume__desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ad officiis maiores ea iste numquam expedita vero, non quod dolores optio harum assumenda ipsa libero tenetur repellat praesentium natus qui.
        </div>
        <div className="resume__content">
          <div className="resume__content-top">
            <div className="resume__education">
              <div className="resume__top-title">
                <div className="resume__icon"><i className="fa-solid fa-graduation-cap"></i></div>
                <div className="resume__title-text">Education</div>
              </div>
              <div className="resume__top-content">
                <div className="resume__top-content-item">
                  <div className="resume__top-content-num">1</div>
                  <span>
                    <div className="resume__top-content-item-title">Masters of Business</div>
                    <div className="resume__top-content-item-desc">Management</div>
                    <div className="resume__top-content-item-time">
                      <i className="fa-solid fa-calendar-days"></i>
                      <span>2019 - 2020</span>
                    </div>
                  </span>
                </div>
                <div className="resume__top-content-item">
                  <div className="resume__top-content-num">2</div>
                  <span>
                    <div className="resume__top-content-item-title">Honour of Business</div>
                    <div className="resume__top-content-item-desc">Management</div>
                    <div className="resume__top-content-item-time">
                      <i className="fa-solid fa-calendar-days"></i>
                      <span>2019 - 2020</span>
                    </div>
                  </span>
                </div>
                <div className="resume__top-content-item">
                  <div className="resume__top-content-num">3</div>
                  <span>
                    <div className="resume__top-content-item-title">School Certificate</div>
                    <div className="resume__top-content-item-desc">Management</div>
                    <div className="resume__top-content-item-time">
                      <i className="fa-solid fa-calendar-days"></i>
                      <span>2019 - 2020</span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="resume__experience">
              <div className="resume__top-title">
                <div className="resume__icon"><i className="fa-solid fa-briefcase"></i></div>
                <div className="resume__title-text">Experience</div>
              </div>
              <div className="resume__top-content">
                <div className="resume__top-content-item">
                  <div className="resume__top-content-num">1</div>
                  <span>
                    <div className="resume__top-content-item-title">Envato Author</div>
                    <div className="resume__top-content-item-desc">Management</div>
                    <div className="resume__top-content-item-time">
                      <i className="fa-solid fa-calendar-days"></i>
                      <span>2019 - 2020</span>
                    </div>
                  </span>
                </div>
                <div className="resume__top-content-item">
                  <div className="resume__top-content-num">2</div>
                  <span>
                    <div className="resume__top-content-item-title">IT international</div>
                    <div className="resume__top-content-item-desc">Management</div>
                    <div className="resume__top-content-item-time">
                      <i className="fa-solid fa-calendar-days"></i>
                      <span>2019 - 2020</span>
                    </div>
                  </span>
                </div>
                <div className="resume__top-content-item">
                  <div className="resume__top-content-num">3</div>
                  <span>
                    <div className="resume__top-content-item-title">Daffodil International</div>
                    <div className="resume__top-content-item-desc">Management</div>
                    <div className="resume__top-content-item-time">
                      <i className="fa-solid fa-calendar-days"></i>
                      <span>2019 - 2020</span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="resume__content-bottom">
            <div className="resume__content-skills programing">
              <div className="resume__top-title">
                <div className="resume__icon"><i className="fa-solid fa-code"></i></div>
                <div className="resume__title-text">Programing Skills</div>
              </div>
              <div className="resume__bottom-content">
                <div className="resume__bottom-skills">
                  <div className="resume__bottom-title">HTML</div>
                  <div className="resume__bottom-skill resume-html"><span>80%</span></div>
                </div>
                <div className="resume__bottom-skills">
                  <div className="resume__bottom-title">Php</div>
                  <div className="resume__bottom-skill resume-php"><span>90%</span></div>
                </div>
                <div className="resume__bottom-skills">
                  <div className="resume__bottom-title">Laravel</div>
                  <div className="resume__bottom-skill resume-laravel"><span>90%</span></div>
                </div>
                <div className="resume__bottom-skills">
                  <div className="resume__bottom-title">CSS</div>
                  <div className="resume__bottom-skill resume-css"><span>95%</span></div>
                </div>
              </div>
            </div>
            <div className="resume__content-skills designing">
              <div className="resume__top-title">
                <div className="resume__icon"><i className="fa-solid fa-code"></i></div>
                <div className="resume__title-text">Designing Skills</div>
              </div>
              <div className="resume__bottom-content">
                <div className="resume__bottom-skills">
                  <div className="resume__bottom-title">Abode Photoshop</div>
                  <div className="resume__bottom-skill resume-photoshop"><span>80%</span></div>
                </div>
                <div className="resume__bottom-skills">
                  <div className="resume__bottom-title">Abode Illustrator</div>
                  <div className="resume__bottom-skill resume-illustrator"><span>90%</span></div>
                </div>
                <div className="resume__bottom-skills">
                  <div className="resume__bottom-title">Adobe XD</div>
                  <div className="resume__bottom-skill resume-xd"><span>90%</span></div>
                </div>
                <div className="resume__bottom-skills">
                  <div className="resume__bottom-title">Figma</div>
                  <div className="resume__bottom-skill resume-figma"><span>95%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
