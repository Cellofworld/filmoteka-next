import { getDataFilm } from "@/services/filmApi";
import styles from '../films.module.scss'
import Image from "next/image";
import Link from "next/link";


export default async function Series() {

  const sendData = {
    type: 'TV_SERIES',
    page: 1
}

  const {total, items} = await getDataFilm(sendData)


  return <div className={styles.main_wrapper}>

  <h1>Смотреть фильмы онлайн</h1>

  <div className={styles.films_items_cont}>
    {
      items.map((el) => (
          <Link 
            key={el.kinopoiskId}
            className={styles.film_item_link }
            href={`/series/${el.kinopoiskId}`}>
            <Image
              src={el.posterUrlPreview}
              width={170}
              height={240}
              alt={el.nameRu === null ? el.nameOriginal : el.nameRu}
            />
              <h2>{el.nameRu === null ? el.nameOriginal : el.nameRu}</h2>
          </Link>
      ))
    }
    </div>
  </div>
}