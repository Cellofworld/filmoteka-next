import { getDataPremier } from "@/services/filmApi";
import styles from '../styleScss/searchSide.module.scss'
import Image from "next/image";
import Link from "next/link";


export default async function PremiereSideBar() {

    const dataPremiere = await getDataPremier();

  return (
    <div className={styles.side_premiere_cont}>
    {
      dataPremiere.map((el) => (
          <Link 
            key={el.kinopoiskId}
            className={styles.side_premire_link}
            href={`/films/${el.kinopoiskId}`}>
            <Image
              src={el.posterUrlPreview}
              width={74}
              height={112}
              alt={el.nameRu === null ? el.nameOriginal : el.nameRu}
            />
              <h2 className={styles.side_premire_title_film}>{el.nameRu === null ? el.nameOriginal : el.nameRu}</h2>
          </Link>
      ))
    }
    </div>
  )
}
