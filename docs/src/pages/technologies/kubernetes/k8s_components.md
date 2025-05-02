# 🧩 Componentes de Kubernetes

Kubernetes está compuesto por varios componentes clave que trabajan en conjunto para orquestar contenedores. Se dividen en tres categorías principales: plano de control, componentes de nodo y addons.

---

## 🧠 Plano de Control (Control Plane)

Estos componentes toman decisiones globales sobre el clúster, como la planificación y el monitoreo del estado general.

### 📡 kube-apiserver

- **Frontend de Kubernetes**: expone la API.
- Recibe peticiones y actualiza el estado en `etcd`.
- Soporta alta disponibilidad y escalabilidad horizontal.

### 🗃️ etcd

- **Base de datos clave-valor** distribuida y consistente.
- Almacena toda la información del clúster.
- Es fundamental realizar backups regulares.

### 🎯 kube-scheduler

- Asigna Pods sin nodo a un nodo adecuado.
- Considera recursos, afinidades, políticas, etc.

### 🧪 kube-controller-manager

- Ejecuta varios controladores:
  - **Node Controller**: gestiona nodos caídos.
  - **Replication Controller**: mantiene el número correcto de Pods.
  - **Endpoints Controller**: enlaza Services con Pods.
  - **Service Account & Token Controllers**: crea cuentas y tokens por defecto.

### ☁️ cloud-controller-manager

- Gestiona la interacción con proveedores de nube.
- Separa el código del proveedor del núcleo de Kubernetes.
- Controladores:
  - **Node Controller (cloud)**: gestiona nodos desde la nube.
  - **Route Controller**: configura rutas.
  - **Service Controller**: administra LoadBalancers.
  - **Volume Controller**: maneja volúmenes y su ciclo de vida.

---

## 🖥️ Componentes de Nodo

Corren en cada nodo y son responsables de ejecutar los Pods.

### 👷 kubelet

- Agente del nodo.
- Garantiza que los contenedores definidos en los Pods estén corriendo y saludables.

### 🔀 kube-proxy

- Gestiona las reglas de red en el host.
- Encaminamiento de tráfico a los servicios correctos.

### 🧱 Container Runtime

- Ejecuta los contenedores.
- Kubernetes soporta: `containerd`, `CRI-O`, `Docker`, `rktlet`, entre otros que implementen el **Container Runtime Interface (CRI)**.

---

## 🧩 Addons

Extienden la funcionalidad del clúster y suelen correr en el namespace `kube-system`.

### 📛 DNS del clúster

- Proporciona nombres DNS internos a servicios.
- Esencial para el funcionamiento de muchos ejemplos.

### 📊 Dashboard (UI Web)

- Interfaz gráfica para monitorear y administrar el clúster y las aplicaciones.

### 📈 Monitor de Recursos

- Almacena métricas sobre contenedores.
- Proporciona interfaz para visualización de datos históricos.

### 📂 Registros del clúster

- Sistema de logging centralizado.
- Facilita la búsqueda y análisis de logs de los contenedores.

---

> Kubernetes es modular: su arquitectura distribuida permite escalar, reemplazar o extender componentes fácilmente, adaptándose a tus necesidades de operación y despliegue.
