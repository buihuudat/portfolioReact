import React, { useEffect, useState } from 'react';

import { portfolioData } from '../../sources/data';
import './Portfolio.css';

export default function Porfolio() {
  const [active, setActive] = useState('all');
  const [allProject, setAllProject] = useState([]);

  const portfolioTitle = [
    {name: 'All Projects', id: 'all'},
    {name: 'Web Design', id: 'web'},
    {name: 'Mobile App', id: 'mobile'},
    {name: 'Graphic Design', id: 'graphic'},
    {name: 'Web Development', id: 'web-dev'},
  ]

  const handleActive = (e) => {
    const active = document.getElementsByClassName('portfolio__content-title-item-name');
    Array.from(active).forEach(item => {
      item.classList.remove('active');
    })
    e.target.className += ' active';
  }

  const handleViewAll = () => {
    const view = document.getElementsByClassName('portfolio__content');
    const btn = document.getElementsByClassName('portfolio__button');
    view[0].classList.add('portfolio__view');
    btn[0].classList.add('portfolio__btn');
  }

  let imgWeb = [];
  let imgDesign = [];
  let imgMobile = [];
  let imgWebDev = [];

  portfolioData.map(item => {
    imgWeb = item.web
    imgDesign = item.design
    imgMobile = item.mobile
    imgWebDev = item.webDev
  })

  let img = [...imgWeb, ...imgDesign, ...imgMobile, ...imgWebDev];
  let showData = [];

  useEffect(() => {
    setAllProject(img);
  },[]);

  if (active === 'all') {
    showData = allProject;
  } else if (active === 'web') {
    showData = imgDesign;
  } else if (active === 'mobile') {
    showData = imgMobile;
  } else if (active === 'graphic') {
    showData = imgDesign;
  } else if (active === 'web-dev') {
    showData = imgWebDev;
  }
  

  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio__wrap">
        <div className="portfolio__title">Portfolio</div>
        <div className="portfolio__desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore doloribus a, iste minima maiores ut consequatur ipsa aliquam quis veniam quo quia numquam iusto reiciendis unde, deleniti suscipit nostrum maxime?
        </div>
        <div className="portfolio__content">
          <div className="portfolio__content-title">
            {portfolioTitle.map((item, index) => (
              <div className="portfolio__content-title-item" key={index}>
                <div className="portfolio__content-title-item-name" onClick={e => {handleActive(e); setActive(item.id)}}>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
          <div className="portfolio__content-item">
            {
              showData.map((item, index) => (
                <div className="portfolio__content-item-wrap" key={index}>
                  <img className='portfolio__content-item-img' src={item.img} alt="" />
                </div>
              ))
            }
          </div>
        </div>
          <button onClick={e => handleViewAll()} className="portfolio__button">View all</button>
      </div>
    </div>
  )
}
