import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import ElevationScroll from "./ElevationScroll";
import ScrollTop from "./ScrollTop";
import { withRouter, Link } from "react-router-dom";
import { menu } from "config/system.config";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import Icon from "components/SvgIcon";
import style from "./header.module.scss";
import { ReactComponent as Github } from "assets/image/github.svg";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
  },
  menuButton: {
    height: 50,
    width: 50,
    "& .MuiSvgIcon-root": {
      fontSize: 26,
    },
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
    color: "inherit",
    height: "100%",
    padding: "0 20px",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.1),
    },

  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    [theme.breakpoints.down("sm")]: {
      padding: "0 4px",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  login: {
    color: "#fff",
  },
  menuItem: {
    fontSize: 20,
  },
}));

function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar color="transparent">
          <Container className={classes.container}>
            <Toolbar className={classes.toolbar}>
              <Hidden only={["xl", "lg", "md"]}>
                <IconButton
                  className={classes.menuButton}
                  onClick={handleClick}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {" "}
                  {menu.map((item) => {
                    return (
                      <Link to={item.path} key={item.path}>
                        <MenuItem
                          className={classes.menuItem}
                          onClick={handleClose}
                        >
                          {item.name}
                        </MenuItem>
                      </Link>
                    );
                  })}
                </Menu>
              </Hidden>

              <Hidden only={["xs", "sm"]}>
                <Link to="/">
                  <div className={clsx(style.logo, style.lgLogo)}>
                    <Icon use="logo" />
                    <h3 className={style.blogName}>Toa Blog</h3>
                  </div>
                </Link>
              </Hidden>
              <Hidden only={["xl", "lg", "md"]}>
                <Link to="/">
                  <div className={clsx(style.logo, style.smLogo)}>
                    <Icon use="toa" />
                  </div>
                </Link>
              </Hidden>
              <Hidden only={["xs", "sm"]}>
                <div className={classes.title} variant="h3">
                  {menu.map((item) => {
                    return item.name ? (
                      <Link key={item.path} to={item.path}>
                        <Button className={clsx(classes.titleLink,style.titleLink)}>
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
                <IconButton
                  aria-label="search"
                  className={classes.menuButton}
                  color="inherit"
                >
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
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default withRouter(Header);
