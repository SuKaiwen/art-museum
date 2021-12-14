import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react';

export default function Home() {

  const [artData, setArtData] = useState();
  const [dataFound, setDataFound] = useState(false);
  const [config, setConfig] = useState();

  const getArt = async () => {
    const api_call = await fetch('https://api.artic.edu/api/v1/artworks?page=2&limit=100')
      .then(response => response.json())
      .then(data => {console.log(data); setConfig(data.config.iiif_url); setArtData(data.data[0]); setDataFound(true);})
      .catch((err) => alert("Something went wrong!"))
  }

  useEffect(() => {
    getArt();
  }, [])

  return (
    <div className={styles.container}>
      <h1>Art Museum</h1>
      {dataFound && 
        <>
          <img src = {`${config}/${artData.image_id}/full/843,/0/default.jpg`} alt = "" />
          <h1>{artData.title}</h1>
          <h3>{artData.artist_title}</h3>
          <h4>From {artData.date_start} - {artData.date_end}</h4>
          <p>ID: {artData.artist_id}</p>
          <p>Medium: {artData.medium_display}</p>
          <p>{artData.place_of_origin}</p>
          <p>{artData.category_titles}</p>
          <p>{artData.credit_line}</p>
        </>
      }
    </div>
  )
}
