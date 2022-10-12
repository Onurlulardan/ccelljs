import React, { useEffect, useState } from 'react';
import styles from '../assets/about.module.css';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Kvkk = () => {
    const API = process.env.REACT_APP_MY_API;
    const IMG_PATH = process.env.REACT_APP_IMG_PATH;
    const [privacy, setPrivacy] = useState([]);
    const [menu, setMenu] = useState([]);


    const getPrivacy = async () => {
        try {
            await axios.get(`${API}General/GetContractDetail?contract_id=3`).then(res => {
                setPrivacy(res.data.Data);
                console.log(res.data.Data);
            });
        } catch (error) {
            console.log(error);
        }
    }

    const getMenu = async () => {
        try {
            await axios.get(`${API}General/GetContracts`).then(res => {
                setMenu(res.data.Data);
                console.log(res.data.Data);
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        getPrivacy();
        getMenu();
    },[]);

  return (
    <main>
        <section>
            <div className={styles.pageHeader}>
                <h1> {privacy.title} </h1>
            </div>
            <div className={styles.mobileMenu}>
            <Swiper
            modules={[ A11y]}
            loop={true}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
                320: {
                slidesPerView: 1.7,
                spaceBetween: 30,
                },
                640: {
                slidesPerView: 2.2,
                spaceBetween: 10,
                },
                768: {
                slidesPerView: 2.7,
                spaceBetween: 20,
                }
            }}
            >
            <SwiperSlide>
                <div className={styles.mobileMenuItem}>
                    <a href="#">İnternet Paketleri</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.mobileMenuItem}>
                    <a href="#">Fiber</a>
                </div>
            </SwiperSlide>
            </Swiper>
            </div>
        </section>
        <section className={styles.pageContentCover}>
            <div className={styles.pageContent}>
                <p> {privacy.desc} </p>
            </div>
            <div className={styles.pageContentMenu}>
                <div>
                    <Link  to="/privacy" target={'_top'}> Gizlilik </Link>
                </div>
                <div>
                    <Link  to="/cookie" target={'_top'}> Çerez Politikası </Link>
                </div>
                <div>
                    <Link className={'active'} to="/kvkk" target={'_top'}> Kişisel Verilerin Korunması </Link>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Kvkk