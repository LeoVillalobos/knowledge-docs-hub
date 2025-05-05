# Minikube

## 🚀 Instalación de kubectl y minikube sin Chocolatey

### 1. Instalar kubectl manualmente

Ve al sitio de descargas de kubectl para Windows:
**[Descargar kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/)**

Descarga el archivo ejecutable `kubectl.exe` y colócalo en una carpeta de tu preferencia.

Agrega la carpeta donde guardaste `kubectl.exe` a la variable de entorno `PATH`:

1. Abre el Explorador de Archivos.
2. Haz clic derecho en **Este PC** y selecciona **Propiedades**.
3. Haz clic en **Configuración avanzada del sistema** y luego en **Variables de entorno**.
4. En **Variables del sistema**, selecciona `Path` y haz clic en **Editar**.
5. Agrega la ruta a la carpeta donde guardaste `kubectl.exe`.

---

### ✅ Alternativa: instalación de kubectl con `curl`

¡Perfecto! Usar `curl` es otra manera válida de instalar kubectl. Si ya descargaste kubectl con el comando:

```
curl.exe -LO "https://dl.k8s.io/release/v1.33.0/bin/windows/amd64/kubectl.exe"
```

🔧 **Pasos para completar la instalación:**

- Coloca el archivo `kubectl.exe` en una carpeta de tu preferencia, como por ejemplo `C:\kubectl\`.
- Agrega esa carpeta a la variable de entorno `PATH`:

1. Abre el Explorador de Archivos.
2. Haz clic derecho en **Este PC** y selecciona **Propiedades**.
3. Haz clic en **Configuración avanzada del sistema**.
4. En la ventana de Propiedades del sistema, haz clic en **Variables de entorno**.
5. En **Variables del sistema**, selecciona `Path` y haz clic en **Editar**.
6. Haz clic en **Nuevo** y agrega la ruta de la carpeta donde guardaste `kubectl.exe` (por ejemplo, `C:\kubectl\`).

Verifica la instalación de kubectl ejecutando:

```
kubectl version --client
```

---

## 2. Instalar Minikube manualmente

Descarga Minikube desde el sitio oficial:
**[Descargar Minikube](https://minikube.sigs.k8s.io/docs/start/)**

Elige la versión de Windows y descarga el archivo `.exe`.

Coloca el archivo `minikube.exe` en la misma carpeta donde guardaste `kubectl.exe` o en otra de tu elección.

Agregar Minikube a `PATH` (igual que con `kubectl`):

1. Abre **Propiedades del sistema > Variables de entorno**.
2. En **Variables del sistema**, selecciona `Path` y haz clic en **Editar**.
3. Agrega la carpeta donde guardaste `minikube.exe`.

---

### 🧰 Alternativa: instalación de Minikube con `curl`

También puedes descargar Minikube usando `curl`:

```
curl.exe -LO https://storage.googleapis.com/minikube/releases/v1.24.0/minikube-installer.exe
```

> Asegúrate de usar la última versión disponible si lo deseas.

Ejecuta el instalador `minikube-installer.exe` y sigue las instrucciones.

Verifica la instalación de Minikube ejecutando:

```
minikube version
```

Despues de verificar que todo se haya instalado correctamente, ejecuta el comando:

```
minikube start --driver=docker
```

::: tip

Este comando incia un clúster de Kubernetes local usando **Minikube**, especificando que se use **Docker** como entorno de ejecución.

**Requisitos:**

- Tener Minikube y Docker instalados y funcionando.

**Verificar el estado del clúster:**

```
minikube status
kubectl cluster-info
kubectl get nodes
```

:::

## Conflicto de versiones entre kubectl y Kubernetes

✅ **¿Qué pasó?**
Minikube levantó un contenedor Docker con **Kubernetes v1.22.3**.

⚠️ **Advertencia:**
Tienes instalado **kubectl v1.30.5**, lo que puede causar **incompatibilidades** con el clúster.

💡 **Sugerencia:**
Usa el `kubectl` que trae Minikube para evitar errores de compatibilidad:

```
minikube kubectl -- get pods -A
```

🎯 **¿Qué puedes hacer ahora?**

1. **Verifica el estado del clúster:**

   ```
   kubectl get nodes
   ```

   Si ves un nodo con estado `Ready`, todo está funcionando.

2. **(Opcional) Usa el kubectl de Minikube:**

   ```
   minikube kubectl -- get pods -A
   ```

3. **(Aún más fácil) Deja que Minikube lo configure:**
   ```
   minikube kubectl -- bash
   ```

## Dashboard

Esto abrirá una interfaz web para ver gráficamente tus pods, deployments, servicios, etc.

```
minikube dashboard
```

## Usar imágenes Docker personalizadas con Minikube y Kubernetes

**1. Construir una imagen Docker:**

```
docker build -t miapp:v1 .
```

**2. Si usas Minikube, primero conecta su entorno Docker:**

```
eval $(minikube docker-env)
docker build -t miapp:v1 .
```

**3. Crear el deployment en Kubernetes:**

```
kubectl create deployment miapp --image=miapp:v1
```

**4. (Opcional) Exponerlo con un Service:**

```
kubectl expose deployment miapp --type=NodePort --port=80
```

**🤖 ¿Qué hace Kubernetes por ti?**

- Crea un Pod con esa imagen.
- Ejecuta el contenedor dentro del Pod.
- Lo mantiene corriendo (lo reinicia si se cae).
- Escala réplicas si se solicitan.
- Permite actualizaciones con _rolling update_ si cambias la imagen.
