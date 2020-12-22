import React, { Component, Fragment } from "react"
import Media from "react-media"
// import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { BurgerMenu, Burger } from "../BurgerMenu"
import { Logo, LogoText } from "../Logo"
import NavigationBar from '../NavigationBar';
import UserInfo from '../UserInfo';
import AuthNavigations from '../AuthNavigations';
import styles from "./Header.module.scss"
import withAuth from "../hocs/withAuth"

class Header extends Component {
  state = {
    isOpen: false,
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { isAuth=true } = this.props
    const { isOpen } = this.state

    return (
      <>
        <header>
          <div className={styles.container}>
            <NavLink exact to="/diary" className={styles.logoLink}>
              <div className={styles.logoContainer}>
              
                <Media
                  queries={{
                    small: "(min-width: 320px) and (max-width: 767px)",
                    medium: "(min-width: 768px) and (max-width: 1099px)",
                    large: "(min-width: 1100px)",
                  }}
                >
                  {(matches) => (
                    <Fragment>
                      {matches.small && (
                        <><Logo /> {isAuth && <LogoText />}</>
                      )}
                      {matches.medium && (
                        <><Logo /><LogoText /></>
                      )}
                      {matches.large && (
                        <><Logo /><LogoText /></>
                      )}
                    </Fragment>
                  )}
                </Media>
              </div>
            </NavLink>
            <div>
            <Media
                  queries={{
                    small: "(min-width: 320px) and (max-width: 767px)",
                    medium: "(min-width: 768px) and (max-width: 1099px)",
                    large: "(min-width: 1100px)",
                  }}
                >
                  {(matches) => (
                    <Fragment>
                      {matches.small && (
                        <>{isAuth ? (
                          <div className={styles.navigationAuth}>
                            {!isOpen ? (
                              <Burger onClick={this.handleToggle}/>
                            ) : (
                              <button type="button" className={styles.closeBtn} onClick={() => this.handleToggle()}>
                                X
                              </button>
                            )}
                          </div>
                        ) : (
                          <div className={styles.navigation}> <NavigationBar /></div> //тут будет комп NAV
                        )}
                        {isAuth && <div><UserInfo /></div>} 
                        </>
                      )}
                      {matches.medium && (
                        <>{isAuth ? (
                          <div className={styles.navigationAuth}>
                            {/* сюда вставить UserMenu */}
                            {isAuth && <div><UserInfo /></div>} 
                            
                            {!isOpen ? (
                              <Burger onClick={this.handleToggle}/>
                            ) : (
                              <button type="button" className={styles.closeBtn} onClick={() => this.handleToggle()}>
                                X
                              </button>
                            )}
                          </div>
                        ) : (
                          <div className={styles.navigation}> <NavigationBar /> </div> //тут будет комп NAV
                        )}</>
                      )}
                      {matches.large && (
                        <>{isAuth ? (
                          <div className={styles.navigationAuth}>
                            {isAuth && <div><UserInfo /></div>} 
                          </div>
                        ) : (
                          <div className={styles.navigation}> <NavigationBar /> </div>
                        )}</>
                      )}
                    </Fragment>
                  )}
                </Media>
              
            </div>
          </div>
          
        </header>
        {this.state.isOpen && <BurgerMenu />}
      </>
    )
  }
}

export default withAuth(Header)
