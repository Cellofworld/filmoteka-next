"use client"

import Link from "next/link"



function Error({error, reset}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          () => reset()
        }
      >
        Попробовать снова
      </button>
      <Link href='/'>Вернуться на главную</Link>
    </div>
  )
}

export default Error