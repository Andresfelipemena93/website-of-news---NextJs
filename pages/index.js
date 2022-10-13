import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PageLayout from '../components/PageLayaut'
import { useEffect, useState } from 'react'

export default function Home({ articles }) {


  return (
    <PageLayout title="home">
      <div className={styles.container}>
        {articles.length === 0 && <h1>No hay noticias</h1>}
        {articles.length > 0 && articles.map((article, index) => (
          <div key={index} >
            <img
              height={500}
              width={500}
              alt={article.title}
              src={article.urlToImage} />
            <h2>*{article.title}</h2>
            <p>
              {article.description}
            </p>



          </div>
        ))}

      </div>
    </PageLayout>

  )

}
// este metodo se ejecuta en el servidor 
// export async function getServerSideProps() {
//   const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a89f019621f43ffbcd97c3eed6a7f1e') // 8a89f019621f43ffbcd97c3eed6a7f1e
//   const { articles } = await response.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
export async function getStaticProps() {
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a89f019621f43ffbcd97c3eed6a7f1e') // 8a89f019621f43ffbcd97c3eed6a7f1e
  const { articles } = await response.json()

  return {
    props: {
      articles,
    },
  }
}
