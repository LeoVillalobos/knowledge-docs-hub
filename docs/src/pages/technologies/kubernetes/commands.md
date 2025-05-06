---
title: Comandos
---

# Comandos de Kubernetes, Docker y Minikube

## Comandos Básicos de Kubernetes (`kubectl`)

### 1. Obtener recursos del cluster

```bash
kubectl get pods
```

- **Qué hace**: Lista todos los **Pods** en el namespace actual.
- **Para qué sirve**: Verificar el estado de tus aplicaciones (ej: `Running`, `Error`).

```bash
kubectl get deployments
```

- **Qué hace**: Lista los **Deployments** en el namespace actual.
- **Para qué sirve**: Gestionar aplicaciones escalables (controla réplicas de Pods).

```bash
kubectl get nodes
```

- **Qué hace**: Muestra los **nodos** del cluster.
- **Para qué sirve**: Chequear la salud del cluster (ej: `Ready`, `NotReady`).

---

### 2. Ayuda y documentación

```bash
kubectl --help
```

- **Qué hace**: Muestra todos los comandos y opciones de `kubectl`.
- **Para qué sirve**: Explorar funcionalidades avanzadas (ej: `describe`, `logs`).

---

## Comandos de Minikube

### 3. Gestionar complementos (addons)

```bash
minikube addons list
```

- **Qué hace**: Lista complementos disponibles (ej: `dashboard`, `ingress`).
- **Para qué sirve**: Habilitar servicios adicionales en el cluster local.

```bash
minikube addons enable registry
```

- **Qué hace**: Habilita un **registro de Docker local** en Minikube.
- **Para qué sirve**: Subir imágenes sin usar Docker Hub (para desarrollo local).

```bash
minikube addons enable metrics-server
```

- **Qué hace**: Habilita el servidor de métricas.
- **Para qué sirve**: Obtener datos de CPU/memoria para autoescalado (`kubectl top`).

---

## Comandos de Docker

### 4. Gestionar contenedores e imágenes

```bash
docker ps
```

- **Qué hace**: Lista contenedores en ejecución.
- **Para qué sirve**: Depurar contenedores (tras usar `eval $(minikube docker-env)`).

```bash
docker images
```

- **Qué hace**: Lista imágenes disponibles localmente.
- **Para qué sirve**: Verificar imágenes construidas para Minikube.

---

## Configuración clave

```bash
eval $(minikube docker-env)
```

- **Qué hace**: Conecta Docker al entorno de Minikube.
- **Para qué sirve**: Construir imágenes directamente en Minikube (evitar subir a registros).

---

## Flujo de trabajo típico

1. **Construir imagen**:
   ```bash
   eval $(minikube docker-env)
   docker build -t mi-app .
   ```
2. **Desplegar en Kubernetes**:
   ```bash
   kubectl apply -f deployment.yaml
   ```
3. **Verificar estado**:
   ```bash
   kubectl get pods
   kubectl get deployments
   ```

> **Nota**: Ejecuta `minikube ip` para obtener la IP del cluster si necesitas acceder a servicios externamente.

```

```
