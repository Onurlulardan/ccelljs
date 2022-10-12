import React, { useEffect, useState } from 'react';
import styles from '../assets/contact.module.css';
import axios from 'axios';

const Contact = () => {
    const API = process.env.REACT_APP_MY_API
    const [contanct, setContact] = useState([]);

    const getContact = async () => {
        try {
            await axios.get(`${API}General/GetSetting`).then(res => {
                setContact(res.data.Data);
            });
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getContact();
    },[]);

  return (
    <main>
        <section className={styles.pageHeader}>
            <div>
                <h1>İletişim</h1>
                <div className={styles.pageHeaderSocial}>
                    <a href={contanct.instagram} target="blank">
                        <div><i className="ri-instagram-line"></i></div>
                    </a>
                    <a href={contanct.facebook} target="blank">
                        <div><i className="ri-facebook-fill"></i></div>
                    </a>
                    <a href={contanct.twitter} target="blank">
                        <div><i className="ri-twitter-fill"></i></div>
                    </a>
                    <a href={contanct.linkedin} target="blank">
                        <div><i className="ri-linkedin-fill"></i></div>
                    </a>
                </div>
            </div>
        </section>
        <section className={styles.pageContent}>
            <div className={styles.contentText}>
                <div className={styles.contentTextHeader}>
                    <h1>Bize yazın,</h1>
                    <p>Tüm istek, görüş ve önerilerinizi bizimle iletişime geçerek bildirebilirsiniz.</p>
                </div>
                <div className={styles.contentTextItem}>
                    <h1>Adres</h1>
                    <a> { contanct.adres } </a>
                    <h1>Telefon</h1>
                    <a href={`tel:${contanct.phone1}`} > { contanct.phone1 } </a>
                    <h1>Eamil</h1>
                    <a href={`mailto:${contanct.email}`}> { contanct.email } </a>
                    <h1>Harita</h1>
                    <a className={styles.contentTextItemMap} href={`https://www.google.com/maps/search/?api=1&query=${contanct.geo_lat},${contanct.geo_long}`} target="blank">Görüntüle <i className="ri-map-pin-line"></i></a>
                </div>
            </div>
            <div className={styles.contentForm}>
                <label htmlFor="name">
                    <p>Ad Soyad</p>
                    <input id='name' type="text" />
                </label>
                <label htmlFor="tel">
                    <p>Telefon Numarası</p>
                    <input id='tel' type="text" />
                </label>
                <label htmlFor="msg">
                    <p>Mesajınız</p>
                    <textarea id="msg"></textarea>
                </label>
                <div>
                    <a href="#">Gönder</a>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Contact