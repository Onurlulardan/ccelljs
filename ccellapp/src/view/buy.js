import React from 'react';
import styles from '../assets/buy.module.css';

import truck from '../assets/img/truck.svg';
import cards from '../assets/img/cards.svg';


const Buy = () => {
  return (
    <main>
        <section className={styles.pageContent}>
            <div className={styles.personalInfo}>
                <div> <div className={styles.contentIcon}><i className="ri-information-line"></i></div><h1>Kişisel <span className='font-medium'>Bilgiler</span></h1></div>
                <div className={styles.personalContent}>
                    <div className={styles.personelForm}>
                        <label htmlFor="name">
                            <p>Ad Soyad</p>
                            <input id='name' type="text" />
                        </label>
                        <label htmlFor="tel">
                        <p>Telefon Numarası</p>
                        <div className={styles.phoneInput}>
                        <div className={styles.phoneInputOptions}>
                                <select>
                                    <option value="">+90</option>
                                    <option value="">+91</option>
                                    <option value="">+92</option>
                                </select>
                            </div>
                            <input id='tel' type="text" />
                        </div>
                        </label>
                        <label htmlFor="mail">
                            <p>Eposta</p>
                            <input id='mail' type="text" />
                        </label>
                        <div className={styles.personelFormbtn}>
                            <a href="#">Devam Et</a>
                        </div>
                    </div>
                    <div className={styles.buyBox}>
                        <div className={styles.buyBoxItem}>
                            <h1>Ürün fiyatı</h1>
                            <p>883,50 TL </p>
                        </div>
                        <div className={styles.buyBoxItem}>
                            <h1>Adet</h1>
                            <p>1</p>
                        </div>
                        <div className={styles.buyBoxItem}>
                            <h1>Kargo</h1>
                            <p>13 TL </p>
                        </div>
                        <div>
                            <h1 className={styles.buyBoxFinalHeader}>Toplam</h1>
                            <div>
                            <h2 className={styles.buyBoxFinalPrice}>883,50 <span>TL</span> </h2>
                            <p className={styles.buyBoxFinalPriceDesc}>Vergiler Dahil</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div> <div className={styles.contentIcon}> <img src={truck}/> </div><h1>Teslimat <span className='font-medium'>Adresi</span></h1></div>
                <div className={styles.addressContent}>
                    <div className={styles.addressForm}>
                        <div className={styles.addressFormItem}>
                            <label htmlFor="city">
                                <p>İl</p>
                                <select id="city">
                                    <option value="" selected disabled hidden></option>
                                    <option value="">sakarya</option>
                                </select>
                            </label>
                            <label htmlFor="town">
                                <p>İlçe</p>
                                <select id="town">
                                    <option value="" selected disabled hidden></option>
                                    <option  value="">akyazı</option>
                                </select>
                            </label>
                        </div>
                        <div className={styles.addressFormItem}>
                            <label htmlFor="district">
                                <p>Mahalle</p>
                                <select id="district">
                                    <option value="" selected disabled hidden></option>
                                    <option value="">hasanbey</option>
                                </select>
                            </label>
                            <label htmlFor="street">
                                <p>Sokak</p>
                                <select id="street">
                                    <option value="" selected disabled hidden></option>
                                    <option value="">hasanbey sk</option>
                                </select>
                            </label>
                        </div>
                        <div className={styles.addresFromErrorState}>
                            <p>*Lütfen sokak bilginizi giriniz!</p>
                        </div>
                        <div className={styles.addressFormItem}>
                            <label htmlFor="district">
                                <p>Açık Adres</p>
                                <textarea id="district"></textarea>
                            </label>
                        </div>
                    </div>
                    <div className={styles.buyBox}>
                        <div className={styles.buyBoxItem}>
                            <h1>Ürün fiyatı</h1>
                            <p>883,50 TL </p>
                        </div>
                        <div className={styles.buyBoxItem}>
                            <h1>Adet</h1>
                            <p>1</p>
                        </div>
                        <div className={styles.buyBoxItem}>
                            <h1>Kargo</h1>
                            <p>13 TL </p>
                        </div>
                        <div>
                            <h1 className={styles.buyBoxFinalHeader}>Toplam</h1>
                            <div>
                            <h2 className={styles.buyBoxFinalPrice}>883,50 <span>TL</span> </h2>
                            <p className={styles.buyBoxFinalPriceDesc}>Vergiler Dahil</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div> <div className={styles.contentIcon}> <img src={cards}/> </div><h1>kart <span className='font-medium'>Bilgisi</span></h1></div>
                <div className={styles.creditCardContent}>
                    <div className={styles.creditCardForm}>
                        <label htmlFor="">
                            <div className='flex gap-2'>
                                <div className={styles.cardname}>
                                    <h1>Kart Sahibinin Adı ve Soyadı</h1>
                                    <input type="text" />
                                </div>
                                <div className={styles.cvv}>
                                    <h1>CVV</h1>
                                    <input type="text" />
                                </div>
                            </div>
                        </label>
                        <label htmlFor="">
                            <h1>Kart Numarası</h1>
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            <h1>Son Kullanma Tarihi</h1>
                            <div className='flex gap-2'>
                                <div className={styles.month}>
                                    <h1>Ay</h1>
                                    <input type="text" />
                                </div>
                                <div className={styles.year}>
                                    <h1>Yıl</h1>
                                    <input type="text" />
                                </div>
                            </div>
                        </label>
                        <div className={styles.soldBtn}>
                            <a href="#">Satın Al</a>
                        </div>
                    </div>
                    <div className={styles.buyBox}>
                        <div className={styles.buyBoxItem}>
                            <h1>Ürün fiyatı</h1>
                            <p>883,50 TL </p>
                        </div>
                        <div className={styles.buyBoxItem}>
                            <h1>Adet</h1>
                            <p>1</p>
                        </div>
                        <div className={styles.buyBoxItem}>
                            <h1>Kargo</h1>
                            <p>13 TL </p>
                        </div>
                        <div>
                            <h1 className={styles.buyBoxFinalHeader}>Toplam</h1>
                            <div>
                            <h2 className={styles.buyBoxFinalPrice}>883,50 <span>TL</span> </h2>
                            <p className={styles.buyBoxFinalPriceDesc}>Vergiler Dahil</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Buy