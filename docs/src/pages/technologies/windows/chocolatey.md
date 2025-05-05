---
title: Chocolatey
titleTemplate: ¿Qué es Chocolatey?
---

# Chocolatey en Windows

**Chocolatey** es un gestor de paquetes para Windows que simplifica la instalación, actualización y gestión de software mediante la línea de comandos. Funciona como `apt` en Linux o `brew` en macOS, pero adaptado a Windows.

## ¿Para qué sirve?

- Automatiza tareas de instalación, actualización y desinstalación de software.
- Centraliza la gestión de programas, evitando descargas manuales.
- Ideal para administradores de sistemas o usuarios que gestionan múltiples equipos.

## Características principales

1. **Instalación sencilla**: Se configura con un script en PowerShell.
2. **Repositorio extenso**: Miles de paquetes gratuitos en el [Chocolatey Community Repository](https://community.chocolatey.org/packages).
3. **Gestión centralizada**: Actualiza todo el software con un solo comando.
4. **Personalización**: Soporta paquetes privados para empresas.
5. **Integración**: Compatible con PowerShell, Ansible, SCCM, etc.

## Comandos básicos

| Acción               | Comando                          |
| -------------------- | -------------------------------- |
| Instalar un programa | `choco install nombre-paquete`   |
| Actualizar todo      | `choco upgrade all`              |
| Buscar paquete       | `choco search nombre-paquete`    |
| Desinstalar          | `choco uninstall nombre-paquete` |

## Versiones disponibles

- **Chocolatey FOSS**: Gratuito y de código abierto (uso personal).
- **Chocolatey Professional**: Versión paga con soporte empresarial.

## Ventajas

- 🚀 **Eficiencia**: Maneja dependencias automáticamente.
- 🔒 **Seguridad**: Paquetes verificados por la comunidad.
- 📦 **Consistencia**: Estandariza la instalación de software.

## Ejemplo de uso

Instalar **Google Chrome**:

```powershell
choco install googlechrome
```

## Instalación de Chocolatey

1. Abre **PowerShell como Administrador**.
2. Ejecuta este comando:
   ```powershell
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   ```

## Resumen

Chocolatey lleva la comodidad de los gestores de paquetes de Linux a Windows, optimizando la gestión de software con comandos simples y un repositorio centralizado. 😊
