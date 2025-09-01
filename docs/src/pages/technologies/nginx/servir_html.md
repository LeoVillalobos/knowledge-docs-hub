---
title: Nginix
titleTemplate: ¿Qué es Nginix?
outline: deep
---

# 🚀 Servir un HTML con Nginx en Windows

## 1️⃣ Descargar Nginx

Descarga la última versión estable desde la página oficial:

👉 [https://nginx.org/en/download.html](https://nginx.org/en/download.html)

Descarga el archivo **zip** (ejemplo: `nginx-1.28.0.zip`) y extrae la carpeta en una ruta accesible, por ejemplo:

```
C:\nginx-1.28.0
```

## 2️⃣ Iniciar y detener Nginx

Abre **PowerShell** y navega hasta la carpeta donde está `nginx.exe`:

```powershell
cd C:\nginx-1.28.0
```

### ✅ Iniciar Nginx

```powershell
start nginx
```

### 🛑 Detener Nginx

```powershell
Get-Process nginx | Stop-Process -Force
```

> 🔍 Una vez iniciado, abre en tu navegador:
>
> 👉 [http://localhost/](http://localhost/)

## 3️⃣ Crear un HTML de ejemplo

En la carpeta:

```
C:\nginx-1.28.0\html\
```

Crea un archivo llamado **`example.html`**, por ejemplo:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi ejemplo con Nginx</title>
  </head>
  <body>
    <h1>¡Hola! 👋</h1>
    <p>Este archivo está siendo servido por Nginx.</p>
  </body>
</html>
```

## 4️⃣ Configurar Nginx para servir el archivo

Edita el archivo de configuración:

```
C:\nginx-1.28.0\conf\nginx.conf
```

Dentro del bloque `server { ... }` agrega (o modifica) el bloque `location`:

```nginx
location / {
  root html;
  index index.html index.htm example.html;
}
```

Guarda los cambios.

## 5️⃣ Reiniciar Nginx

Después de modificar la configuración, reinicia Nginx para aplicar cambios:

```powershell
.\nginx.exe -s reload

```

## 6️⃣ Ver el resultado

Abre en el navegador:

👉 [http://localhost/example.html](http://localhost/example.html)
