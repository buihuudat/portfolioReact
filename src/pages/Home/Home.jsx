import React from 'react'

import homeImage from "./home-image.jpg";
import './Home.css';

export default function home() {
  return (
    <div>
      <div className="home" id="home">
        <div className="home__wrap">
          <div className="home__img">
            {/* <img src={homeImage} alt="" /> */}
            {/* <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/00036b06-2754-489f-b7df-1b5b7dc09572/df0exi5-790d8172-d48f-4fac-9355-01c5acb73aa0.jpg/v1/fill/w_1192,h_670,q_70,strp/moon___2_21_2022_by_a_separate_reality_df0exi5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMDAwMzZiMDYtMjc1NC00ODlmLWI3ZGYtMWI1YjdkYzA5NTcyXC9kZjBleGk1LTc5MGQ4MTcyLWQ0OGYtNGZhYy05MzU1LTAxYzVhY2I3M2FhMC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FUVNcveGyLKR3nmYVRYhqTNWITAq7L0_3PS5BGVTwrs" alt="" /> */}
            <img src="https://media1.giphy.com/media/7uDtQm2jKdS0VGLg46/giphy.gif?cid=ecf05e47kroosrjbrpqcj2ncs1ujlqyn8xzw8sbvbzjxblru&rid=giphy.gif&ct=g" alt="" />
            {/* <iframe src="https://www.youtube.com/embed/5_Blq9W9cT8?mute=1&showinfo=0&controls=0&autoplay=1"
              style={{width: '100%', height: '100vh', overflow: 'hidden', userSelect: 'none'}}
            ></iframe> */}
          </div>
          <div className="home__content">
            <h4>Hello, I'm</h4>
            <div className="home__name">Bui Huu Dat</div>
            <div className="home__title h3">Front-end Developer</div>
          </div>
        </div>
      </div>
    </div>
  )
}
