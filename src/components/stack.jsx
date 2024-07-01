export default function Stack({ stack }) {
  const cellHeight = "h-12";

  return (
    <div className="flex flex-col items-center mt-1">
      <div className="flex flex-col items-center">
        <table className="bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-300 bg-gray-200">
                Pila
              </th>
            </tr>
          </thead>
          <tbody>
            {stack.map((item, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td
                  className={`px-4 py-2 text-center ${cellHeight} bg-gray-50`}
                >
                  {item}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
