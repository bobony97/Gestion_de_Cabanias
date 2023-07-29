# cabanias

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

Este proyecto esta realizado con MySQL, Electron js, Vue js y Express js

-El proyecto utiliza 1 base de datos con el nombre de "cabanias", una tabla llamada "cabania" y sus respectivas columnas son: "id, cabania, nombre_inquilino, fecha_ingreso, fecha_salida", la segunda tabla es "entradas" y los nombres de las columnas son: "id, cabania, nombre_inquilino, fecha_ingreso, fecha_salida", dicha base de datos esta localizada en la carpeta "base de datos" dentro del proyecto.
Dicha base de datos solo esta hecha para soportar un maximo de 10 cabanias en las cards.

 "Recomendado abrir 3 consolas para ejecutar la aplicacion completa"
-En la primer consola: npm run vue - "Ejecuta vue"
-En la segunda consola: cd back - "ingresa a la carpeta back, que es donde esta el backend" luego en la misma consola: node app.js - "Ejecuta el servidor backend"
-En la tercer consola: npm run elec - "Ejecuta electron js"

