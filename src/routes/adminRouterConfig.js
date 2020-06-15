import Loadable from 'react-loadable';
import LoadingComponent from '@/components/LoadingComponent'
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

const AdminIndex = Loadable({
  loader: () => import('@/views/AdminIndex'),
  loading: LoadingComponent
});

const AdminList = Loadable({
  loader: () => import('@/views/AdminList'),
  loading: LoadingComponent
});

const AdminManage = Loadable({
  loader: () => import('@/views/AdminManage'),
  loading: LoadingComponent
});

const ArticleList = Loadable({
  loader: () => import('@/views/ArticleList'),
  loading: LoadingComponent
});

const ArticleManage = Loadable({
  loader: () => import('@/views/ArticleManage'),
  loading: LoadingComponent
});


export const adminRouterConfig = [
  {
    path: "/admin",
    component: AdminIndex,
    name:'Admin Index',
    exact:true,
    icon:DashboardIcon
  },
  {
    path: "/admin/list",
    name:'Admin List',
    component: AdminList,
    icon:ShoppingCartIcon
  },
  {
    path: "/admin/manage",
    name:'Admin Manage',
    component: AdminManage,
    icon:PeopleIcon
  },
  {
    path: "/admin/article/list",
    name:'Article List',
    component: ArticleList,
    icon:BarChartIcon
  },
  {
    path: "/admin/article/manage",
    name:'Article Manage',
    component: ArticleManage,
    icon:LayersIcon
  }
]

