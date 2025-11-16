import "@/app/globals.css"
import { Suspense } from "react";

export default function ContentLayout({ children, users, tasks }) {
    return (
        <div className="space-y-4">
            <div>{children}</div>
            <Suspense fallback={
                <div className="min-h-screen flex justify-center items-center">
                <h1>Loading your content</h1>
                </div>
                }>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:flex-1 lg:max-w-[50%]">{users}</div>
                <div className="w-full lg:flex-1 lg:max-w-[50%]">{tasks}</div>
            </div>
            </Suspense>
        </div>
    );
}