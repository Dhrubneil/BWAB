import React, { useState } from 'react';
import { CgLogIn } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { ImHome } from 'react-icons/im';
import { MdAppRegistration, MdConnectWithoutContact } from "react-icons/md";

import { NavLink } from 'react-router-dom';
import classes from '../Header.module.css';
import './navbar.css';
function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [bar, setBar] = useState([false, false, false, false, false, false])

  // const bar = [false, false, false, false, false, false]

  const handleToggle = () => {
    setToggle(!toggle)
  }

  // const handleBar = (index) => {
  //   const newState = [...bar]
  //   console.log("--------------------------------")
  //   console.log(newState)
    
  //   for (let i = 0; i < newState.length; i++) {
  //     if(i !== index) {
  //       newState[i] = false
  //     }
  //     else {
  //       newState[i] = true
  //     }
  //   }
  //   console.log(newState)
    
  //   // for(let i = 0; i < newState.length; i++){
  //   //   bar[i] = newState[i]
  //   // }
  //   setBar(newState)
  //   console.log(bar)
  //   console.log("--------------------------------")


  // }

  
  return (
    <>
    <div className='navbar'>
    <NavLink to="/home" className={classes.navLogo}>
    
    <div className='logo'>
      <h1 className='logo-header'>BWAB</h1>
      <div className='white-layer'></div>
      <div className='logo-name'>
        <small className='logo-name-sm'>Bankers' Welfare</small>
        <small className='logo-name-sm'>Association Bangladesh</small>
      </div>
    </div>
    </NavLink>
<div className='pipe'><div className="v-line"></div>
      </div>
      
      <div className='nav-links'>

        <div className='navlink_full'>
        
          <NavLink to="/home" className={(navInfo) => (
            navInfo.isActive? classes.active:classes.navlink
            )
          }>
        
          {({isActive}) => {
            return isActive? (
              <>
              <p>HOME</p>
              <div className='nav_link_under_active'></div>
              
              </>
            ):
            (
              <>
              <p>HOME</p>

              <div className='nav_link_under'></div>
              </>
            )
          }}
              


      
          </NavLink>

          {/*<div className={bar[0]? classes.nav_link_under_active: classes.nav_link_under}></div>*/}
        </div>

        <div className='navlink_full'>
          <NavLink to="/about" className={(navInfo) => (
            navInfo.isActive? classes.active:classes.navlink
            )
          } >
            {({isActive}) => {
            return isActive? (
              <>
              <p>ABOUT</p>
              <div className='nav_link_under_active'></div>
              </>
            ):
            (
              <>
              <p>ABOUT</p>

              <div className='nav_link_under'></div>
              </>
            )
          }}
          </NavLink>
           {/*<div className={bar[1]? classes.nav_link_under_active: classes.nav_link_under}></div>*/}
        </div>
    
    <div className='navlink_full'>
    
    <NavLink to="/members" className={(navInfo) => (
      navInfo.isActive? classes.active:classes.navlink)}>
      
        {({isActive}) => {
            return isActive? (
              <>
              <p>MEMBERS</p>
              <div className='nav_link_under_active'></div>
              </>
            ):
            (
              <>
              <p>MEMBERS</p>

              <div className='nav_link_under'></div>
              </>
            )
          }}
        
    </NavLink>
    {/*<div className={bar[2]? classes.nav_link_under_active: classes.nav_link_under}></div>*/}
    </div>
    
    <div className='navlink_full'>
    
    <NavLink to="/register" className={(navInfo) => (
      navInfo.isActive? classes.active:classes.navlink)}>
        {({isActive}) => {
            return isActive? (
              <>
              <p>REGISTER</p>
              <div className='nav_link_under_active'></div>
              </>
            ):
            (
              <>
              <p>REGISTER</p>

              <div className='nav_link_under'></div>
              </>
            )
          }}
        </NavLink>
        {/*<div className={bar[3]? classes.nav_link_under_active: classes.nav_link_under}></div>*/}
    </div>
        
    <div className='navlink_full'>
    
    <NavLink to="/contact" className={(navInfo) => (
      navInfo.isActive? classes.active:classes.navlink)}>
        {({isActive}) => {
            return isActive? (
              <>
              <p>CONTACT</p>
              <div className='nav_link_under_active'></div>
              </>
            ):
            (
              <>
              <p>CONTACT</p>

              <div className='nav_link_under'></div>
              </>
            )
          }}
        </NavLink>
        {/*<div className={bar[4]? classes.nav_link_under_active: classes.nav_link_under}></div>*/}
    </div>

    <div className='navlink_full'>
    
    <NavLink to="/login" className={(navInfo) => (
      navInfo.isActive? classes.active:classes.navlink)}>
        {({isActive}) => {
            return isActive? (
              <>
              <p>LOG IN</p>
              <div className='nav_link_under_active'></div>
              </>
            ):
            (
              <>
              <p>LOG IN</p>

              <div className='nav_link_under'></div>
              </>
            )
          }}

        </NavLink>
        {/*<div className={bar[5]? classes.nav_link_under_active: classes.nav_link_under}></div>*/}
    </div>  

      </div>

      <div className='nav_links_icons'>
      <NavLink to="/home" className={(navInfo) => (
        navInfo.isActive? classes.active: classes.navlink
      )}>
      
      {({isActive}) => {
        return isActive? (
          <>
          <div className='nav_link_icon'>
          
          <ImHome style={{padding: "0.5rem", height: "1.5rem", width: "1.5rem", border: "2px solid rgb(20, 175, 236)", borderRadius: "50%", scale: "1.0125"}}/>
          <small>HOME</small>
          </div>
          </>
        ):
        (<>
          <div className='nav_link_icon'>
        <ImHome style={{padding: "0.5rem", height: "1.5rem", width: "1.5rem", border: "2px solid rgb(255, 255, 255)", borderRadius: "50%"}}/>
          <small>HOME</small>
          </div>
        </>)
      }}
      </NavLink>
      <NavLink to="/about" className={(navInfo) => (
        navInfo.isActive? classes.active: classes.navlink
      )}>

      {({isActive}) => {
        return isActive? (
          <>
          <div className='nav_link_icon'>
          
          <GrContactInfo style={{padding: "0.5rem", height: "1.5rem", width: "1.5rem", border: "2px solid rgb(20, 175, 236)", borderRadius: "50%", scale: "1.0125"}}/>
          <small>ABOUT</small>
          </div>
          </>
        ):
        (<>
          <div className='nav_link_icon'>
        <GrContactInfo style={{padding: "0.5rem", height: "1.5rem", width: "1.5rem", border: "2px solid rgb(255, 255, 255)", borderRadius: "50%"}}/>
          <small>ABOUT</small>
          </div>
        </>)
      }}
      </NavLink>

      <NavLink to="/members" className={(navInfo) => (
        navInfo.isActive? classes.active: classes.navlink
      )}>

      {({isActive}) => {
        return isActive? (
          <>
          <div className='nav_link_icon'>
          
          <FaUsers style={{padding: "0.5rem", height: "1.5rem", width: "1.5rem", border: "2px solid rgb(20, 175, 236)", borderRadius: "50%", scale: "1.0125"}}/>
          <small>MEMBERS</small>
          </div>
          </>
        ):
        (<>
          <div className='nav_link_icon'>
        <FaUsers style={{padding: "0.5rem", height: "1.5rem", width: "1.5rem", border: "2px solid rgb(255, 255, 255)", borderRadius: "50%"}}/>
          <small>MEMBERS</small>
          </div>
        </>)
      }}
      </NavLink>


      <NavLink to="/register" className={(navInfo) => (
        navInfo.isActive? classes.active: classes.navlink
      )}>
      
      {({isActive}) => {
        return isActive? (
          <>
          <div className='nav_link_icon'>
          
          <MdAppRegistration style={{padding: "0.5rem", height: "1.5rem", width: "1.5rem", border: "2px solid rgb(20, 175, 236)", borderRadius: "50%", scale: "1.0125"}}/>
          <small>REGISTER</small>
          </div>
          </>
        ):
        (<>
          <div className='nav_link_icon'>
        <MdAppRegistration style={{padding: "0.5rem", height: "1.5rem", width: "1.5rem", border: "2px solid rgb(255, 255, 255)", borderRadius: "50%"}}/>
          <small>REGISTER</small>
          </div>
        </>)
      }}
      </NavLink>

      <NavLink to="/contact" className={(navInfo) => (
        navInfo.isActive? classes.active: classes.navlink
      )}>
      
      {({isActive}) => {
        return isActive? (
          <>
          <div className='nav_link_icon'>
          
          <MdConnectWithoutContact style={{padding: "0.5rem", height: "1.5rem", width: "1.5rem", border: "2px solid rgb(20, 175, 236)", borderRadius: "50%", scale: "1.0125"}}/>
          <small>CONTACT</small>
          </div>
          </>
        ):
        (<>
          <div className='nav_link_icon'>
        <MdConnectWithoutContact style={{padding: "0.5rem", height: "1.5rem", width: "1.5rem", border: "2px solid rgb(255, 255, 255)", borderRadius: "50%"}}/>
          <small>CONTACT</small>
          </div>
        </>)
      }}
      </NavLink>
      <NavLink to="/login" className={(navInfo) => (
        navInfo.isActive? classes.active: classes.navlink
      )}>
      
      {({isActive}) => {
        return isActive? (
          <>
          <div className='nav_link_icon'>
          
          <CgLogIn style={{padding: "0.5rem", height: "1.5rem", width: "1.5rem", border: "2px solid rgb(20, 175, 236)", borderRadius: "50%", scale: "1.0125"}}/>
          <small>LOG IN</small>
          </div>
          </>
        ):
        (<>
          <div className='nav_link_icon'>
        <CgLogIn style={{padding: "0.5rem", height: "1.5rem", width: "1.5rem", border: "2px solid rgb(255, 255, 255)", borderRadius: "50%"}}/>
          <small>LOG IN</small>
          </div>
        </>)
      }}
      </NavLink>
      </div>

      <div className='menu hide' onClick={handleToggle}>
        <div className='h-line'></div>
        <div className='h-line'></div>
        <div className='h-line'></div>   
      </div>
      </div>
      {
        toggle? 
        (
          
          <div className='v-nav-links'>
            <div className='nav-link'>
              <p className="v-nav-link-text">HOME</p>
            </div>

            <div className='nav-link'>
              <p className="v-nav-link-text">ABOUT</p>
            </div>

            <div className='nav-link'>
              <p className="v-nav-link-text">MEMBERS</p>
            </div>

            <div className='nav-link'>
              <p className="v-nav-link-text">REGISTER</p>
            </div>

            <div className='nav-link'>
              <p className="v-nav-link-text">CONTACT</p>
            </div>

            <div className='nav-link'>
              <p className="v-nav-link-text">LOG IN</p>
            </div>

      </div>
        )
        :
        (
          <>
          
          </>
        )
      }
    </>
  )
}

export default Navbar