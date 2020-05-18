import Home from '../views/home'
import About from '../views/about'
import Article from '../views/article'
import Detail from '../views/detail'

const routes = [
  {
    path: "/",
    component: Home,
    name:'Home',
    exact:true
  },
  {
    path: "/about",
    name:'About',
    component: About
  },
  {
    path: "/article",
    name:'Article',
    component: Article
  },
  {
    path: "/detail/:id",
    name:'Detail',
    component: Detail
  }
];
export default routes
