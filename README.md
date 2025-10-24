# 🛍️ Proyecto Final - Web App de e-commerce \| React.js

## 📖 Descripción

Aplicación web de tipo **e-commerce** desarrollada como proyecto final
del curso **React.js (CoderHouse)**.\
Permite navegar por un catálogo de productos, ver sus detalles,
agregarlos al carrito y realizar una compra, registrando la orden en
Firebase Firestore.

------------------------------------------------------------------------

## 🚀 Tecnologías utilizadas

-   **React.js** (Vite)
-   **React Router DOM**
-   **Firebase / Firestore**
-   **Context API** para el manejo global del carrito
-   **CSS** personalizado

------------------------------------------------------------------------

## 📂 Estructura principal

    src/
     ├── components/
     ├── containers/
     ├── context/
     ├── data/
     ├── App.jsx
     ├── main.jsx
     └── index.css

------------------------------------------------------------------------

## ⚙️ Instalación y ejecución

1.  Clonar el repositorio

    ``` bash
    git clone https://github.com/tuusuario/ProyectoFinal+TuApellido.git
    cd ProyectoFinal+TuApellido
    ```

2.  Instalar dependencias

    ``` bash
    npm install
    ```

3.  Ejecutar en modo desarrollo

    ``` bash
    npm run dev
    ```

4.  Abrir en el navegador: <http://localhost:5173>

------------------------------------------------------------------------

## 💾 Base de datos (Firebase)

-   Base de datos: **Firestore**
-   Colecciones:
    -   `productos`: información de cada producto (nombre, precio,
        imagen, stock, categoría, descripción)
    -   `orders`: registros de las compras realizadas (buyer, items,
        total, date)

------------------------------------------------------------------------

## 🎨 Funcionalidades principales

-   Catálogo de productos dinámico desde Firestore
-   Filtro por categoría
-   Detalle individual del producto
-   Carrito persistente en Context
-   Generación de órdenes con ID de compra
-   Mensajes condicionales (cargando, carrito vacío, sin stock, etc.)

------------------------------------------------------------------------

## 🌐 Deploy

Este proyecto puede ser desplegado fácilmente en: -
[**Vercel**](https://vercel.com/) -
[**Netlify**](https://app.netlify.com/)

Ejemplo:\
👉 <https://mitienda.vercel.app>

------------------------------------------------------------------------

## 👤 Autor

**CONDADO AGUSTIN**
\Proyecto Final - React JS\