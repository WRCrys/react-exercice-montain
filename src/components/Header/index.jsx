import { AppBar, Collapse, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SortIcon from '@material-ui/icons/Sort';
import { Link as Scroll} from 'react-scroll';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
    fontFamily: 'Nunito',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#ff3333'
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: '5rem'
  },
  goDown: {
    color: '#fff',
    fontSize: '4rem'
  }
}))

const Header = () => {

  const classes = useStyles();
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(true)
  }, [])

  return (
    <div className={classes.root} id='header'>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My <span className={classes.colorText}>Montain</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse in={checked}  {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to
        <br />
        My <span className={classes.colorText}>Montain</span>
          </h1>
          <Scroll to='place-to-visit' smooth={true}>
          <IconButton>
            <KeyboardArrowDownIcon className={classes.goDown} />
          </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  )
}

export default Header