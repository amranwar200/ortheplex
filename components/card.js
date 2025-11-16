import Link from "next/link";
export default function Card({ children }) {
    return (
        <div className="rounded-lg border bg-white shadow-sm p-4 max-w-md w-full">
            {children}
            <Link href="/" className="mt-2 text-sm text-blue-600 hover:underline flex items-center justify-center">
                Back Home
            </Link>
        </div>
    )
}