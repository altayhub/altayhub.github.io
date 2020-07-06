import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import Logo from './logo.png';

function Header() {
  return (
    <div>
      {/* <Img src={Logo} alt="react-boilerplate - Logo" /> */}
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
        {/* 
        
        <HeaderLink to="/invest">
          <FormattedMessage {...messages.invest} />
        </HeaderLink>
        <HeaderLink to="/otdyh">
          <FormattedMessage {...messages.otdyh} />
        </HeaderLink> 
         <HeaderLink to="/market">
          <FormattedMessage {...messages.marketplace} />
        </HeaderLink>
        <HeaderLink to="/pereezd">
          <FormattedMessage {...messages.relocation} />
        </HeaderLink> 
        
        */}
      </NavBar>
    </div>
  );
}

export default Header;
