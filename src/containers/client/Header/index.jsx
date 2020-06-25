import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import ElevationScroll from "./ElevationScroll";
import ScrollTop from "./ScrollTop";
import MenuDrawer from "./Drawer";
import { withRouter, Link } from "react-router-dom";
import routes from "routes/clientRouterConfig";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import Icon from "components/SvgIcon";
import style from "./header.module.scss";
import { ReactComponent as Github } from "assets/image/github.svg";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    height: "100%",
  },
  title: {
    display: "none",
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  titleLink: {
    display: "inline-block",
    color: "#fff",
    height: "100%",
    padding: "0 20px",
    borderRadius:0,
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.1),
    },
  },
  smLogo: {},
  lgLogo: {},
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  login: {
    color: "#fff",
  },
}));

function Header(props) {
  const [open, setState] = React.useState(false);
  const showDrawer = () => {
    setState(true);
  };

  const closeDrawer = () => {
    setState(false);
  };

  const classes = useStyles();
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar className={classes.root} color="transparent">
          <Container>
            <Toolbar className={style.toolbar}>
              <Hidden only={["xl", "lg", "md"]}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  onClick={showDrawer}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>

              <Hidden only={["xs", "sm"]}>
                <Link to='/'>
                  <div className={clsx(style.logo, style.lgLogo)}>
                    <Icon use="logo" />
                    <h3 className={style.blogName}>Toa Blog</h3>
                  </div>
                </Link>
              </Hidden>
              <Hidden only={["xl", "lg", "md"]}>
                <Link to='/'>
                  <div className={clsx(style.logo, style.smLogo)}>
                    <Icon use="toa" />
                  </div>
                </Link>
              </Hidden>
              <Hidden only={["xs", "sm"]}>
                <div className={classes.title} variant="h3">
                  {routes.map((item) => {
                    return item.name ? (
                      <Link key={item.path} to={item.path}>
                        <Button className={classes.titleLink}>
                          {item.name}
                        </Button>
                      </Link>
                    ) : (
                      ""
                    );
                  })}
                </div>
              </Hidden>
              <Hidden only={["xl", "lg", "md"]}>
                <IconButton aria-label="search" color="inherit">
                  <SearchIcon />
                </IconButton>
              </Hidden>
            </Toolbar>
          </Container>
          <Hidden only={["xs", "sm"]}>
            <a
              className={clsx("github", style.github)}
              target="_black"
              href="https://github.com/MonsterAnan"
            >
              <Github />
            </a>
          </Hidden>
        </AppBar>
      </ElevationScroll>
      <MenuDrawer
        open={open}
        closeDrawer={closeDrawer}
        showDrawer={showDrawer}
      ></MenuDrawer>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default withRouter(Header);
