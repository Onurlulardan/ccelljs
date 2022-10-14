import React, { useState, useEffect } from 'react';
import styles from '../assets/soldform.module.css';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { Link } from 'react-router-dom';


function Soldform() {
    const [validationState, setValidationState] = useState([]);


  return (
    <main>
        <section className={styles.pageHeader}>
            <h1>Satış Noktası <span className='font-medium'>Talep Formu</span></h1>
        </section>
        <section className={styles.formCover}>
            
            <Formik
                initialValues={{ nameandsurname: '', frmunv: '', mail: '', web: '' , stel: '' , tel: '' , city: '' , msg: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.nameandsurname) {
                    errors.nameandsurname = ' * Boş bırakılamaz!';
                    } 
                
                    if (!values.frmunv) {
                    errors.frmunv = ' * Boş bırakılamaz!';
                    }
                
                    if (!values.mail) {
                        errors.mail = ' * Boş bırakılamaz!';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)) {
                        errors.mail = 'Lütfen doğru bir e-mail hesabı giriniz!';
                    }

                    if (!values.web) {
                    errors.web = ' * Boş bırakılamaz!';
                    }

                    if (!values.stel) {
                    errors.stel = ' * Boş bırakılamaz!';
                    }
                    
                    if (!values.tel) {
                    errors.tel = ' * Boş bırakılamaz!';
                    }

                    if (!values.city) {
                    errors.city = ' * Boş bırakılamaz!';
                    }

                    if (!values.msg) {
                    errors.msg = ' * Boş bırakılamaz!';
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
                        <div className={styles.form}>
                        <label htmlFor="nameandsurname">
                            <h1>Adınız Soyadınız</h1>
                            { validationState.nameandsurname ? (
                                <p className='error-state'> {validationState.nameandsurname} </p>
                            ) : ""}
                            <Field id="nameandsurname" type="text" name="nameandsurname" className={validationState.nameandsurname  ? 'border-none outline outline-2 outline-[#FF3838]' : ''} />
                        </label>
                        <label htmlFor="frmunv">
                            <h1>Firma Ünvanı</h1>
                            { validationState.frmunv ? (
                                <p className='error-state'> {validationState.frmunv} </p>
                            ) : ""}
                            <Field id="frmunv" type="text" name="frmunv" className={validationState.frmunv  ? 'border-none outline outline-2 outline-[#FF3838]' : ''} />
                        </label>
                        <label htmlFor="mail">
                            <h1>E-Mail</h1>
                            { validationState.mail ? (
                                <p className='error-state'> {validationState.mail} </p>
                            ) : ""}
                            <Field id="mail" type="text" name="mail" className={validationState.mail  ? 'border-none outline outline-2 outline-[#FF3838]' : ''} />
                        </label>
                        <label htmlFor="web">
                            <h1>Web</h1>
                            { validationState.web ? (
                                <p className='error-state'> {validationState.web} </p>
                            ) : ""}
                            <Field id="web" type="text" name="web" className={validationState.web  ? 'border-none outline outline-2 outline-[#FF3838]' : ''} />
                        </label>
                        <label htmlFor="stel">
                            <h1>Sabit Telefon</h1>
                            { validationState.stel ? (
                                <p className='error-state'> {validationState.stel} </p>
                            ) : ""}
                            <Field id="stel" type="text" name="stel" className={validationState.stel  ? 'border-none outline outline-2 outline-[#FF3838]' : ''} />
                        </label>
                        <label htmlFor="tel">
                            <h1>Cep Telefonu</h1>
                            { validationState.tel ? (
                                <p className='error-state'> {validationState.tel} </p>
                            ) : ""}
                            <Field id="tel" type="text" name="tel" className={validationState.tel  ? 'border-none outline outline-2 outline-[#FF3838]' : ''} />
                        </label>
                        <label htmlFor="city">
                            <h1>Şehir</h1>
                            { validationState.city ? (
                                <p className='error-state'> {validationState.city} </p>
                            ) : ""}
                            <Field id="city" type="text" name="city" className={validationState.city  ? 'border-none outline outline-2 outline-[#FF3838]' : ''} />
                        </label>
                        <label htmlFor="msg">
                            <h1>Mesajınız</h1>
                            { validationState.msg ? (
                                <p className='error-state'> {validationState.msg} </p>
                            ) : ""}
                            <Field id="msg" type="text" name="msg" className={validationState.msg  ? 'border-none outline outline-2 outline-[#FF3838]' : ''} />
                        </label>
                        <div className={styles.formBtn}>
                            <button type='submit' disabled={isSubmitting}>Gönder</button>
                        </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    </main>
  )
}

export default Soldform