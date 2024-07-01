// Definición de la gramática
const grammar = `E  ->  T E'
E' ->  + T E' | ε
T  ->  F T'
T' ->  * F T' | ε
F  ->  ( E ) | id
`;

// Conjuntos Primero calculados manualmente
const first = `P(E)  =  [ ( , id ]
P(E') =  [ + , ε ]
P(T)  =  [ ( , id ]
P(T') =  [ * , ε ]
P(F)  =  [ ( , id ]
`;

// Conjuntos Siguiente calculados manualmente
const follow = `S(E)  =  [ ) , $ ]
S(E') =  [ ) , $ ]
S(T)  =  [ + , ) , $ ]
S(T') =  [ + , ) , $ ]
S(F)  =  [ * , + , ) , $ ]
`;

// Construcción de la tabla LL(1)
const table = {
  E: {
    id: "E -> T E'",
    "(": "E -> T E'",
  },
  "E'": {
    "+": "E' -> + T E'",
    ")": "E' -> ε",
    $: "E' -> ε",
  },
  T: {
    id: "T -> F T'",
    "(": "T -> F T'",
  },
  "T'": {
    "*": "T' -> * F T'",
    "+": "T' -> ε",
    ")": "T' -> ε",
    $: "T' -> ε",
  },
  F: {
    id: "F -> id",
    "(": "F -> ( E )",
  },
};

export default function SyntacticDecendingV2() {
  return (
    <div className="mr-8 mb-10">
      <h1 className="text-2xl font-bold mb-4">
        Tabla de Análisis Sintáctico LL(1)
      </h1>

      <h2 className="text-xl font-semibold mb-2">Gramática</h2>
      <pre className="bg-gray-100 p-4 rounded-md mb-4 whitespace-pre-wrap">
        {grammar}
      </pre>

      <h2 className="text-xl font-semibold mb-2">Conjunto Primero</h2>
      <pre className="bg-gray-100 p-4 rounded-md mb-4 whitespace-pre-wrap">
        {first}
      </pre>

      <h2 className="text-xl font-semibold mb-2">Conjunto Siguiente</h2>
      <pre className="bg-gray-100 p-4 rounded-md mb-4 whitespace-pre-wrap">
        {follow}
      </pre>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">
          Ejemplo con la Gramática Dada
        </h2>
      </div>

      <h2 className="text-xl font-semibold mb-2">Tabla LL(1)</h2>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2"></th>
            <th className="border border-gray-400 px-4 py-2">id</th>
            <th className="border border-gray-400 px-4 py-2">+</th>
            <th className="border border-gray-400 px-4 py-2">*</th>
            <th className="border border-gray-400 px-4 py-2">(</th>
            <th className="border border-gray-400 px-4 py-2">)</th>
            <th className="border border-gray-400 px-4 py-2">$</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(table).map((nonTerminal) => (
            <tr key={nonTerminal}>
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                {nonTerminal}
              </td>
              {["id", "+", "*", "(", ")", "$"].map((terminal) => (
                <td key={terminal} className="border border-gray-400 px-4 py-2">
                  {table[nonTerminal][terminal] || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
