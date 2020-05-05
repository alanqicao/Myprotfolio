import React from 'react';
import{withRouter, Link} from 'react-router-dom';
import { Icon, Menu,Button,Dropdown } from 'semantic-ui-react'

const Navbar =()=>{
  return (
    <Menu icon='labeled' >
      <Link to ='/'>
    <Menu.Item
    
      name='Home'
      // active={activeItem === 'gamepad'}
      // onClick={this.handleItemClick}
    >
      
      <Icon name='power on' />
      Home
    </Menu.Item>
    </Link>

    <Link to='/Projects'>
    <Menu.Item
      name='Projects'
      // active={activeItem === 'video camera'}
      // onClick={this.handleItemClick}
    >
      <Icon name='file code' />
      Projects
    </Menu.Item>
    </Link>

    <Link to ='/Skills'>
    <Menu.Item
      name='Skills'
      // active={activeItem === 'video play'}
      // onClick={this.handleItemClick}
    >
      <Icon name='wrench' />
      Skills
    </Menu.Item>
    </Link>

    <Link to ='/Education'>
    <Menu.Item
      name='Education'
      // active={activeItem === 'video play'}
      // onClick={this.handleItemClick}
    >
      <Icon name='graduation cap' />
      Education
    </Menu.Item>
    </Link>

    <Link to ='/Experience'>
    <Menu.Item
      name='Experience'
      // active={activeItem === 'video play'}
      // onClick={this.handleItemClick}
    >
      <Icon name='suitcase' />
      Experience
    </Menu.Item>
    </Link>


    <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Chinese</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
          </Menu.Menu>
  </Menu>
  )
}

export default Navbar