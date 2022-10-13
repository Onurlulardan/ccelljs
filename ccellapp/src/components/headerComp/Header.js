import React, {useState} from 'react';
import styles from '../headerComp/header.module.css';
import { Link } from "react-router-dom";


import logo from '../../assets/img/new_logo_white.svg';

const Header = () => {
    const [active, setActive] = useState(false);

    const mobilemenu = () => {
      setActive(!active);
      const main = document.querySelector('main');
      const foot = document.querySelector('#foot');
      main?.classList.toggle('customheight');
      foot?.classList.toggle('customheight');
    }
  
    return (
      <header className={styles.header}>
         <div className={styles.headerTop}>
          <div className={styles.headerTopItem}>
            <ul>
              <li>
                <Link to="/sss">
                  S.S.S
                </Link>
              </li>
              <li>
                <Link to="/soldform">
                  Satış Noktalarımız ve Talep Formu
                </Link>
              </li>
            </ul>
            <div className={`${styles.langMenuCover} group`} tabIndex={0}>
              <div className={styles.langMenu}>
                <i className="ri-global-line"></i>
                <a href={void(0)}>English</a>
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <div className={`${styles.langMenuHover} group-focus:flex`}>
                <a href="#">Türkçe</a>
                <a href="#">Almanca</a>
              </div>
            </div>
          </div>
         </div>
         <div className={styles.headerMenuCover}>
          <div className={styles.headerMenu}>
            <div className={styles.headerLogoTop} >
              <Link to="/">
                  <img className={styles.headerLogo} src={logo} alt="logo"/>
              </Link>
            </div>
            <div className={styles.headerLink}>
              <ul>
                <li>
                  <Link to="/internetcampains" target={'_top'}>
                    Kampanyalar
                  </Link>
                </li>
                <li>
                <Link to="/internetpackages">
                    İnternet Paketleri
                  </Link>
                </li>
                <li>
                <Link to="/reseller">
                    Altyapı Sorgula
                  </Link>
                </li>
                <li>
                <Link to="/">
                    Hız Testi
                  </Link>
                </li>
                <li>
                <Link to="/login" className={styles.menuBtn}>
                  {/* <a className={styles.menuBtn} > Online İşlemler </a> */}
                  Online İşlemler
                  </Link>
                </li>
              </ul>
            </div>
            <div onClick={(e) => {mobilemenu()}} className={styles.headerMobilMenu}>
              <i className="ri-menu-line"></i>
            </div>
          </div>
         </div>
         {active === true ? (
          <div className={`${styles.headerMobilMenus} ${styles.headerMobilMenu}`}>
          <div className={styles.headerMobilMenuTop}>
          <div className={styles.headerLogoMobile}>
            <Link to="/">
                <img className={`${styles.headerLogo}`} src={logo} alt="logo"/>
            </Link>
          </div>
          <div onClick={(e)=> {mobilemenu()}}>
            <i className="ri-close-line"></i>
          </div>
          </div>
          <div className={styles.headerMobilMenuContent}>
            <div className={styles.headerMobilMenuContentItem}>
              <Link to="/internetcampaigns">
                    Kampanyalar
                  </Link>
            </div>
            <div className={styles.headerMobilMenuContentItem}>
            <Link to="/internetpackages">
                    İnternet Paketleri
                  </Link>
            </div>
            <div className={styles.headerMobilMenuContentItem}>
            <Link to="/reseller">
                    Altyapı Sorgula
                  </Link>
            </div>
            <div className={styles.headerMobilMenuContentItem}>
            <Link to="/">
                    Hız Testi
                  </Link>
            </div>
            <div className={styles.headerMobilMenuContentItem}>
              <Link to="/about">
                    Hakkımızda
                  </Link>
  
            </div>
            <div className={styles.headerMobilMenuContentItem}>
              <Link to="/about">
                    Satış Noktaları
                  </Link>
            </div>
            <div className={styles.headerMobilMenuContentItem}>
              <Link to="/about">
                    Destek
                  </Link>
            </div>
            <div className={styles.onlineislem}>
            <Link to="/login">
              <a className={styles.onlineislembtn} > Online İşlemler </a>
              </Link>
          </div>
          <div className={styles.lang}>
          <div className={`${styles.langMenuCover} group`} tabIndex={0}>
              <div className={styles.langMenu}>
                <i className="ri-global-line"></i>
                <a href={void(0)}>English</a>
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <div className={`${styles.langMenuHover} group-focus:flex`}>
                <a href="#">Türkçe</a>
                <a href="#">Almanca</a>
              </div>
            </div>
          </div>
          </div>
     </div>
         ) : ""}
      </header>
    )
}

export default Header