import React, { useState } from 'react';
import styles from '../assets/login.module.css';
import { loginSchema } from '../validations/loginValidations';

import taahhut from '../assets/img/taahhut.svg';
import sozlesme from '../assets/img/sozlesme.svg';
import limit from '../assets/img/limit.svg';

const Login =() => {
    const [inputValid, setInputValid] = useState(true);


    const loginUser = async (event) => {
        event.preventDefault();
        let formData = {
            loginInfo: event.target[0].value,
            password: event.target[1].value,
            aydınlatma: event.target[2].value,
            kvkk: event.target[3].value
        }
        const isValid = await loginSchema.isValid(formData);
        console.log(isValid);
        isValid === false ? setInputValid(false) : setInputValid(true);
    }

  return (
    <main>
        <section className={styles.pageContainer}>
            <div className={styles.pageHeader}>
                <h1>Kullanıcı <span className='font-medium'>Girişi</span></h1>
            </div>
        </section>
        <section className={styles.pageContent}>
            <div className={styles.bundleFormCover}>
                    <h1 className={styles.bundleFormTextHeader}>Müşteri Numaranız, TC Kimlik Numaranız veya  <br/>
                    GSM Numaranız ile giriş yapabilirsiniz.</h1>
                    <p className={styles.bundleFormText}>Işık hızında fiber internet şimdi ilk 6 ay sadece 99 TL !</p>
                    <form onSubmit={loginUser} >
                    <div className={styles.bundleFormInput}>
                        <label htmlFor="name">
                            <p>Müşteri Numarası, TC Kimlik Numarası veya  GSM Numarası</p>
                            <input id="name" type="text" className={inputValid === false ? 'border-none outline outline-2 outline-red-500' : ""} />
                        </label>
                        <label htmlFor="phone">
                            <p>Şifreniz</p>
                            <input id="phone" type="text" className={inputValid === false ? 'border-none outline outline-2 outline-red-500' : ""} />
                        </label>
                        <label htmlFor="ayndınlatma">
                            <div className={styles.bundleFormInputCheckbox}>
                            <input id="ayndınlatma" type="checkbox" />
                            <a href='#'>Kişisel veri aydınlatma metnini okudum ve anladım.</a>
                            </div>
                        </label>
                        <label htmlFor="ayndınlatma">
                            <div className={styles.bundleFormInputCheckbox}>
                            <input id="kvkk" type="checkbox" />
                            <a href='#'>Kişisel verilerimin işlenmesine izin veriyorum.</a>
                            </div>
                        </label>
                        <div className={styles.bundleFormAydinlatmaMetni}>
                            <p>
                            Abonelik formunu tamamlamadığınız durumda sadece bir sefer FiberNet’in avantajlarını anlatan ve kaldığınız yerden başvurunuza devam edebilmenizi sağlayan bir e-posta göndereceğiz ve en fazla iki hafta içinde sizi bir defaya mahsus arayacağız. Bu sürede FiberNet’li olmazsanız, tüm kişisel verilerinizi imha edip sizinle tekrar başvuru yapana kadar iletişim kurmayacağız.
                            </p>
                        </div>
                        <div className={styles.bundleFormButton}>
                            <button type='submit' >Başvuru Yap</button>
                        </div>
                    </div>
                    </form>
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