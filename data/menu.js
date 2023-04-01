import { servicesData } from "./services";
export const menuData = [
    {
        href: "/",
        name: "Home"
    },
    {
        href: "/service",
        name: "Services",
        children: servicesData
    },
    {
        href: "/portfolio",
        name: "Portfolio"
    },
    {
        href: "/blog",
        name: "Blog"
    },
    {
        href: "/contact",
        name: "Contact"
    },
];