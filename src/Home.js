import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="HomeFrame">
          <h2>Coming soon...</h2>
        </div>
        <div className="HomeRightPanel">
          <div className="HomeRightPanelContent">
            <p><b>Phone:</b> +34 634 638 129</p>
            <p><b>Email:</b> office@cristinapatru.com</p>
            <div className="Links">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
