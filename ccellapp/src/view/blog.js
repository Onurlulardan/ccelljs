import React, { useEffect, useState } from 'react';
import styles from '../assets/blog.module.css';
import { Link, useParams } from "react-router-dom";
import pressimg from '../assets/img/pressimg.png';
import calendar from '../assets/img/calendar.svg';
import axios from 'axios';

const Blog = () => {
    const API = process.env.REACT_APP_MY_API;
    const IMG_PATH = process.env.REACT_APP_IMG_PATH;
    const [blogs, setBlogs] =useState([]);

    const getBlogs = async () => {
        try {
            axios.get(`${API}General/GetNews`).then(res => {
                setBlogs(res.data.Data);
                console.log(res.data.Data)
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getBlogs();
    },[]);

  return (
    <main>
        <section>
            <div className={styles.pageHeader}>
                <h1>Blog <span className='font-medium'>/  Haberler</span></h1>
            </div>
        </section>
        <section className={styles.pageContentCover}>
            <div className={styles.pageContent}>
                { blogs.map((item, index)=>{
                    return <div key={index} className={`${styles.pressItem} group`}>
                    <img className={styles.pressImg} src={`${IMG_PATH}${item.img_path}`} />
                    <div> <img src={calendar} /> <p>25 Ağustos 2022</p> </div>
                    <p className={styles.pressItemText}> {item.blog_title} </p>
                    <Link to={`/blogdetail/${item.id}`} className={`${styles.pressBtn} group-hover:visible`} target={'_top'}>
                        Devamını Oku <i className="ri-arrow-right-line pl-2"></i>
                    </Link>
                    </div>
                }) }
            </div>
        </section>
    </main>
  )
}

export default Blog