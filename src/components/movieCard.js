import * as React from 'react'
import { cardContainer, viewLink, cardImg, cardShop } from './movieCard.module.css'

const MovieCard = ({
  mainImgURL,
  Title,
  link,
}) => {
  return (
    <div className={cardContainer}>
        <h3 className="cardTitleCSS">{Title}</h3>
        <img className={cardImg} src={mainImgURL} alt={Title} />
        <br />
        <a className={viewLink} href={link}>Read More</a>
        <div className={cardShop}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 1.92 1.61h10.8a2 2 0 0 0 1.92-1.61L23 6H6"></path>
            </svg>
        </div>
    </div>
  )
}

export default MovieCard
