import Link from "next/link";
import styles from '../styleScss/pagination.module.scss'


export default function Pagination({totalItems}) {

    let pageCount = []

    for (let i = 0; i < totalItems / 20; i++) {
        pageCount.push(i+1)
        
    }

  return (
    <div className={styles.wrapper}>
        {
            pageCount.map((el) => (
                <Link
                    className={styles.pagi_item} 
                    key={el}
                    href={`/films/filmpage/${el}`}
                >{el}</Link>
            ))
        }
    </div>
  )
}
