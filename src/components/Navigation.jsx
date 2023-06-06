'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from './styleScss/navigation.module.scss'

export default function Navigation({navLinks}) {

    const pathname = usePathname();

  return (

    <div className={styles.nav_list} >
        {navLinks.map((el) => {
                const isActive = pathname === el.href;

                return (
                    <Link
                        key={el.label}
                        href={el.href}
                        className={isActive ? styles.nav_item_active : styles.nav_item}
                    >
                        <div className={styles.nav_item_sp}>
                            {el.label}
                        </div>
                    </Link>
                )
            })
        }
    </div>

  )
}
