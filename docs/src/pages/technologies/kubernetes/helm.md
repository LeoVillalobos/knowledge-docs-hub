---
title: K8s
titleTemplate: ¿Qué es Kubernetes?
---

# ¿Qué es Helm?

**Helm** es el gestor de paquetes para **Kubernetes**, diseñado para simplificar el despliegue y gestión de aplicaciones en clusters. Utiliza plantillas llamadas **charts** para empaquetar recursos de Kubernetes.

## Funciones clave

- 🚀 Simplifica despliegues complejos en Kubernetes.
- 🔄 Permite reutilizar y personalizar configuraciones.
- 📦 Gestiona dependencias entre servicios.

## Conceptos principales

### 1. Chart

Plantilla que define una aplicación para Kubernetes (incluye Deployments, Services, ConfigMaps, etc.).

### 2. Release

Instancia específica de un chart desplegado en el cluster.

### 3. Repositorio

Almacén de charts públicos o privados (ej: [Bitnami](https://charts.bitnami.com)).

## Comandos básicos

```bash
# Instalar un chart
helm install mi-app bitnami/nginx

# Actualizar una release
helm upgrade mi-app bitnami/nginx

# Eliminar una release
helm uninstall mi-app
```

## Ejemplo de flujo de trabajo

1. Añadir un repositorio:

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
```

2. Buscar charts disponibles:

```bash
helm search repo mysql
```

3. Instalar una base de datos MySQL personalizada:

```bash
helm install my-db bitnami/mysql --set auth.rootPassword=12345
```

## Ventajas

- **Estandarización**: Estructura consistente para aplicaciones.
- **Rollback**: Vuelve a versiones anteriores con `helm rollback`.
- **Comunidad**: Miles de charts preconfigurados en [Artifact Hub](https://artifacthub.io).

## Comparación con Kubernetes

| Herramienta    | Rol                                  |
| -------------- | ------------------------------------ |
| **Kubernetes** | Orquesta contenedores en clusters.   |
| **Helm**       | Gestiona aplicaciones como paquetes. |
