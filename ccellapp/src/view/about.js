import React from 'react';
import styles from '../assets/about.module.css';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const  About = () => {
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit mollis elit, sed tempor elit varius ac. Phasellus aliquet, odio vel lobortis bibendum, velit dui bibendum nunc, eget sagittis purus ipsum in nibh. Nullam fermentum semper interdum. Sed vel turpis sed justo elementum ornare. Cras accumsan magna quis justo posuere, a interdum quam iaculis. Mauris mattis neque sapien, a faucibus ligula pellentesque eget. Sed congue pharetra magna, eget pharetra justo vehicula a. Nullam efficitur rhoncus turpis a iaculis. Etiam porta tortor non turpis tristique imperdiet. Curabitur ultrices elit a odio tristique, quis luctus dolor iaculis.

In ante tellus, pulvinar in vulputate at, lobortis sed purus. Integer condimentum metus tellus, eu dignissim justo suscipit at. Phasellus aliquam tincidunt dui, nec commodo sapien dapibus vitae. Praesent scelerisque tellus elit. Duis quis auctor nisl. Etiam ut auctor diam. Suspendisse vitae eros a libero venenatis lobortis. Phasellus imperdiet, diam quis consectetur tincidunt, purus augue euismod tortor, ut imperdiet magna dui sed purus. Proin lacinia nunc quis tellus pellentesque, rutrum tristique purus hendrerit. Nulla mauris quam, dictum quis tincidunt ut, mattis eu nibh. Phasellus viverra, magna eget venenatis faucibus, ipsum orci pharetra sem, eu faucibus arcu ligula lacinia erat. Sed eget malesuada magna.

Aenean eu venenatis libero, at dictum nulla. Ut in interdum dolor. Proin egestas libero ut fringilla imperdiet. Maecenas non quam urna. Nam blandit luctus nisi, nec rutrum risus rutrum sit amet. Sed feugiat lectus ligula, eget tincidunt sapien sodales eu. Mauris suscipit imperdiet nisi, nec tempor nibh ornare sed. Nunc tincidunt iaculis lacus eu aliquam. Sed sed ipsum luctus velit iaculis luctus. Sed dignissim neque et sapien gravida, sit amet venenatis neque malesuada. Curabitur massa augue, varius nec rhoncus a, euismod vitae odio. Praesent sed arcu vitae quam sollicitudin molestie. Mauris sollicitudin, lectus non fermentum tempus, arcu turpis sollicitudin turpis, quis luctus mauris enim et augue. Morbi tincidunt leo quis velit pulvinar, ac rhoncus eros varius. Etiam consequat tincidunt felis eu commodo.</p>
            </div>
            <div className={styles.pageContentMenu}>
                    <div>
                        <a className="active" href="#">Hakkımızda</a>
                    </div>
                    <div>
                        <a href="#">Net Fiber</a>
                    </div>
                    <div>
                        <a href="#">Misyon & Vizyon</a>
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

export default About