---
outline: deep
title: VitePress
titleTemplate: Vite & Vue powered static site generator
---

# Programación para Ciencia de Datos

## 1. Introducción a Python para Ciencia de Datos

Python es el lenguaje más utilizado en la ciencia de datos debido a su sintaxis sencilla y su gran comunidad. Algunas de las razones para utilizar Python en ciencia de datos incluyen:

- **Simplicidad y facilidad de uso**: Ideal para manejar datos, realizar análisis y crear modelos de aprendizaje automático.
- **Amplio ecosistema de bibliotecas**: Hay muchas bibliotecas útiles para ciencia de datos como NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, entre otras.

Si ya estás familiarizado con Python, podemos profundizar en bibliotecas específicas que son clave para la ciencia de datos. Si no, aquí te dejo un breve repaso.

### Conceptos básicos de Python:

- **Variables y tipos de datos**: `int`, `float`, `str`, `list`, `dict`.
- **Estructuras de control**: `if`, `for`, `while`.
- **Funciones**: `def` para definir funciones, parámetros y retorno de valores.

```python
# Asignación de variables
x = 5
y = 3

# Sumar dos números
suma = x + y

# Imprimir el resultado
print(f"La suma es {suma}")

```


## 2. Bibliotecas esenciales para Ciencia de Datos

Estas bibliotecas son fundamentales para el análisis y visualización de datos:

### 2.1 NumPy

NumPy es esencial para trabajar con arreglos numéricos y realizar operaciones matemáticas eficientes. Permite crear y manipular arreglos multidimensionales (similares a listas) y realizar operaciones rápidas sobre ellos.

**Ejemplo**: Crear un arreglo y realizar operaciones básicas.

```python
import numpy as np

# Crear un arreglo de NumPy
arr = np.array([1, 2, 3, 4, 5])

# Operaciones básicas
print(f"Suma de elementos: {arr.sum()}")
print(f"Media de los elementos: {arr.mean()}")

```

### 2.2 Pandas

Pandas es probablemente la herramienta más utilizada para la manipulación de datos. Con Pandas puedes leer archivos CSV, Excel, y manipular datos en formato de tablas (DataFrames).

**Ejemplo**: Leer un archivo CSV y visualizar datos.

```python
import pandas as pd

# Leer un archivo CSV
df = pd.read_csv('archivo.csv')

# Mostrar las primeras 5 filas
print(df.head())

# Mostrar estadísticas descriptivas
print(df.describe())

```

### 2.3 Matplotlib y Seaborn

Estas bibliotecas son utilizadas para la visualización de datos. Matplotlib es la biblioteca base, mientras que Seaborn extiende Matplotlib con visualizaciones más atractivas y fáciles de crear.

**Ejemplo con Matplotlib**: Crear un gráfico de líneas.

```python
import matplotlib.pyplot as plt

# Datos de ejemplo
x = [1, 2, 3, 4, 5]
y = [10, 20, 25, 30, 40]

# Crear gráfico de líneas
plt.plot(x, y)
plt.title("Gráfico de líneas")
plt.xlabel("X")
plt.ylabel("Y")
plt.show()

```
