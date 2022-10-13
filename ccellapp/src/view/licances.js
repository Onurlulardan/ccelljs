import React from 'react';
import styles from '../assets/licances.module.css';

import lisans1 from '../assets/img/lisans1.png';
import lisans2 from '../assets/img/lisans2.png';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

function Licances() {
  return (
    <main>
        <section>
            <div className={styles.pageHeader}>
                <h1>Lisanslarımız</h1>
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
                <p>  Adnet İnternet ve İletişim Hizmetleri Tic. Ltd. Şti.’ye ait Myfi ve Myvoip Markaları Bilgi Teknolojileri ve İletişim Kurumunun gerekli izin ve yetkilerine sahiptir.</p>
                <div className={styles.licancesCover}>
                    <div className={styles.licance}>
                        <img className={styles.licanceimg} src={lisans1} />
                    </div>
                    <div className={styles.licance}>
                        <img className={styles.licanceimg} src={lisans2} />
                    </div>
                </div>
            </div>
            <div className={styles.pageContentMenu}>
                    <div>
                        <Link target={'_top'} to="/about" >Hakkımızda</Link>
                    </div>
                    <div>
                        <Link target={'_top'} to="/ccell">Ccell</Link>
                    </div>
                    <div>
                        <Link target={'_top'} to="/mission" >Misyon & Vizyon</Link>
                    </div>
                    <div>
                        <Link target={'_top'} to="/licances" className="active">Lisanslarımız</Link>
                    </div>
                    <div>
                        <Link target={'_top'} to="/blog">Basında Biz</Link>
                    </div>
            </div>
        </section>
    </main>
  )
}

export default Licances