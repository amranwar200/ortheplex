import { Card } from "@/components/dcard";

export default async function Users() {
    // Fetch example users
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return (
        <Card>
            <div className="text-xl font-semibold mb-4">Users</div>

            <div className="overflow-x-auto -mx-3 sm:-mx-4">
                <div className="inline-block min-w-full align-middle">
                    <table className="w-full table-auto border border-gray-200 rounded-lg">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-2 sm:px-4 py-2 text-left font-medium text-gray-700 border-b text-sm sm:text-base">
                                    Name
                                </th>
                                <th className="px-2 sm:px-4 py-2 text-left font-medium text-gray-700 border-b text-sm sm:text-base">
                                    Email
                                </th>
                                <th className="px-2 sm:px-4 py-2 text-left font-medium text-gray-700 border-b text-sm sm:text-base">
                                    Phone
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-2 sm:px-4 py-2 border-b text-sm sm:text-base">{user.name}</td>
                                    <td className="px-2 sm:px-4 py-2 border-b text-sm sm:text-base">{user.email}</td>
                                    <td className="px-2 sm:px-4 py-2 border-b text-sm sm:text-base">{user.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Card>
    );
}