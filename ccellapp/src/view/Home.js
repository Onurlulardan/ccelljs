import React, { useEffect, useState } from 'react';
import styles from '../assets/Home.module.css';
import { Link } from "react-router-dom";
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import SliderImage1 from '../assets/img/slider1.svg';
import SliderImage2 from '../assets/img/slider2.svg';
import hiz from '../assets/img/hiz.svg';
import limit from '../assets/img/limit.svg';
import up from '../assets/img/up.svg';
import sozlesme from '../assets/img/sozlesme.svg';
import taahhut from '../assets/img/taahhut.svg';
import wallet from '../assets/img/wallet.svg';
import wallethover from '../assets/img/wallethover.svg';
import edit from '../assets/img/edit.svg';
import edithover from '../assets/img/edithover.svg';
import unlimit from '../assets/img/unlimit.svg';
import unlimithover from '../assets/img/unlimithover.svg';
import ph from '../assets/img/ph.svg';
import phhover from '../assets/img/phhover.svg';
import modem from '../assets/img/modem.svg';
import image from '../assets/img/image.png';
import calendar from '../assets/img/calendar.svg';
import mapleft from '../assets/img/mapleft.svg';
import mapright from '../assets/img/mapright.svg';
import thirdSliderIcon from '../assets/img/thirdslidericon.svg';
import star from '../assets/img/star.svg';
import distImage from '../assets/img/distimage.svg';

import speedTestImage from '../assets/img/speedtestimg.jpg';



