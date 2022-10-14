import React, { useState, useEffect } from 'react';
import styles from '../assets/packagedetail.module.css';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { Link } from 'react-router-dom';

import taahhut from '../assets/img/taahhut.svg';
import sozlesme from '../assets/img/sozlesme.svg';
import limit from '../assets/img/limit.svg';

const Referral =() => {
    const [validationState, setValidationState] = useState([]);


  return (
    <main>
        <section className={styles.pageContainer}>
            <div className={styles.pageHeader}>
                <h1>Kişisel  <span className='font-medium'>Bilgileriniz</span></h1>
            </div>
        </section>
        <section className={styles.pageContent}>
        <div className={styles.bundleFormCover}>
            <Formik
                initialValues={{ nameandsurname: '', tel: '', ayndinlatma: false, kvkk: false}}
                validate={values => {
                    const errors = {};
                    if (!values.nameandsurname) {
                    errors.nameandsurname = ' * Boş bırakılamaz!';
                    } 
                
                    if (!values.tel) {
                    errors.tel = ' * Boş bırakılamaz!';
                    }
                
                    if (!values.ayndinlatma) {
                    errors.ayndinlatma = ' * Metni onaylamanız gerekiyor!';
                    }

                    if (!values.kvkk) {
                    errors.kvkk = ' * Metni onaylamanız gerekiyor!';
                    }
                    setValidationState(errors)
                    return errors;
                  }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    console.log("tıklandı")
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({ isSubmitting }) => (
                    <Form>
                    <h1 className={styles.bundleFormTextHeader}>Müşteri Temsilcimiz Online,  <br/>
                    Hemen Başvur Arayalım!</h1>
                    <p className={styles.bundleFormText}>Işık hızında fiber internet şimdi ilk 6 ay sadece 99 TL !</p>
                    <div className={styles.bundleFormInput}>
                        <label htmlFor="loginfo">
                            <p>Ad Soyad</p>
                            { validationState.nameandsurname ? (
                                <h6 className='error-state'> {validationState.nameandsurname} </h6>
                            ) : ""}
                            <Field type="name" name="nameandsurname" className={validationState.nameandsurname  ? 'border-none outline outline-2 outline-[#FF3838]' : ''} />
                        </label>
                        <label htmlFor="password">
                            <p>Telefon Numarası</p>
                            { validationState.tel ? (
                                <h6 className='error-state'> {validationState.tel} </h6>
                            ) : ""}
                            <Field type="tel" name="tel" className={validationState.tel  ? 'border-none outline outline-2 outline-[#FF3838]' : ''} />
                        </label>
                        <label htmlFor="ayndınlatma">
                            { validationState.ayndinlatma ? (
                                <h6 className='error-state'> {validationState.ayndinlatma} </h6>
                            ) : ""}
                            <div className={styles.bundleFormInputCheckbox}>
                            <Field type="checkbox" name="ayndinlatma" />
                            <Link to='/privacy' target={'_blank'}>Kişisel veri aydınlatma metnini okudum ve anladım.</Link>
                            </div>
                        </label>
                        <label htmlFor="ayndınlatma">
                            { validationState.kvkk ? (
                                <h6 className='error-state'> {validationState.kvkk} </h6>
                            ) : ""}
                            <div className={styles.bundleFormInputCheckbox}>
                            <Field type="checkbox" name="kvkk" />
                            <Link to='/kvkk' target={'_blank'}>Kişisel verilerimin işlenmesine izin veriyorum.</Link>
                            </div>
                        </label>
                        <div className={styles.bundleFormAydinlatmaMetni}>
                            <p>
                            Abonelik formunu tamamlamadığınız durumda sadece bir sefer FiberNet’in avantajlarını anlatan ve kaldığınız yerden başvurunuza devam edebilmenizi sağlayan bir e-posta göndereceğiz ve en fazla iki hafta içinde sizi bir defaya mahsus arayacağız. Bu sürede FiberNet’li olmazsanız, tüm kişisel verilerinizi imha edip sizinle tekrar başvuru yapana kadar iletişim kurmayacağız.
                            </p>
                        </div>
                        <div className={styles.bundleFormButton}>
                            <button type="submit" disabled={isSubmitting} >Başvuru Yap</button>
                        </div>
                    </div>
                    </Form>
                )}
            </Formik>
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