# Portfolio Full Stack

Aplicación de portfolio full stack con frontend en React/Vite/Tailwind y backend en Node.js/Express. El proyecto usa workspaces de npm para gestionar dependencias en `client` y `server` desde la raíz.

## Estructura

```text
client/   -> app React + Vite
server/   -> API Express
```

## Requisitos

- Node.js 18+ instalado
- npm 9+ o compatible con workspaces
- MongoDB local o remota si quieres usar persistencia real

## Instalación

1. Desde la raíz del repo, instala dependencias:

```bash
npm install
```

2. Crea los archivos de entorno:

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

> En Windows PowerShell usa `Copy-Item server\.env.example server\.env`.

3. Ajusta las variables si necesitas otra URL de API o base de datos.

## Configuración de entorno

El proyecto tiene ejemplos de variables en:

- `server/.env.example`
- `client/.env.example`

Valores clave:

```env
# server/.env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio_db
CLIENT_URL=http://localhost:5173

# client/.env
VITE_API_URL=/api
```

## Desarrollo

Levanta el backend y frontend en dos terminales:

```bash
npm run dev:server
npm run dev:client
```

Luego abre:

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000/api/portfolio`

## Build y despliegue

Para generar la versión de producción del frontend:

```bash
npm run build
```

Para iniciar solo el servidor:

```bash
npm start
```

## Endpoints disponibles

- `GET /api/health`
- `GET /api/portfolio`

## Cómo agregar un nuevo proyecto

1. Agrega o actualiza un objeto en `server/src/data/portfolio.js` dentro del arreglo `projects`.
2. Si usas imagen para el proyecto, colócala en `client/public/projects/`.
3. Guarda los cambios.
4. Reinicia el backend si no está usando hot reload.
5. Recarga el frontend en el navegador.

## Notas útiles

- El frontend consume el backend desde `VITE_API_URL`.
- Si cambias datos en `server/src/data/portfolio.js`, debes reiniciar el servidor para que recargue la nueva información.
- Evita subir archivos multimedia muy grandes directamente al repositorio; utiliza enlaces o hosting externo cuando sea necesario.

## Sugerencia de mejora

Este repo puede evolucionar añadiendo persistencia real con MongoDB, autenticación y un panel de administración para editar proyectos desde la UI.

