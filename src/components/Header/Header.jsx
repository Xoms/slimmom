import React, { Component, Fragment } from "react"
import Media from "react-media"
// import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { BurgerMenu, Burger } from "../BurgerMenu"
import { Logo, LogoText } from "../Logo"
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
    const { isAuth = true } = this.props
    const { isOpen } = this.state

    return (
      <>
        <header>
          <div className={styles.container}>
            <NavLink exact to="/diary" className={styles.logoLink}>
              <div className={styles.logoContainer}>
              
                <Media
                  queries={{
                    small: "(max-width: 320px)",
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
                    small: "(max-width: 320px)",
                    medium: "(min-width: 768px) and (max-width: 1099px)",
                    large: "(min-width: 1100px)",
                  }}
                >
                  {(matches) => (
                    <Fragment>
                      {matches.small && (
                        <>{isAuth ? (
                          <div className={styles.navigationAuth} onClick={() => this.handleToggle()}>
                            {!isOpen ? (
                              <Burger />
                            ) : (
                              <button type="button" className={styles.closeBtn}>
                                X
                              </button>
                            )}
                          </div>
                        ) : (
                          <div className={styles.navigation}> ВХОД | РЕГИСТРАЦИЯ </div> //тут будет комп NAV
                        )}
                        {isAuth && <div>User Profile</div>} 
                        </>
                      )}
                      {matches.medium && (
                        <>{isAuth ? (
                          <div className={styles.navigationAuth} onClick={() => this.handleToggle()}>
                            {/* сюда вставить UserMenu */}
                            {isAuth && <div>User Profile</div>} 
                            
                            {!isOpen ? (
                              <Burger />
                            ) : (
                              <button type="button" className={styles.closeBtn}>
                                X
                              </button>
                            )}
                          </div>
                        ) : (
                          <div className={styles.navigation}> ВХОД | РЕГИСТРАЦИЯ </div> //тут будет комп NAV
                        )}</>
                      )}
                      {matches.large && (
                        <>{isAuth ? (
                          <div className={styles.navigationAuth} onClick={() => this.handleToggle()}>
                            <AuthNavigations />
                            {/* сюда вставить UserMenu */}
                            {isAuth && <div>User Profile</div>} 
                          </div>
                        ) : (
                          <div className={styles.navigation}> ВХОД | РЕГИСТРАЦИЯ </div> //тут будет комп NAV
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
