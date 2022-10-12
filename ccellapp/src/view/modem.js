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
                        <p>Sadece NetFiber’lilere özel evde internetinizde kullanacağınız Zyxel VMG3625-T50B modemi kısa bir süreliğine, kredi/banka kartına peşin 883,50 TL’ye satın alabilirsiniz.</p>
                        <div className={styles.purschare}>
                            <div>
                                <h6 className={styles.purschareText}>Vergiler Dahil</h6>
                                <h2 className={styles.purscharePrice}>883,50 <span className='text-xl'>TL</span> </h2>
                            </div>
                            <Link to="/buy" className={styles.purschareBtn} target={'_top'}>
                                Hemen Satın Al
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.pageContainer}>
                <div className={styles.pageContentHeader}>
                    <h1>Teknik Özellikler</h1>
                </div>
                <div className={styles.pageContentTable}>
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                            <th className={styles.thead}>Özellik</th>
                            <th className={styles.thead}>Açıklama</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.trow}>
                            <td className={styles.trhead}>Ürün Kategorisi</td>
                            <td className={styles.trbody}>AC1200 tam AC performansı, 300+867 Mbps</td>
                            </tr>
                            <tr className={styles.trow}>
                            <td className={styles.trhead}>Desteklenen Kablosuz Ağ Teknolojileri</td>
                            <td className={styles.trbody}>802.11 b/g/n/ac 2.4 GHz, 300 Mbps
                            802.11 a/n/ac 5 GHz, 867 Mbps</td>
                            </tr>
                            <tr className={styles.trow}>
                            <td className={styles.trhead}>Router/Modem Özellikleri</td>
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
                            <td className={styles.trhead}>LED Göstergesi</td>
                            <td className={styles.trbody}>Güç
                            WAN
                            Internet
                            LAN
                            WLAN-2.4G/WPS
                            WLAN-5G/WPS
                            Telefon</td>
                            </tr>
                            <tr className={styles.trow}>
                            <td className={styles.trhead}>Düğmeler</td>
                            <td className={styles.trbody}>Güç Düğmesi
                            Reset Düğmesi
                            WPS Düğmesi
                            WLAN Düğmesi</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
    </main>
  )
}

export default Modem