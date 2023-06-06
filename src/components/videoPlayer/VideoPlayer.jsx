"use client"

import { getFilmVideo } from "@/services/filmApi"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player";
import styles from '../styleScss/videoPlayer.module.scss'

export default function VideoPlayer({dataVideoId}) {

    const [dataVideo, setDataVideo] = useState([])
    const [loading, setLoading] = useState(true)

    
    useEffect(() => {
        getFilmVideo(dataVideoId)
            .then(setDataVideo)
            .finally(() => setLoading(false))
    }, [dataVideoId])

    if( dataVideo === undefined) return <div>NO video</div>

  return (
        
    <div className={styles.wraper_player}>
        {
            loading ? <div className={styles.player_loading}>LOADING</div> : 
            <ReactPlayer 
                url={dataVideo.url}
                width="100%"
                height="480px"   />
        }
    </div>
    
  )
}
