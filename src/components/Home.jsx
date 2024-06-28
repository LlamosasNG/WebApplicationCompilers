import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import Stack from "./stack";

export default function Home() {
  const stack = [" ", " ", "E", "$"];
  const stack2 = [" ", "T", "E'", "$"];
  const stack3 = [" ", "F ", "T'", "E'", "$"];
  const stack4 = [" ", "id ", "T'", "E'", "$"];
  const stack5 = [" ", "T'", "E'", "$"];
  const stack6 = [" ", "E'", "$"];
  const stack7 = [" ", "+","T","E'", "$"];
  const stack8 = [" ", "T","E'", "$"];
  const stack9 = [" ", "F","T'","E'", "$"];
  const stack10 = [" ", "id","T'","E'", "$"];
  const stack11 = [" ", "T'", "E'", "$"];
  const stack12 = [" ", " *", "F", "T'", "E'", "$"];
  const stack13 = [" ","F", "T'", "E'", "$"];
  const stack14 = [" ", "id ", "T'", "E'", "$"];
  const stack15 = [" ", "T'", "E'", "$"];
  const stack16 = [" ", "E'", "$"];
  const stack17 = [" ","$"];
  const stack18 = [" "];

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Compiladores
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Análisis sintáctico predictivo
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700 text-justify">
                Los analizadores sintácticos predictivos, es decir, los
                analizadores sintácticos de descenso recursivo que no necesitan
                rastreo hacia atrás, pueden construirse para una clase de
                gramáticas llamadas <strong>LL(1)</strong>.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none sm:w-[35rem]"
            src="../../public/gramatica.png"
            alt="Robot-compilador"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="mb-5">
                Los pasos para realizar el análisis sintáctico predictivo son:
              </p>
              <ul role="list" className="mt-1 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Gramática LL(1). Para este caso utilizaremos la que se
                      muestra en la figura de la derecha.
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Calcular los conjuntos primero y siguiente
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Calcular una tabla de análisis sintáctico
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Implementar parsing predictivo
                    </strong>{" "}
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-2xl mt-10">
              Considerando la entrada inicial <strong>id + id * id $</strong>
            </p>
            {/*----------- Iteracion 1 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4">Primera iteración</h2>
                  <p className="text-gray-700">
                    <strong>Entrada:</strong> id + id * id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center justify-center">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      E
                      <ArrowRightIcon className="h-5 w-5 mx-2" />
                      {"T E'"}
                    </div>
                    <p className="font-bold">Se actualiza la pila </p>
                    <ArrowRightIcon className="h-5 w-5 mx-2" />
                  </p>
                </div>
                <Stack stack={stack2} />
              </div>
            </div>
            {/*----------- Iteracion 2 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack2} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4">Segunda iteración</h2>
                  <p className="text-gray-700">
                    <strong>Entrada:</strong> id + id * id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center justify-center">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      T
                      <ArrowRightIcon className="h-5 w-5 mx-2" />
                      {"F T'"}
                    </div>
                    <p className="font-bold">Se actualiza la pila</p>
                  </p>
                </div>
                <Stack stack={stack3} />
              </div>
            </div>
            {/*----------- Iteracion 3 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack3} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4">Tercera iteración</h2>
                  <p className="text-gray-700">
                    <strong>Entrada:</strong> id + id * id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center justify-center">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      F
                      <ArrowRightIcon className="h-5 w-5 mx-2" />
                      {"id"}
                    </div>
                    <p className="font-bold">Se actualiza la pila</p>
                  </p>
                </div>
                <Stack stack={stack4} />
              </div>
            </div>
            {/*----------- Iteracion 4 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack4} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md w-64">
                  <h2 className="text-xl font-bold mb-4">Cuarta iteración</h2>
                  <p className="text-gray-700 ">
                    <strong>Entrada:</strong> id + id * id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center ">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      id
                    </div>
                    <p className="font-bold">Se actualiza la pila</p>
                    <p className="text-gray-700 ">
                    <strong>Nueva Entrada:</strong> + id * id $
                  </p>
                  </p>
                </div>
                <Stack stack={stack5} />
              </div>
            </div>
            {/*----------- Iteracion 5 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack5} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4">Quinta iteración</h2>
                  <p className="text-gray-700">
                    <strong>Entrada:</strong> + id * id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center justify-center">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      T'
                      <ArrowRightIcon className="h-5 w-5 mx-2" />
                      {"ε"}
                    </div>
                    <p className="font-bold">Se actualiza la pila</p>
                  </p>
                </div>
                <Stack stack={stack6} />
              </div>
            </div>
            {/*----------- Iteracion 6 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack6} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4">Sexta iteración</h2>
                  <p className="text-gray-700">
                    <strong>Entrada:</strong> + id * id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center justify-center">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      E'
                      <ArrowRightIcon className="h-5 w-5 mx-2" />
                      {"+ T E'"}
                    </div>
                    <p className="font-bold">Se actualiza la pila</p>
                  </p>
                </div>
                <Stack stack={stack7} />
              </div>
            </div>
            {/*----------- Iteracion 7 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack7} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md w-64">
                  <h2 className="text-xl font-bold mb-4">Septima iteración</h2>
                  <p className="text-gray-700 ">
                    <strong>Entrada:</strong> + id * id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center ">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      +
                    </div>
                    <p className="font-bold">Se actualiza la pila</p>
                    <p className="text-gray-700 ">
                    <strong>Nueva Entrada:</strong> id * id $
                  </p>
                  </p>
                </div>
                <Stack stack={stack8} />
              </div>
            </div>
            {/*----------- Iteracion 8 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack8} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4">Octava iteración</h2>
                  <p className="text-gray-700">
                    <strong>Entrada:</strong> id * id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center justify-center">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      T
                      <ArrowRightIcon className="h-5 w-5 mx-2" />
                      {"F T'"}
                    </div>
                    <p className="font-bold">Se actualiza la pila</p>
                  </p>
                </div>
                <Stack stack={stack9} />
              </div>
            </div>
            {/*----------- Iteracion 9 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack9} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4">Novena iteración</h2>
                  <p className="text-gray-700">
                    <strong>Entrada:</strong> id * id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center justify-center">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      F
                      <ArrowRightIcon className="h-5 w-5 mx-2" />
                      {"id"}
                    </div>
                    <p className="font-bold">Se actualiza la pila</p>
                  </p>
                </div>
                <Stack stack={stack10} />
              </div>
            </div>
            {/*----------- Iteracion 10 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack10} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md w-64">
                  <h2 className="text-xl font-bold mb-4">Decima iteración</h2>
                  <p className="text-gray-700 ">
                    <strong>Entrada:</strong> id * id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center ">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      id
                    </div>
                    <p className="font-bold">Se actualiza la pila</p>
                    <p className="text-gray-700 ">
                    <strong>Nueva Entrada:</strong> * id $
                  </p>
                  </p>
                </div>
                <Stack stack={stack11} />
              </div>
            </div>
            {/*----------- Iteracion 11 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack11} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4">Onceava iteración</h2>
                  <p className="text-gray-700">
                    <strong>Entrada:</strong> * id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center justify-center">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      T'
                      <ArrowRightIcon className="h-5 w-5 mx-2" />
                      {"* F T'"}
                    </div>
                    <p className="font-bold">Se actualiza la pila</p>
                  </p>
                </div>
                <Stack stack={stack12} />
              </div>
            </div>
            {/*----------- Iteracion 12 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack12} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md w-64">
                  <h2 className="text-xl font-bold mb-4">Doceava iteración</h2>
                  <p className="text-gray-700 ">
                    <strong>Entrada:</strong> * id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center ">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      *
                    </div>
                    <p className="font-bold">Se actualiza la pila</p>
                    <p className="text-gray-700 ">
                    <strong>Nueva Entrada:</strong> id $
                  </p>
                  </p>
                </div>
                <Stack stack={stack13} />
              </div>
            </div>
            {/*----------- Iteracion 13 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack13} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4">Terceava iteración</h2>
                  <p className="text-gray-700">
                    <strong>Entrada:</strong> id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center justify-center">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      F
                      <ArrowRightIcon className="h-5 w-5 mx-2" />
                      {"id"}
                    </div>
                    <p className="font-bold">Se actualiza la pila</p>
                  </p>
                </div>
                <Stack stack={stack14} />
              </div>
            </div>
            {/*----------- Iteracion 14 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack14} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md w-64">
                  <h2 className="text-xl font-bold mb-4">Catorceava iteración</h2>
                  <p className="text-gray-700 ">
                    <strong>Entrada:</strong>  id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center ">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      id
                    </div>
                    <p className="font-bold">Se actualiza la pila</p>
                    <p className="text-gray-700 ">
                    <strong>Nueva Entrada:</strong>  $
                  </p>
                  </p>
                </div>
                <Stack stack={stack15} />
              </div>
            </div>
            {/*----------- Iteracion 15 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack15} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4">Quinciava iteración</h2>
                  <p className="text-gray-700">
                    <strong>Entrada:</strong> $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center justify-center">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      T'
                      <ArrowRightIcon className="h-5 w-5 mx-2" />
                      {"ε"}
                    </div>
                    <p className="font-bold">Se actualiza la pila</p>
                  </p>
                </div>
                <Stack stack={stack16} />
              </div>
            </div>
            {/*----------- Iteracion 16 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack16} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4">diesiseisava iteración</h2>
                  <p className="text-gray-700">
                    <strong>Entrada:</strong> $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center justify-center">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      E'
                      <ArrowRightIcon className="h-5 w-5 mx-2" />
                      {"ε"}
                    </div>
                    <p className="font-bold">Se actualiza la pila</p>
                  </p>
                </div>
                <Stack stack={stack17} />
              </div>
            </div>
            {/*----------- Iteracion 17 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack17} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4">diesisietava iteración</h2>
                  <p className="text-gray-700">
                    <strong>Entrada:</strong> $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center justify-center">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      $
                      <ArrowRightIcon className="h-5 w-5 mx-2" />
                      {"id"}
                    </div>
                    <p className="font-bold">Se actualiza la pila</p>
                  </p>
                </div>
                <Stack stack={stack18} />
              </div>
            </div>
            {/*----------- Iteracion 18 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack18} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md w-64">
                  <h2 className="text-xl font-bold mb-4">Finalizacion</h2>
                  <p className="text-gray-700 ">
                    <strong>Entrada:</strong>
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center ">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      
                    </div>
                  </p>
                </div>
                <Stack stack={stack18} />
              </div>
            </div>
            {/* Terminan las iteraciones */}
          </div>
        </div>
      </div>
    </div>
  );
}
