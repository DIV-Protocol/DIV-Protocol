import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-background flex flex-row h-14 p-2 mb-2 border-b-2 border-accent">
            <Image
                src="/images/icon.png"
                width={878}
                height={196}
                alt="D.I.V. Icon"
                className="max-h-full object-contain w-1/2 text-left"
            />
            <div className="w-full flex flex-row-reverse px-16 gap-16">
                <Link className="h-full text-center flex items-center bg-none transition-all text-xl shadow-text
                hover:text-shadow-md hover:-translate-y-1 hover:scale-105 hover:underline" href="/whitepaper.pdf">Whitepaper</Link>
                <Link className="h-full text-center flex items-center bg-none transition-all text-xl shadow-text
                hover:text-shadow-md hover:-translate-y-1 hover:scale-105 hover:underline" href="#">Road Map</Link>
            </div>
        </nav>
    )
}