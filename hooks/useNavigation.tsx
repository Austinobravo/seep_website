import { usePathname } from "next/navigation"
import React from "react"


const useNavigation = () => {

     const pathname = usePathname()
    const navLinks = React.useMemo(() => [
        {
            name: "About",
            href: "/about",
            active: pathname.startsWith("/about")
        },
        {
            name: "Gallery",
            href: "/gallery",
            active: pathname.includes("/gallery")
        },
        {
            name: "Project",
            href: "/project",
            active: pathname.startsWith("/project")
        },
        {
            name: "Blog",
            href: "/blog",
            active: pathname.startsWith("/blog")
        },
        {
            name: "Contact Us",
            href: "/contact",
            active: pathname === "/contact"
        },
        {
            name: "Donate",
            href: "/donate",
            active: pathname === "/donate"
        },
    ], [pathname])

    return navLinks

}

export default useNavigation