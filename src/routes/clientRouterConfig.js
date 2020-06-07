import Home from '../views/home'
import About from '../views/about'
import Article from '../views/article'

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
  }
];


export default routes
