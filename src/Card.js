import React from 'react';

function Card ({data}) {
    return(
   <>
   <div className='big-container'>
   {data.map((films, i) => {
    return(
    <div className='container' key={i}>
    <h1>{films.title}</h1>
   <p>{films.release_date}</p>
   <p>{films.opening_crawl}</p>
  <a href='#'>More Info</a>
   </div>
    );
   })}
   </div>
   </>
   );
  
    
}

export default Card;