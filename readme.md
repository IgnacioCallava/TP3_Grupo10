# Autos de Élite - API & Plataforma Web

**Tecnicatura Universitaria en Programación - UTN Facultad Regional Bahía Blanca**
**Trabajo Práctico N° 3 - Grupo 10**

---

##  Integrantes
* Ramiro Stallone
* Ignacio Ramirez Labadie
* Juan Foricher Castellón
* Emmanuel Franco
* Ignacio Callava


---

## Breve descripción del proyecto
"Autos de Élite" es un sistema integral para una concesionaria especializada en vehículos de alta gama. El proyecto se basa en una arquitectura de cliente-servidor separada:
* **Frontend:** Interfaz web interactiva desarrollada para el usuario final.
* **Backend (API REST):** Servidor desarrollado en Node.js y Express que gestiona de manera asíncrona la información de servicios, equipo de trabajo y perfiles de usuario.

Actualmente, el servidor de producción se encuentra desplegado y consumible a través de Render en el siguiente enlace: `https://tp3-grupo10.onrender.com`

---

##  Desarrollo de funciones (Backend)
La API fue construida utilizando el framework **Express.js**. Para garantizar el rendimiento del servidor y no bloquear el hilo de ejecución principal (Event Loop), toda la lectura de bases de datos estáticas (archivos `.json`) se implementó utilizando el módulo `fs.promises` mediante funciones asíncronas (`async/await`). 

Se desarrollaron los siguientes controladores y endpoints (Rutas):

* `GET /servicios`
  * **Controlador:** `getServicios`
  * **Lógica:** Lee de forma asíncrona el archivo `servicios.json` y devuelve el catálogo completo de mantenimientos, estética y gestoría.
* `GET /servicios/:id`
  * **Controlador:** `getServicioById`
  * **Lógica:** Recibe un parámetro dinámico en la URL, busca la coincidencia exacta dentro del array de servicios y devuelve un único objeto. Maneja errores `404 Not Found` si el ID no existe.
* `GET /equipo`
  * **Controlador:** `getEquipo`
  * **Lógica:** Devuelve el listado del personal (Gerencia, Mecánicos, Vendedores) para renderizar la sección "Nosotros" en el frontend.
* `GET /perfil/:id`
  * **Controlador:** `getPerfil`
  * **Lógica:** Busca un usuario específico por su ID en `usuarios.json`. Formatea la respuesta devolviendo los datos personales y aplicando un método `.slice(-3)` para entregar únicamente el historial de los últimos 3 pedidos realizados.

Se implementaron middlewares globales como `cors` para permitir peticiones desde dominios externos (el Frontend en GitHub Pages) y `express.json()` para la correcta interpretación de payloads.

---

##  Funcionalidades (Frontend)
La plataforma web permite a los clientes navegar de forma intuitiva a través de la barra de navegación (Nav) para acceder a los siguientes módulos:
1. **Inicio:** Pantalla de bienvenida con presentación de vehículos destacados.
2. **Servicios:** Renderizado dinámico del catálogo de servicios consumido desde la API.
3. **Equipo:** Visualización del personal de Autos de Élite.
4. **Realizar Pedido:** Interfaz para solicitar mantenimientos o turnos.
5. **Consultas:** Formulario de contacto directo con la concesionaria.
6. **Preguntas Frecuentes:** Acordeón de respuestas a dudas comunes.
7. **Mi Perfil:** Panel de usuario que consume la API para mostrar información personal y el historial de las últimas gestiones realizadas.
8. **Iniciar Sesión:** Autenticación de clientes.

---

## Guía de Instalación (Entorno de Desarrollo)

Para ejecutar este proyecto en un entorno local, es necesario contar con Node.js instalado en el sistema.

1. Clonar el repositorio
Abrí la terminal en la carpeta donde quieras el proyecto y ejecutá:
git clone https://github.com/IgnacioCallava/TP3_Grupo10.git

2. Navegar al directorio del proyecto
cd TP3_Grupo10

3. Instalar las dependencias
Este paso es fundamental para descargar la carpeta 'node_modules' con Express, CORS y Nodemon:
npm install

4. Configurar variables de entorno
Creá un archivo llamado '.env' en la raíz del proyecto y agregá el puerto:
PORT=3000

5. Iniciar el servidor
Para modo desarrollo (con recarga automática mediante Nodemon):
npm run dev

O para inicio estándar:
npm start

Una vez iniciado, la consola debería mostrar el mensaje: 'Servidor encendido en el puerto 3000'. 
Podrás probar los endpoints en http://localhost:3000/servicios

