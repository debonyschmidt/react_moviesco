import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
  render() {
    const { search, submit } = this.props;
    return (
      <div className='header_wrapper'>
        <h1 className='header_title'>
          Header Title
        </h1>
        <div className='search_wrapper'>
          <input className='search_input' type="text" onChange={search}/>
          <button className='search_submit' onClick={submit}><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      </div>
    )
  }
};

export default Header;