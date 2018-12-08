import React from 'react';
import Link from 'gatsby-link';
import Obfuscate from 'react-obfuscate';
import { FaPaperPlaneO, FaWrench } from 'react-icons/lib/fa';

const ForHomePageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>I'm glad</b><br /> that you're interested in me.
    </p>
    <p>
      Feel free to drop me a message at <b><Obfuscate email='leopoldwkok@gmail.com' /></b>.
    </p>
    <p>
      Thank you. Now, you're free to go further.
    </p>
  </div>
);

const ForContactPageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>Hi there</b><br /> Before you leave
    </p>
    <p>
      Feel free to drop me a message at <b><Obfuscate email='leopoldkwok@gmail.com' /></b>.
    </p>
    <p>
    </p>
    <p>
      Thank you<br />
      <b>Leo</b>
    </p>
  </div>
);

const RemarkScreen = (props) => { 
  const links = [ 
    { path: 'toolbox', icon: FaWrench }, 
    //{ path: 'playground', icon: FaPaperPlaneO }
  ];

  return (
    <div className={`c-remark-screen ${props.isActive && 'c-remark-screen--is-active'}`}>
      {props.locationPathName === '/' ? ForHomePageContent : ForContactPageContent}
      {props.locationPathName === '/' &&
        <div className="c-remark-screen__links">
          {
            links.map((link) => (        
              <Link 
                key={link.path}
                className="c-remark-screen__link" 
                to={`/${link.path}/`}
                onClick={props.onClick}
                tabIndex={props.isActive ? '1' : '-1'}
              >
                <link.icon /> {link.path}
              </Link>)
            ) 
          }
        </div>
      }

      <div className="c-remark-screen__bg"></div>
    </div>
  )
};

export default RemarkScreen;
