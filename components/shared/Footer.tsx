import Image from 'next/image'
import Link from 'next/link'

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
    return (
        <footer className="border-t">
            <div className="flex-center wrapper flex flex-between flex-col gap-4 p-5 text-center sm:flex-row">
                <Link href="/">
                    <Image
                        src="/assets/images/logo.svg"
                        alt="logo"
                        width={128}
                        height={38}
                    />
                </Link>
                <p>2024 Evently. All Right reserved.</p>
            </div>
        </footer>
    )
}
