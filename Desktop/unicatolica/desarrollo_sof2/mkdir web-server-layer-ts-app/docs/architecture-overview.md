# Arquitectura en Capas - Sistema de Gestión de Ventas

## Arquitectura General

El sistema implementa una arquitectura en capas clara y modular, separando responsabilidades en tres capas principales:

### 1. Capa de Presentación (Presentation Layer)
- **Responsabilidades**: Manejo de solicitudes HTTP, validación de entrada, formateo de respuestas
- **Componentes**: Controladores (Controllers), Rutas (Routes)
- **Tecnologías**: Express.js, TypeScript

### 2. Capa de Lógica de Negocio (Business Logic Layer)
- **Responsabilidades**: Reglas de negocio, cálculos, validaciones de negocio, coordinación entre entidades
- **Componentes**: Servicios (Services)
- **Tecnologías**: TypeScript puro

### 3. Capa de Acceso a Datos (Data Access Layer)
- **Responsabilidades**: Interacción con la base de datos, consultas, mapeo objeto-relacional
- **Componentes**: Repositorios (Repositories), Modelos (Models)
- **Tecnologías**: Sequelize ORM, SQLite

## Flujo de Comunicación

```
Cliente HTTP → Routes → Controllers → Services → Repositories → Database
                      ↓              ↓              ↓
                 Validación     Reglas de       Consultas
                 de entrada     negocio         y persistencia
```

## Beneficios de la Arquitectura

- **Separación de responsabilidades**: Cada capa tiene un propósito claro
- **Mantenibilidad**: Cambios en una capa no afectan otras
- **Testabilidad**: Cada capa puede ser probada independientemente
- **Escalabilidad**: Fácil agregar nuevas funcionalidades
- **Reutilización**: Servicios pueden ser reutilizados por diferentes controladores

## Entidades Principales

- **Cliente (Client)**: Información de clientes (nombre, email, teléfono)
- **Producto (Product)**: Información de productos (nombre, precio, stock)
- **Venta (Sale)**: Registro de ventas con relación cliente-productos, total y fecha

## Relaciones entre Entidades

- Una venta pertenece a un cliente (1:N)
- Una venta puede tener múltiples productos (N:M) con cantidades
- Los productos tienen stock que se actualiza con cada venta