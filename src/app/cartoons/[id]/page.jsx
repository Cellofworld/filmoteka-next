import FramesFilm from "@/components/framesFilm/FramesFilm";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";
import { getOneFilmData } from "@/services/filmApi";
import styles from '../../oneFilm.module.scss'
import Image from "next/image";

export default async function CartoonsOne({params: {id}}) {
    
    const oneFilmData = await getOneFilmData(id)

    return (

        <div className={styles.one_film_wrapper}>
          <div className={styles.one_film_desc}>
            <Image
              src={oneFilmData.posterUrlPreview}
              width={260}
              height={380}
              alt={oneFilmData.nameRu === null ? oneFilmData.nameOriginal : oneFilmData.nameRu}
              />
            <div className={styles.one_film_info_cont}>


              <h1
                className={styles.one_film_info_title_cont}
              >{oneFilmData.nameRu === null ? oneFilmData.nameOriginal : oneFilmData.nameRu}</h1>


              <div className={styles.one_film_info_genres_cont}>
                <div className={styles.one_film_info_genres_cont}>
                  {
                    oneFilmData.genres ? oneFilmData.genres.slice(0,4).map((e) => (
                      <div className={styles.one_film_info_genres_item} key={e.genre}>{e.genre}</div>
                    )) : '-'
                  }
                </div>
              </div>



              <div className={styles.one_film_desc_m_cont}>

              <div className={styles.one_film_desc_m_items_cont}>
                  <div className={styles.one_film_desc_m_item }>Оригинальное название:</div>
                  <div className={styles.one_film_desc_m_item }>{oneFilmData.nameOriginal ? oneFilmData.nameOriginal : '-'}</div>
                </div>

                <div className={styles.one_film_desc_m_items_cont}>
                  <div className={styles.one_film_desc_m_item }>Год:</div>
                  <div className={styles.one_film_desc_m_item }>{oneFilmData.year ? oneFilmData.year : '-'}</div>
                </div>

                <div className={styles.one_film_desc_m_items_cont}>
                  <div className={styles.one_film_desc_m_item }>Длительность:</div>
                  <div className={styles.one_film_desc_m_item }>{oneFilmData.filmLength ? `${oneFilmData.filmLength} мин.` : '-'}</div>
                </div>

                <div className={styles.one_film_desc_m_items_cont}>
                  <div className={styles.one_film_desc_m_item }>Рейтинг MPAA:</div>
                  <div className={styles.one_film_desc_m_item }>{oneFilmData.ratingMpaa === null ? '-' : oneFilmData.ratingMpaa.toUpperCase() }</div>
                </div>

                <div className={styles.one_film_desc_m_items_cont}>
                  <div className={styles.one_film_desc_m_item }>Возрастные ограничения:</div>
                  <div className={styles.one_film_desc_m_item }>{oneFilmData.ratingAgeLimits ? `${oneFilmData.ratingAgeLimits.slice(3)}+` : '-'}</div>
                </div>



                <div className={styles.one_film_desc_m_items_cont}>
                  <div className={styles.one_film_desc_m_item }>Страна:</div>
                  <div className={styles.one_film_desc_m_item }>
                    {
                      oneFilmData.countries ? oneFilmData.countries.map((e) => (
                        <div className={styles.one_film_desc_m_item_sec } key={e.country}>{e.country}</div>
                      )) : '-'
                    }
                  </div>
                </div>


                <div className={styles.one_film_desc_m_items_cont}>
                    <div className={styles.one_film_desc_m_item }>Кинопоиск: </div>
                    <div className={styles.one_film_desc_m_item}>{oneFilmData.ratingKinopoisk ? oneFilmData.ratingKinopoisk : '-'}</div>
                </div>

                <div className={styles.one_film_desc_m_items_cont}>
                    <div className={styles.one_film_desc_m_item }>IMDb: </div>
                    <div className={styles.one_film_desc_m_item}>{oneFilmData.ratingImdb ? oneFilmData.ratingImdb : '-'}</div>               
                </div>

              </div>


              </div>

          </div>

              <div className={styles.one_film_info_desc}>{oneFilmData.description}</div>

          <FramesFilm dataId={id} />
          <VideoPlayer dataVideoId={id}/>
        </div>

    )
}