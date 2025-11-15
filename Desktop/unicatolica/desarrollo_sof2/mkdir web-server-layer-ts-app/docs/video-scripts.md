# Scripts para Videos de Presentación

## Video 1: Justificación de Decisiones Arquitectónicas (5 minutos)

### Estructura del Video

#### Introducción (30 segundos)
- Saludo y presentación del equipo
- Breve descripción del proyecto
- Objetivo del video: explicar decisiones arquitectónicas

#### Arquitectura General (1.5 minutos)
- Explicación de arquitectura en capas
- Beneficios: separación de responsabilidades, mantenibilidad, escalabilidad
- Tecnologías elegidas: TypeScript, Express, Sequelize, SQLite

#### Capa de Presentación (1 minuto)
- Responsabilidades: manejo de HTTP, validación de entrada, formato de respuestas
- Componentes: Controllers, Routes, Middleware
- Decisiones: uso de Express Router, middleware de error handling

#### Capa de Lógica de Negocio (1 minuto)
- Responsabilidades: reglas de negocio, validaciones, coordinación
- Componentes: Services
- Decisiones: validación de stock, cálculo de totales, manejo de transacciones

#### Capa de Acceso a Datos (1 minuto)
- Responsabilidades: consultas, mapeo objeto-relacional
- Componentes: Repositories, Models
- Decisiones: Sequelize ORM, relaciones entre entidades, transacciones

#### Conclusión (30 segundos)
- Resumen de beneficios logrados
- Próximos pasos para escalabilidad

---

## Video 2: Demostración Funcional (5 minutos)

### Estructura del Video

#### Introducción (30 segundos)
- Saludo y presentación
- Objetivo: demostrar funcionamiento del sistema
- Herramientas utilizadas: Postman para testing

#### Configuración Inicial (1 minuto)
- Mostrar servidor corriendo
- Explicar estructura de base de datos
- Health check de la API

#### Gestión de Clientes (1 minuto)
- Crear cliente
- Consultar clientes
- Actualizar cliente
- Explicar validaciones implementadas

#### Gestión de Productos (1 minuto)
- Crear producto
- Consultar productos
- Actualizar stock
- Explicar control de inventario

#### Gestión de Ventas (1.5 minutos)
- Crear venta completa
- Explicar cálculo automático de totales
- Mostrar actualización automática de stock
- Consultar ventas por cliente
- Demostrar validaciones de stock insuficiente

#### Conclusión (30 segundos)
- Resumen de funcionalidades implementadas
- Código disponible en el repositorio

---

## Scripts Detallados

### Video 1: Justificación de Decisiones

**Narración:**

"Hola, somos Sebastián Molina y Humberto Fajardo, estudiantes de Desarrollo de Software 2. Hoy les presentamos la arquitectura de nuestro sistema de gestión de ventas.

Elegimos una arquitectura en capas porque nos permite separar claramente las responsabilidades. Cada capa tiene un propósito específico y puede modificarse sin afectar las demás.

La capa de presentación maneja las solicitudes HTTP usando Express.js con TypeScript para type safety. Implementamos controllers para cada entidad y middleware para manejo de errores consistente.

En la capa de lógica de negocio colocamos todas las reglas del negocio: validación de stock antes de ventas, cálculo automático de totales, y control de transacciones para asegurar integridad de datos.

La capa de acceso a datos utiliza Sequelize ORM con SQLite, permitiendo consultas eficientes y manejo automático de relaciones entre clientes, productos y ventas.

Esta arquitectura nos da mantenibilidad, testabilidad y escalabilidad. Podemos cambiar la base de datos o agregar nuevas funcionalidades sin afectar otras capas."

### Video 2: Demostración Funcional

**Narración:**

"Ahora demostraremos el funcionamiento completo del sistema.

Primero vemos que el servidor está corriendo correctamente en el puerto 3000.

Creamos un cliente con nombre, email y teléfono. El sistema valida que el email no exista previamente.

Luego creamos productos con nombre, precio y stock inicial.

Para crear una venta, especificamos el cliente y los productos con sus cantidades. El sistema:
1. Verifica que el cliente existe
2. Verifica stock disponible para cada producto
3. Calcula el total automáticamente
4. Actualiza el stock de los productos vendidos
5. Registra la venta en una transacción para asegurar consistencia

Podemos consultar todas las ventas, filtrar por cliente, y ver el detalle completo incluyendo productos y totales.

El sistema maneja errores apropiadamente, como stock insuficiente o datos inválidos, retornando mensajes claros al cliente."

---

## Puntos Clave para los Videos

### Video Justificación:
- Enfatizar decisiones técnicas y por qué
- Mostrar diagramas de arquitectura
- Explicar flujo de comunicación entre capas
- Mencionar buenas prácticas implementadas

### Video Demostración:
- Mostrar funcionamiento real con Postman
- Explicar cada endpoint y su propósito
- Demostrar casos de éxito y error
- Enfatizar automatización (cálculos, actualizaciones)

### Consejos de Grabación:
- Usar buena iluminación y audio claro
- Mostrar código relevante en pantalla
- Hacer demostraciones en tiempo real
- Mantener ritmo dinámico pero claro
- Practicar timing para cumplir los 5 minutos