import { MenuType, RouteInfo } from './navbar.metadata';
export const ROUTES: RouteInfo[] = [
    { path: '', title: 'Home', menuType: MenuType.BRAND },
    { path: 'company-list', title: 'Company', menuType: MenuType.LEFT },
    { path: 'about', title: 'About Us', menuType: MenuType.RIGHT },
    { path: 'contact', title: 'Contact', menuType: MenuType.RIGHT }
];