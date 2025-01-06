import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

import './App.css';

const App = () => {
  // * Estado para almacenar los datos de la API.
  const [data, setData] = useState(null);
  // * Estado para controlar el estado de carga.
  const [loading, setLoading] = useState(true);
  // * Estado para manejar la visibilidad del modal (SideBar).
  const [showModal, setShowModal] = useState(false);

  // * Función para alternar la visibilidad del modal.
  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    // * Función asincrónica para obtener datos de la API.
    const fetchAPIData = async () => {
      const NASA_KEY = import.meta.env.JUST_NOTHING; // * Llave de la API desde variables de entorno.
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
      const today = new Date().toDateString(); // * Fecha actual como string.
      const localKey = `NASA-${today}`; // * Llave única para almacenamiento local.

      // * Verificar si los datos ya están en el almacenamiento local.
      if (localStorage.getItem(localKey)) {
        const cachedData = JSON.parse(localStorage.getItem(localKey));
        setData(cachedData);
      } else {
        localStorage.clear(); // * Limpiar datos obsoletos.
        try {
          const response = await fetch(url);
          const apiData = await response.json();
          localStorage.setItem(localKey, JSON.stringify(apiData));
          setData(apiData);
        } catch (error) {
          console.error("Error fetching API data:", error.message);
        }
      }
      setLoading(false); // * Finalizar estado de carga.
    };

    fetchAPIData();
  }, []);

  return (
    <>
      {/* Mostrar componente Main o estado de carga */}
      {loading ? (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      ) : (
        data && <Main data={data} />
      )}

      {/* Mostrar modal SideBar si está habilitado */}
      {showModal && data && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}

      {/* Mostrar Footer si los datos están disponibles */}
      {data && (
        <Footer data={data} handleToggleModal={handleToggleModal} />
      )}
    </>
  );
};

export default App;