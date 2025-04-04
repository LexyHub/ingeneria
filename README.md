# Desk de Estudio Lexy - Sistema para Gestión de Casos Legales

Este proyecto es una aplicación web desarrollada en React que implementa un "Desk" especializado para optimizar la ejecución de tareas complejas (Big Tasks) en el sistema Lexy, permitiendo a los abogados estudiar casos y distribuir las cajas a las etapas correspondientes, definiendo estrategias y juicios existentes.

## Características Principales

- **Centralización de Información**: Toda la información relevante del caso en una única interfaz.
- **Organización por Pestañas**: Datos personales, deudas, bienes, juicios y contratos.
- **Gestión de Casos Completos**: Seguimiento de juicios, acciones de prescripción y tercerías.
- **Interfaz Amigable**: Diseño limpio y profesional siguiendo los lineamientos visuales de la marca Lexy.
- **Accesibilidad**: Cumple con estándares WCAG AA para garantizar su accesibilidad.

## Requisitos Previos

- Node.js (versión 14.0.0 o superior)
- npm o yarn

## Instalación

1. Clona este repositorio o descarga los archivos
2. Navega al directorio del proyecto:
```
cd desk-estudio-lexy
```
3. Instala las dependencias:
```
npm install
```
4. Inicia la aplicación en modo desarrollo:
```
npm start
```
5. La aplicación se abrirá automáticamente en tu navegador en `http://localhost:3000`

## Estructura del Proyecto

```
desk-estudio-lexy/
├── public/               # Archivos públicos
├── src/                  # Código fuente
│   ├── assets/           # Recursos estáticos (imágenes, etc.)
│   ├── components/       # Componentes de React
│   │   ├── modals/       # Componentes de modales para detalles
│   │   └── tabs/         # Componentes para cada pestaña
│   ├── styles/           # Estilos CSS
│   ├── App.js            # Componente principal de la aplicación
│   ├── App.css           # Estilos para App.js
│   ├── index.js          # Punto de entrada de React
│   └── index.css         # Estilos globales
└── package.json          # Dependencias y scripts
```

## Uso del Sistema

### Secciones Principales

1. **Datos Personales**: Permite registrar y editar la información básica del cliente.
2. **Deudas**: Gestión de las deudas del cliente, incluyendo tipo, institución y estado.
3. **Bienes**: Registro de inmuebles, vehículos y sociedades pertenecientes al cliente.
4. **Juicios**: Seguimiento de procesos judiciales, acciones de prescripción y tercerías.
5. **Contratos**: Gestión de escrituras y contratos relacionados con el caso.

### Flujo de Trabajo Sugerido

1. Ingresar datos personales del cliente
2. Registrar las deudas existentes
3. Documentar los bienes del cliente
4. Verificar los juicios existentes
5. Gestionar los contratos relacionados
6. Utilizar la barra lateral para agregar notas, tácticas y objetivos del cliente

### Barra Lateral

La barra lateral permite un acceso rápido a:
- Tácticas definidas para el caso
- Descripción general del caso
- Objetivos del cliente
- Notas importantes

## Diseño y Accesibilidad

El diseño del sistema sigue los lineamientos visuales de Lexy:

- **Colores Principales**:
  - Color primario: #4C2EFF
  - Color secundario: #1800A3
  - Color texto primario: #2F2F2F
  - Color texto secundario: #666666

- **Tipografía**: Archivo (Google Fonts)

- **Accesibilidad**:
  - Cumple con los estándares WCAG AA
  - Contraste adecuado en todo el sistema
  - Elementos focusables para navegación por teclado
  - Estructura semántica para lectores de pantalla

## Características Técnicas

- **Componentes Reutilizables**: Botones, tarjetas, tablas, formularios, etc.
- **Estado Global**: Gestión de estado mediante React Hooks (useState, useEffect)
- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla (desktop, tablet, móvil)
- **Validación de Formularios**: Verificación de datos obligatorios y formatos correctos
- **Modales de Detalle**: Para acceder y editar información específica

## Extensión y Desarrollo Futuro

Este sistema está diseñado para ser modular y extensible, permitiendo:

1. **Nuevas Funcionalidades**: 
   - Exportación de informes
   - Generación automática de documentos
   - Integración con servicios externos

2. **Mejoras Futuras**:
   - Sistema de notificaciones
   - Flujo de trabajo automatizado
   - Panel de estadísticas

## Soporte

Para soporte técnico o consultas, contactar al equipo de desarrollo:
- Email: soporte@lexy.cl
- Teléfono: +56 2 2123 4567

## Licencia

© 2025 Lexy. Todos los derechos reservados.
