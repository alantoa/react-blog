import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, fade} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import OnScrollHide from './HideOnScoll'
import MenuDrawer from "../drawer";


const useStyles = (theme => ({
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
  }
}));

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false}
  }

  showDrawer(event) {
    this.setState(state => ({
      open: true
    }));
  }

  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <OnScrollHide>
          <AppBar>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                onClick={this.showDrawer.bind(this)}
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon/>
              </IconButton>
              <Typography className={classes.title} variant="h6" noWrap>
                HOME
              </Typography>
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
            </Toolbar>
          </AppBar>
        </OnScrollHide>
        <MenuDrawer {...this.state}/>
      </div>
    );
  }
}

Top.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles)(Top)
