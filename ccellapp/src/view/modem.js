import React from 'react';
import { useRef, useState } from 'react';
import styles from '../assets/modem.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation , Thumbs } from "swiper";
import { Link } from 'react-router-dom';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import modemimg from '../assets/img/modem.png';
import modemsm from '../assets/img/modemsm.png';

const Modem = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <main>
            <section className={styles.pageHeader}>   
                <h1>
                    Zyxel  <span className='font-medium'>Modem</span>
                </h1>
            </section>
            <section className={styles.pageContainer}>   
                <div className={styles.pageSlider}>
                    <div className={styles.swiperCover}>
                    <div className={styles.swiperTop}>
                    <Swiper
                        spaceBetween={10}
                        loop={true}
                        navigation= {{
                            nextEl: '.modem-swiper-button-next',
                            prevEl: '.modem-swiper-button-prev'
                        }}
                        thumbs={{swiper: thumbsSwiper && !thumbsSwiper ? thumbsSwiper : null}}
                        modules={[FreeMode,Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <div className={styles.modemImgCover}>
                                <img className={styles.modemlg} src={modemimg}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.modemImgCover}>
                                <img className={styles.modemlg} src={modemimg}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.modemImgCover}>
                                <img className={styles.modemlg} src={modemimg}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.modemImgCover}>
                                <img className={styles.modemlg} src={modemimg}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.modemImgCover}>
                                <img className={styles.modemlg} src={modemimg}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.modemImgCover}>
                                <img className={styles.modemlg} src={modemimg}/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                    <div className={`${styles.swiperButtonCover} modem-swiper-cover`}>
                        <div className="modem-swiper-button-prev">
                        <i className="ri-arrow-left-s-line"></i>
                        </div>
                        <div className="modem-swiper-button-next">
                        <i className="ri-arrow-right-s-line"></i>
                        </div>
                    </div>
                    <div className={styles.swiperBottom}>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        onClick={setThumbsSwiper}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                        <img className={styles.modemsm} src={modemimg}/>
                        </SwiperSlide>
                        <SwiperSlide>
                        <img className={styles.modemsm} src={modemimg}/>
                        </SwiperSlide>
                        <SwiperSlide>
                        <img className={styles.modemsm} src={modemimg}/>
                        </SwiperSlide>
                        <SwiperSlide>
                        <img className={styles.modemsm} src={modemimg}/>
                        </SwiperSlide>
                        <SwiperSlide>
                        <img className={styles.modemsm} src={modemimg}/>
                        </SwiperSlide>
                        <SwiperSlide>
                        <img className={styles.modemsm} src={modemimg}/>
                        </SwiperSlide>
                        <SwiperSlide>
                        <img className={styles.modemsm} src={modemimg}/>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                    </div>
                    <div className={styles.swiperText}>
                        <h1>Zyxel VMG3625-T50B AC1200Mbps Vdsl/adsl Fiber Modem/router</h1>
                        <p>Sadece NetFiber???lilere ??zel evde internetinizde kullanaca????n??z Zyxel VMG3625-T50B modemi k??sa bir s??reli??ine, kredi/banka kart??na pe??in 883,50 TL???ye sat??n alabilirsiniz.</p>
                        <div className={styles.purschare}>
                            <div>
                                <h6 className={styles.purschareText}>Vergiler Dahil</h6>
                                <h2 className={styles.purscharePrice}>883,50 <span className='text-xl'>TL</span> </h2>
                            </div>
                            <Link to="/buy" className={styles.purschareBtn} target={'_top'}>
                                Hemen Sat??n Al
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.pageContainer}>
                <div className={styles.pageContentHeader}>
                    <h1>Teknik ??zellikler</h1>
                </div>
                <div className={styles.pageContentTable}>
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                            <th className={styles.thead}>??zellik</th>
                            <th className={styles.thead}>A????klama</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.trow}>
                            <td className={styles.trhead}>??r??n Kategorisi</td>
                            <td className={styles.trbody}>AC1200 tam AC performans??, 300+867 Mbps</td>
                            </tr>
                            <tr className={styles.trow}>
                            <td className={styles.trhead}>Desteklenen Kablosuz A?? Teknolojileri</td>
                            <td className={styles.trbody}>802.11 b/g/n/ac 2.4 GHz, 300 Mbps
                            802.11 a/n/ac 5 GHz, 867 Mbps</td>
                            </tr>
                            <tr className={styles.trow}>
                            <td className={styles.trhead}>Router/Modem ??zellikleri</td>
                            <td className={styles.trbody}>IEEE 802.1D transparent bridge & basic spanning tree
                            PPPoE (RFC 2516)
                            PPPoA (RFC 2364)
                            MAC encapsulation routing/IPoE
                            Network Address Translation (NAT)
                            NAT virtual server (port forwarding)
                            DHCP client/server/relay with DHCP option 43/60/61/125
                            DNS proxy/dynamic DNS
                            Static/Policy route
                            IGMP v1, v2, v3
                            IPv4/IPv6</td>
                            </tr>
                            <tr className={styles.trow}>
                            <td className={styles.trhead}>LED G??stergesi</td>
                            <td className={styles.trbody}>G????
                            WAN
                            Internet
                            LAN
                            WLAN-2.4G/WPS
                            WLAN-5G/WPS
                            Telefon</td>
                            </tr>
                            <tr className={styles.trow}>
                            <td className={styles.trhead}>D????meler</td>
                            <td className={styles.trbody}>G???? D????mesi
                            Reset D????mesi
                            WPS D????mesi
                            WLAN D????mesi</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
    </main>
  )
}

export default Modem