---
title: PNPM
titleTemplate: ¿Qué es?
---

# Introducción

**PNPM** (Performant NPM) es un gestor de paquetes para Node.js que optimiza la forma en que se instala y organiza el directorio `node_modules`.

Una de las razones por las que se volvio tan famoso es porque ofrece una alternativa más rápida y eficiente en disco frente a estos otros gestores npm y Yarn.

::: warning
Antes de profundizar en PNPM, es importante entender qué es y cómo funciona la carpeta `node_modules`.
En un proyecto de Node.js, `node_modules` es el directorio donde se instalan todas las dependencias (librerías y módulos) que tu aplicación necesita.

El gestor de paquetes descarga las dependencias especificadas en `package.json` (y sus subdependencias) y las coloca dentro de `node_modules`
:::

## Caracteristica principal

pnpm guarda las dependencias que instalas una sola vez en tu computadora, en un lugar central llamado “almacén global” (global store).

En lugar de copiar todos los archivos en cada proyecto, reutiliza esas versiones desde el almacén. Así, cada aplicación accede a sus dependencias sin duplicarlas físicamente.

🧠 Se podria decir que lo que realmente lo distingue es su sistema de instalación
basado en un almacén global con enlaces físicos `(hard links)`, que evita duplicaciones, acelera las instalaciones y ahorra una
gran cantidad de espacio en disco.

::: tip
🔗 **¿Qué es un hard link?**

Un _hard link_ es una forma especial de crear varias rutas hacia el mismo archivo real en el disco, sin hacer copias.

Es como tener diferentes nombres para un mismo archivo: si cambias el contenido desde uno, también se ve reflejado en los demás, porque en realidad todos apuntan al mismo lugar físico.

Esto permite reutilizar archivos sin ocupar espacio adicional.

:::

## Más información

Para conocer más detalles, consultar documentación avanzada o ver ejemplos de uso:

🔗 [Sitio oficial de PNPM](https://pnpm.io/es/)
