import React from 'react'
import useWindowPosition from '../../hooks/useWindowPosition'
import places from '../../static/places'
import ImageCard from '../ImageCard'
import useStyles from './styles'

const PlaceToVisit = () => {

  const classes = useStyles()
  const checked = useWindowPosition('header')
  
  return(
    <div className={classes.root} id='place-to-visit'>
      <ImageCard place={places[0]} checked={checked} />
      <ImageCard place={places[1]} checked={checked} />
    </div>
  )
}

export default PlaceToVisit