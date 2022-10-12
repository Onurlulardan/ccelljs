import React from 'react';
import styles from '../assets/soldform.module.css';

function Soldform() {
  return (
    <main>
        <section className={styles.pageHeader}>
            <h1>Satış Noktası <span className='font-medium'>Talep Formu</span></h1>
        </section>
        <section className={styles.formCover}>
            <div className={styles.form}>
                <label htmlFor="name">
                    <h1>Adınız Soyadınız</h1>
                    <input id='name' type="text" />
                </label>
                <label htmlFor="name">
                    <h1>Firma Ünvanı</h1>
                    <input id='name' type="text" />
                </label>
                <label htmlFor="name">
                    <h1>E-Mail</h1>
                    <input id='name' type="text" />
                </label>
                <label htmlFor="name">
                    <h1>Web</h1>
                    <input id='name' type="text" />
                </label>
                <label htmlFor="name">
                    <h1>Sabit Telefon</h1>
                    <input id='name' type="text" />
                </label>
                <label htmlFor="name">
                    <h1>Cep  Telefonu</h1>
                    <input id='name' type="text" />
                </label>
                <label htmlFor="name">
                    <h1>Şehir</h1>
                    <input id='name' type="text" />
                </label>
                <label htmlFor="name">
                    <h1>Mesajınız</h1>
                    <input id='name' type="text" />
                </label>
                <div className={styles.formBtn}>
                    <a href="#">Gönder</a>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Soldform