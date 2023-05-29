# Hackaton infojobs

Un clon de infojobs con la caracteristica de que le puedes proporcionar tu usuario de github y realiza una búsqueda de todos los lenguajes que usas en tus repositorios y te da recomendaciones de trabajos de acuerdo al lenguaje que más uses.

Este proyecto es de una hackaton de infojobs y midudev

## Caracteristicas

- Búsqueda automática de ofertas por usuario de github
- Modo oscuro
- Filtrar ofertas
- Paginación

## Instalación

- Instala las dependencias

```bash
  npm i ó npm install
```

- Agrega las variables de entorno .env

```
VITE_API_INFOJOBS="Tu client id y secret client separados por : y convertido en base64"
VITE_API_GITHUB="Tu api de github"
```

- Ejecuta el proyecto

```bash
  npm run dev
```
