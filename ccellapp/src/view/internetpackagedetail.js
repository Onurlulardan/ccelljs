import React, { useEffect, useState } from 'react';
import styles from '../assets/internetpackagesdetail.module.css';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';
import { useParams,useLocation  } from 'react-router-dom';

import hiz from '../assets/img/hiz.svg';
import limit from '../assets/img/limit.svg';
import up from '../assets/img/up.svg';
import sozlesme from '../assets/img/sozlesme.svg';
import add from '../assets/img/addbtn.svg';
import remove from '../assets/img/removebtn.svg';


const Internetpackagesdetail = () => {
  const API = process.env.REACT_APP_MY_API;
  const IMG_PATH = process.env.REACT_APP_IMG_PATH;
  const params = useParams();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);


  const getCategory = async () => {
    try {
        await axios.get(`${API}Product/GetCategories`).then(res => {
            setCategory(res.data.Data);
        });
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    getCategory();
    setData(location.state.item);
    console.log(location.state.item)
  },[]);


  return (
    <main>
        <section>
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
            <div className={styles.mebileSubMenu}>
              <a href="#">ADSL</a>
              <a href="#">VDSL</a>
            </div>
            </div>
            <div className={styles.pageHeader}>
                <h1>{data.product_name} İnternet  <span className='font-medium'>Paketi</span></h1>
            </div>
        </section>
        <section className={styles.pageContentContainer}>
            <div className={styles.bundleCard}>
              <div>
              <h1 className={styles.bundleCardHeader}>{ data.product_name }</h1>
              <div className={styles.bundlePrice}>
                <p>Ayda Sadece <span className='text-2xl'>{ data.price }<span className='text-[23px] pl-2'>TL</span></span></p>
              </div>
              <div className={styles.bundleInfoCover}>
                <div className={styles.bundleInfo}>
                  <img src={hiz}/>
                  <div className={styles.bundleInfoText}>
                    <h3>{ data.download_info } </h3>
                    <p>İndirme Hızı (Download)</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={up}/>
                  <div className={styles.bundleInfoText}>
                    <h3>{ data.upload_info } </h3>
                    <p>Yükleme Hızı (Upload)</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={sozlesme}/>
                  <div className={styles.bundleInfoText}>
                    <h3>{ data.commit_info } </h3>
                    <p>Dilediğin Zaman İptal Et!</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={limit}/>
                  <div className={styles.bundleInfoText}>
                    <h3>{ data.limit_info } </h3>
                    <p>Gerçek Sınırsız İnternet</p>
                  </div>
                </div>
              </div>
              </div>
              <div className={styles.bundleFormCover}>
                <h1 className={styles.bundleFormTextHeader}>Müşteri Temsilcimiz Online, <br/>
                    Hemen Başvur Arayalım!</h1>
                <p className={styles.bundleFormText}>Işık hızında fiber internet şimdi ilk 6 ay sadece 99 TL !</p>
                <div className={styles.bundleFormInput}>
                    <label htmlFor="name">
                        <p>Ad Soyad</p>
                        <input id="name" type="text" />
                    </label>
                    <label htmlFor="phone">
                        <p>Telefon Numarası</p>
                        <input id="phone" type="text" />
                    </label>
                    <label htmlFor="ayndınlatma">
                        <div className={styles.bundleFormInputCheckbox}>
                        <input id="ayndınlatma" type="checkbox" />
                        <a href='#'>Kişisel veri aydınlatma metnini okudum ve anladım.</a>
                        </div>
                    </label>
                    <label htmlFor="ayndınlatma">
                        <div className={styles.bundleFormInputCheckbox}>
                        <input id="ayndınlatma" type="checkbox" />
                        <a href='#'>Kişisel verilerimin işlenmesine izin veriyorum.</a>
                        </div>
                    </label>
                    <div className={styles.bundleFormButton}>
                        <a href="#">Başvuru Yap</a>
                    </div>
                </div>
              </div>
            </div>
            <div className={styles.pageContentMenu}>
            { category.map((item, index)=> {
                        return <div key={index}>
                        <a className={item.id === data.category_id ? 'active' : ''} href={void(0)}> {item.category_name} </a>
                    </div>
                    }) } 
            </div>
        </section>
        <section className={styles.accordionContainer}>
          <div className={`group ${styles.accordionItem}`} tabIndex={0}>
            <label className={`${styles.accordionHeader}`} htmlFor="accheader">
              <div id='accheader'>
                <h1>Kampanya Avantajları</h1>
              </div>
              <div className={styles.accordionItemButton}>
                <img className='group-focus:hidden' src={add}/>
                <img className='hidden group-focus:block' src={remove}/>
              </div>
            </label>
            <div className={`${styles.accordionText} group-focus:block`}>
              <p>• Fiyatlarımıza %18 KDV ve %10 ÖİV dahildir. Vergi oranında değişiklik yapılması durumunda Millenicom, vergi farkını müşteriye yansıtma hakkını saklı tutar. • Kampanya taahhütsüz olarak sunulmakta olup sadece yeni başvuru yapmış olan Millenicom müşterisi için geçerlidir. Mevcut Millenicom müşterileri bu kampanyadan faydalanamaz. • Millenicom internet ve/veya telefon hizmetini Türk Telekomünikasyon A.Ş. altyapısı üzerinden sunacaktır. • Kampanya kapsamında yeni bağlantılarda 210 TL’lik evde kurulum ücreti 3 taksitte ilk 3 faturaya yansıtılacaktır.• Hat taşıma (geçiş) yapıldığı taktirde evde kurulum ücreti alınmayacakır. Geçiş işleminde modem kurulumu için gerekli olan kullanıcı adı ve şifre sms olarak paylaşılacaktır. Adsl, Vdsl ve Ankastreye Kadar Fiber Altyapısında (FTTB) vdsl modem kullanılması gerekmektedir. •Adsl, Vdsl ve Ankastreye Kadar Fiber Altyapısında (FTTB) vdsl modem kullanılması gerekmektedir. Modem satışı opsiyonel olup ; 30TL x 24 ay, 50 TL x 12 ay veya peşin 500 TL seçenekleri mevcuttur. Vdsl modem satın alındıktan sonra müşteriye ait olacaktır. Taksitler bitmeden iptal olması durumunda, kalan taksitler son faturaya yansıtılır. </p>
            </div>
          </div>
          <div className={`group ${styles.accordionItem}`} tabIndex={0}>
            <label className={`${styles.accordionHeader}`} htmlFor="accheader">
              <div id='accheader'>
                <h1>Kampanya Avantajları</h1>
              </div>
              <div className={styles.accordionItemButton}>
                <img className='group-focus:hidden' src={add}/>
                <img className='hidden group-focus:block' src={remove}/>
              </div>
            </label>
            <div className={`${styles.accordionText} group-focus:block`}>
              <p>• Fiyatlarımıza %18 KDV ve %10 ÖİV dahildir. Vergi oranında değişiklik yapılması durumunda Millenicom, vergi farkını müşteriye yansıtma hakkını saklı tutar. • Kampanya taahhütsüz olarak sunulmakta olup sadece yeni başvuru yapmış olan Millenicom müşterisi için geçerlidir. Mevcut Millenicom müşterileri bu kampanyadan faydalanamaz. • Millenicom internet ve/veya telefon hizmetini Türk Telekomünikasyon A.Ş. altyapısı üzerinden sunacaktır. • Kampanya kapsamında yeni bağlantılarda 210 TL’lik evde kurulum ücreti 3 taksitte ilk 3 faturaya yansıtılacaktır.• Hat taşıma (geçiş) yapıldığı taktirde evde kurulum ücreti alınmayacakır. Geçiş işleminde modem kurulumu için gerekli olan kullanıcı adı ve şifre sms olarak paylaşılacaktır. Adsl, Vdsl ve Ankastreye Kadar Fiber Altyapısında (FTTB) vdsl modem kullanılması gerekmektedir. •Adsl, Vdsl ve Ankastreye Kadar Fiber Altyapısında (FTTB) vdsl modem kullanılması gerekmektedir. Modem satışı opsiyonel olup ; 30TL x 24 ay, 50 TL x 12 ay veya peşin 500 TL seçenekleri mevcuttur. Vdsl modem satın alındıktan sonra müşteriye ait olacaktır. Taksitler bitmeden iptal olması durumunda, kalan taksitler son faturaya yansıtılır. </p>
            </div>
          </div>
          <div className={`group ${styles.accordionItem}`} tabIndex={0}>
            <label className={`${styles.accordionHeader}`} htmlFor="accheader">
              <div id='accheader'>
                <h1>Kampanya Avantajları</h1>
              </div>
              <div className={styles.accordionItemButton}>
                <img className='group-focus:hidden' src={add}/>
                <img className='hidden group-focus:block' src={remove}/>
              </div>
            </label>
            <div className={`${styles.accordionText} group-focus:block`}>
              <p>• Fiyatlarımıza %18 KDV ve %10 ÖİV dahildir. Vergi oranında değişiklik yapılması durumunda Millenicom, vergi farkını müşteriye yansıtma hakkını saklı tutar. • Kampanya taahhütsüz olarak sunulmakta olup sadece yeni başvuru yapmış olan Millenicom müşterisi için geçerlidir. Mevcut Millenicom müşterileri bu kampanyadan faydalanamaz. • Millenicom internet ve/veya telefon hizmetini Türk Telekomünikasyon A.Ş. altyapısı üzerinden sunacaktır. • Kampanya kapsamında yeni bağlantılarda 210 TL’lik evde kurulum ücreti 3 taksitte ilk 3 faturaya yansıtılacaktır.• Hat taşıma (geçiş) yapıldığı taktirde evde kurulum ücreti alınmayacakır. Geçiş işleminde modem kurulumu için gerekli olan kullanıcı adı ve şifre sms olarak paylaşılacaktır. Adsl, Vdsl ve Ankastreye Kadar Fiber Altyapısında (FTTB) vdsl modem kullanılması gerekmektedir. •Adsl, Vdsl ve Ankastreye Kadar Fiber Altyapısında (FTTB) vdsl modem kullanılması gerekmektedir. Modem satışı opsiyonel olup ; 30TL x 24 ay, 50 TL x 12 ay veya peşin 500 TL seçenekleri mevcuttur. Vdsl modem satın alındıktan sonra müşteriye ait olacaktır. Taksitler bitmeden iptal olması durumunda, kalan taksitler son faturaya yansıtılır. </p>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Internetpackagesdetail