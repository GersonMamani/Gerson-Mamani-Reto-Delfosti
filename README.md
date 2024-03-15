# GersonMamani

### Reto técnico Delfosti:

Este proyecto está desarrollado con :

- Angular 16
- node v18.19.0
- Angular material

## Configuración del Proyecto:

1. Instalar el Node modules
   ```bash
    npm i
   ```
2. Ejecutar el Proyecto:
   ```bash
   ng serve
   ```
3. Visualizar el proyecto:
   ```bash
   http://localhost:4200/
   ```

## Project Deployment

- Este proyecto a sido desplegado mediante la plataforma Vercel
  ```bash
    https://gerson-mamani-reto-delfosti.vercel.app/
  ```

## Descripción del Proyecto

Este proyecto consiste en una Búsqueda de Películas donde se lista un Json de Peliculas (alojadas en assest/movie.json) simulando el consumo de un API REST con la librería Axios y cuenta con un menú que consta de 3 filtros los cuales filtrarán dinámicamente la lista de películas. El menú permitirá filtrar por:

1. Filtrar por Género (select múltiple): Este select esta cargado mediante la variable generos_list, la cual se octuvo consumiendo el método Listar().Con este filtro podrás seleccionar múltiples géneros y filtrará dinámicamente el listado de peliculas.

2. Filtro por Nombre de Película (Input): Mediante este filtro (Input) podrás escribir el nombre de la película que deseas buscar (al ir escribiendo se irá filtrando), si este se encuentra dentro del json de películas brindado lo filtrará y mostrará de no ser así se mostrará un mensaje de "Pélicula no encontrada".También se puede filtrar de manera combinada.

3. Filtro por Descripción de Película (Input): Mediante este filtro (Input) podrás escribir la descripción de la película que deseas buscar (al ir escribiendo se irá filtrando), si este se encuentra dentro del json de películas brindado lo filtrará y mostrará de no ser así se mostrará un mensaje de "Pélicula no encontrada".También se puede filtrar de manera combinada.
