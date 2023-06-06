
import { getDataFilm } from "@/services/filmApi";
import Image from "next/image";
import Link from "next/link";
import styles from '../films.module.scss'


export default async function MiniSeries() {

  const sendData = {
    type: 'MINI_SERIES',
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
            href={`/mini-series/${el.kinopoiskId}`}>
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