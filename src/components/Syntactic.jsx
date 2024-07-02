import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Stack from "./stack";
import SyntacticDecendingV2 from "./SyntacticDecendingV2";

export default function Home() {
  const stack = [" ", " ", "E", "$"];
  const stack2 = [" ", "T", "E'", "$"];
  const stack3 = [" ", "F ", "T'", "E'", "$"];
  const stack4 = [" ", "id ", "T'", "E'", "$"];
  const stack5 = [" ", "T'", "E'", "$"];
  const stack6 = [" ", "*", "F", "T'", "E'", "$"];
  const stack7 = [" ", "F", "T'", "E'", "$"];
  const stack8 = [" ", "id", "T'", "E'", "$"];
  const stack9 = [" ", "T'", "E'", "$"];
  const stack10 = [" ", "+", "T", "E'", "$"];
  const stack11 = [" ", "T", "E'", "$"];
  const stack12 = [" ", "F", "T'", "E'", "$"];
  const stack13 = [" ", "id", "T'", "E'", "$"];
  const stack14 = [" ", "T'", "E'", "$"];
  const stack15 = [" ", "E'", "$"];
  const stack16 = [" ", "$"];
  const stack17 = [" "];

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-40 lg:grid lg:w-full lg:max-w-screen-2xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Compiladores
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Análisis sintáctico predictivo
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700 text-justify">
                Ejemplo de uso <strong>incorrecto</strong>.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="ml-28 w-[48rem] max-w-none sm:w-[35rem]"
            src="../../public/gramatica.png"
            alt="gramatica"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-40 lg:grid lg:w-full lg:max-w-screen-2xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <SyntacticDecendingV2 />
            <p className="text-2xl">
              Considerando la entrada inicial <strong>id * + id $</strong>
            </p>
            {/*----------- Iteracion 1 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md w-72">
                  <h2 className="text-xl font-bold mb-4">Primera iteración</h2>
                  <p className="text-gray-700">
                    <strong>Entrada:</strong> id * + id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center ">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      E
                      <ArrowRightIcon className="h-5 w-5 mx-2" />
                      {"T E'"}
                    </div>
                    <p className="font-bold">Se actualiza la pila </p>
                  </p>
                </div>
                <Stack stack={stack2} />
              </div>
            </div>
            {/*----------- Iteracion 2 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack2} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md w-72">
                  <h2 className="text-xl font-bold mb-4">Segunda iteración</h2>
                  <p className="text-gray-700">
                    <strong>Entrada:</strong> id * + id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center ">
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
                <div className="flex flex-col justify-center bg-gray-300 p-6 rounded-lg shadow-md w-72">
                  <h2 className="text-xl font-bold mb-4">Tercera iteración</h2>
                  <p className="text-gray-700">
                    <strong>Entrada:</strong> id * + id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center ">
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
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md w-72">
                  <h2 className="text-xl font-bold mb-4">Cuarta iteración</h2>
                  <p className="text-gray-700 ">
                    <strong>Entrada:</strong> id * + id $
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
                      <strong>Nueva Entrada:</strong> * + id $
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
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md w-72">
                  <h2 className="text-xl font-bold mb-4">Quinta iteración</h2>
                  <p className="text-gray-700">
                    <strong>Entrada:</strong> * + id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="text-center flex items-center ">
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
                <Stack stack={stack6} />
              </div>
            </div>
            {/*----------- Iteracion 6 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack6} />
                <div className="flex flex-col justify-center bg-gray-300 p-6 rounded-lg shadow-md w-72">
                  <h2 className="text-xl font-bold mb-4">Sexta iteración</h2>
                  <p className="text-gray-700">
                    <strong>Entrada:</strong> * + id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="flex">
                      <strong className="flex items-center mr-2">
                        Busqueda en la tabla:
                      </strong>
                      *
                    </div>
                    <p className="font-bold">Se actualiza la pila</p>
                    <p className="text-gray-700 ">
                      <strong>Nueva Entrada:</strong> + id $
                    </p>
                  </p>
                </div>
                <Stack stack={stack7} />
              </div>
            </div>
            {/*----------- Iteracion 7 ----------------- */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-10">
                <Stack stack={stack7} />
                <div className="flex flex-col justify-center bg-gray-300 p-4 rounded-lg shadow-md w-72">
                  <h2 className="text-xl font-bold mb-4">Séptima iteración</h2>
                  <p className="text-gray-700 ">
                    <strong>Entrada:</strong> + id $
                  </p>
                  <p className="text-gray-700 mt-2">
                    <div className="flex items-center ">
                      <strong className="flex items-center mr-1">
                        Busqueda en la tabla:
                      </strong>
                      Error de sintaxis
                    </div>
                    <p className="font-bold">Análisis finalizado</p>
                  </p>
                </div>
                <Stack stack={stack8} />
              </div>
            </div>
            {/* Terminan las iteraciones */}
          </div>
        </div>
      </div>
    </div>
  );
}
