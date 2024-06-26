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

export default function SyntacticDecending() {
  return (
    <div className="p-8">
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
          Reglas para la creación de la Tabla LL(1)
        </h2>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <ul className="list-disc list-inside">
            <li>
              Para cada producción A → α:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Para cada terminal a en el Conjunto Primero(α), añade A → α a
                  la entrada [A, a] en la tabla.
                </li>
                <li>
                  Si ε está en el Conjunto Primero(α), para cada terminal b en
                  el Conjunto Siguiente(A), añade A → α a la entrada [A, b] en
                  la tabla.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">
          Ejemplo con la Gramática Dada
        </h2>
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

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Explicación Adicional</h2>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <h3 className="text-lg font-semibold mb-2">
            Reglas para calcular el Conjunto Primero:
          </h3>
          <ul className="list-disc list-inside">
            <li>Si existe una producción A → α B β | ε :</li>
            <li>Si existe una producción A → B β:</li>
            <li>Si existe una producción B → +:</li>
            <li>
              El conjunto Primero de A se representa de la siguiente manera P(A)
            </li>
            <li>
              El P(A) es {`{α}`} dado que α es Terminal y el conjunto primero de
              un Terminal es{" "}
            </li>
            <li>
              En la segunda produccion se tiene que P(A) es B pero al ser B un
              no terminal se agrega al P(A) el P(B)
            </li>
            <li>
              Si B puede generar ε, se debe considerar el P(β) y si β de igual
              manera puede generar vacio se tomara <br />
              en cuenta el P() del siguiente elemento
            </li>
            <li>Si A produce ε el P(A) es {`{ε}`}</li>
            <li>
              Si hay multiples producciones para un mismo no terminal, se
              compinan todos los conjuntos primeros resultantes{" "}
            </li>
            <li>P(A)={`P(α) ∪ P(B)`}</li>
            <li>P(A)={`{ε, α, +}`}</li>
            <li className="  text-red-500">
              Si X es un terminal, entonces el Conjunto Primero(X) es {`{X}`}{" "}
              posible
            </li>
            <li className="  text-red-500">
              Si X → ε, entonces ε está en el Conjunto Primero(X)
            </li>
            <li className="  text-red-500">
              Si X es un no terminal y X → Y1 Y2 ... Yk:
              <ul className="list-disc list-inside ml-4 text-red-500">
                <li>
                  Añadir todos los terminales en el Conjunto Primero(Y1) al
                  Conjunto Primero(X) (excepto ε)
                </li>
                <li>
                  Si Y1 deriva a ε, añadir el Conjunto Primero(Y2) al Conjunto
                  Primero(X), y así sucesivamente
                </li>
                <li>
                  Si Y1, Y2, ..., Yk derivan a ε, añadir ε al Conjunto
                  Primero(X)
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-lg font-semibold mt-4 mb-2">
            Reglas para calcular el Conjunto Siguiente:
          </h3>
          <ul className="list-disc list-inside">
            <li>
              El Conjunto Siguiente(A) incluye `$` (donde A es el símbolo
              inicial), el $ solo se coloca en el símbolo inicial
            </li>
            <li>
              El conjunto Siguiente de B es igual al conjunto primero de β
            </li>
            <li>
              Si existe una producción A → α B β:
              <ul className="list-disc list-inside ml-4">
                <li className="  text-red-500">
                  Añadir el Conjunto Primero(β) - {`{ε}`} al Conjunto
                  Siguiente(B) posible
                </li>
                <li className="  text-red-500">
                  Si β deriva a ε (o β es ε), añadir el Conjunto Siguiente(A) al
                  Conjunto Siguiente(B) posible
                </li>
              </ul>
            </li>
            <li>
              Si existe una producción T → α A b:
              <p />
              <li>Si existe una producción A → α B:</li>
              <ul className="list-disc list-inside ml-4">
                <li>
                  El conjunto Siguiente de B es igual al conjunto siguiente de A
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-lg font-semibold mt-4 mb-2">
            Cálculo del Conjunto Primero:{/* primero*/}
          </h3>
          <pre className="bg-white p-2 mt-4 rounded-md whitespace-pre-wrap font-bold">{/* perte de la E */}
            {`P(E) = P(T)
P(E) = { (, id }`}
          </pre>
          <ul className="list-disc list-inside mt-4 mb-2 bg-gray-900 p-2 rounded-md whitespace-pre-wrap text-white">
            <h3 className=" mb-2">Devido a que</h3>
            <li>E → T E'</li>
            <li>
              Dada esta produccion se tiene que el primer elemento de la produccion de E es <strong className=" text-lg">T</strong> por
              lo cual se coloca en el P(E) el <strong className=" text-lg"> P(T)</strong>
            </li>
          </ul>
          <pre className="bg-white p-2 mt-4 rounded-md whitespace-pre-wrap font-bold">
            {/* perte de la T */}
            {`P(T) = P(F)
P(T) = { (, id)}`}
          </pre>
          <ul className="list-disc list-inside mt-4 mb-2 bg-gray-900 p-2 rounded-md whitespace-pre-wrap text-white">
            <h3 className=" mb-2">Devido a que</h3>
            <li>T → F T'</li>
            <li>
            Dada esta produccion se tiene que El primer elemento de la produccion de T es <strong className=" text-lg">F</strong> por lo cual se coloca en el P(T) el 
              <strong className=" text-lg"> P(F)</strong>
            </li>
          </ul>
          <pre className="bg-white p-2 mt-4 rounded-md whitespace-pre-wrap font-bold">
            {/* perte de la F */}
            {`P(F) = P( (E) ) ∪ P(id)
P(F) = { (, id }`}
          </pre>
          <ul className="list-disc list-inside mt-4 mb-2 bg-gray-900 p-2 rounded-md whitespace-pre-wrap text-white">
            <h3 className=" mb-2">Devido a que</h3>
            <li> F → ( E ) | id</li>
            <li>Dada esta produccion se tiene que el primer elemento de la produccion 
              de F es <strong className=" text-lg">(</strong> por lo cual se coloca en el P(T) el <strong className=" text-lg">(</strong> </li>
            <li>
            Tambien se tiene que en esta produccion el primer elemento 
            puede ser <strong className=" text-lg">id</strong> por lo cual se coloca en el P(T) el 
              <strong className=" text-lg"> id</strong>
            </li>
          </ul>
          <pre className="bg-white p-2 mt-4 rounded-md whitespace-pre-wrap font-bold">
            {/* perte de la E' */}
            {`P(E') = P(+ T E') ∪ P(ε)
P(E') = { +, ε }`}
          </pre>
          <ul className="list-disc list-inside mt-4 mb-2 bg-gray-900 p-2 rounded-md whitespace-pre-wrap text-white">
            <h3 className=" mb-2">Devido a que</h3>
            <li> E' → + T E' | ε</li>
            <li>Dada esta produccion se tiene que el primer elemento de la produccion 
              de E' es <strong className=" text-xl">+</strong> por lo cual se coloca en el P(E') el <strong className=" text-xl">+</strong> </li>
            <li>
            Tambien se tiene que en esta produccion el primer elemento 
            puede ser <strong className=" text-lg">ε</strong> por lo cual se coloca en el P(E') el 
              <strong className=" text-lg"> ε</strong>
            </li>
          </ul>
          <pre className="bg-white p-2 mt-4 rounded-md whitespace-pre-wrap font-bold">
            {/* perte de la T' */}
            {`P(T') = P(* F T') ∪ P(ε)
P(T') = { *, ε }`}
          </pre>
          <ul className="list-disc list-inside mt-4 mb-2 bg-gray-900 p-2 rounded-md whitespace-pre-wrap text-white">
            <h3 className=" mb-2">Devido a que</h3>
            <li> T' → * F T' | ε</li>
            <li>Dada esta produccion se tiene que el primer elemento de la produccion 
              de T' es <strong className=" text-xl">*</strong> por lo cual se coloca en el P(T') el <strong className=" text-xl">*</strong> </li>
            <li>
            Tambien se tiene que en esta produccion el primer elemento 
            puede ser <strong className=" text-lg">ε</strong> por lo cual se coloca en el P(T') el 
              <strong className=" text-lg"> ε</strong>
            </li>
          </ul>
          <h3 className="text-lg font-semibold mt-4 mb-2">
            Cálculo del Conjunto Siguiente:{/* Siguiente */}
          </h3>
          <pre className="bg-white p-2 mt-4 rounded-md whitespace-pre-wrap font-bold">
            {/* perte de la E */}
            {`S(E) = { $, ) }`}
          </pre>
          <ul className="list-disc list-inside mt-4 mb-2 bg-gray-900 p-2 rounded-md whitespace-pre-wrap text-white text-white text-justify p-5">
            <h3 className=" mb-2">Devido a que</h3>
            <li>
              E es el símbolo inicial por lo cual se coloca{" "}
              <strong className=" text-lg">$</strong> dentro de S(E)
            </li>
            <li>F → ( E ) | id</li>
            <li>
              Dada esta producción se tiene que el elemento siguiente es{" "}
              <strong className=" text-lg"> ) </strong> por lo cual se agrega al
              S(E){" "}
            </li>
          </ul>
          <pre className="bg-white p-2 mt-4 rounded-md whitespace-pre-wrap font-bold">
            {/* Parte de la E' */}
            {`S(E') = S(E)
S(E') = { ), $ }`}
          </pre>
          <ul className="list-disc list-inside mt-4 mb-2 bg-gray-900 p-2 rounded-md whitespace-pre-wrap text-white text-white text-justify p-5">
            <h3 className=" mb-2">Devido a que</h3>
            <li>E → T E'</li>
            <li>
              Dada esta producción se puede observar que no hay un elemento
              siguiente despues de E' por lo cual, siguiendo la regla del
              conjunto siguiente se colocara el{" "}
              <strong className=" text-lg">S(E)</strong>
            </li>
          </ul>
          <pre className="bg-white p-2 mt-4 rounded-md whitespace-pre-wrap font-bold">
            {/* Parte de la T */}
            {`S(T) = P(E') ∪ S(E) ∪ S(E')
S(T) = { +, ), $ }`}
          </pre>
          <ul className="list-disc list-inside mt-4 mb-2 bg-gray-900 p-2 rounded-md whitespace-pre-wrap text-white text-justify p-5">
            <h3 className=" mb-2">Devido a que</h3>
            <li>E → T E' </li>
            <li>
              Dada esta producción se tiene que el elemento siguiente de T es{" "}
              <strong className=" text-lg">E'</strong>por lo cual siguiendo
              las reglas del conjunto siguiente se colocara el{" "}
              <strong className=" text-lg">P(E')</strong> en el S(T)
            </li>
            <li>E' → + T E' | ε</li>
            <li>
              Dada esta producción se tiene que el elemento siguiente de T es{" "}
              <strong className=" text-lg">E'</strong> pero este ya esta
              agregado 
              en la anterior producción
            </li>
            <li>
              Continuando con la producción anterior se tiene que E' puede ser
              vacio, por lo cual se verian 
              asi las producciónes tomando en cuenta lo anterior
            </li>
            <li>E → T </li>
            <li>
              Al tener en cuenta esto, no hay un elemento siguiente de T por lo
              cual se colocaria el <strong className=" text-lg">S(E)</strong> en
              el S(T)
            </li>
            <li>E' → + T </li>
            <li>
              Al tener en cuenta esto, no hay un elemento siguiente de T por lo
              cual se colocaria el <strong className=" text-lg">S(E')</strong>{" "}
              en el S(T)
            </li>
          </ul>
          <pre className="bg-white p-2 mt-4 rounded-md whitespace-pre-wrap font-bold">
            {`S(T') = S(T)
S(T') = { +, ), $ }`}
          </pre>
          <ul className="list-disc list-inside mt-4 mb-2 bg-gray-900 p-2 rounded-md whitespace-pre-wrap text-white text-white text-justify p-5">
            <h3 className=" mb-2">Devido a que</h3>
            <li>T → F T'</li>
            <li>
              Dada esta producción se tiene que no hay un elemento siguiente
              despues de T' por lo cual al seguir 
              las reglas del conjunto siguiente se colocara el{" "}
              <strong className=" text-lg">S(T)</strong>{" "}
            </li>
          </ul>
          <pre className="bg-white p-2 mt-4 rounded-md whitespace-pre-wrap font-bold">
            {`S(F) = P(T') ∪ S(T) ∪ S(T')
S(F) = { *, +, ), $ }
`}
          </pre>
          <ul className="list-disc list-inside mt-4 mb-2 bg-gray-900 p-2 rounded-md whitespace-pre-wrap text-white text-white text-justify p-5">
            <h3 className=" mb-2">Devido a que</h3>
            <li>T' → * F T' | ε</li>
            <li>
              Dada esta produccion se tiene que el elemento siguiente de F es{" "}
              <strong className=" text-lg">T'</strong> por lo cual siguiendo las
              reglas del conjunto siguiente se colocara el{" "}
              <strong className=" text-lg">P(T')</strong> en el S(F){" "}
            </li>
            <li>T → F T'</li>
            <li>
              Dada esta producción se tiene que el elemento siguiente de F es{" "}
              <strong className=" text-lg">T'</strong> pero este ya esta
              agregado en la anterior producción
            </li>
            <li>
              Continuando con la producción anterior se tiene que T' puede ser
              vacio, por lo cual se verian asi las producciónes tomando en cuenta lo anterior
            </li>
            <li>T' → * F </li>
            <li>
              Al tener en cuenta esto, no hay un elemento siguiente de F por lo
              cual se colocaria el <strong className=" text-lg">S(T')</strong>{" "}
              en el S(F)
            </li>
            <li>T → F </li>
            <li>
              Al tener en cuenta esto, no hay un elemento siguiente de F por lo
              cual se colocaria el <strong className=" text-lg">S(T)</strong> en
              el S(F)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
