


export async function getDataFilm({type, page}) {

    const res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=${type}&ratingFrom=0&ratingTo=10&yearFrom=1950&yearTo=3000&page=${page}`,
     {
     method: 'GET',
     headers: {
         'X-API-KEY': 'b2d3263f-b5f6-41a8-a9d3-95d7ccc68971',
         'Content-Type': 'application/json',
     },
     next: {
       revalidate: 60,
       }
     }
    )
     const data = await res.json();
     return data
 }


 export async function getDataCartoons() {
    const res = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=18&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1',
     {
     method: 'GET',
     headers: {
         'X-API-KEY': 'b2d3263f-b5f6-41a8-a9d3-95d7ccc68971',
         'Content-Type': 'application/json',
     },
     next: {
       revalidate: 60,
       }
     }
    )
     const data = await res.json();
     return data
 }

 export async function getDataPremier() {
  const res = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=MAY',
   {
   method: 'GET',
   headers: {
       'X-API-KEY': 'b2d3263f-b5f6-41a8-a9d3-95d7ccc68971',
       'Content-Type': 'application/json',
   },
   next: {
     revalidate: 60,
     }
   }
  )
   const {items, total} = await res.json();
   return items.slice(0,24)
}

export async function getSearchFilm(search) {
  const res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${search}&page=1`,
   {
   method: 'GET',
   headers: {
       'X-API-KEY': 'b2d3263f-b5f6-41a8-a9d3-95d7ccc68971',
       'Content-Type': 'application/json',
   },
   next: {
     revalidate: 60,
     }
   }
  )
   const data = await res.json();
   return data
}

export async function getOneFilmData(id) {
  const res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
   {
   method: 'GET',
   headers: {
       'X-API-KEY': 'b2d3263f-b5f6-41a8-a9d3-95d7ccc68971',
       'Content-Type': 'application/json',
   },
   next: {
     revalidate: 60,
     }
   }
  )
   const data = await res.json();
   return data
}

export async function getFilmFrames(id) {
  const res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images?type=STILL&page=1`,
   {
   method: 'GET',
   headers: {
       'X-API-KEY': 'b2d3263f-b5f6-41a8-a9d3-95d7ccc68971',
       'Content-Type': 'application/json',
   },
   next: {
     revalidate: 60,
     }
   }
  )
   const data = await res.json();

   
   return data
}


export async function getFilmVideo(id) {
  const res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`,
   {
   method: 'GET',
   headers: {
       'X-API-KEY': 'b2d3263f-b5f6-41a8-a9d3-95d7ccc68971',
       'Content-Type': 'application/json',
   },
   }
  )
   const data = await res.json();
   const ytVideo = await data.items.find(item => item.site === 'YOUTUBE')
   
   return ytVideo
}