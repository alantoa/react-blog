import Home from '../views/home'
import About from '../views/about'
import Article from '../views/article'
import AppsIcon from '@material-ui/icons/Apps';
import { ReactComponent as T } from "assets/image/T.svg";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
const routes = [
  {
    path: "/",
    component: Home,
    name:'Home',
    icon:AppsIcon,
    exact:true
  },
  {
    path: "/about",
    name:'About',
    icon:T,
    component: About
  },
  {
    path: "/article",
    name:'Article',
    icon:FormatListBulletedIcon,
    component: Article
  }
];


export default routes
