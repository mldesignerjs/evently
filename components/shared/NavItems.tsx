'use client'
import { headerLink } from '@/app/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface INavItemsProps {}

export default function NavItems(props: INavItemsProps) {
    const pathname = usePathname()
    console.log(pathname)

    return (
        <ul className="md:flex-between flex flex-col w-full items-start gap-5 md:flex-row">
            {headerLink.map((link) => {
                const isActive = pathname === link.route
                return (
                    <li
                        key={link.route}
                        className={`${
                            isActive && 'text-primary-500'
                        } flex-center p-medium-16 whitespace-nowrap`}
                    >
                        <Link href={link.route}>{link.label}</Link>
                    </li>
                )
            })}
        </ul>
    )
}
