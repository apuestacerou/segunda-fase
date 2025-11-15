# Sistema de Gestión de Ventas - Arquitectura en Capas

## Descripción

Este proyecto implementa un sistema de gestión de ventas utilizando una arquitectura en capas clara y modular con TypeScript, Express.js y Sequelize ORM con SQLite.

## Arquitectura

### Capas Implementadas

1. **Capa de Presentación** (Presentation Layer)
   - Controladores (Controllers)
   - Rutas (Routes)
   - Middleware de manejo de errores

2. **Capa de Lógica de Negocio** (Business Logic Layer)
   - Servicios (Services)
   - Validaciones de negocio
   - Reglas de negocio

3. **Capa de Acceso a Datos** (Data Access Layer)
   - Repositorios (Repositories)
   - Modelos de datos (Models)
   - Conexión a base de datos

## Tecnologías Utilizadas

- **Node.js** con **TypeScript**
- **Express.js** para el servidor web
- **Sequelize ORM** con **SQLite** para persistencia
- **Nodemon** para desarrollo
- **Postman/Insomnia** para testing de API

## Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm

### Instalación

```bash
# Instalar dependencias
npm install

# Compilar TypeScript
npm run build

# Ejecutar en modo desarrollo
npm run dev

# Ejecutar en modo producción
npm start
```

El servidor se ejecutará en `http://localhost:3000`

## API Endpoints

### Clientes

- `GET /api/clients` - Obtener todos los clientes
- `GET /api/clients/:id` - Obtener cliente por ID
- `POST /api/clients` - Crear nuevo cliente
- `PUT /api/clients/:id` - Actualizar cliente
- `DELETE /api/clients/:id` - Eliminar cliente

### Productos

- `GET /api/products` - Obtener todos los productos
- `GET /api/products/:id` - Obtener producto por ID
- `POST /api/products` - Crear nuevo producto
- `PUT /api/products/:id` - Actualizar producto
- `PUT /api/products/:id/stock` - Actualizar stock de producto
- `DELETE /api/products/:id` - Eliminar producto

### Ventas

- `GET /api/sales` - Obtener todas las ventas
- `GET /api/sales/:id` - Obtener venta por ID
- `GET /api/sales/client/:clienteId` - Obtener ventas por cliente
- `POST /api/sales` - Crear nueva venta
- `DELETE /api/sales/:id` - Eliminar venta

### Health Check

- `GET /api/health` - Verificar estado del servicio

## Estructura del Proyecto

```
src/
├── config/           # Configuración de base de datos
├── controllers/      # Controladores de la API
├── middleware/       # Middleware personalizado
├── models/          # Modelos de Sequelize
├── repositories/    # Capa de acceso a datos
├── routes/          # Definición de rutas
├── services/        # Lógica de negocio
├── types/           # Definiciones de tipos TypeScript
└── app.ts           # Punto de entrada de la aplicación

docs/                # Documentación de arquitectura
postman_collection.json  # Colección para testing
```

## Base de Datos

El sistema utiliza SQLite como base de datos. Los modelos principales son:

- **Clientes**: Información de clientes (nombre, email, teléfono)
- **Productos**: Catálogo de productos (nombre, precio, stock)
- **Ventas**: Registro de transacciones
- **Venta_Productos**: Relación muchos a muchos entre ventas y productos

## Testing

Importa la colección `postman_collection.json` en Postman o Insomnia para probar todos los endpoints de la API.

### Ejemplos de Uso

1. **Crear un cliente:**
   ```json
   POST /api/clients
   {
     "nombre": "Juan Pérez",
     "email": "juan.perez@email.com",
     "telefono": "+57 300 123 4567"
   }
   ```

2. **Crear un producto:**
   ```json
   POST /api/products
   {
     "nombre": "Laptop Dell",
     "precio": 2500000,
     "stock": 10
   }
   ```

3. **Crear una venta:**
   ```json
   POST /api/sales
   {
     "cliente_id": 1,
     "productos": [
       {
         "producto_id": 1,
         "cantidad": 2
       }
     ]
   }
   ```

## Características

- ✅ Arquitectura en capas modular
- ✅ Validación de datos y manejo de errores
- ✅ Transacciones para operaciones complejas
- ✅ Control de stock automático
- ✅ Cálculo automático de totales
- ✅ API RESTful completa
- ✅ TypeScript para type safety
- ✅ Documentación incluida

## Equipo de Desarrollo

- Sebastián Molina
- Humberto Fajardo

## Licencia

Este proyecto es parte de la entrega académica para el curso de Desarrollo de Software 2.