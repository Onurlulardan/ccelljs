import React, { useEffect, useState } from 'react';
import styles from '../assets/internetpackagesdetail.module.css';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';
import { useParams,useLocation, Link  } from 'react-router-dom';

import hiz from '../assets/img/hiz.svg';
import limit from '../assets/img/limit.svg';
import up from '../assets/img/up.svg';
import sozlesme from '../assets/img/sozlesme.svg';
import add from '../assets/img/addbtn.svg';
import remove from '../assets/img/removebtn.svg';
import Internetcampains from './internetcampains';


const Internetcampainsdetail = () => {
  const API = process.env.REACT_APP_MY_API;
  const IMG_PATH = process.env.REACT_APP_IMG_PATH;
  const params = useParams();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [campainData, setCampainData] = useState([]);
  const [checkData, setCheckData] = useState(false);

  const getCampainData = async () => {
    try {
        await axios.get(`${API}General/GetCampaign`).then(res => {
          setCampainData(res.data.Data);
          setCheckData(true);
        });
    } catch (error) {
        console.log(error);
    }
  }

  const sliceData =  () => {
      campainData.find((item) => {
        if(item.id.toString() === params.id.toString()){
          return setData(item)
        }
      })
  }

  useEffect(()=>{
    getCampainData();
    console.log("state control")
    sliceData();
  },[checkData, params.id]);


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
                    <a href="#">??nternet Paketleri</a>
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
                <h1>{data.campaign_title}   <span className='font-medium'>Kampanyas??</span></h1>
            </div>
        </section>
        <section className={styles.pageContentContainer}>
            <div className={styles.bundleCard}>
              <div>
              <h1 className={styles.bundleCardHeader}>{ data.product_name }</h1>
              <div className={styles.bundlePrice}>
                <p>Ayda Sadece <span className='text-3xl'>{ data.price }<span className='text-[23px] pl-2'>TL</span></span></p>
              </div>
              <div className={styles.bundleInfoCover}>
                <div className={styles.bundleInfo}>
                  <img src={hiz}/>
                  <div className={styles.bundleInfoText}>
                    <h3>{ data.download_info } </h3>
                    <p>??ndirme H??z?? (Download)</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={up}/>
                  <div className={styles.bundleInfoText}>
                    <h3>{ data.upload_info } </h3>
                    <p>Y??kleme H??z?? (Upload)</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={sozlesme}/>
                  <div className={styles.bundleInfoText}>
                    <h3>{ data.commit_info } </h3>
                    <p>Diledi??in Zaman ??ptal Et!</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={limit}/>
                  <div className={styles.bundleInfoText}>
                    <h3>{ data.limit_info } </h3>
                    <p>Ger??ek S??n??rs??z ??nternet</p>
                  </div>
                </div>
              </div>
              </div>
              <div className={styles.bundleFormCover}>
                <h1 className={styles.bundleFormTextHeader}>M????teri Temsilcimiz Online, <br/>
                    Hemen Ba??vur Arayal??m!</h1>
                <p className={styles.bundleFormText}>I????k h??z??nda fiber internet ??imdi ilk 6 ay sadece 99 TL !</p>
                <div className={styles.bundleFormInput}>
                    <label htmlFor="name">
                        <p>Ad Soyad</p>
                        <input id="name" type="text" />
                    </label>
                    <label htmlFor="phone">
                        <p>Telefon Numaras??</p>
                        <input id="phone" type="text" />
                    </label>
                    <label htmlFor="aynd??nlatma">
                        <div className={styles.bundleFormInputCheckbox}>
                        <input id="aynd??nlatma" type="checkbox" />
                        <a href='#'>Ki??isel veri ayd??nlatma metnini okudum ve anlad??m.</a>
                        </div>
                    </label>
                    <label htmlFor="aynd??nlatma">
                        <div className={styles.bundleFormInputCheckbox}>
                        <input id="aynd??nlatma" type="checkbox" />
                        <a href='#'>Ki??isel verilerimin i??lenmesine izin veriyorum.</a>
                        </div>
                    </label>
                    <div className={styles.bundleFormButton}>
                        <a href="#">Ba??vuru Yap</a>
                    </div>
                </div>
              </div>
            </div>
            <div className={styles.pageContentMenu}>
            { campainData.map((item, index)=> {
                        return <div key={index}>
                        <Link to={`/internetcampainsdetail/${item.id}`} className={item.id === data.id ? 'active' : ''}> {item.campaign_title} </Link>
                    </div>
                    }) } 
            </div>
        </section>
        <section className={styles.accordionContainer}>
          <div className={`group ${styles.accordionItem}`} tabIndex={0}>
            <label className={`${styles.accordionHeader}`} htmlFor="accheader">
              <div id='accheader'>
                <h1>Kampanya Avantajlar??</h1>
              </div>
              <div className={styles.accordionItemButton}>
                <img className='group-focus:hidden' src={add}/>
                <img className='hidden group-focus:block' src={remove}/>
              </div>
            </label>
            <div className={`${styles.accordionText} group-focus:block`}>
              <p>??? Fiyatlar??m??za %18 KDV ve %10 ????V dahildir. Vergi oran??nda de??i??iklik yap??lmas?? durumunda Millenicom, vergi fark??n?? m????teriye yans??tma hakk??n?? sakl?? tutar. ??? Kampanya taahh??ts??z olarak sunulmakta olup sadece yeni ba??vuru yapm???? olan Millenicom m????terisi i??in ge??erlidir. Mevcut Millenicom m????terileri bu kampanyadan faydalanamaz. ??? Millenicom internet ve/veya telefon hizmetini T??rk Telekom??nikasyon A.??. altyap??s?? ??zerinden sunacakt??r. ??? Kampanya kapsam??nda yeni ba??lant??larda 210 TL???lik evde kurulum ??creti 3 taksitte ilk 3 faturaya yans??t??lacakt??r.??? Hat ta????ma (ge??i??) yap??ld?????? taktirde evde kurulum ??creti al??nmayacak??r. Ge??i?? i??leminde modem kurulumu i??in gerekli olan kullan??c?? ad?? ve ??ifre sms olarak payla????lacakt??r. Adsl, Vdsl ve Ankastreye Kadar Fiber Altyap??s??nda (FTTB) vdsl modem kullan??lmas?? gerekmektedir. ???Adsl, Vdsl ve Ankastreye Kadar Fiber Altyap??s??nda (FTTB) vdsl modem kullan??lmas?? gerekmektedir. Modem sat?????? opsiyonel olup ; 30TL x 24 ay, 50 TL x 12 ay veya pe??in 500 TL se??enekleri mevcuttur. Vdsl modem sat??n al??nd??ktan sonra m????teriye ait olacakt??r. Taksitler bitmeden iptal olmas?? durumunda, kalan taksitler son faturaya yans??t??l??r. </p>
            </div>
          </div>
          <div className={`group ${styles.accordionItem}`} tabIndex={0}>
            <label className={`${styles.accordionHeader}`} htmlFor="accheader">
              <div id='accheader'>
                <h1>Kampanya Avantajlar??</h1>
              </div>
              <div className={styles.accordionItemButton}>
                <img className='group-focus:hidden' src={add}/>
                <img className='hidden group-focus:block' src={remove}/>
              </div>
            </label>
            <div className={`${styles.accordionText} group-focus:block`}>
              <p>??? Fiyatlar??m??za %18 KDV ve %10 ????V dahildir. Vergi oran??nda de??i??iklik yap??lmas?? durumunda Millenicom, vergi fark??n?? m????teriye yans??tma hakk??n?? sakl?? tutar. ??? Kampanya taahh??ts??z olarak sunulmakta olup sadece yeni ba??vuru yapm???? olan Millenicom m????terisi i??in ge??erlidir. Mevcut Millenicom m????terileri bu kampanyadan faydalanamaz. ??? Millenicom internet ve/veya telefon hizmetini T??rk Telekom??nikasyon A.??. altyap??s?? ??zerinden sunacakt??r. ??? Kampanya kapsam??nda yeni ba??lant??larda 210 TL???lik evde kurulum ??creti 3 taksitte ilk 3 faturaya yans??t??lacakt??r.??? Hat ta????ma (ge??i??) yap??ld?????? taktirde evde kurulum ??creti al??nmayacak??r. Ge??i?? i??leminde modem kurulumu i??in gerekli olan kullan??c?? ad?? ve ??ifre sms olarak payla????lacakt??r. Adsl, Vdsl ve Ankastreye Kadar Fiber Altyap??s??nda (FTTB) vdsl modem kullan??lmas?? gerekmektedir. ???Adsl, Vdsl ve Ankastreye Kadar Fiber Altyap??s??nda (FTTB) vdsl modem kullan??lmas?? gerekmektedir. Modem sat?????? opsiyonel olup ; 30TL x 24 ay, 50 TL x 12 ay veya pe??in 500 TL se??enekleri mevcuttur. Vdsl modem sat??n al??nd??ktan sonra m????teriye ait olacakt??r. Taksitler bitmeden iptal olmas?? durumunda, kalan taksitler son faturaya yans??t??l??r. </p>
            </div>
          </div>
          <div className={`group ${styles.accordionItem}`} tabIndex={0}>
            <label className={`${styles.accordionHeader}`} htmlFor="accheader">
              <div id='accheader'>
                <h1>Kampanya Avantajlar??</h1>
              </div>
              <div className={styles.accordionItemButton}>
                <img className='group-focus:hidden' src={add}/>
                <img className='hidden group-focus:block' src={remove}/>
              </div>
            </label>
            <div className={`${styles.accordionText} group-focus:block`}>
              <p>??? Fiyatlar??m??za %18 KDV ve %10 ????V dahildir. Vergi oran??nda de??i??iklik yap??lmas?? durumunda Millenicom, vergi fark??n?? m????teriye yans??tma hakk??n?? sakl?? tutar. ??? Kampanya taahh??ts??z olarak sunulmakta olup sadece yeni ba??vuru yapm???? olan Millenicom m????terisi i??in ge??erlidir. Mevcut Millenicom m????terileri bu kampanyadan faydalanamaz. ??? Millenicom internet ve/veya telefon hizmetini T??rk Telekom??nikasyon A.??. altyap??s?? ??zerinden sunacakt??r. ??? Kampanya kapsam??nda yeni ba??lant??larda 210 TL???lik evde kurulum ??creti 3 taksitte ilk 3 faturaya yans??t??lacakt??r.??? Hat ta????ma (ge??i??) yap??ld?????? taktirde evde kurulum ??creti al??nmayacak??r. Ge??i?? i??leminde modem kurulumu i??in gerekli olan kullan??c?? ad?? ve ??ifre sms olarak payla????lacakt??r. Adsl, Vdsl ve Ankastreye Kadar Fiber Altyap??s??nda (FTTB) vdsl modem kullan??lmas?? gerekmektedir. ???Adsl, Vdsl ve Ankastreye Kadar Fiber Altyap??s??nda (FTTB) vdsl modem kullan??lmas?? gerekmektedir. Modem sat?????? opsiyonel olup ; 30TL x 24 ay, 50 TL x 12 ay veya pe??in 500 TL se??enekleri mevcuttur. Vdsl modem sat??n al??nd??ktan sonra m????teriye ait olacakt??r. Taksitler bitmeden iptal olmas?? durumunda, kalan taksitler son faturaya yans??t??l??r. </p>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Internetcampainsdetail