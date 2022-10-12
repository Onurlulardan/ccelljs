import React, { useEffect, useState } from 'react';
import styles from '../assets/internetcampaigns.module.css';
import { Link } from 'react-router-dom';


import hiz from '../assets/img/hiz.svg';
import limit from '../assets/img/limit.svg';
import up from '../assets/img/up.svg';
import sozlesme from '../assets/img/sozlesme.svg';
import axios from 'axios';

const Internetcampains =() => {
    const API = process.env.REACT_APP_MY_API;
    const IMG_PATH = process.env.REACT_APP_IMG_PATH;
    const [campains, setCampains] = useState([]);
    let maxLenght = 14;

    const getCampains = async () => {
        try {
            axios.get(`${API}General/GetCampaign`).then(res => {
                setCampains(res.data.Data);
                console.log(res.data.Data);
            })
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(()=>{
        getCampains();
    },[]);

  return (
    <main>
        <section className={styles.campainsContainer}>
            <div className={styles.campainsHeader}>
                <h1>İnternet  <span className='font-medium'>Kampanyalarımız</span></h1>
            </div>
            <div className={styles.campainsContent}>
                { campains.map((item, index)=> {
                    return <div className={`${styles.bundleCard} group`} key={index}>
                    <h1 title={item.campaign_title}> {item.campaign_title.substring(0,maxLenght) + '...' }</h1>
                    <div className={styles.bundlePrice}>
                        <p>Ayda Sadece <span className={item.price.length > 4 ? 'text-2xl' : 'text-4xl' }> {item.price} <span className='text-[23px] pl-2'>TL</span></span></p>
                    </div>
                    <div className={styles.bundleInfoCover}>
                        <div className={styles.bundleInfo}>
                        <img src={hiz}/>
                        <div className={styles.bundleInfoText}>
                            <h3> { item.download_info } </h3>
                            <p>İndirme Hızı (Download)</p>
                        </div>
                        </div>
                        <div className={styles.bundleInfo}>
                        <img src={up}/>
                        <div className={styles.bundleInfoText}>
                            <h3> {item.upload_info} </h3>
                            <p>Yükleme Hızı (Upload)</p>
                        </div>
                        </div>
                        <div className={styles.bundleInfo}>
                        <img src={sozlesme}/>
                        <div className={styles.bundleInfoText}>
                            <h3> {item.commit_info} </h3>
                            <p>Dilediğin Zaman İptal Et!</p>
                        </div>
                        </div>
                        <div className={styles.bundleInfo}>
                        <img src={limit}/>
                        <div className={styles.bundleInfoText}>
                            <h3> {item.limit_info} </h3>
                            <p>Gerçek Sınırsız İnternet</p>
                        </div>
                        </div>
                        <div className={`${styles.bundleInfoBtn}`}>
                        <Link className='group-hover:bg-[#1559A6] group-hover:text-white' to={`/internetcampainsdetail/${item.id}`} state={{ item: item}}>İncele</Link>
                        </div>
                    </div>
                    </div>
                }) }
                
            </div>
        </section>
    </main>
  )
}

export default Internetcampains