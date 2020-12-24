import { lazy } from "react";

const routes = [
  {
    label: "",
    path: "/",
    exact: true,
    component: lazy(() => import("./pages/HomePage")),
    privated: false,
    restricted: true,
  },
  {
    label: "Регистация",
    path: "/register",
    exact: true,
    component: lazy(() => import("./pages/RegistrationPage")),
    privated: false,
    restricted: true,
  },
  {
    label: "Вход",
    path: "/login",
    exact: true,
    component: lazy(() => import("./pages/LoginPage")),
    privated: false,
    restricted: true,
  },
  {
    label: "Дневник",
    path: "/diary",
    exact: true,
<<<<<<< HEAD
    component: lazy(() => import('./pages/DiaryPage')),
    privated: false, //поменять на true
    restricted: true,
=======
    component: lazy(() => import("./pages/DiaryPage")),
    privated: true, //поменять на true
    restricted: false,
>>>>>>> e46805865f26c87b35aee75a0aaf4f5f40b0e776
  },
  {
    label: "Калькулятор",
    path: "/calculator",
    exact: true,
    component: lazy(() => import("./pages/CalculatorPage")),
    privated: false, //nado sdeat' TRUE
    restricted: false,
  },
];

export default routes;
