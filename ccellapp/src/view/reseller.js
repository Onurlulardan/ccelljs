import React, { useEffect, useState } from 'react';
import styles from '../assets/reseller.module.css';
import TurkeyMap from 'turkey-map-react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import distImage from '../assets/img/distimage.svg';

const Reseller = () => {
    const API = process.env.REACT_APP_MY_API
    const [resellerPoint, setResellerPoint] = useState([]);

    const getResellerPoint = async () => {
        try {
            await axios.get(`${API}General/GetSalePoint`).then(res => {
                setResellerPoint(res.data.Data);
                console.log(res.data.Data);
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getResellerPoint();
    },[]);

  return (
    <main>
        <section className={styles.PageHeader}>
            <h1>Fiber <span className='font-medium'>Bayilerimiz</span></h1>
        </section>
        <section className={styles.PageContent}>
            <div className={styles.mapCover}>
            <TurkeyMap
            hoverable={true}
            customStyle={{ idleColor: "#DDDFE7", hoverColor: "#0257AB" }}
            />
            </div>
            <div className={styles.mapBottom}>
                <div className={styles.mapBottomText}>
                    <h1>Tüm Türkiye’de</h1>
                    <p>Fiber hızında internete hizmeti alabileceğiniz
 satış noktalarımız.</p>
                </div>
                <div className={styles.mapBottomInput}>
                    <input type="text" placeholder='Şehir  veya bayi ismi' />
                    <a href="#">Bayi Ara</a>
                </div>
            </div>
            <div className={styles.resellerItemCover}>
                <h1 className={styles.resellerItemHeader}>İstanbul</h1>
                <div className={styles.resellerItemContentCover}>
                    { resellerPoint.map((item, index)=> {
                        return <div className={styles.resellerItem}>
                        <div className={styles.resellerItemText}>
                            <h1> {item.sirket_adi} </h1>
                            <p> {item.adres} </p>
                            <h6>Tel : { item.telefon }</h6>
                            <a href={`https://www.google.com/maps/search/?api=1&query=${item.enlem_bilgisi},${item.boylam_bilgisi}`} target="blank">Haritada Göster</a>
                        </div>
                    </div>
                    }) }
                </div>
            </div>
        </section>
        <section className={styles.distributorContainer}>
          <div className={styles.distributor}>
              <img className={styles.distributorImage} src={distImage}/>
            <div className={styles.distributorText}>
              <h1>Bayimiz Olun!</h1>
              <p>81 ilde Tüm Türkiye’de hiçbir altyapı ihtiyacı olmadan fiber hızında internete bağlanabilirsiniz.</p>
              <Link to="/soldform" target={'_top'}>
              Bayilik Başvurusu
              </Link>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Reseller