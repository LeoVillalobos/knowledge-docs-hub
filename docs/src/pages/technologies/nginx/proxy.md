---
title: Proxy
titleTemplate: ¿Qué es proxy?
outline: deep
---

# 🤔 ¿Qué es un Proxy?

Un **proxy** es un **intermediario** entre el cliente (por ejemplo, tu navegador) y el servidor (donde está la aplicación).

::: tip Info
Literalmente, "proxy" significa **“apoderado”**, **“representante”** o **“intermediario”**.

Nginx funciona como un proxy porque recibe la solicitud del navegador **“en lugar” del backend** y luego la pasa al servidor, devolviendo la respuesta al cliente.

Es básicamente **“un representante que hace la gestión por ti”**.
:::

## 👉 Tipos principales de proxy

### 1. 🔹 Proxy directo (Forward Proxy)

- El cliente se conecta primero al proxy.
- El proxy reenvía la petición a Internet.
- Usos frecuentes:
  - Controlar qué páginas visitan los usuarios (oficinas, escuelas, empresas).
  - Filtrar contenido o cachear información.
  - Ocultar la IP real del cliente.

🔍 **Ejemplo de flujo:**

```
Tú → Proxy de la empresa → Google.com
```

---

### 2. 🔹 Proxy inverso (Reverse Proxy)

- Se coloca del lado del servidor.
- Los clientes **no saben qué servidor hay detrás**.
- Recibe todas las peticiones y decide a qué servidor/backend enviarlas.
- Usos principales:
  - Proteger la aplicación real (no se expone directamente).
  - Balancear carga entre varios servidores.
  - Terminar HTTPS (el proxy maneja el certificado).
  - Unificar varios servicios en un solo dominio.

🔍 **Ejemplo de flujo:**

```
Tú → Nginx (proxy inverso) → App Node.js (puerto 3000)
→ App Python (puerto 5000)
→ Archivos estáticos
```

---

### 🚦 Diferencia clave

| Tipo de Proxy | Protege a...         |
| ------------- | -------------------- |
| Forward Proxy | Cliente              |
| Reverse Proxy | Servidores / Backend |

## 🖼️ Analogía simple

- **Forward proxy:** Un amigo hace el pedido por ti en un restaurante, y el mesero **no sabe quién eres**.
- **Reverse proxy:** El mesero recibe los pedidos de todos los clientes y decide **en qué cocina (servidor backend) preparar la comida**.

<br>

> 💡 En resumen:
>
> - **Forward proxy → protege/controla al cliente**
> - **Reverse proxy → protege/organiza a los servidores**
