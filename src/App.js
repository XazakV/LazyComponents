import React, { Suspense } from "react";
import "./styles.css";
import LazyComponent from "./LazyComponent.js";

/**
 * Se realiza la importación mediante React.lazy que recibe
 * una función que devuelve el import dinamico del componente
 * que queremos utilizar.
 */
const MyBox = React.lazy(() => import("./MyComponent"));

export default function App() {
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
      </div>
      <LazyComponent />
      <div>
        {
          /**
           * Se utiliza el componente Suspense importado de React
           * para "envolver" el componente importado con React.lazy
           * Este componente recibe un parametro "fallback" en el que
           * le indicamos que se va a renderizar mientras se carga
           * el componente Lazy
           */
          <Suspense fallback={null}>
            <MyBox />
          </Suspense>
        }
      </div>
    </>
  );
}
