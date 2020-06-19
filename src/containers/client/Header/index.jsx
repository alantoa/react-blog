import React from 'react';
import {makeStyles, fade} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import OnScrollHide from './HideOnScoll';
import MenuDrawer from "../Drawer/Container";
import {withRouter, Link} from 'react-router-dom';
import routes from '@/routes/clientRouterConfig';
import DrawerContent from '../Drawer';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
// css style
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  titleLink: {
    display: 'inline-block',
    color: '#fff',
    '&:first-child': {
      marginRight: 20
    },
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  login:{
    color:'#fff'
  }
}));

function Header(props) {
  const [state, setState] = React.useState({
    open: false
  });


  function showDrawer() {
    setState(state => ({
      open: true
    }));
  }

  function closeDrawer() {
    setState(state => ({
      open: false
    }));
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <OnScrollHide>
        <AppBar>
          <Toolbar>
            <Hidden only={['xl', 'lg', 'md']}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                onClick={showDrawer.bind(this)}
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon/>
              </IconButton>

              <Typography className={classes.title} variant="h6" noWrap>
                {routes.find(item => item.path === props.location.pathname) ? routes.find(item => item.path === props.location.pathname).name : '404'}
              </Typography>
            </Hidden>
            <Hidden only={['xs', 'sm']}>
              <Typography className={classes.title} variant="h6" noWrap>
                {routes.map(item => {
                    return (
                      item.name?<Link key={item.path} to={item.path}><Button size="medium" className={classes.titleLink}>{item.name}</Button></Link>:''
                    )

                })}
              </Typography>
            </Hidden>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
              />
            </div>
            <Link to="/login">
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                className={classes.login}
              >
                <AccountCircle />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </OnScrollHide>
      <MenuDrawer {...state}>
        <DrawerContent close={closeDrawer.bind(this)}/>
      </MenuDrawer>
    </div>
  );
}

export default withRouter(Header)

