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
