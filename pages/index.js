import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react';
import monalisa from '../public/images/monalisa.jpg';
import venus from '../public/images/venus.jpg';
import wing from '../public/images/wing.jpg';
import medusa from '../public/images/medusa.jpg';
import oath from '../public/images/oath.jpg';
import liberty from '../public/images/liberty.jpg';

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
        <div className = {styles.exhibitionGrid}>
          <div className = {styles.exhibitionColMain}>
            <div className = {styles.exhibitionTitle}>GA</div>
            <div className = {styles.exhibitionText}>
            </div>
            <div className = {styles.exhibitionText}>
              <p>The museum opened on 10 August 1793 with an exhibition of 537 paintings, the majority of the works being royal and confiscated church property. </p>
              <p>The collection was further increased during the reigns of Louis XVIII and Charles X, and during the Second French Empire the museum gained 20,000 pieces.</p>
              <p>The Musée du Louvre contains more than 380,000 objects and displays 35,000 works of art in eight curatorial departments with more than 60,600 square metres (652,000 sq ft) dedicated to the permanent collection.</p>
            </div>
          </div>
          <div className = {styles.exhibitionCol}>
            <div className = {styles.exhibitionText}>
            </div>
            <div className = {styles.exhibitionTitle}>LL</div>
            <div className = {styles.exhibitionTitle}>ERY</div>
          </div>
          <div className = {styles.exhibitionCol}>
            <div className = {styles.exhibitionText}>
              <h3>Our Gallery</h3>
              <hr />
              <p>Explore the former palace of the kings of France – now the largest museum in the world covering almost 10,000 years of history! The palace is divided into three wings: Richelieu, Sully and Denon. Take your pick!</p>
            </div>
            <div className = {styles.exhibitionText}>
              <p>There are plenty of good reasons to visit the Louvre! So many works of art to discover in this fabulous museum that used to be a palace! So plan your visit in advance to make the most of it. Why not pick one of our visitor trails to follow a theme-based tour? And when you need a break, where better than the museum’s restful gardens?</p>
            </div>
          </div>
        </div>
      </div>
      <div className = {`${styles.standardGrid} ${styles.exhibition}`}>
        <div className = {styles.exhibitionGrid}>
          <div className = {styles.paintingCol}>
            <div className = {styles.paintingContainer}>
              <Image src = {medusa} alt = "" />
            </div>
            <h3>The Raft of the Medusa</h3>
            <p>Théodore Géricault</p>
            <p>1818–1819</p>
          </div>
          <div className = {styles.paintingCol}>
            <div className = {styles.paintingContainer}>
              <Image src = {liberty} alt = "" />  
            </div>
            <h3>Liberty Leading the People</h3>
            <p>Eugène Delacroix</p>
            <p>1830</p>
          </div>
          <div className = {styles.paintingCol}>
            <div className = {styles.paintingContainer}>
              <Image src = {oath} alt = "" />  
            </div>
            <h3>Oath of the Horatii</h3>
            <p>Jacques-Louis David</p>
            <p>1784</p>
          </div>
        </div>
      </div>
    </div>
  )
}
