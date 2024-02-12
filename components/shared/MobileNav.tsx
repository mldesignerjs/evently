import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'
import { Separator } from '../ui/separator'
import NavItems from './NavItems'

export interface IMobileNavProps {}

export default function MobileNav(props: IMobileNavProps) {
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className="align-middle">
                    <Image
                        src="/assets/icons/menu.svg"
                        width={24}
                        height={24}
                        alt="menu"
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent className="md:hidden bg-white flex flex-col gap-6">
                    <Image
                        src="/assets/images/logo.svg"
                        alt="Logo"
                        width={128}
                        height={38}
                    />
                    <Separator className="border border-gray-50" />
                    <NavItems />
                </SheetContent>
            </Sheet>
        </nav>
    )
}
