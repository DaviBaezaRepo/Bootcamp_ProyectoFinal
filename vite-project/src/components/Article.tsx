import React from 'react';

const Article: React.FC = () => {
  return (
    <article className="py-14 max-w-screen-xl mx-auto px-14 md:px-8mx-auto text-center lg:text-left lg:mx-0">
      <h3 className="text-gray-600 text-3xl font-bold sm:text-3xl">La Importancia de la Limpieza de Playas y Bosques</h3>
      <p className="mt-8 text-gray-700 text-justify mx-auto lg:mx-0 text-md">
        Mantener la limpieza de nuestros entornos naturales, como las playas y los bosques, es crucial para preservar la biodiversidad y proteger los ecosistemas. En este artículo, exploraremos el impacto de los esfuerzos de limpieza de playas y bosques en el medio ambiente y discutiremos la importancia del reciclaje y la contribución a la conservación ambiental.
      </p>
      <div className="flex ">
        <img src="/assets/beachcleanups.jpg" className="my-7 md:max-w-lg sm:rounded-lg" alt="" />
        <div className='ml-8 mt-7'>
            <p className="text-md text-gray-600">
            Las iniciativas de limpieza de playas y bosques desempeñan un papel crucial en la eliminación de estos desechos y en la prevención de un mayor daño al ecosistema.
            </p>
            <p className="text-md text-gray-600 mb-4 mt-2">
            Al participar en actividades de limpieza, los voluntarios pueden:
            </p>
            <ul className="list-disc list-inside text-md text-gray-600 mb-4">
                <li>Eliminar contaminantes nocivos: La basura dejada en las playas y los bosques puede dañar la vida silvestre y marina a través de la ingestión o la enredadera.</li>
                <li>Preservar la belleza natural: Las playas y los bosques limpios atraen a turistas y visitantes, apoyando las economías locales y promoviendo el ecoturismo.</li>
                <li>Crear conciencia: Los eventos de limpieza crean conciencia sobre los problemas ambientales y la importancia de la gestión responsable de los residuos.</li>
            </ul>
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">El Papel del Reciclaje</h2>
      <p className="text-md text-gray-600 mb-4">
        Además de los esfuerzos de limpieza, el reciclaje desempeña un papel crucial en la reducción de desechos y la protección del medio ambiente. El reciclaje de materiales como plástico, vidrio y papel conserva los recursos naturales, reduce el consumo de energía y minimiza la contaminación.
      </p>
      <p className="text-md text-gray-600 mb-4">
        Aquí hay algunos consejos para un reciclaje efectivo:
      </p>
      <ul className="list-disc list-inside text-md text-gray-600 mb-4">
        <li>Separar los materiales reciclables: Clasifica tus desechos en contenedores separados para materiales reciclables y no reciclables. Sigue las pautas de reciclaje locales para asegurarte de reciclar correctamente.</li>
        <li>Reducir los plásticos de un solo uso: Minimiza el uso de plásticos de un solo uso como bolsas, pajitas y botellas de plástico. Opta por alternativas reutilizables siempre que sea posible para reducir los desechos plásticos.</li>
        <li>Apoyar iniciativas de reciclaje: Participa en programas comunitarios de reciclaje y apoya a las empresas que priorizan prácticas respetuosas con el medio ambiente. Al elegir productos reciclados, puedes ayudar a crear una demanda de materiales reciclados y apoyar la economía circular.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusión</h2>
      <p className="text-md text-gray-600 mb-4">
        Los esfuerzos de limpieza de playas y bosques son esenciales para preservar hábitats naturales, proteger la vida silvestre y promover la conservación ambiental. Al participar en actividades de limpieza y reciclaje, cada uno de nosotros puede marcar una diferencia significativa en la salud y la sostenibilidad del medio ambiente. Recordemos que cada pequeña acción cuenta y que juntos podemos trabajar hacia un futuro más limpio y verde para las generaciones venideras.
      </p>
      <p className="text-md text-gray-600 mb-4">
        En resumen, la limpieza de playas y bosques no solo tiene un impacto positivo en el medio ambiente, sino que también promueve la conciencia ambiental y la adopción de prácticas sostenibles. Al unirnos en estos esfuerzos, podemos proteger los preciosos recursos naturales de nuestro planeta y asegurar un futuro más brillante para todos.
      </p>
    </article>
  );
}

export default Article;
