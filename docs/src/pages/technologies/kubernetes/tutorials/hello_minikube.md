# Hola Minikube

Este tutorial muestra cómo ejecutar una aplicación de ejemplo en Kubernetes usando Minikube. Proporciona una imagen de contenedor que utiliza NGINX para devolver todas las solicitudes.

## Objetivos

- Desplegar una aplicación de ejemplo en Minikube.
- Ejecutar la aplicación.
- Ver los registros de la aplicación.

## Antes de comenzar

Este tutorial asume que ya has configurado Minikube. Consulta el **Paso 1** en la guía de inicio de Minikube para instrucciones de instalación.

> **Nota:**
>
> - Solo ejecuta las instrucciones del **Paso 1: Instalación**. El resto está cubierto en esta página.
> - También necesitas instalar `kubectl`. Consulta la sección “Install tools” para instrucciones.

## Crear un clúster de Minikube

```bash
minikube start
```

## Abrir el Dashboard

Puedes abrir el dashboard de Kubernetes de dos maneras:

1. **Lanzar el navegador automáticamente**
2. **Copiar y pegar la URL**

### 1. Lanzar el navegador

Abre un nuevo terminal y ejecuta:

```bash

# Inicia un nuevo terminal y deja esto ejecutándose

minikube dashboard
```

Luego vuelve al terminal donde ejecutaste `minikube start`.

> **Nota:**
>
> - El comando `dashboard` habilita el complemento del dashboard y abre un proxy en tu navegador predeterminado.
> - Desde el dashboard puedes crear recursos de Kubernetes como Deployments y Services.

### 2. Copiar y pegar la URL

Para conocer cómo evitar invocar el navegador directamente y obtener solo la URL, consulta la pestaña **“URL copy and paste”** en la documentación oficial.

> **Importante:**
>
> - Por defecto, el dashboard solo es accesible desde la red virtual interna de Kubernetes.
> - El comando `dashboard` crea un proxy temporal para que puedas acceder al dashboard desde fuera de la red interna.
> - Para detener el proxy, presiona **Ctrl+C**. El dashboard seguirá ejecutándose en el clúster y podrás volver a crear el proxy ejecutando `minikube dashboard` de nuevo.

## Crear un Deployment

Un **Pod** de Kubernetes es un grupo de uno o más contenedores vinculados para propósitos de administración y redes. En este tutorial, el Pod contiene un solo contenedor. Un **Deployment** de Kubernetes supervisa la salud de tu Pod y reinicia su contenedor si este termina. Los Deployments son la forma recomendada de gestionar la creación y el escalado de Pods.

Usa el comando `kubectl create` para crear un Deployment que gestione un Pod. El Pod ejecutará un contenedor basado en la imagen de Docker indicada.

```bash
# Ejecuta una imagen de contenedor de prueba que incluye un servidor web
kubectl create deployment hello-node \
  --image=registry.k8s.io/e2e-test-images/agnhost:2.39 \
  -- /agnhost netexec --http-port=8080
```

### Ver el Deployment

```bash
kubectl get deployments
```

La salida es similar a:

```
NAME READY UP-TO-DATE AVAILABLE AGE
hello-node 1/1 1 1 1m
```

> Puede tardar unos segundos en estar listo. Si ves `0/1`, intenta de nuevo en unos instantes.

### Ver el Pod

```bash
kubectl get pods
```

La salida es similar a:

```bash
NAME READY STATUS RESTARTS AGE
hello-node-5f76cf6ccf-br9b5 1/1 Running 0 1m
```

### Ver eventos del clúster

```bash
kubectl get events
```

### Ver la configuración de kubectl

```bash
kubectl config view
```

### Ver los registros de la aplicación

Reemplaza el nombre del Pod en el siguiente comando con el que obtuviste al ejecutar `kubectl get pods`:

```bash
kubectl logs hello-node-5f76cf6ccf-br9b5
```

La salida es similar a:

```bash
I0911 09:19:26.677397 1 log.go:195] Started HTTP server on port 8080
I0911 09:19:26.677586 1 log.go:195] Started UDP server on port 8081
```

