import * as React from 'react'
import { cardContainer, viewLink, cardImg } from './card.module.css'

const Card = ({
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
    </div>
  )
}

export default Card
