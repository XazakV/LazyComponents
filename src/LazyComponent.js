import React, { useState, useEffect, useRef } from "react";

export default function LazyComponent() {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    /**
     * Funcion que ejecuta el observador. Esta función recibe dos parametros
     * 1-. entries, array de elementos a observar
     * 2-. el propio observador que hemos creado (opcional)
     */
    const onChange = (entries, observer) => {
      //console.log("Entries: ", entries);
      const element = entries[0];
      //console.log("Element: ", element);
      console.log(element.isIntersecting);
      if (element.isIntersecting) {
        setShow(true);
        /*
         * Una vez que ya se ha cargado el ememento podemos indicar al
         * observadir que se desconecte totalmente, o indicarle si queremos
         * dejar de observar algún elemento en concreto
         */
        observer.unobserve(element);
        //observer.disconnect():
      }
    };

    /**
     * IntersectionObserver recibe dos parametros
     * 1-. Función de callback que se ejetutará cada vez que exista
     * una actualización sobre el parametro que se está observando.
     * 2-. Un objeto de opciones (en este caso le pasamos rootMargin:100px
     * que será la distancia a partir de la cual va a considerar que se
     * realiza la intersección)
     */
    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px"
    });

    /**
    *Indicamos al observador que comience a observar el elemento en cuestión 
    (un nodo del DOM), para esto utilizamos el valor current de "elementRef"
    */
    observer.observe(elementRef.current);
  });

  /**
   * Indicamos que el siguiente elemento es la referencia de la propiedad "elementRef"
   */
  return <div ref={elementRef}>{show ? <ElementoAMostrar /> : null}</div>;
}

//Elemento que se mostrará dependiendo del estado del componente
function ElementoAMostrar() {
  return <div className={"Lazy"}></div>;
}
