import React, { useState } from 'react';
import Chat from './Chat';

export default function SyntacticAscending() {
  // Estado para controlar la visibilidad del contenido
  const [showContent, setShowContent] = useState(false);

  // Función para alternar la visibilidad del contenido
  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">ANALIZADOR SINTÁCTICO ASCENDENTE</h1>
      <div className="mb-4 text-gray-700">
        Un analizador sintáctico ascendente, también conocido como parser ascendente, es un tipo de analizador sintáctico 
        que construye el árbol de análisis (o árbol sintáctico) desde las hojas (los símbolos de entrada) hacia la raíz 
        (el símbolo inicial). Este tipo de parser comienza con los elementos más bajos y trabaja hacia arriba, combinando 
        los elementos en estructuras más grandes hasta que se llega a la estructura más alta definida por la gramática.
      </div>
      <div className="mb-4 text-gray-700">
        Existen varios tipos de analizadores sintácticos ascendentes, pero uno de los más comunes es el parser LR 
        (Left-to-right, Rightmost derivation). Los parsers LR son eficientes y potentes, y se usan ampliamente en compiladores.
      </div>
      <button 
        onClick={toggleContent}
        className="block mx-auto mb-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-300"
      >
        {showContent ? 'Ocultar Tipos de Parsers Ascendentes' : 'Mostrar Tipos de Parsers Ascendentes'}
      </button>
      {showContent && (
        <div className="mt-6 p-6 bg-gray-100 rounded shadow-md">
          <div className="mb-4">
            <strong className="block mb-2 text-lg font-medium text-gray-800">Tipos de Parsers Ascendentes:</strong>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <strong>LR(0):</strong>
                <p className="ml-4">
                  Es el tipo más básico de parser LR. No utiliza ningún símbolo de lookahead (avance de mirada) para tomar decisiones de análisis. En lugar de eso, se basa únicamente en el estado actual de la pila de análisis y la entrada actual.
                </p>
                <p className="ml-4">
                  <strong>Ventajas:</strong> Simple de implementar.
                  <br />
                  <strong>Desventajas:</strong> Menos potente, puede manejar menos gramáticas comparado con LR(1) y LALR(1).
                </p>
              </li>
              <li>
                <strong>LR(1):</strong>
                <p className="ml-4">
                  Utiliza un símbolo de lookahead para tomar decisiones de análisis. Esto le permite manejar una mayor variedad de gramáticas en comparación con LR(0). El lookahead es el siguiente símbolo en la entrada que ayuda a decidir qué acción tomar.
                </p>
                <p className="ml-4">
                  <strong>Ventajas:</strong> Puede manejar una gama más amplia de gramáticas que LR(0).
                  <br />
                  <strong>Desventajas:</strong> Más complejo y consume más memoria debido a la mayor cantidad de estados necesarios.
                </p>
              </li>
              <li>
                <strong>LALR(1) (Look-Ahead LR):</strong>
                <p className="ml-4">
                  Es una optimización del parser LR(1). Combina la potencia de LR(1) con una representación más compacta similar a la de SLR. Esto se logra combinando estados que tienen las mismas acciones de análisis pero diferentes conjuntos de lookahead.
                </p>
                <p className="ml-4">
                  <strong>Ventajas:</strong> Equilibrio entre potencia y eficiencia en términos de memoria y tiempo. Es el tipo de parser más comúnmente utilizado en herramientas como Yacc y Bison.
                  <br />
                  <strong>Desventajas:</strong> Aun así puede no manejar algunas gramáticas que LR(1) puede.
                </p>
              </li>
              <li>
                <strong>SLR(1) (Simple LR):</strong>
                <p className="ml-4">
                  Utiliza un conjunto más sencillo de reglas para la reducción. El SLR decide cuándo reducir basándose en los conjuntos de follow de los no terminales.
                </p>
                <p className="ml-4">
                  <strong>Ventajas:</strong> Más fácil de implementar y menos costoso en términos de memoria que LR(1).
                  <br />
                  <strong>Desventajas:</strong> Menos potente que LR(1) ya que no siempre puede resolver todos los conflictos de reducción y desplazamiento.
                </p>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <strong className="block mb-2 text-lg font-medium text-gray-800">Proceso de Parsing:</strong>
            <p className="text-gray-700 mb-2"><strong>Gramática:</strong></p>
            <pre className="bg-gray-200 p-2 rounded text-gray-700">
{`
E → E + T
E → T
T → T * F
T → F
F → ( E )
F → id
`}
            </pre>
            <p className="text-gray-700 mb-2"><strong>Cadena de entrada:</strong> <code>id + id * id</code></p>
            <p className="text-gray-700 mb-2"><strong>Proceso de Parsing:</strong></p>
            <pre className="bg-gray-200 p-2 rounded text-gray-700">
{`
1. Shift id
2. Reduce F → id
3. Reduce T → F
4. Reduce E → T
5. Shift +
6. Shift id
7. Reduce F → id
8. Reduce T → F
9. Shift *
10. Shift id
11. Reduce F → id
12. Reduce T → T * F
13. Reduce E → E + T
`}
            </pre>
          </div>
          <div className="mb-4">
            <strong className="block mb-2 text-lg font-medium text-gray-800">Ventajas y Desventajas:</strong>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Ventajas de LR Parsers:</strong> Son muy poderosos y pueden manejar una amplia gama de gramáticas.</li>
              <li><strong>Desventajas de LR Parsers:</strong> Pueden ser complicados de implementar y mantener.</li>
              <li><strong>Ventajas de LALR Parsers:</strong> Equilibran la potencia con la eficiencia, siendo menos costosos en términos de memoria.</li>
              <li><strong>Desventajas de LALR Parsers:</strong> No pueden manejar ciertas gramáticas complejas que los LR(1) pueden.</li>
            </ul>
          </div>
          <div className="mb-4">
            <strong className="block mb-2 text-lg font-medium text-gray-800">Aplicaciones y Herramientas:</strong>
            <p className="text-gray-700">Ejemplos de herramientas que utilizan parsers ascendentes incluyen:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Yacc (Yet Another Compiler-Compiler)</li>
              <li>Bison</li>
              <li>ANTLR (para algunas configuraciones de gramáticas)</li>
            </ul>
          </div>
          <div>
            <strong className="block mb-2 text-lg font-medium text-gray-800">Recursos Adicionales:</strong>
            <p className="text-gray-700">Para más información, consulta los siguientes recursos:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li><a href="https://www.gnu.org/software/bison/manual/" className="text-blue-500 hover:underline">Manual de Bison</a></li>
              <li><a href="https://pubs.opengroup.org/onlinepubs/9699919799/utilities/yacc.html" className="text-blue-500 hover:underline">Documentación de Yacc</a></li>
              <li><a href="https://repository.unikom.ac.id/48769/1/Compilers%20-%20Principles%2C%20Techniques%2C%20and%20Tools%20%282006%29.pdf" className="text-blue-500 hover:underline">Compilers: Principles, Techniques, and Tools (Libro del Dragón)</a></li>
            </ul>
          </div>
        </div>
      )}
      <Chat />
    </div>
  );
}
