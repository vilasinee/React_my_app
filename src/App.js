import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <br></br>
        <body>
          <div class = 'left '>
            <div class = 'basicInfo'>
              <img class = 'profileImage' src = 'https://ih0.redbubble.net/image.519161374.3216/flat,800x800,075,f.jpg'></img>
              <h2> VILASINEE AKPONGPUN </h2>
              <h3> BI Developer </h3>
              <div class = 'contact'>
                <div class = 'rowInfo'>
                  <p class = 'p label'> Email </p>
                  <p class = 'p'> a_vilasinee@hotmail.com </p><br></br>
                  <p class = 'p label'> Address </p>
                  <p class = 'p'> Pathumwan, Thailand </p>
                </div>
              </div>
              <div class = 'profile'>
                <h1 class = 'title'> Profile </h1> 
                <p> I like to learn new things to explore my new skill and knowledge. </p>
                <p> I am waiting for more challenge coming into my life. </p>
              </div>
              <div class = 'profile'>
                <h1 class = 'title'> Skills </h1>
                <p class = 'p label'> HTML </p>
                <div class = 'star'> 
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div><br></br>
                <p class = 'p label'> CSS </p>
                <div class = 'star'> 
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div><br></br>
                <p class = 'p label'> Javascript </p>
                <div class = 'star'> 
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div><br></br>
                <p class = 'p label'> Java </p>
                <div class = 'star'> 
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div><br></br>
                <p class = 'p label'> Python </p>
                <div class = 'star'> 
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i> 
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>
              <div class = 'profile'>
                <h1 class = 'title'> Language Skills </h1>
                <p class = 'p label'> Thai (Native) </p>
                <div class = 'star'> 
                  <i class="fas fa-star"></i> 
                  <i class="fas fa-star"></i> 
                  <i class="fas fa-star"></i> 
                  <i class="fas fa-star"></i> 
                  <i class="fas fa-star"></i> 
                </div><br></br>
                <p class = 'p label'> English </p>
                <div class = 'star'> 
                  <i class="fas fa-star"></i> 
                  <i class="fas fa-star"></i> 
                  <i class="fas fa-star"></i> 
                  <i class="fas fa-star"></i> 
                  <i class="far fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div class = 'right'> 
            <div class = 'profile'>
                <h1 class = 'title'> Experience </h1> 
                <div class = 'exHeader'>
                  <h3 class = 'exTitle' font-weight = 'normal' > BI Developer </h3>
                  <h5 class = 'exTime'> June 2017 - Now </h5>
                  <ul>
                    <li> Design and develop BI solution. </li>
                    <li> Ensure the quality of BI products: </li>
                    <div class = 'exSub'> - Accuracy </div>
                    <div class = 'exSub'> - Avaliability </div>
                    <div class = 'exSub'> - Performance </div>
                  </ul>
                </div>
                <div class = 'exHeader'>
                  <h3 class = 'exTitle' font-weight = 'normal' > Intern, Software Engineer </h3>
                  <h5 class = 'exTime'> June 2016 - Aug 2016 </h5>
                  <ul>
                    <li> Develop real-time tracking system. </li>
                    <li> Experience in pair programming. </li>
                  </ul>
                </div>
                <div class = 'exHeader'>
                  <h3 class = 'exTitle' font-weight = 'normal' > Intern, Software Quality Assurance Engineer </h3>
                  <h5 class = 'exTime'> June 2015 - Aug 2015 </h5>
                  <ul>
                    <li> Perform both manual and automate testing. </li>
                    <li> Work closely with Software Engineer to ensure the quality of product. </li>
                  </ul>
                </div>
                <br></br>
                <h1 class = 'title'> Education </h1> 
                <div class = 'exHeader'>
                  <h3 class = 'exTitle' font-weight = 'normal' > Bachelor's Degree in Computer Science </h3>
                  <h5 class = 'exTime'> 2013 - 2017 </h5>                  
                  <p> Bangkok, Thailand </p>
                </div>
                <br></br>
                <h1 class = 'title'> Interest </h1> 
                <div class = 'interestList'>
                <div class = 'icons'>
                  <i class="fas fa-utensils fa-3x"></i>
                  <p> Eating </p>
                </div>
                <div class = 'icons'>
                  <i class="fas fa-book fa-3x"></i>
                  <p> Reading </p>
                </div>
                <div class = 'icons'>
                  <i class="fas fa-shopping-basket fa-3x"></i>
                  <p> Shopping </p>
                </div>
                <div class = 'icons'>
                  <i class="fas fa-coffee fa-3x"></i>
                  <p> Cafe Hopping </p>
                </div>
                </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
