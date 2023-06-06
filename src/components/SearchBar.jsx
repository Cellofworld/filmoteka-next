"use client";

import { useState } from 'react';
import styles from './styleScss/navigation.module.scss';
import Link from 'next/link';


export default function SearchBar() {

    const [search, setSearch] = useState('');

  return (
    <div className={styles.search_cont}>
        <input
            className={styles.input_search}
            type="search"
            placeholder='Введите название'
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
        <Link
            className={styles.search_link_button}
            href={`/search/${search}`}>
              Искать
        </Link>
    </div>
  )
}
