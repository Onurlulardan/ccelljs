import React from 'react';
import styles from '../assets/about.module.css';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Mission = () => {
  return (
    <main>
        <section>
            <div className={styles.pageHeader}>
                <h1>Misyonumuz </h1>
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
                <p>
                Yüksek hedeflere koşan yaklaşımımızla, yenilikçi ve rekabetçi iletişim hizmetlerini güvenilir ve ekonomik koşullarda sunarak müşterilerimizi memnun etmek, ileri teknoloji şirketi olma konumunu sürdürmek ve geliştirmektir.

Modern hayatın temelini oluşturan internet, vazgeçilmez bir iletişim aracı olarak hayatımızda önemli bir özne hâline gelmiştir. Bilgi toplumu olma yolunda hızla ilerlediğimiz bu süreçte MyFi, geniş hizmet ağı ve yüksek kalitesi ile sektörde yerini almıştır.

MyFi, yeni yüzü, hızlı, güvenilir ve çözüm odaklı hizmet anlayışı ile birey ve kurumların iletişim ihtiyaçlarını karşılamak üzere 2013 yılında bilişim dünyasına adım atmıştır. Yeni dinamikler doğrultusunda hizmetlerini geliştirmeye devam eden MyFi, dijital dönüşüme katkı sağlayan bir oyuncu olarak pazarda yerini almıştır.

MyFi, tüm Türkiye genelinde ses, data ve katma değerli hizmetleri bireysel ve kurumsal anlamda sunabilen bir internet servis sağlayıcısıdır. Gerek xDSL erişim teknolojileri, gerekse fiber optik kablo altyapıları üzerinden müşterilerine ulaşan MyFi, altyapı sağlayıcıları ile yaptığı anlaşmalar çerçevesinde yurt içinde her noktaya hizmet vermektedir.

Sıra dışı internetin büyülü dünyasını MyFi ile keşfedin!

                </p>
                <div className={styles.vission}>
                <h1 className={styles.vissionHeader}>Vizyonumuz</h1>
                <p className={styles.vissionText}>Yalınlık, Müşteri odaklılık ve yeni teknolojilerle fark yaratan, tercih edilen yeni nesil operatör olmak.</p>
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
                        <a className="active" href="#">Misyon & Vizyon</a>
                    </div>
                    <div>
                        <a href="#">Lisanslarımız</a>
                    </div>
                    <div>
                        <a href="#">Basında Biz</a>
                    </div>
            </div>
        </section>
    </main>
  )
}

export default Mission