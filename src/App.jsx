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
      const NASA_KEY = import.meta.env.VITE_API_SERIAL;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
  
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Mostrar un mensaje de error más específico al usuario
        setError('No se pudieron obtener los datos de la NASA. Por favor, verifica tu conexión a internet o intenta más tarde.');
      } finally {
        setLoading(false);
      }
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