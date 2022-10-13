import React, { useEffect, useState } from 'react';
import styles from '../assets/internetpackages.module.css';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link, useParams } from 'react-router-dom';

import hiz from '../assets/img/hiz.svg';
import limit from '../assets/img/limit.svg';
import up from '../assets/img/up.svg';
import sozlesme from '../assets/img/sozlesme.svg';
import axios from 'axios';

const Internetpackages = () => {
    const API = process.env.REACT_APP_MY_API;
    const IMG_PATH = process.env.REACT_APP_IMG_PATH;
    let params = useParams();
    const [internetpackages, setInternetpackages] = useState([]);
    const [category, setCategory] = useState([]);
    const [categoryid, setCatagoryid] = useState(params.id)
    const [updateState, setUpdateState] = useState(false);
    let maxLenght = 14;

    const getInternetpackages = async () => {
        try {
            await axios.get(`${API}Product/GetCategoryProducts?cat_id=${categoryid}`).then(res => {
                setInternetpackages(res.data.Data);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getCategory = async () => {
        try {
            await axios.get(`${API}Product/GetCategories`).then(res => {
                setCategory(res.data.Data);
            });
        } catch (error) {
            console.log(error);
        }
    }
    const changeCategory = (event) => {
        setUpdateState(!updateState);
        setCatagoryid(event);
    }

    useEffect(()=>{
        getInternetpackages();
        getCategory();
        console.log(internetpackages.length)
    },[updateState]);

    

  return (
    <main>
        <section className={styles.pageConatainer}>
            <div className={styles.mobileMenu}>
            <Swiper
            modules={[A11y]}
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
            <div className={styles.pageHeader}>
            <h1>Tüm İnternet  <span className='font-medium'>Paketleri</span></h1>
            </div>
            <div className={internetpackages.length < 3 ? styles.pageContentWrappersm : styles.pageContentWrapper}>
                <div className={styles.pageContentItemCover}>
                    { internetpackages.map((item, index) => {
                        return <div key={index} className={`${styles.pageContentItem} group`}>
                        <div className={styles.bundleCard}>
                    <h1 title={item.product_name}> {item.product_name.substring(0,maxLenght) + '...' }</h1>
                    <div className={styles.bundlePrice}>
                        <p>Ayda Sadece <span className={item.price.length > 4 ? 'text-2xl' : 'text-4xl' }>{ item.price }<span className='text-[23px] pl-2'>TL</span></span></p>
                    </div>
                    <div className={styles.bundleInfoCover}>
                        <div className={styles.bundleInfo}>
                        <img src={hiz}/>
                        <div className={styles.bundleInfoText}>
                            <h3> {item.download_info} </h3>
                            <p>İndirme Hızı (Download)</p>
                        </div>
                        </div>
                        <div className={styles.bundleInfo}>
                        <img src={up}/>
                        <div className={styles.bundleInfoText}>
                            <h3>{item.upload_info} </h3>
                            <p>Yükleme Hızı (Upload)</p>
                        </div>
                        </div>
                        <div className={styles.bundleInfo}>
                        <img src={sozlesme}/>
                        <div className={styles.bundleInfoText}>
                            <h3>{item.commit_info} </h3>
                            <p>Dilediğin Zaman İptal Et!</p>
                        </div>
                        </div>
                        <div className={styles.bundleInfo}>
                        <img src={limit}/>
                        <div className={styles.bundleInfoText}>
                            <h3>{item.limit_info} </h3>
                            <p>Gerçek Sınırsız İnternet</p>
                        </div>
                        </div>
                        <div className={styles.bundleInfoBtn}>
                            <Link to={`/internetpackagedetail/${categoryid}/${item.id}`} state={{ item: item}}  className='group-hover:bg-[#1559A6] group-hover:text-white'>
                            İncele
                            </Link>
                        </div>
                    </div>
                    </div>
                        </div>
                    }) }
                </div>
                <div className={styles.pageContentMenu}>
                    { category.map((item, index)=> {
                        return <div key={index}>
                        <a className={item.id === categoryid ? 'active' : ''} href={void(0)} onClick={(e) => {changeCategory(item.id)}}> {item.category_name} </a>
                    </div>
                    }) } 
                </div>
            </div>
        </section>
    </main>
  )
}

export default Internetpackages