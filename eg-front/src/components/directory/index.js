import React from 'react';
import Stock1 from './../../assets/Ezcema1.jpg';
import Stock2 from './../../assets/Ezcema2.jpg';
import './styles.scss';
import { Link } from 'react-router-dom'

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
      <div className="item"
        style={{
          backgroundImage: `url(${Stock1})`
        }}
      >

          <a>
          <Link to="/construction">
          Learn More
          </Link>
          </a>
      </div>
      <div
          className="item"
          style={{
            backgroundImage: `url(${Stock2})`
        }}
      >
          <a>
          <Link to="/construction">
          Learn More
          </Link>
          </a>
        </div>

      </div>
    </div>

  )
}
export default Directory;
