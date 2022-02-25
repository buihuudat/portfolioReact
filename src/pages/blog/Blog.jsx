import React, {useState,useEffect} from 'react';

import { blogData } from '../../sources/data';
import getTitle from '../../sources/getTitle';

import './Blog.css';

export default function Blog() {
//   const [title, setTitle] = useState('');

//   useEffect (() => {

//   blogData.map(item => {
//     setTitle(...getTitle(item.id));
//   })
// },[])
// console.log(title);
  return (
    <div className="blog">
      <div className="blog__wrap">
        <div className="blog__title">My Blog</div>
        <div className="blog__desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, provident mollitia? Provident voluptatibus assumenda minima amet laboriosam odit sint quam ut corrupti soluta explicabo, quod rem ab, libero pariatur sunt.
        </div>
        <div className="blog__content">
        {blogData.map((item, index) => (
          <div key={index} className="card" style={{width:"18rem"}}>
            <iframe width='100%' height='100%' src={`https://www.youtube.com/embed/${item.id}`} ></iframe>
            <div className="card-body" style={{backgroundColor: '#333'}}>
              <h5 className="card-title"  style={{color: '#ffc107'}} >{item.id}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Like <i className="fa-solid fa-thumbs-up"></i></a>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
