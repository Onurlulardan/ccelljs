import React from 'react';
import styles from '../assets/press.module.css';

import pressimg from '../assets/img/pressimg.png';
import calendar from '../assets/img/calendar.svg';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Press() {
  return (
    <main>
        <section>
            <div className={styles.pageHeader}>
                <h1>Hakkımızda</h1>
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
                <div className={`${styles.pressItem} group`}>
                    <img className={styles.pressImg} src={pressimg} />
                    <div> <img src={calendar} /> <p>25 Ağustos 2022</p> </div>
                    <p className={styles.pressItemText}>İnternetinizin Performansını Nasıl Artırırsınız? İşte Size Birkaç İpucu!</p>
                    <a className={`${styles.pressBtn} group-hover:visible`} href="#">Devamını Oku <i className="ri-arrow-right-line pl-2"></i></a>
                </div>
                <div className={`${styles.pressItem} group`}>
                    <img className={styles.pressImg} src={pressimg} />
                    <div> <img src={calendar} /> <p>25 Ağustos 2022</p> </div>
                    <p className={styles.pressItemText}>İnternetinizin Performansını Nasıl Artırırsınız? İşte Size Birkaç İpucu!</p>
                    <a className={`${styles.pressBtn} group-hover:visible`} href="#">Devamını Oku <i className="ri-arrow-right-line pl-2"></i></a>
                </div>
                <div className={`${styles.pressItem} group`}>
                    <img className={styles.pressImg} src={pressimg} />
                    <div> <img src={calendar} /> <p>25 Ağustos 2022</p> </div>
                    <p className={styles.pressItemText}>İnternetinizin Performansını Nasıl Artırırsınız? İşte Size Birkaç İpucu!</p>
                    <a className={`${styles.pressBtn} group-hover:visible`} href="#">Devamını Oku <i className="ri-arrow-right-line pl-2"></i></a>
                </div>
                <div className={`${styles.pressItem} group`}>
                    <img className={styles.pressImg} src={pressimg} />
                    <div> <img src={calendar} /> <p>25 Ağustos 2022</p> </div>
                    <p className={styles.pressItemText}>İnternetinizin Performansını Nasıl Artırırsınız? İşte Size Birkaç İpucu!</p>
                    <a className={`${styles.pressBtn} group-hover:visible`} href="#">Devamını Oku <i className="ri-arrow-right-line pl-2"></i></a>
                </div>
                <div className={`${styles.pressItem} group`}>
                    <img className={styles.pressImg} src={pressimg} />
                    <div> <img src={calendar} /> <p>25 Ağustos 2022</p> </div>
                    <p className={styles.pressItemText}>İnternetinizin Performansını Nasıl Artırırsınız? İşte Size Birkaç İpucu!</p>
                    <a className={`${styles.pressBtn} group-hover:visible`} href="#">Devamını Oku <i className="ri-arrow-right-line pl-2"></i></a>
                </div>
                <div className={`${styles.pressItem} group`}>
                    <img className={styles.pressImg} src={pressimg} />
                    <div> <img src={calendar} /> <p>25 Ağustos 2022</p> </div>
                    <p className={styles.pressItemText}>İnternetinizin Performansını Nasıl Artırırsınız? İşte Size Birkaç İpucu!</p>
                    <a className={`${styles.pressBtn} group-hover:visible`} href="#">Devamını Oku <i className="ri-arrow-right-line pl-2"></i></a>
                </div>
                <div className={`${styles.pressItem} group`}>
                    <img className={styles.pressImg} src={pressimg} />
                    <div> <img src={calendar} /> <p>25 Ağustos 2022</p> </div>
                    <p className={styles.pressItemText}>İnternetinizin Performansını Nasıl Artırırsınız? İşte Size Birkaç İpucu!</p>
                    <a className={`${styles.pressBtn} group-hover:visible`} href="#">Devamını Oku <i className="ri-arrow-right-line pl-2"></i></a>
                </div>
                <div className={`${styles.pressItem} group`}>
                    <img className={styles.pressImg} src={pressimg} />
                    <div> <img src={calendar} /> <p>25 Ağustos 2022</p> </div>
                    <p className={styles.pressItemText}>İnternetinizin Performansını Nasıl Artırırsınız? İşte Size Birkaç İpucu!</p>
                    <a className={`${styles.pressBtn} group-hover:visible`} href="#">Devamını Oku <i className="ri-arrow-right-line pl-2"></i></a>
                </div>
                <div className={`${styles.pressItem} group`}>
                    <img className={styles.pressImg} src={pressimg} />
                    <div> <img src={calendar} /> <p>25 Ağustos 2022</p> </div>
                    <p className={styles.pressItemText}>İnternetinizin Performansını Nasıl Artırırsınız? İşte Size Birkaç İpucu!</p>
                    <a className={`${styles.pressBtn} group-hover:visible`} href="#">Devamını Oku <i className="ri-arrow-right-line pl-2"></i></a>
                </div>
            </div>
            <div className={styles.pageContentMenu}>
                    <div>
                        <a  href="#">Hakkımızda</a>
                    </div>
                    <div>
                        <a href="#">Ccell</a>
                    </div>
                    <div>
                        <a href="#">Misyon & Vizyon</a>
                    </div>
                    <div>
                        <a href="#">Lisanslarımız</a>
                    </div>
                    <div>
                        <a className="active" href="#">Basında Biz</a>
                    </div>
            </div>
        </section>
    </main>
  )
}

export default Press