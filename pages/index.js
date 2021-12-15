import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react';
import monalisa from '../public/images/monalisa.jpg';
import venus from '../public/images/venus.jpg';
import wing from '../public/images/wing.jpg';
import medusa from '../public/images/medusa.jpg';

export default function Home() {

  const [artData, setArtData] = useState();
  const [dataFound, setDataFound] = useState(false);
  const [config, setConfig] = useState();

  const getArt = async () => {
    const api_call = await fetch('https://api.artic.edu/api/v1/artworks?page=2&limit=100')
      .then(response => response.json())
      .then(data => {console.log(data); setConfig(data.config.iiif_url); setArtData(data.data.filter(image => image.image_id != null)); setDataFound(true);})
      .catch((err) => alert("Something went wrong!"))
  }

  useEffect(() => {
    getArt();
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.openingGrid}>
        <div className={styles.openingCol}>
          <p>Open between 9:00am - 6:00pm</p>
          <hr />
          <h1>WELCOME TO THE LOURVE</h1>
          <hr />
          <p>Tours available - between 11:00am - 2:00pm</p>
          <button className={styles.button}>BUY TICKETS</button>
        </div>
        <div className={styles.secondCol}>

        </div>
      </div>
      <div className = {styles.standardGrid}>
        <div className = {styles.openingCol}>
          <p>Home of the famous</p>
          <h1>MONA LISA</h1>
          <div className = {styles.rightText}>
            <h2>Leonardo da Vinci</h2>
            <h2>1503 - 1506 (1517)</h2>
            <p>Oil on poplar panel</p>
            <p>77 cm × 53 cm (30 in × 21 in)</p>
            <hr />
            <p>Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world".</p>
          </div>
        </div>
        <div className = {styles.openingCol}>
          <div className = {styles.imageContainer}>
            <Image src={monalisa} />
          </div>
        </div>
      </div>
      <div className = {styles.standardGrid}>
        <div className = {styles.openingCol}>
          <div className = {styles.imageContainer}>
            <Image src={venus} />
          </div>
        </div>
        <div className = {styles.openingCol}>
          <Image src={wing} />
          <div className = {`${styles.rightText} ${styles.leftBorder}`}>
            <h2>Venus de Milo</h2>
            <h2>Alexandros of Antioch</h2>
            <p>Between 150-125 BC</p>
            <p>Parian Marble</p>
            <p>204 cm (6 ft 8 in)</p>
            <hr />
            <p>The Venus de Milo is an ancient Greek sculpture from the Hellenistic period, depicting a Greek goddess. It is one of the most famous works of ancient Greek sculpture. </p>
          </div>
        </div>
      </div>
      <div className = {`${styles.standardGrid} ${styles.exhibition}`}>
        <div className = {styles.exhibitionTitle}>
          <div className = {styles.mainTitle}>EXHIBITIONS</div>
        </div>

        <div className = {styles.exhibitionGrid}>
          <div className = {styles.exhibitionCard}>
            <div className = {styles.exhibitionCardImage}>
              <Image src = {medusa} />
            </div>
          </div>
          <div className = {styles.exhibitionCard}>
            <div className = {styles.exhibitionCardImage}>
              <Image src = {venus} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
