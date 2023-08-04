import { Navbar, Sidebar } from './presentation/apps';

const routes = {
  new_ticket_sidebar: {
    Component: Sidebar,
    dependences: ['tickets']
  },
  ticket_sidebar: {
    Component: Sidebar,
    dependences: ['tickets']
  },
  nav_bar: {
    Component: Navbar,
    dependences: []
  }
};

export default routes;
