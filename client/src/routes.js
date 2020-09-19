import Pages from './pages';

const routes = [
  {
    path: '/',
    component: Pages.CountryList,
    exact: true,
  },
  {
    path: '/:id',
    component: Pages.CountryDetail,
    exact: true,
  },
];

export default routes;