> Para más información sobre los comandos de `kubectl`, consulta la [visión general de kubectl](https://kubernetes.io/docs/reference/kubectl/overview/).

## Crear un Service

Por defecto, el Pod solo es accesible mediante su dirección IP interna dentro del clúster de Kubernetes. Para hacer que el contenedor `hello-node` sea accesible desde fuera de la red virtual de Kubernetes, necesitas exponer el Pod como un **Service** de Kubernetes.

> ⚠️ **Advertencia:**
> El contenedor `agnhost` tiene un endpoint `/shell` útil para depuración, pero peligroso si se expone a internet. **No ejecutes esto en un clúster accesible públicamente o en producción.**

### Exponer el Pod al exterior

Usa el comando `kubectl expose` para exponer el Deployment:

```bash
kubectl expose deployment hello-node --type=LoadBalancer --port=8080
```

El flag `--type=LoadBalancer` indica que deseas exponer el servicio fuera del clúster.

> La imagen de prueba solo escucha en el puerto TCP 8080. Si expones otro puerto, los clientes no podrán conectarse.

### Ver el Service creado

```bash
kubectl get services
```

La salida será similar a:

```bash
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
hello-node LoadBalancer 10.108.144.78 <pending> 8080:30369/TCP 21s
kubernetes ClusterIP 10.96.0.1 <none> 443/TCP 23m

python
Copiar
Editar
```

> En proveedores en la nube que soportan balanceadores de carga, se asignará una IP externa automáticamente.
> En **minikube**, el tipo `LoadBalancer` hace que el servicio sea accesible mediante el comando `minikube service`.

### Abrir el servicio en el navegador

Ejecuta:

```bash
minikube service hello-node
```

Esto abrirá una ventana del navegador que muestra tu aplicación y su respuesta.

## Habilitar addons

La herramienta `minikube` incluye un conjunto de **addons** integrados que se pueden habilitar, deshabilitar y abrir en el entorno local de Kubernetes.

### Listar los addons disponibles

Ejecuta el siguiente comando para ver los addons soportados:

```bash
minikube addons list
```

La salida será similar a:

```
addon-manager: enabled
dashboard: enabled
default-storageclass: enabled
efk: disabled
freshpod: disabled
gvisor: disabled
helm-tiller: disabled
ingress: disabled
ingress-dns: disabled
logviewer: disabled
metrics-server: disabled
nvidia-driver-installer: disabled
nvidia-gpu-device-plugin: disabled
registry: disabled
registry-creds: disabled
storage-provisioner: enabled
storage-provisioner-gluster: disabled
```

### Habilitar un addon

Por ejemplo, para habilitar `metrics-server`:

```bash
minikube addons enable metrics-server
```

La salida será similar a:

```
The 'metrics-server' addon is enabled
```

### Ver los recursos creados por el addon

Puedes ver el Pod y el Service creados por el addon con:

```bash
kubectl get pod,svc -n kube-system
```

La salida será similar a:

```
NAME READY STATUS RESTARTS AGE
pod/metrics-server-67fb648c5 1/1 Running 0 26s
...

NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
service/metrics-server ClusterIP 10.96.241.45 <none> 80/TCP 26s
...
```

### Ver métricas de los pods

Una vez habilitado `metrics-server`, puedes consultar el uso de recursos:

```bash
kubectl top pods
```

Salida esperada:

```bash
NAME CPU(cores) MEMORY(bytes)
hello-node-ccf4b9788-4jn97 1m 6Mi
```

> Si ves el mensaje `error: Metrics API not available`, espera unos segundos y vuelve a intentarlo.

### Deshabilitar `metrics-server`

```bash
minikube addons disable metrics-server
```

Salida:

---

## Limpieza

Elimina los recursos que creaste en el clúster:

```bash
kubectl delete service hello-node
kubectl delete deployment hello-node
```

### Detener el clúster de Minikube

```bash
minikube stop
```

### (Opcional) Eliminar la VM de Minikube

```bash
minikube delete
```

> Si deseas seguir aprendiendo con Minikube, **no es necesario eliminarlo**.

---

## Conclusión

Esta guía cubre los aspectos básicos para iniciar un clúster con Minikube.
Ahora estás listo para desplegar aplicaciones en Kubernetes 🚀.
