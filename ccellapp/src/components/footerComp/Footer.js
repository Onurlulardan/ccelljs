import React, { useEffect, useState } from 'react'
import styles from '../footerComp/footer.module.css';
import { Link } from "react-router-dom";
import axios from 'axios';

import ada from '../../assets/img/ada.svg';
import logo from '../../assets/img/new_logo_white.svg';
import phonecall from '../../assets/img/phonecall.svg';
import mail from '../../assets/img/mail.svg';
import face from '../../assets/img/face.svg';
import insta from '../../assets/img/insta.svg';
import tw from '../../assets/img/tw.svg';
import linked from '../../assets/img/linked.svg';

const Footer = () => {
    const API = process.env.REACT_APP_MY_API
    const [footerHeader, setFooterHeader] = useState([]);
    const [categories, setCategories] = useState([]);
    const [campains, setCampains] = useState([]);

    const getFooterHeader = async () => {
        try {
            await axios.get(`${API}General/GetSetting`).then(res => {
                setFooterHeader(res.data.Data);
            });
        } catch (error) {
            console.log(error)
        }
    }
    const getCategories = async () => {
        try {
            await axios.get(`${API}Product/GetCategories`).then(res => {
                setCategories(res.data.Data);
                console.log(res.data.Data);
            })
        } catch (error) {
            console.log(error)
        }
    }
    const getCampains = async () => {
        try {
            await axios.get(`${API}General/GetCampaign`).then(res => {
                setCampains(res.data.Data);
                console.log(res.data.Data);
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getFooterHeader();
        getCategories();
        getCampains();
    },[]);

    return (
        <section id='foot' className={styles.footerContainer}>
            <footer>
                <div className={styles.footerHeader}>
                    <div className={styles.footerHeaderItem}>
                        <i className="ri-whatsapp-line"></i>
                        <div className={styles.footerHeaderText}>
                            <a href={`https://wa.me/${footerHeader.phone1}`} target="blank"> {footerHeader.phone1} </a>
                            <p>WhatsApp Hatt??</p>
                        </div>
                    </div>
                    <div className={styles.footerHeaderItem}>
                        <img className='pt-1' src={phonecall} />
                        <div className={`${styles.footerHeaderText} ml-2`}>
                            <a href={`tel:${footerHeader.phone2}`}> { footerHeader.phone2 } </a>
                            <p>Sat???? ve Ba??vuru Takip</p>
                        </div>
                    </div>
                    <div className={styles.footerHeaderItem}>
                        <img className='pt-1' src={mail}/>
                        <div className={`${styles.footerHeaderText} ml-2`}>
                            <a href={`mailto:${footerHeader.email}`}> { footerHeader.email } </a>
                            <p>7/24 Destek</p>
                        </div>
                    </div>
                    <div className={styles.footerHeaderItem}>
                        <div className={styles.footerHeaderText}>
                            <h6>Bizi Takip Edin</h6>
                            <div className={styles.footerHeaderSocialIcon}>
                                <a href={footerHeader.instagram} target="blank">
                                    <img src={insta} />
                                </a>
                                <a href={footerHeader.facebook} target="blank">
                                    <img src={face} />
                                </a>
                                <a href={footerHeader.twitter} target="blank">
                                    <img src={tw} />
                                </a>
                                <a href={footerHeader.linkedin} target="blank">
                                    <img src={linked} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footerContent}>
                    <div>
                        <h1>Hizmetler</h1>
                        <ul> 
                            { categories.map((item, index) => {
                                return <li key={index}>
                                <Link to={`/internetpackages/${item.id}`} target={'_top'}> { item.category_name } </Link>
                            </li>
                            }) }
                            <li>
                                <Link to="/modem" target={'_top'}>Modem</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1>??nternet Paketleri</h1>
                        <ul> 
                            { campains.slice(0, 5).map((item, index)=> {
                                return <li key={index}>
                                <Link to={`/internetcampainsdetail/${item.id}`} state={{ item: item}}> { item.campaign_title } </Link>
                            </li>
                            }) }
                        </ul>
                    </div>
                    <div>
                        <h1>Hakk??m??zda</h1>
                        <ul> 
                            <li>
                                <Link to="/ccell" target={'_top'}>
                                    Bizi Tan??y??n
                                </Link>
                            </li>
                            <li>
                                <Link to="/mission" target={'_top'}>
                                    Vizyon & Misyon
                                </Link>
                            </li>
                            <li>
                                <Link to="/licances" target={'_top'}>
                                    Lisanslar??m??z
                                </Link>
                            </li>
                            <li>
                                <Link to="/press" target={'_top'}>
                                    Bas??nda Biz
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1>????lemler</h1>
                        <ul> 
                            <li>
                                <Link to="/reseller" target={'_top'}>
                                    Alt yap?? Sorgulama
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" target={'_top'}>
                                    Online ????lemler
                                </Link>
                            </li>
                            <li>
                                <a href="#">H??z Testi</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1>Destek</h1>
                        <ul> 
                            <li>
                                <Link to="/reseller" target={'_top'}>
                                    Sat???? Noktalar??
                                </Link>
                            </li>
                            <li>
                                <Link to="/soldform" target={'_top'}>
                                    Bayilik Ba??vurusu
                                </Link>
                            </li>
                            {/* <li>
                                <a href="#">Formlar ve S??zle??meler</a>
                            </li> */}
                            <li>
                                <Link to="/blog" target={'_top'}>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/sss" target={'_top'}>
                                    S.S.S
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" target={'_top'}>
                                    ??leti??im
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.footerBottomContent}> 
                        <div className={styles.footerBottomContentLogo}>
                            <div>
                                <img src={logo}/>
                            </div>
                            <p>?? 2022 Ccell   -    <span> <Link to="/privacy" target={'_top'}>Gizlilik</Link> </span>  |  <span> <Link to="/cookie" target={'_top'}>??erez Politikas??</Link> </span>    | <span> <Link to="/kvkk" target={'_top'}>Ki??isel Verilerin Korunmas??</Link> </span>   </p>
                        </div>
                        <div>
                            <a href="https://adadijital.com/" target={'_blank'}>
                                <img src={ada} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer