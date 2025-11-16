import { Card } from "@/components/dcard";

export default async function Tasks() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const tasks = await res.json();

  return (
    <Card>
      <div className="text-xl font-semibold mb-4">Tasks</div>

      <div className="overflow-x-auto -mx-3 sm:-mx-4">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 sm:px-4 py-2 text-left font-medium text-gray-700 border-b text-sm sm:text-base">
                  Title
                </th>
                <th className="px-2 sm:px-4 py-2 text-left font-medium text-gray-700 border-b text-sm sm:text-base">
                  Status
                </th>
                <th className="px-2 sm:px-4 py-2 text-left font-medium text-gray-700 border-b text-sm sm:text-base">
                  User ID
                </th>
              </tr>
            </thead>

            <tbody>
              {tasks.slice(0, 10).map((task) => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 border-b text-sm sm:text-base">{task.title}</td>
                  <td className="px-2 sm:px-4 py-2 border-b text-sm sm:text-base">
                    {task.completed ? (
                      <span className="text-green-600 font-medium">Completed</span>
                    ) : (
                      <span className="text-red-600 font-medium">Pending</span>
                    )}
                  </td>
                  <td className="px-2 sm:px-4 py-2 border-b text-sm sm:text-base">{task.userId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}