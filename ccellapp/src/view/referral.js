import React from 'react';
import styles from '../assets/packagedetail.module.css';

import taahhut from '../assets/img/taahhut.svg';
import sozlesme from '../assets/img/sozlesme.svg';
import limit from '../assets/img/limit.svg';

const Referral =() => {
  return (
    <main>
        <section className={styles.pageContainer}>
            <div className={styles.pageHeader}>
                <h1>Kişisel  <span className='font-medium'>Bilgileriniz</span></h1>
            </div>
        </section>
        <section className={styles.pageContent}>
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
                        <div className={styles.bundleFormAydinlatmaMetni}>
                            <p>
                            Abonelik formunu tamamlamadığınız durumda sadece bir sefer FiberNet’in avantajlarını anlatan ve kaldığınız yerden başvurunuza devam edebilmenizi sağlayan bir e-posta göndereceğiz ve en fazla iki hafta içinde sizi bir defaya mahsus arayacağız. Bu sürede FiberNet’li olmazsanız, tüm kişisel verilerinizi imha edip sizinle tekrar başvuru yapana kadar iletişim kurmayacağız.
                            </p>
                        </div>
                        <div className={styles.bundleFormButton}>
                            <a href="#">Başvuru Yap</a>
                        </div>
                    </div>
            </div>
            <div className={styles.imgContent}>
                <img src={taahhut}/>
                <div className={styles.imageInfo}>
                    <div>
                        <img src={sozlesme}/>
                        <div className={styles.imgInfoText}>
                            <h6>Taahhütsüz</h6>
                            <p>Dilediğin Zaman İptal Et!</p>
                        </div>
                    </div>
                    <div>
                        <img src={sozlesme}/>
                        <div className={styles.imgInfoText}>
                            <h6>Limitsiz</h6>
                            <p>Gerçek Sınırsız İnternet</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Referral