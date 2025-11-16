import Link from "next/link";

export default function Blogs() {
    return(
    <>
        <div>Blogs Page</div>
        <div>
            <h1>Welcome to the Blogs Page</h1>
            <ul>
                <li><Link href="/blogs/1">Blog Post 1</Link></li>
                <li><Link href="/blogs/2">Blog Post 2</Link></li>
                <li><Link href="/blogs/3">Blog Post 3</Link></li>
                <li><Link href="/blogs/150">Blog Post 150 (Not Found Example)</Link></li>
            </ul>
        </div>
    </>);
}