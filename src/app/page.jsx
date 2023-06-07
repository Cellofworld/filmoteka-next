
import { getDataFilm } from "@/services/filmApi";
import Image from "next/image";
import Link from "next/link";
import styles from './films.module.scss'
import Pagination from "@/components/pagination/Pagination";

export default async function Films() {

  const sendData = {
    type: 'FILM',
    page: 1
}

  const {total, items} = await getDataFilm(sendData)

  return <div className={styles.main_wrapper}>

  <h1 className={styles.main_title_films}>Смотреть фильмы онлайн</h1>

  <div className={styles.films_items_cont}>
    {
      items.map((el) => (
          <Link 
            key={el.kinopoiskId}
            className={styles.film_item_link }
            href={`/films/filmid/${el.kinopoiskId}`}>
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
    <Pagination totalItems={total} />
  </div>
}