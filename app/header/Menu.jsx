import Link from "next/link";
import { Fragment } from "react";
export const Home = () => (
    <Fragment>
        <li><Link href="/">Home 01</Link></li>
        <li><Link href="/home-two">Home 02</Link></li>
        <li><Link href="/home-three">Home 03</Link></li>
    </Fragment>
);
export const Page = () => (
    <Fragment>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/team">Team</Link></li>
        <li><Link href="/services-details">Services Details</Link></li>
        <li><Link href="/404-error">404 Page</Link></li>
    </Fragment>
);
export const Room = () => (
    <Fragment>
        <li><Link href="/rooms">All Rooms</Link></li>
        <li><Link href="/rooms">Standard Room</Link></li>
        <li><Link href="/rooms">Suit Room</Link></li>
        <li><Link href="/rooms">Royal Room</Link></li>
        <li><Link href="/rooms">Majestic Banquet</Link></li>
        <li><Link href="/rooms">Royal Bliss Banquet</Link></li>
    </Fragment>
);
export const BarKitchen = () => (
    <Fragment>
        <li><Link href="/rooms">All Rooms</Link></li>
        <li><Link href="/rooms">Standard Room</Link></li>
        <li><Link href="/rooms">Suit Room</Link></li>
        <li><Link href="/rooms">Royal Room</Link></li>
        <li><Link href="/rooms">Majestic Banquet</Link></li>
        <li><Link href="/rooms">Royal Bliss Banquet</Link></li>
    </Fragment>
);
export const Blog = () => (
    <Fragment>
        <li><Link href="/blog-grid">Blog Grid</Link></li>
        <li><Link href="/blog-standard">Blog Standard</Link></li>
        <li><Link href="/blog-details/1">Blog Details</Link></li>
    </Fragment>
);