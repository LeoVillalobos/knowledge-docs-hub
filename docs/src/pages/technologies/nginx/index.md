---
title: Nginix
titleTemplate: ¿Qué es Nginix?
outline: deep
---

# 🌐 Nginx

**Nginx** es un **servidor web** y **proxy inverso** muy ligero, rápido y ampliamente usado en producción.
Su nombre se pronuncia **"engine-x"**.

::: tip
Se recomienda leer la seccion de proxy si es que se desconoce por completo el tema
:::

## 💡 Nginx explicado de manera sencilla

Imagina que Nginx es como **el recepcionista de un edificio**:

- Tú llegas (cliente) y pides entrar a una oficina (backend).
- El recepcionista (Nginx) decide a qué oficina enviarte y te guía correctamente

## ⚙️ Usos principales

### 1. 🖥️ Servidor web estático

- Sirve archivos **HTML**, **CSS**, **JS**, imágenes, videos y otros recursos estáticos.
- Ideal para sitios web o frontends construidos con frameworks como **Vue**, **React** o **Angular**.

### 2. 🔄 Proxy inverso (Reverse Proxy)

- Actúa como **intermediario entre el cliente y el backend**.
- Redirige solicitudes a uno o varios servidores backend (ej: Node.js, Python, PHP).
- Beneficios:
  - Oculta la infraestructura del backend.
  - Mejora la seguridad.
  - Permite cachear respuestas y optimizar el tráfico.

```nginx

# Ejemplo simple de proxy inverso en Nginx

location /api/ {
proxy_pass http://backend:3000/;
}
```

### 3. ⚖️ Balanceador de carga

- Distribuye el tráfico entre varios servidores backend.
- Mejora el **rendimiento** y la **disponibilidad** de la aplicación.

### 4. 🔒 Terminación SSL/TLS

- Maneja los certificados **HTTPS**.
- Descarga el trabajo de cifrado/descifrado de la aplicación backend.

### 5. 🌐 Gateway de APIs

- Se usa en despliegues modernos con **microservicios**.
- Permite enrutar, autenticar y limitar peticiones hacia distintos servicios.
