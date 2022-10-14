import React, { useState, useEffect } from 'react';
import styles from '../assets/login.module.css';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { Link } from 'react-router-dom';

import taahhut from '../assets/img/taahhut.svg';
import sozlesme from '../assets/img/sozlesme.svg';
import limit from '../assets/img/limit.svg';


// const validate = values => {
//     const errors = {};
//     if (!values.firstName) {
//       errors.firstName = 'Required';
//     } else if (values.firstName.length > 15) {
//       errors.firstName = 'Must be 15 characters or less';
//     }
  
//     if (!values.lastName) {
//       errors.lastName = 'Required';
//     } else if (values.lastName.length > 20) {
//       errors.lastName = 'Must be 20 characters or less';
//     }
  
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }
  
//     return errors;
//   };


const Login =() => {
    const [validationState, setValidationState] = useState([]);

  return (
    <main>
        <section className={styles.pageContainer}>
            <div className={styles.pageHeader}>
                <h1>Kullanıcı <span className='font-medium'>Girişi</span></h1>
            </div>
        </section>
        <section className={styles.pageContent}>
            <div className={styles.bundleFormCover}>
            <Formik
                initialValues={{ loginfo: '', password: '', ayndinlatma: false, kvkk: false}}
                validate={values => {
                    const errors = {};
                    if (!values.loginfo) {
                    errors.loginfo = ' * Boş bırakılamaz!';
                    } 
                
                    if (!values.password) {
                    errors.password = ' * Boş bırakılamaz!';
                    } else if (values.password.length < 8) {
                    errors.password = ' * Şifreniz en az 8 karakter olmalı!';
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
                    <h1 className={styles.bundleFormTextHeader}>Müşteri Numaranız, TC Kimlik Numaranız veya  <br/>
                    GSM Numaranız ile giriş yapabilirsiniz.</h1>
                    <p className={styles.bundleFormText}>Işık hızında fiber internet şimdi ilk 6 ay sadece 99 TL !</p>
                    <div className={styles.bundleFormInput}>
                        <label htmlFor="loginfo">
                            <p>Müşteri Numarası, TC Kimlik Numarası veya  GSM Numarası</p>
                            { validationState.loginfo ? (
                                <h6 className='error-state'> {validationState.loginfo} </h6>
                            ) : ""}
                            <Field type="name" name="loginfo" className={validationState.loginfo  ? 'border-none outline outline-2 outline-[#FF3838]' : ''} />
                        </label>
                        <label htmlFor="password">
                            <p>Şifreniz</p>
                            { validationState.password ? (
                                <h6 className='error-state'> {validationState.password} </h6>
                            ) : ""}
                            <Field type="password" name="password" className={validationState.password  ? 'border-none outline outline-2 outline-[#FF3838]' : ''} />
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
                <div className={styles.imgInfo}>
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

export default Login