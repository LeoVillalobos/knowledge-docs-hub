#!/bin/bash

# Detener la ejecución si hay errores
set -e

# Generar el sitio estático
pnpm run build

# Ir al directorio de salida
cd .vitepress/dist

# Inicializar un nuevo repositorio y hacer el commit
git init
git add -A
git commit -m "deploy"

# Subir los archivos al branch gh-pages
git push -f git@github.com:LeoVillalobos/knowledge-docs-hub.git main:gh-pages

cd -
