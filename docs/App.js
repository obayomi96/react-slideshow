<<<<<<< HEAD:src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './views/components/NavBar';
import Sidebar from './views/components/SideBar';
import ExamplesPage from './views/pages/ExamplesPage';
import LandingPage from './views/pages/LandingPage';
import ApiPage from './views/pages/ApiPage';
import ForTypescript from './views/pages/ForTypescript';
import SlideExample from './views/pages//Examples/Slide';
import FadeExample from './views/pages//Examples/Fade';
import ZoomExample from './views/pages//Examples/Zoom';
import Next from './views/pages/Next';
import './views/styles.css';
import './assets/fonts/proxima-nova-regular.otf';

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const sideBarItem = document.querySelector('.sidebar');

  window.onresize = () => {
    if (window.screen.width > 768) {
      sideBarItem.style.marginLeft = '0';
    } else {
      sideBarItem.style.marginLeft = '-50%';
    }
  };

  const toggleSidebar = () => {
    const sideBarItems = document.querySelector('.sidebar');
    if (sidebar) {
      sideBarItems.style.marginLeft = '-50%';
    } else {
      sideBarItems.style.marginLeft = '0';
    }
    setSidebar(!sidebar);
  };

  return (
    <BrowserRouter>
      <Navbar toggleSidebar={toggleSidebar} isOpen={sidebar} />
      <Sidebar />
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/all-examples" component={ExamplesPage} />
          <Route exact path="/api" component={ApiPage} />
          <Route exact path="/typescript" component={ForTypescript} />
          <Route exact path="/slide-effect" component={SlideExample} />
          <Route exact path="/fade-effect" component={FadeExample} />
          <Route exact path="/zoom-effect" component={ZoomExample} />
          <Route exact path="/next" component={Next} />
        </Switch>
=======
import React, { Component } from 'react';
import { Slide, Fade, Zoom } from '../src';
import './app.css';
import '../src/css/styles.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      zoomOutImages: [
        'images/slide_2.jpg',
        'images/slide_7.jpg',
        'images/slide_5.jpg'
      ],
      slideImages: [
        'images/slide_2.jpg',
        'images/slide_3.jpg',
        'images/slide_4.jpg'
      ],
      fadeImages: [
        'images/slide_5.jpg',
        'images/slide_6.jpg',
        'images/slide_7.jpg'
      ]
    };
  }

  render() {
    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      pauseOnHover: true,
      indicators: i => (
        <div
          style={{
            width: '30px',
            color: 'blue',
            textAlign: 'center',
            cursor: 'pointer',
            border: '1px blue solid'
          }}
        >
          {i + 1}
        </div>
      )
    };

    const fadeProperties = {
      duration: 5000,
      transitionDuration: 500,
      indicators: true,
      infinite: false,
      pauseOnHover: true
    };

    const zoomOutProperties = {
      duration: 5000,
      transitionDuration: 500,
      indicators: true,
      scale: 0.4,
      pauseOnHover: true
    };

    const zoomInProperties = {
      duration: 5000,
      transitionDuration: 500,
      indicators: true,
      scale: 1.4,
      pauseOnHover: true
    };
    const { slideImages, zoomOutImages, fadeImages } = this.state;
    return (
      <div>
        <h3>Slide Effect</h3>
        <div className="slide-container">
          <Slide {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <div style={{ backgroundImage: `url(${each})` }}>
                  <span>Slide {index + 1}</span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
        <br />

        <h3>Fade Effect</h3>
        <div className="slide-container">
          <Fade {...fadeProperties}>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[0]} />
              </div>
              <h2>First Slide</h2>
            </div>
            <div className="each-fade">
              <h2>Second Slide</h2>
              <div className="image-container">
                <img src={fadeImages[1]} />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[2]} />
              </div>
              <h2>Third Slide</h2>
            </div>
          </Fade>
        </div>

        <br />
        <h3>Zoom out Effect</h3>
        <div className="slide-container">
          <Zoom {...zoomOutProperties}>
            {zoomOutImages.map((each, index) => (
              <img key={index} style={{ width: '100%' }} src={each} />
            ))}
          </Zoom>
        </div>
        <br />
        <h3>Zoom in Effect</h3>
        <div className="slide-container">
          <Zoom {...zoomInProperties}>
            {fadeImages.map((each, index) => (
              <img key={index} style={{ width: '100%' }} src={each} />
            ))}
          </Zoom>
        </div>
        <br />
>>>>>>> upstream/master:docs/App.js
      </div>
    </BrowserRouter>
  );
};

export default App;
