import { getSearchFilm } from "@/services/filmApi"
import Image from "next/image"
import styles from '../../films.module.scss'
import Link from "next/link"


export default async function SearchPage({params:{search}}) {

  
  const {keyword, pagesCount, films } = await getSearchFilm(search)

  return (
    <div className={styles.main_wrapper}>
  <h2 className={styles.search_result_title}>По вашему запросу <span>{`"${keyword}"`}</span> найдено {films.length-1} результатов</h2>

  <div className={styles.films_items_cont}>
    {
      films.map((el) => (
          <Link
            key={el.filmId}
            className={styles.film_item_link }
            href={`/films/filmid/${el.filmId}`}>
            <Image
              src={el.posterUrlPreview}
              width={170}
              height={240}
              alt={el.nameRu ? el.nameRu : el.nameEn}
            />
              <h2>{el.nameRu ? el.nameRu : el.nameEn}</h2>
          </Link>
      ))
    }
    </div>
  </div>
  )
}
