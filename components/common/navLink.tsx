import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import React from "react"
export interface INavLink {
    href: string;
    name: string;
}
interface NavLinkProps {
    value: INavLink
}
export const NavLink: React.FC<NavLinkProps> = ({ value }) => {
    const { href, name } = value
    const router = useRouter()

    return (
        <Link href={href}>
            <a className={router.pathname === href ? 'nav-link active' : 'nav-link'}>
                {name}
            </a>
        </Link>
    )
}