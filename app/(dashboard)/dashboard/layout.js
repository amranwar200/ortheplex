import "@/app/globals.css"

export default function ContentLayout({ children, users, tasks }) {
    return (
        <div className="space-y-4">
            <div>{children}</div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:flex-1 lg:max-w-[50%]">{users}</div>
                <div className="w-full lg:flex-1 lg:max-w-[50%]">{tasks}</div>
            </div>
        </div>
    );
}