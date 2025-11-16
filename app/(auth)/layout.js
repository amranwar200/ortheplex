import "@/app/globals.css";

export default function Authlayout({ children }) {
    return (
        <html lang="en">
            <body className="flex min-h-screen items-center justify-center bg-gray-50">
                {children}
            </body>
        </html>
    );
}