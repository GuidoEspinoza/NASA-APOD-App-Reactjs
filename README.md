# NASA APOD App

## Descripción

Esta es una aplicación web interactiva que consume la API Astronomy Picture of the Day (APOD) de la NASA para mostrar imágenes y videos astronómicos del día junto con su descripción. Desarrollada con **React.js**, esta aplicación permite:

- Visualizar la imagen o video astronómico destacado del día.
- Leer la descripción detallada proporcionada por la NASA.
- Interactuar con una interfaz visual moderna y dinámica.
- Guardar en caché los datos del día actual para mejorar el rendimiento.

Ideal para los amantes de la astronomía y para quienes disfrutan aprendiendo sobre el universo.

---

## Características Principales

1. **Consumo de API**:
   - Obtiene datos de la API pública de APOD de la NASA.
   - Guarda en caché los datos del día actual para evitar múltiples solicitudes.

2. **Interfaz Visual Dinámica**:
   - Soporta tanto imágenes como videos.
   - Renderiza automáticamente un iframe para videos y una imagen para fotografías.

3. **Sidebar Interactiva**:
   - Muestra información adicional sobre la imagen o video, como título, fecha y explicación detallada.

4. **Diseño Responsivo**:
   - Adaptable a diferentes tamaños de pantalla, ideal para dispositivos móviles y de escritorio.

---

## Tecnologías Utilizadas

- **React.js**: Biblioteca para construir la interfaz de usuario.
- **PropTypes**: Para la validación de props en los componentes.
- **CSS**: Para el diseño visual y la responsividad.

---

## Estructura del Proyecto

```
/src
 |-- App.jsx             # Componente principal de la aplicación
 |-- components
      |-- Main.jsx       # Componente para renderizar la imagen o video
      |-- SideBar.jsx    # Componente para mostrar información detallada
      |-- Footer.jsx     # Componente del pie de página interactivo
```

### Detalles de los Componentes

#### **App.jsx**
- **Estados**:
  - `data`: Almacena los datos obtenidos de la API.
  - `loading`: Indica si la aplicación está cargando los datos.
  - `showModal`: Controla la visibilidad de la barra lateral (SideBar).
- **Funciones**:
  - `handleToggleModal`: Alterna la visibilidad de la barra lateral.
  - `fetchAPIData`: Obtiene los datos de la API y los guarda en caché si es necesario.
- Renderiza los componentes `Main`, `SideBar` y `Footer`.

#### **Main.jsx**
- Muestra la imagen o el video del día:
  - **Videos**: Renderiza un iframe con autoplay y sin controles visibles.
  - **Imágenes**: Renderiza un elemento `img` optimizado.

#### **SideBar.jsx**
- Barra lateral interactiva que muestra:
  - Título, fecha y explicación del contenido.
  - Botón para cerrar la barra lateral.

#### **Footer.jsx**
- Pie de página con:
  - Título de la aplicación.
  - Subtítulo con el título del contenido del día.
  - Botón para abrir la barra lateral.

---

## Cómo Usar

1. **Clonar el Repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/nasa-apod-app.git
   cd nasa-apod-app
   ```

2. **Configurar la API Key de la NASA**:
   - Regístrate en [NASA Open APIs](https://api.nasa.gov/) para obtener una API Key.
   - Crea un archivo `.env` en el directorio raíz y añade tu clave:
     ```env
     JUST_NOTHING=tu_api_key_aqui
     ```

3. **Instalar Dependencias**:
   ```bash
   npm install
   ```

4. **Iniciar la Aplicación**:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173` (por defecto para Vite).

---

## Estilo y Personalización

- **Estilos Visuales**: Los estilos se encuentran en los archivos `.css` correspondientes a cada componente (`Main.css`, `Footer.css`, etc.).
- **Responsividad**: Puedes personalizar los estilos para adaptarlos a diferentes dispositivos.
- **Componentización**: El código es modular y fácilmente extensible.

---

## Autor
Creado por Guido Espinoza como un proyecto de aprendizaje e integración con APIs públicas.

---

¡Gracias por usar esta aplicación! Si tienes sugerencias o encuentras errores, no dudes en abrir un issue o enviar un pull request. 🚀
