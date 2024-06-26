// Definición de la gramática
const grammar = `
E  ->  T E'
E' ->  + T E' | ε
T  ->  F T'
T' ->  * F T' | ε
F  ->  ( E ) | id
`;

// Conjuntos Primero calculados manualmente
const first = `
P(E)  =  [ ( , id ]
P(E') =  [ + , ε ]
P(T)  =  [ ( , id ]
P(T') =  [ * , ε ]
P(F)  =  [ ( , id ]
`;

// Conjuntos Siguiente calculados manualmente
const follow = `
S(E)  =  [ ) , $ ]
S(E') =  [ ) , $ ]
S(T)  =  [ + , ) , $ ]
S(T') =  [ + , ) , $ ]
S(F)  =  [ * , + , ) , $ ]
`;

// Construcción de la tabla LL(1)
const table = {
  E: {
    'id': 'E -> T E\'',
    '(': 'E -> T E\'',
  },
  "E'": {
    '+': "E' -> + T E'",
    ')': "E' -> ε",
    '$': "E' -> ε",
  },
  T: {
    'id': 'T -> F T\'',
    '(': 'T -> F T\'',
  },
  "T'": {
    '*': "T' -> * F T'",
    '+': "T' -> ε",
    ')': "T' -> ε",
    '$': "T' -> ε",
  },
  F: {
    'id': 'F -> id',
    '(': 'F -> ( E )',
  },
};

export default function SyntacticDecending() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Tabla de Análisis Sintáctico LL(1)</h1>
      
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
        <h2 className="text-xl font-semibold mb-2">Reglas para la creación de la Tabla LL(1)</h2>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <ul className="list-disc list-inside">
            <li>Para cada producción A → α:
              <ul className="list-disc list-inside ml-4">
                <li>Para cada terminal a en el Conjunto Primero(α), añade A → α a la entrada [A, a] en la tabla.</li>
                <li>Si ε está en el Conjunto Primero(α), para cada terminal b en el Conjunto Siguiente(A), añade A → α a la entrada [A, b] en la tabla.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Ejemplo con la Gramática Dada</h2>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <pre className="whitespace-pre-wrap">
{`1. Para la producción E → T E':
   - Conjunto Primero(T E') = Conjunto Primero(T) = { (, id }
   - Añadir "E → T E'" en las entradas [E, (] y [E, id] de la tabla.

2. Para la producción E' → + T E':
   - Conjunto Primero(+ T E') = { + }
   - Añadir "E' → + T E'" en la entrada [E', +] de la tabla.

3. Para la producción E' → ε:
   - ε está en el Conjunto Primero(E')
   - Conjunto Siguiente(E') = { ), $ }
   - Añadir "E' → ε" en las entradas [E', )] y [E', $] de la tabla.

4. Para la producción T → F T':
   - Conjunto Primero(F T') = Conjunto Primero(F) = { (, id }
   - Añadir "T → F T'" en las entradas [T, (] y [T, id] de la tabla.

5. Para la producción T' → * F T':
   - Conjunto Primero(* F T') = { * }
   - Añadir "T' → * F T'" en la entrada [T', *] de la tabla.

6. Para la producción T' → ε:
   - ε está en el Conjunto Primero(T')
   - Conjunto Siguiente(T') = { +, ), $ }
   - Añadir "T' → ε" en las entradas [T', +], [T', )] y [T', $] de la tabla.

7. Para la producción F → ( E ):
   - Conjunto Primero(( E )) = { ( }
   - Añadir "F → ( E )" en la entrada [F, (] de la tabla.

8. Para la producción F → id:
   - Conjunto Primero(id) = { id }
   - Añadir "F → id" en la entrada [F, id] de la tabla.
`}
          </pre>
        </div>
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
          {Object.keys(table).map(nonTerminal => (
            <tr key={nonTerminal}>
              <td className="border border-gray-400 px-4 py-2 font-semibold">{nonTerminal}</td>
              {['id', '+', '*', '(', ')', '$'].map(terminal => (
                <td key={terminal} className="border border-gray-400 px-4 py-2">
                  {table[nonTerminal][terminal] || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Explicación Adicional</h2>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <h3 className="text-lg font-semibold mb-2">Reglas para calcular el Conjunto Primero:</h3>
          <ul className="list-disc list-inside">
            <li>Si X es un terminal, entonces el Conjunto Primero(X) es {`{X}`}</li>
            <li>Si X → ε, entonces ε está en el Conjunto Primero(X)</li>
            <li>
              Si X es un no terminal y X → Y1 Y2 ... Yk:
              <ul className="list-disc list-inside ml-4">
                <li>Añadir todos los terminales en el Conjunto Primero(Y1) al Conjunto Primero(X) (excepto ε)</li>
                <li>Si Y1 deriva a ε, añadir el Conjunto Primero(Y2) al Conjunto Primero(X), y así sucesivamente</li>
                <li>Si Y1, Y2, ..., Yk derivan a ε, añadir ε al Conjunto Primero(X)</li>
              </ul>
            </li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-4 mb-2">Reglas para calcular el Conjunto Siguiente:</h3>
          <ul className="list-disc list-inside">
            <li>El Conjunto Siguiente(S) incluye `$` (donde S es el símbolo inicial)</li>
            <li>
              Si existe una producción A → α B β:
              <ul className="list-disc list-inside ml-4">
                <li>El conjunto Siguiente de B es igual al conjunto primero de β</li>
                <li>Añadir el Conjunto Primero(β) - {`{ε}`} al Conjunto Siguiente(B) posible</li>
                <li>Si β deriva a ε (o β es ε), añadir el Conjunto Siguiente(A) al Conjunto Siguiente(B) posible</li>
              </ul>
            </li>
            <li>
              Si existe una producción T → α A b:<p/>
              <li>Si existe una producción A → α B:</li>
              <ul className="list-disc list-inside ml-4">
                <li>El conjunto Siguiente de B es igual al conjunto siguiente de A</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Cálculo del Conjunto Primero:</h3>
          <pre className="bg-white p-2 rounded-md whitespace-pre-wrap">
{`P(E) = P(T)
P(E) = { (, id }
E → T E'

P(T) = P(F)
P(T) = { (, id)}
T → F T'

P(F) = P( (E) ) ∪ P(id)
P(F) = { (, id }
F → ( E ) | id

P(E') = P(+ T E') ∪ P(ε)
P(E') = { +, ε }
E' → + T E' | ε


P(T') = P(* F T') ∪ P(ε)
P(T') = { *, ε }
T' → * F T' | ε`}
          </pre>

          <h3 className="text-lg font-semibold mt-4 mb-2">Cálculo del Conjunto Siguiente:</h3>
          <pre className="bg-white p-2 rounded-md whitespace-pre-wrap">
{`S(E) = { $, ) }
E es el símbolo inicial
F → ( E ) | id

S(E') = S(E)
S(E') = { ), $ }
E → T E'

S(T) = P(E') ∪ S(E) ∪ S(E')
S(T) = { +, ), $ }
E → T E'
E' → + T E' | ε

S(T') = S(T)
S(T') = { +, ), $ }
T → F T'

S(F) = P(T') ∪ S(T)
S(F) = { *, +, ), $ }
T' → * F T'
T → F T'`}
          </pre>
        </div>
      </div>
    </div>
  );
}
