import { lazy } from "react";

const routes = [
    {   label: "Home",
        path: "/",
        exact: true,
        component: lazy(() => import("./pages/Home")),
        privated: false,
        restricted: false
    },
    {   
        label: "Register",
        path: "/register",
        exact: true,
        component: lazy(() => import("./pages/RegistrationPage")),
        privated: false,
        restricted: true
    },
    {   
        label: "Login",
        path: "/login",
        exact: true,
        component: lazy(() => import("./pages/LoginPage")),
        privated: false,
        restricted: true
    },
    {   
        label: "Contacts",
        path: "/contacts",
        exact: true,
        component: lazy(() => import("./pages/Contacts")),
        privated: true,
        restricted: false
    },
]

export default routes;