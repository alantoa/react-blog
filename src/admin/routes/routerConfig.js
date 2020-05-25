
import NoMarch from '../views/NoMarch'
import Login from '../components/common/Login'
const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "*",
    component: NoMarch
  }
];


export default routes
