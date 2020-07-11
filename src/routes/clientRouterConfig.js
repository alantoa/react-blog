import Home from 'views/client/Home'
import About from 'views/client/About'
import Article from 'views/client/Article'
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
