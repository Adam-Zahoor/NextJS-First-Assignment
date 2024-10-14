import Link from "next/link";

export default function Header() {
    return (
        <div className="headerContainer">
    
            <Link href={"/home"}><div className="nameButton"><b>ADAM</b></div></Link>

            <ul className="headerButtons">

                <Link href={"/home"}><li>Home</li></Link>
                <Link href={"/"}><li>Portfolio</li></Link>
                <Link href={"/"}><li>About</li></Link>
                <Link href={"/"}><li>Contact</li></Link>

            </ul>
        </div>
    )
}