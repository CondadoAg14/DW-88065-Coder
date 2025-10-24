# 🛍️ E-commerce ReactJS — Proyecto Final

Proyecto final desarrollado en **React.js** para el curso de *React (CoderHouse)*.  
Este e-commerce simula una tienda online con integración a **Firebase Firestore** para persistencia de datos.

---

## 🚀 Funcionalidades principales

✅ **Catálogo dinámico:** Los productos se cargan automáticamente desde Firestore.  
✅ **Detalle de producto:** Vista individual con descripción, precio y selector de cantidad.  
✅ **Carrito de compras:** Permite agregar, eliminar y vaciar productos.  
✅ **Total en tiempo real:** Subtotal y total calculados dinámicamente.  
✅ **Checkout:** Formulario de compra con generación de orden en Firestore.  
✅ **ID de orden:** Al confirmar, se genera un código único de pedido.  

---

## ⚙️ Tecnologías utilizadas

- ⚛️ **React.js** (Vite)
- 🗃️ **Firebase Firestore**
- 🧭 **React Router DOM**
- 💅 **CSS puro**
- 🧠 **Context API** para manejo global del carrito

---

## 📁 Estructura principal del proyecto

```
src/
│
├── components/
│   ├── Item.jsx
│   ├── ItemList.jsx
│   ├── ItemDetail.jsx
│   ├── ItemCount.jsx
│   ├── CartItem.jsx
│   ├── CartWidget.jsx
│
├── containers/
│   ├── ItemListContainer.jsx
│
├── context/
│   ├── CartContext.jsx
│
├── data/
│   ├── firebaseConfig.js
│   ├── productos.js
│
├── pages/
│   ├── Cart.jsx
│   ├── CheckoutForm.jsx
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css
```

---

## 🔥 Instalación y ejecución

1. Clonar el repositorio:  
   ```bash
   git clone https://github.com/tuusuario/ecommerce-react.git
   cd ecommerce-react
   ```

2. Instalar dependencias:  
   ```bash
   npm install
   ```

3. Configurar Firebase:  
   - Crear un proyecto en [Firebase Console](https://console.firebase.google.com)  
   - Copiar las credenciales en `src/data/firebaseConfig.js`  
   - Habilitar **Firestore Database**

4. Ejecutar la app:  
   ```bash
   npm run dev
   ```

---

## 🧱 Reglas de Firestore (modo desarrollo)

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

---

## 🧾 Generación de orden (Checkout)

Al confirmar la compra:
- Se crea un documento en la colección `orders`.
- Se guarda el comprador, productos, total y fecha.
- Se muestra el **ID de la orden** al usuario.

Ejemplo de documento:
```json
{
  "buyer": {
    "nombre": "Juan Pérez",
    "email": "juan@gmail.com",
    "telefono": "1122334455"
  },
  "items": [
    { "id": "abc1", "nombre": "Remera Negra", "cantidad": 2, "precio": 6500 }
  ],
  "total": 13000,
  "date": "Timestamp"
}
```

---

## 🌐 Deploy (opcional)

Para subirlo online fácilmente:

### Con **Vercel**
1. Crear cuenta en [https://vercel.com](https://vercel.com)
2. Importar el repositorio desde GitHub.
3. Vercel detecta automáticamente React (Vite) y genera la build.
4. Esperar a que compile → ¡tu tienda online estará en línea!

### Con **Netlify**
1. Crear cuenta en [https://www.netlify.com](https://www.netlify.com)
2. Arrastrar la carpeta `/dist` generada con:
   ```bash
   npm run build
   ```
3. Netlify la hostea automáticamente.

---

## ✨ Autor

👤 **Agustin Condado**  
📧 agusconda3@gmail.com 
💼 Curso de ReactJS — CoderHouse (2025)