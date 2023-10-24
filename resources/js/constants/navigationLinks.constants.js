import { ROLES } from "@/constants/roles.constants.js";
import { ROUTE_NAMES } from "@/constants/routeNames.constants.js";

export const NAVIGATION_LINKS = [
    {
        label: "Home",
        path: ROUTE_NAMES.HOME,
        roles: [ROLES.USER, ROLES.ADMIN, ROLES.DOC_WRITER],
    },
    {
        label: "Users",
        path: ROUTE_NAMES.USERS,
        roles: [ROLES.ADMIN],
    },
    {
        label: "Products",
        path: ROUTE_NAMES.PRODUCTS,
        roles: [ROLES.USER, ROLES.ADMIN, ROLES.DOC_WRITER],
    },
    {
        label: "My Profile",
        path: ROUTE_NAMES.PROFILE,
        roles: [ROLES.USER, ROLES.ADMIN, ROLES.DOC_WRITER],
    },
];
