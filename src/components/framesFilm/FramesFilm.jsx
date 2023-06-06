import { getFilmFrames } from "@/services/filmApi"
import Image from "next/image"
import styles from '../styleScss/framesFilms.module.scss'



export default async function FramesFilm({dataId}) {

    const {items} = await getFilmFrames(dataId)



    if (items < 1) return <div>No image</div>

    return (
        <div className={styles.wraper}>
            <h3 className={styles.frame_title}>Кадры из фильма</h3>
            <div className={styles.frame_cont}>
                {
                    items.slice(0,8).map((el) => (
                        <Image
                            className={styles.frame_img}
                            key={el.imageUrl}
                            src={el.previewUrl}
                            width={220}
                            height={140}
                            alt="Кадр из фильма"
                        />
                    ))
                }
            </div>
        </div>
    
  )
}
