import { CssBaseline, makeStyles } from '@material-ui/core'
import React from 'react'
import Header from './components/Header'
import PlaceToVisit from './components/PlaceToVisit'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/montain2.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}))

const App = () => {
  const classes = useStyles()
  return(
   <div className={classes.root}>
     <CssBaseline />
     <Header />
     <PlaceToVisit />
   </div> 
  )
}

export default App