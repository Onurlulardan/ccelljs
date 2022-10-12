import React, { useEffect, useState } from 'react';
import styles from '../assets/blogdetail.module.css';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import blogdetails from '../assets/img/blogdetail.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Blogdetail = () => {
    const API = process.env.REACT_APP_MY_API;
    const IMG_PATH = process.env.REACT_APP_IMG_PATH;
    const { id } = useParams();

    const [blog, setBlog] = useState([]);

    const getBlog = async () => {
        try {
            axios.get(`${API}General/GetNewsDetail?news_id=${id}`).then(res => {
                setBlog(res.data.Data);
                console.log(res.data.Data);
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        getBlog();
    },[]);

  return (
    <main>
        <section className={styles.pageContainer}>  
            <img src={blogdetails}/>
            <div className={styles.pageContainerText}>
                <div className={styles.pageContainerTextHeader}>
                    <div><i className="ri-calendar-line"></i> 25 Ağustos 2022</div>
                    <div className={styles.pageContainerTextHeaderSocial}>
                        <div><i className="ri-facebook-fill"></i></div>
                        <div><i className="ri-twitter-fill"></i></div>
                        <div><i className="ri-whatsapp-fill"></i></div>
                    </div>
                </div>
                <div className={styles.pageText}>
                    <h1> { blog.blog_title } </h1>
                    <p> {blog.blog_desc} </p>
                    {/* <div className={styles.pageTextImage}>
                        <div>
                            <img src={blogdetails}/>
                        </div>
                        <div>
                            <img src={blogdetails}/>
                        </div>
                    </div>
                    <div className={styles.pageTextImageSwiper}>
                    <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={30}
                    slidesPerView={1.7}
                    breakpoints={{
                        320: {
                        slidesPerView: 1.4,
                        spaceBetween: 30,
                        },
                        640: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                        },
                        768: {
                        slidesPerView: 2.1,
                        spaceBetween: 20,
                        }
                    }}
                    >
                    <SwiperSlide>
                    <div className={styles.pageTextImage}>
                        <div>
                            <img src={blogdetails}/>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className={styles.pageTextImageSwiper}>
                        <div>
                            <img src={blogdetails}/>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className={styles.pageTextImage}>
                        <div>
                            <img src={blogdetails}/>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className={styles.pageTextImage}>
                        <div>
                            <img src={blogdetails}/>
                        </div>
                    </div>
                    </SwiperSlide>
                    </Swiper>
                    </div>
                    <p>
                    İnternet kullanmak isteyenlerin en büyük şikayetlerinden birisi şüphesiz internet altyapı probleminden dolayı yaşanan sorunlar. Pek altyapısız internet kullanmak mümkün mü? Cevabı ise evet, altyapısız internet kullanmak mümkün.

                    Şehirlerin hızla gelişmesi maalesef internet altyapı sorunlarını da beraberinde getiriyor. Büyük yatırımlar gerektiren internet ve telefon altyapıları, şehirlerin büyüme hızına yetişemeyebiliyor. Hele Sakarya gibi yatay bir şekilde büyüme gösteren şehirlerde, altyapı problemi birçok kullanıcının kabusu haline gelmiş durumda.
                    </p> */}
                </div>
            </div>
        </section>
    </main>
  )
}

export default Blogdetail