import React , {useState} from "react";
import { slide as Menu } from "react-burger-menu";

import './SideBar.css'


const SideBar  =  ({props})  => {

  return (

    <Menu>
    <a className="menu-item" href="/">
      Home
    </a>

    <a className="menu-item" href="/patient">
      Tests
    </a>


  </Menu>


  );
};


export default SideBar