const Home = () => {
  const API = process.env.REACT_APP_MY_API;
  const IMG_PATH = process.env.REACT_APP_IMG_PATH;
  const [slider , setSlider] = useState([]);
  const [campains, setCampains] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState([]);
  const [networkSpeed, setNetworkSpeed] = useState(0);
  let maxLenght = 14;
  const percentage = 54;
  // const [speed, setSpeed] = useState("0.0")
  

  const getSlider = async () => {
    try {
      await axios.get(`${API}General/GetSlider`).then(res => {
        setSlider(res.data.Data);
      })
    } catch (error) {
      console.log(error)
    }
  }
  const getCampain = async () => {
    try {
      await axios.get(`${API}General/GetCampaign`).then(res => {
        setCampains(res.data.Data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  const getBlogs = async () => {
    try {
      await axios.get(`${API}General/GetNewsHomePage`).then(res => {
        setBlogs(res.data.Data);
        console.log(res.data.Data);
      })
    } catch (error) {
      console.log(error)
    }
  }
  const getCustomerComments = async () => {
    try {
      await axios.get(`${API}General/GetCustomerComments`).then(res => {
        setComments(res.data.Data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getSlider();
    getCampain();
    getBlogs();
    getCustomerComments();
  },[]);

  const speedImageSize = 5245329 * 8;
  const TEST_COUNT = 10;
  let testResults = [];

  const loadImage = () => {
    return new Promise((resolve, reject) => {
      let image = new Image();
      image.src = `${speedTestImage}?${parseInt(Math.random() * 10000)}`;
      let startTime = Date.now();
      image.onload = function(){
        let endTime = Date.now();
        resolve(endTime - startTime);
      }
      image.onerror = function(err){
        reject(err)
      }
    })
  }

  const getLoadSpeed = async () => {
    let loadTime = await loadImage();
    if(loadTime < 1)  loadTime = 1;
    let speed_bps = speedImageSize / loadTime;
    let speed_kpbs = speed_bps / 1024;
    let speed_mbs = speed_kpbs / 1024;

    return speed_mbs 
  }

  const getAvgSpeed = () => {
    let sum = testResults.reduce((a,b) => a + b, 0);
    return (sum / testResults.length).toFixed(2)
  }

  const speedTestBtn = async () => {
    for(let i = 0; i < TEST_COUNT; i ++){
      let speed = await getLoadSpeed();
      testResults.push(speed);
    }
    console.log(getAvgSpeed());
    setNetworkSpeed(getAvgSpeed());
  }




  return (
    <div className={styles.containerCover}>
      <main className={styles.main}>
        <section className={styles.swiperConteinerCover}>
          <div className={styles.swiperConteiner}>
            <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation= {{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            pagination={{ clickable: true, el: '.swiper-pagination' }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
          >
            {slider.map((item, index)=>{
              return <SwiperSlide key={index}>
              <div className={styles.sliderItem}>
                <div className={styles.sliderItemText}>
                  {/* <h1>Siz de <span className='font-medium'>ccell</span> ile <br/>
                    ??zg??rl??????n <span className='font-bold'>Tad??n?? ????kar??n!</span></h1> */}
                    <h1> {item.slider_text} </h1>
                    {item.slider_text.includes("Bayimiz olmak istermisiniz!") ? 
                    (<Link to={`/soldform`} target={'_top'}>Hemen Ba??vuru Yap</Link>) : 
                    (<Link to={`/referral`} target={'_top'}>Hemen Ba??vuru Yap</Link>)}
                </div>
                <div className={styles.sliderItemImage}>
                  <div className='relative'>
                    <img src={`${IMG_PATH}slider/${item.img_path}`} alt="Slider Image" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            })}
            </Swiper>
          </div>
          <div className={styles.swiperButtonCover}>
            <div className="swiper-button-prev">
            </div>
            <div className="swiper-button-next">
            </div>
          </div>
          <div className={styles.swiperPeginationCover}>
            <div className="swiper-pagination"></div>
          </div>
        </section>
        <section className={styles.bundleContainer}>
          <div className={`${styles.bundleHeader}`}>
            <h1>Pop??ler <span className='font-medium'>Kampanyalar</span></h1>
            <Link to="/internetcampains" target={'_top'}>
              T??m Kampanyalar <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className={`${styles.bundleCardCover}`}>
            { campains.map((item, index) => {
              return <div key={index} className={`${styles.bundleCard} group`}>
              <h1 title={item.campaign_title}> {item.campaign_title.substring(0,maxLenght) + '...' }</h1>
              <div className={styles.bundlePrice}>
                <p>Ayda Sadece <span className={item.price.length > 4 ? 'text-2xl' : 'text-4xl' }>{ item.price }<span className='text-[23px] pl-2'>TL</span></span></p>
              </div>
              <div className={styles.bundleInfoCover}>
                <div className={styles.bundleInfo}>
                  <img src={hiz}/>
                  <div className={styles.bundleInfoText}>
                    <h3> {item.download_info} </h3>
                    <p>??ndirme H??z?? (Download)</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={up}/>
                  <div className={styles.bundleInfoText}>
                    <h3> {item.upload_info} </h3>
                    <p>Y??kleme H??z?? (Upload)</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={sozlesme}/>
                  <div className={styles.bundleInfoText}>
                    <h3> {item.commit_info} </h3>
                    <p>Diledi??in Zaman ??ptal Et!</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={limit}/>
                  <div className={styles.bundleInfoText}>
                    <h3> {item.limit_info} </h3>
                    <p>Ger??ek S??n??rs??z ??nternet</p>
                  </div>
                </div>
                <div className={`${styles.bundleInfoBtn}`}>
                  <Link to="/internetcampains" className='group-hover:bg-[#1559A6] group-hover:text-white' target={'_top'}>
                  ??ncele
                  </Link>
                </div>
              </div>
            </div>
            }) }
            
          </div>
          <div className={styles.bundeCardMobile}>
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
              slidesPerView: 1.7,
              spaceBetween: 20,
            }
          }}
          >
            <SwiperSlide>
            <div className={`${styles.bundleCard} group`}>
              <h1>ccell 16</h1>
              <div className={styles.bundlePrice}>
                <p>Ayda Sadece <span className='text-4xl'>119<span className='text-[23px] pl-2'>TL</span></span></p>
              </div>
              <div className={styles.bundleInfoCover}>
                <div className={styles.bundleInfo}>
                  <img src={hiz}/>
                  <div className={styles.bundleInfoText}>
                    <h3>16 Mbps???e kadar </h3>
                    <p>??ndirme H??z?? (Download)</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={up}/>
                  <div className={styles.bundleInfoText}>
                    <h3>6 Mbps </h3>
                    <p>Y??kleme H??z?? (Upload)</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={sozlesme}/>
                  <div className={styles.bundleInfoText}>
                    <h3>Taahh??ts??z </h3>
                    <p>Diledi??in Zaman ??ptal Et!</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={limit}/>
                  <div className={styles.bundleInfoText}>
                    <h3>Limitsiz </h3>
                    <p>Ger??ek S??n??rs??z ??nternet</p>
                  </div>
                </div>
                <div className={`${styles.bundleInfoBtn}`}>
                  <Link to="/internetcampainsdetail" className='group-hover:bg-[#1559A6] group-hover:text-white'>
                  ??ncele
                  </Link>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={`${styles.bundleCard} group`}>
              <h1>ccell 16</h1>
              <div className={styles.bundlePrice}>
                <p>Ayda Sadece <span className='text-4xl'>119<span className='text-[23px] pl-2'>TL</span></span></p>
              </div>
              <div className={styles.bundleInfoCover}>
                <div className={styles.bundleInfo}>
                  <img src={hiz}/>
                  <div className={styles.bundleInfoText}>
                    <h3>16 Mbps???e kadar </h3>
                    <p>??ndirme H??z?? (Download)</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={up}/>
                  <div className={styles.bundleInfoText}>
                    <h3>6 Mbps </h3>
                    <p>Y??kleme H??z?? (Upload)</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={sozlesme}/>
                  <div className={styles.bundleInfoText}>
                    <h3>Taahh??ts??z </h3>
                    <p>Diledi??in Zaman ??ptal Et!</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={limit}/>
                  <div className={styles.bundleInfoText}>
                    <h3>Limitsiz </h3>
                    <p>Ger??ek S??n??rs??z ??nternet</p>
                  </div>
                </div>
                <div className={`${styles.bundleInfoBtn}`}>
                  <Link to="/internetcampainsdetail" className='group-hover:bg-[#1559A6] group-hover:text-white'>
                  ??ncele
                  </Link>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={`${styles.bundleCard} group`}>
              <h1>ccell 16</h1>
              <div className={styles.bundlePrice}>
                <p>Ayda Sadece <span className='text-4xl'>119<span className='text-[23px] pl-2'>TL</span></span></p>
              </div>
              <div className={styles.bundleInfoCover}>
                <div className={styles.bundleInfo}>
                  <img src={hiz}/>
                  <div className={styles.bundleInfoText}>
                    <h3>16 Mbps???e kadar </h3>
                    <p>??ndirme H??z?? (Download)</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={up}/>
                  <div className={styles.bundleInfoText}>
                    <h3>6 Mbps </h3>
                    <p>Y??kleme H??z?? (Upload)</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={sozlesme}/>
                  <div className={styles.bundleInfoText}>
                    <h3>Taahh??ts??z </h3>
                    <p>Diledi??in Zaman ??ptal Et!</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={limit}/>
                  <div className={styles.bundleInfoText}>
                    <h3>Limitsiz </h3>
                    <p>Ger??ek S??n??rs??z ??nternet</p>
                  </div>
                </div>
                <div className={`${styles.bundleInfoBtn}`}>
                  <Link to="/internetpackagesdetail" className='group-hover:bg-[#1559A6] group-hover:text-white'>
                  ??ncele
                  </Link>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={`${styles.bundleCard} group`}>
              <h1>ccell 16</h1>
              <div className={styles.bundlePrice}>
                <p>Ayda Sadece <span className='text-4xl'>119<span className='text-[23px] pl-2'>TL</span></span></p>
              </div>
              <div className={styles.bundleInfoCover}>
                <div className={styles.bundleInfo}>
                  <img src={hiz}/>
                  <div className={styles.bundleInfoText}>
                    <h3>16 Mbps???e kadar </h3>
                    <p>??ndirme H??z?? (Download)</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={up}/>
                  <div className={styles.bundleInfoText}>
                    <h3>6 Mbps </h3>
                    <p>Y??kleme H??z?? (Upload)</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={sozlesme}/>
                  <div className={styles.bundleInfoText}>
                    <h3>Taahh??ts??z </h3>
                    <p>Diledi??in Zaman ??ptal Et!</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={limit}/>
                  <div className={styles.bundleInfoText}>
                    <h3>Limitsiz </h3>
                    <p>Ger??ek S??n??rs??z ??nternet</p>
                  </div>
                </div>
                <div className={`${styles.bundleInfoBtn}`}>
                  <Link to="/internetpackagesdetail" className='group-hover:bg-[#1559A6] group-hover:text-white'>
                  ??ncele
                  </Link>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={`${styles.bundleCard} group`}>
              <h1>ccell 16</h1>
              <div className={styles.bundlePrice}>
                <p>Ayda Sadece <span className='text-4xl'>119<span className='text-[23px] pl-2'>TL</span></span></p>
              </div>
              <div className={styles.bundleInfoCover}>
                <div className={styles.bundleInfo}>
                  <img src={hiz}/>
                  <div className={styles.bundleInfoText}>
                    <h3>16 Mbps???e kadar </h3>
                    <p>??ndirme H??z?? (Download)</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={up}/>
                  <div className={styles.bundleInfoText}>
                    <h3>6 Mbps </h3>
                    <p>Y??kleme H??z?? (Upload)</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={sozlesme}/>
                  <div className={styles.bundleInfoText}>
                    <h3>Taahh??ts??z </h3>
                    <p>Diledi??in Zaman ??ptal Et!</p>
                  </div>
                </div>
                <div className={styles.bundleInfo}>
                  <img src={limit}/>
                  <div className={styles.bundleInfoText}>
                    <h3>Limitsiz </h3>
                    <p>Ger??ek S??n??rs??z ??nternet</p>
                  </div>
                </div>
                <div className={`${styles.bundleInfoBtn}`}>
                  <Link to="/internetpackagesdetail" className='group-hover:bg-[#1559A6] group-hover:text-white'>
                  ??ncele
                  </Link>
                </div>
              </div>
            </div>
            </SwiperSlide>
          </Swiper>
          <div className={`${styles.bundleHeaderMobileBottom}`}>
            <Link to="/internetpackages">
              T??m Kampanyalar <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          </div>
        </section>
        <section className={styles.speedTestContiner}>
            <div className={styles.speedTest}>
              <div className={styles.speedMeterCover}>
                <div className={styles.speedMeter}>
                <CircularProgressbar
                  value={networkSpeed}
                  text={`${networkSpeed} Mbps`}
                  styles={buildStyles({
                    textColor: "#07C568",
                    pathColor: "#1559A6",
                    trailColor: "#DDDFE7"
                  })}
                />
                  <div className={styles.upload}></div>
                  <div className={styles.ping}></div>
                </div>
              </div>
              <div className={styles.speedTestText}>
                <h1>??nternet <span className='font-medium'>H??z Testi</span></h1>
                <p>Bilgisayar??n??zda internet h??z testi yaparken internetinizi kullanabilecek ve speedtest sonu??lar??n?? olumsuz etkileyebilecek taray??c?? sekmelerini kapatman??z ??nerilir.</p>
                <button onClick={(e) => {speedTestBtn()}}><i className="ri-timer-line pr-2"></i> ??nternet H??z Testi</button>
              </div>
            </div>
        </section>
        <section className={styles.taahhutContainer}>
          <div className={styles.taahhutText}>
            <p>Taahh??ts??z, kotas??z internet <br/>
              sahibi olmak i??in</p>
              <Link to="/referral" target={'_top'}>
                Hemen Ba??vuru Yap
              </Link>
          </div>
          <div>
            <img src={taahhut}/>
          </div>
        </section>
        <section className={styles.altYapiContainer}>
          <div className={styles.altYapiItem}>
            <h1>Altyap?? <span className='font-medium'>Sorgula</span></h1>
            <p>??ster ev adresiniz ile ister telefon numaran??z ile altyap??n??z?? <br/> sorgulay??n. Size en uygun tekliflerimizi sunal??m.
            </p>
            <Link to="/reseller" target={'_top'}>
              <i className="ri-global-line"></i> <span className='pl-1'>Altyap?? Sorgula</span>
            </Link>
          </div>
        </section>
        <section className={styles.infoContainer}>
          <div className={`${styles.infoItem} group`}>
            <div className={`${styles.infoIcon} group-hover:bg-[#FFD600]`}>
              <div className='group-hover:hidden'>
                <img src={wallet}/>
              </div>
              <div className='hidden group-hover:block'>
                <img src={wallethover}/>
              </div>
            </div>
            <h1 className='group-hover:text-[#FFD600]'>Uygun Fiyat</h1>
            <p className='group-hover:text-white'>Ayn?? altyap?? ayn?? internet ayn?? fiber hizmetini daha uygun fiyata sunuyoruz.</p>
          </div>
          <div className={`${styles.infoItem} group`}>
            <div className={`${styles.infoIcon} group-hover:bg-[#FFD600]`}>
              <div className='group-hover:hidden'>
                <img src={edit}/>
              </div>
              <div className='hidden group-hover:block'>
                <img src={edithover}/>
              </div>
            </div>
            <h1 className='group-hover:text-[#FFD600]'>Uygun Fiyat</h1>
            <p className='group-hover:text-white'>Ayn?? altyap?? ayn?? internet ayn?? fiber hizmetini daha uygun fiyata sunuyoruz.</p>
          </div>
          <div className={`${styles.infoItem} group`}>
            <div className={`${styles.infoIcon} group-hover:bg-[#FFD600]`}>
              <div className='group-hover:hidden'>
                <img src={unlimit}/>
              </div>
              <div className='hidden group-hover:block'>
                <img src={unlimithover}/>
              </div>
            </div>
            <h1 className='group-hover:text-[#FFD600]'>Uygun Fiyat</h1>
            <p className='group-hover:text-white'>Ayn?? altyap?? ayn?? internet ayn?? fiber hizmetini daha uygun fiyata sunuyoruz.</p>
          </div>
          <div className={`${styles.infoItem} group`}>
            <div className={`${styles.infoIcon} group-hover:bg-[#FFD600]`}>
              <div className='group-hover:hidden'>
                <img src={ph}/>
              </div>
              <div className='hidden group-hover:block'>
                <img src={phhover}/>
              </div>
            </div>
            <h1 className='group-hover:text-[#FFD600]'>Uygun Fiyat</h1>
            <p className='group-hover:text-white'>Ayn?? altyap?? ayn?? internet ayn?? fiber hizmetini daha uygun fiyata sunuyoruz.</p>
          </div>
        </section>
        <section className={styles.modemConteiner}>
          <div className={styles.modemConteinerItem}>
            <div className={`${styles.modemImage} flex md:hidden sm:hidden`}>
              <img src={modem} />
            </div>
            <div className={styles.modemText}>
              <h1>Zyxel modem ile evinizin interneti <br/>
                ??imdi daha g????l??!</h1>
                <p>Sadece Ccell???lilere ??zel evde internetinizde kullanaca????n??z Zyxel VMG3625-T50B modemi k??sa bir s??reli??ine, kredi/banka kart??na pe??in 820 TL???ye sat??n alabilirsiniz.</p>
                <div className={`${styles.modemImage} ${styles.modemImageMobile} `}>
                  <img src={modem} />
                </div>
                <Link to="/modem" target={'_top'}>
                  Modem Sat??n Al
                </Link>
            </div>
          </div>
          <div className={styles.modembottom}></div>
        </section>
        <section className={styles.secondSwiperContainer}>
          <div className={styles.secondSwiperHeader}>
            <h1>Blog /  <span className='font-medium'>Haberler</span></h1>
            <Link to="/blog" className='md:hidden sm:hidden' target={'_top'}>
              T??m Blog / Haberler <i className="ri-arrow-right-line pl-1"></i>
            </Link>
            <Link to="/blog" className='hidden md:block sm:block' target={'_top'}>
              T??m?? <i className="ri-arrow-right-line pl-1"></i>
            </Link>
          </div>
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView="auto"
            pagination={{ clickable: true, el: ".swiper-second-pagination" }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1.6,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            >
            { blogs.map((item, index)=> {
              return <SwiperSlide key={index}>
              <div className={`${styles.secondSliderItem} group`}>
                <a href='#'>
                  <img src={`${IMG_PATH}blog/${item.img_path}`}/>
                </a>
                <div>
                  <h6> <span className='pr-[10px]'> <img src={calendar} /> </span> 25 A??ustos 2022</h6>
                  <p> {item.blog_title} </p>
                  <Link to={`/blogdetail/${item.id}`} target={'_top'} className='group-hover:visible'>Devam??n?? Oku <i className="ri-arrow-right-line pl-3"></i></Link>
                </div>
              </div>
          </SwiperSlide>
            }) }
          </Swiper>
            <div className="second-swiper-pegination-cover">
              <div className="swiper-second-pagination"></div>
            </div>
        </section>
        <section className={styles.mapSection}>
            <div className={styles.mapCover}>
                <div className={`${styles.mapItem} group`}>
                  <div>
                    <img className='group-hover:hidden' src={mapleft} />
                    <img className='hidden group-hover:block' src={mapright} />
                  </div>
                  <div className={styles.mapText}>
                      <h1>T??m T??rkiye???de</h1>
                      <p>T??m T??rkiye???de hi??bir altyap?? ihtiyac?? olmadan fiber h??z??nda internete ba??lanabilirsiniz.</p>
                      <Link to="/reseller" target={'_top'}>
                        Sat???? Noktalar??m??z
                      </Link>
                  </div>
                </div>
            </div>
        </section>
        <section className={styles.personReview}>
          <div className={styles.personReviewHeader}>
            <div>
            <h1>Kullan??c??lar??m??z??n <span className='font-medium'>G??r????leri</span></h1>
            <p>Kullan??c?? dostu tarifleri ve her zaman ??nde tutulan m????teri memnuniyeti ilkesi do??rultusunda hareket eden Ccell, kullan??c?? yorumlar?? ile sekt??rde g??sterdi??i ??zverinin yans??mas??n?? g??stermektedir. </p>
            </div>
            <Link to="/review" className='group flex' target={'_top'}>
              T??m??n?? G??r <i className="ri-arrow-right-line pl-2 group-hover:text-[#1559A6]"></i>
            </Link>
          </div>
          <div className={styles.thirdSwiperCover}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView="auto"
            pagination={{ clickable: true, el: ".swiper-third-pagination" }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            >
              { comments.map((item, index)=>{
                return <SwiperSlide key={index}>
                <div className={`${styles.thirdSwiperItem} group`}>
                 <div className={styles.rank}>
                  <div><img className='mr-2' src={star}/> 5,0</div>
                 </div>
                 <div className={styles.thirdSwiperItemText}>
                  <img src={thirdSliderIcon}/>
                  <div>
                    <p> {item.comment_desc} </p>
                    <h5> {item.name_surname} </h5>
                    <h6>Ccell Kullan??c??s??</h6>
                  </div>
                 </div>
                </div>
            </SwiperSlide>
              }) }
          </Swiper>
          <div className="third-swiper-pegination-cover">
              <div className="swiper-third-pagination"></div>
            </div>
          </div>
        </section>
        <section className={styles.distributorContainer}>
          <div className={styles.distributor}>
              <img className={styles.distributorImage} src={distImage}/>
            <div className={styles.distributorText}>
              <h1>Bayimiz Olun!</h1>
              <p>81 ilde T??m T??rkiye???de hi??bir altyap?? ihtiyac?? olmadan fiber h??z??nda internete ba??lanabilirsiniz.</p>
              <Link to="/soldform" target={'_top'}>
              Bayilik Ba??vurusu
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home