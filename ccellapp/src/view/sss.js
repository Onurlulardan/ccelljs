import React, {useState, useEffect} from 'react';
import styles from '../assets/sss.module.css';
import axios from 'axios';

import add from '../assets/img/addbtn.svg';
import remove from '../assets/img/removebtn.svg';

const Sss = () => {
  const API = process.env.REACT_APP_MY_API
  const [sss, setSss] = useState([]);
  const [focus, setFocus] = useState(0);

  const getSss = async () => {
    try {
      await axios.get(`${API}General/GetSSS`).then(res => {
        setSss(res.data.Data)
        console.log(res.data.Data)
      });
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getSss();
  },[]);

  return (
    <main>
        <section className={styles.pageHeader}>
            <h1>Sık Sorulan Sorular</h1>
            <p>Yardıma mı ihtiyacınız var?</p>
        </section>
        <section className={styles.pageContainer}>
        <div className={styles.accordionContainer}>
          { sss.map((item, index)=>{
            return <div key={index} className={`group ${styles.accordionItem}`} onClick={(e)=> { setFocus(item.id) }} tabIndex={0}>
            <label className={`${styles.accordionHeader}`} htmlFor="accheader">
              <div id='accheader'>
                <h1> { item.sss_title } </h1>
              </div>
              <div className={styles.accordionItemButton}>
                <img className='group-focus:hidden' src={add}/>
                <img className='hidden group-focus:block' src={remove}/>
              </div>
            </label>
            <div className={`${styles.accordionText} group-focus:block`}>
              <p> { item.sss_desc } </p>
            </div>
          </div>
          }) }
          
        </div>
        <div className={styles.pageContentMenu}>
                    { sss.map((item, index)=> {
                        return <div>
                        <a className={focus === item.id ? 'active' : ''} href="#"> {item.sss_title} </a>
                      </div>
                    }) }
            </div>
        </section>
    </main>
  )
}

export default Sss