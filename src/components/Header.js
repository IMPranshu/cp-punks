import React from 'react';
import './Header.css';
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '..//assets//header/search.png';

export const Header = () => {
  return (
    <div className='header'>

    <div className='logo-container'>
      <img src={punkLogo} className='punkLogo' alt='' />
    </div>
    <div className='searchBar'>
      <div className='searchIconContainer'>
        <img src={searchIcon} />
      </div>
      <input className='searchInput' placeholder='Collection, item or user...' />
    </div>

    <div className='headerItems'>
      <p>Drops</p>
      <p>Marketplace</p>
      <p>Create</p>

    </div>
    </div>
  )
}
