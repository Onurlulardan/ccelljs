import React from 'react';
import styles from '../assets/review.module.css';

import thirdSliderIcon from '../assets/img/thirdslidericon.svg';
import star from '../assets/img/star.svg';


const Review = () => {
  return (
    <main>
        <section className={styles.pageHeader}>
            <h1>Kullanıcılarımızın <span  className='font-medium'>Görüşleri</span></h1>
        </section>
        <section className={styles.pageContainer}> 
            <div className={styles.pageContent}>
                <div className={`${styles.thirdSwiperItem} group`}>
                 <div className={styles.rank}>
                  <div><img className='mr-2' src={star}/> 5,0</div>
                 </div>
                 <div className={styles.thirdSwiperItemText}>
                  <img src={thirdSliderIcon}/>
                  <div>
                    <p>Önceki operatörümde yüksek fiyata düşük tarife kullanıyordum. Netflix, Amazon Prime gibi uygulamaları daha verimli kullanmak ve oyun indirimlerinde uzun süre ...</p>
                    <h5>Gonca Akyıldız</h5>
                    <h6>Ccell Kullanıcısı</h6>
                  </div>
                 </div>
                </div>
                <div className={`${styles.thirdSwiperItem} group`}>
                 <div className={styles.rank}>
                  <div><img className='mr-2' src={star}/> 5,0</div>
                 </div>
                 <div className={styles.thirdSwiperItemText}>
                  <img src={thirdSliderIcon}/>
                  <div>
                    <p>Önceki operatörümde yüksek fiyata düşük tarife kullanıyordum. Netflix, Amazon Prime gibi uygulamaları daha verimli kullanmak ve oyun indirimlerinde uzun süre ...</p>
                    <h5>Gonca Akyıldız</h5>
                    <h6>Ccell Kullanıcısı</h6>
                  </div>
                 </div>
                </div>
                <div className={`${styles.thirdSwiperItem} group`}>
                 <div className={styles.rank}>
                  <div><img className='mr-2' src={star}/> 5,0</div>
                 </div>
                 <div className={styles.thirdSwiperItemText}>
                  <img src={thirdSliderIcon}/>
                  <div>
                    <p>Önceki operatörümde yüksek fiyata düşük tarife kullanıyordum. Netflix, Amazon Prime gibi uygulamaları daha verimli kullanmak ve oyun indirimlerinde uzun süre ...</p>
                    <h5>Gonca Akyıldız</h5>
                    <h6>Ccell Kullanıcısı</h6>
                  </div>
                 </div>
                </div>
                <div className={`${styles.thirdSwiperItem} group`}>
                 <div className={styles.rank}>
                  <div><img className='mr-2' src={star}/> 5,0</div>
                 </div>
                 <div className={styles.thirdSwiperItemText}>
                  <img src={thirdSliderIcon}/>
                  <div>
                    <p>Önceki operatörümde yüksek fiyata düşük tarife kullanıyordum. Netflix, Amazon Prime gibi uygulamaları daha verimli kullanmak ve oyun indirimlerinde uzun süre ...</p>
                    <h5>Gonca Akyıldız</h5>
                    <h6>Ccell Kullanıcısı</h6>
                  </div>
                 </div>
                </div>
                <div className={`${styles.thirdSwiperItem} group`}>
                 <div className={styles.rank}>
                  <div><img className='mr-2' src={star}/> 5,0</div>
                 </div>
                 <div className={styles.thirdSwiperItemText}>
                  <img src={thirdSliderIcon}/>
                  <div>
                    <p>Önceki operatörümde yüksek fiyata düşük tarife kullanıyordum. Netflix, Amazon Prime gibi uygulamaları daha verimli kullanmak ve oyun indirimlerinde uzun süre ...</p>
                    <h5>Gonca Akyıldız</h5>
                    <h6>Ccell Kullanıcısı</h6>
                  </div>
                 </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Review