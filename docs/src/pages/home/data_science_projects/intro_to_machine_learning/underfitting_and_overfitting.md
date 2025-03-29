# Underfitting y Overfitting (Subajuste y Sobreajuste)

Al final de este paso, comprenderás los conceptos de _underfitting_ y _overfitting_, y serás capaz de aplicar estas ideas para hacer que tus modelos sean más precisos.

## Experimentando con Diferentes Modelos

Ahora que tienes una forma confiable de medir la precisión de un modelo, puedes experimentar con modelos alternativos y ver cuál ofrece las mejores predicciones. Pero, ¿qué alternativas tienes para los modelos?

En la documentación de scikit-learn, puedes ver que el modelo de árbol de decisión tiene muchas opciones (más de las que probablemente quieras o necesites por mucho tiempo). Las opciones más importantes determinan la profundidad del árbol. Recuerda, desde la primera lección de este curso, que la profundidad de un árbol mide cuántas divisiones realiza antes de llegar a una predicción. Este es un árbol relativamente poco profundo.

<!-- <img src="/home/data_science_projects/models_work_4.png" > -->

## En la Práctica

En la práctica, no es raro que un árbol tenga 10 divisiones entre el nivel superior (todas las casas) y una hoja. A medida que el árbol se hace más profundo, el conjunto de datos se divide en hojas con menos casas. Si un árbol tuviera solo 1 división, dividiría los datos en 2 grupos. Si cada grupo se divide nuevamente, obtendremos 4 grupos de casas. Dividir cada uno de esos grupos nuevamente crearía 8 grupos. Si seguimos duplicando el número de grupos agregando más divisiones en cada nivel, tendríamos
2<sup>10</sup> grupos de casas para el momento en que lleguemos al décimo nivel. Eso son 1024 hojas.

Cuando dividimos las casas entre muchas hojas, también tenemos menos casas en cada hoja. Las hojas con muy pocas casas harán predicciones muy cercanas a los valores reales de esas casas, pero pueden hacer predicciones poco confiables para nuevos datos (porque cada predicción se basa solo en unas pocas casas).

Este es un fenómeno llamado _overfitting_ (sobreajuste), donde un modelo coincide casi perfectamente con los datos de entrenamiento, pero tiene un mal desempeño en la validación y en otros datos nuevos. Por otro lado, si hacemos nuestro árbol muy superficial, no divide las casas en grupos muy distintos.

En un extremo, si un árbol divide las casas solo en 2 o 4, cada grupo aún tiene una amplia variedad de casas. Las predicciones resultantes pueden estar muy lejos de los valores reales de la mayoría de las casas, incluso en los datos de entrenamiento (y también serán malas en la validación por la misma razón). Cuando un modelo no logra capturar distinciones y patrones importantes en los datos, por lo que tiene un mal desempeño incluso en los datos de entrenamiento, eso se llama _underfitting_ (subajuste).

Dado que nos importa la precisión en los nuevos datos, que estimamos a partir de nuestros datos de validación, queremos encontrar el punto medio entre el _underfitting_ y el _overfitting_. Visualmente, queremos el punto más bajo de la curva de validación (roja) en la figura a continuación.

<!-- <img src="/home/data_science_projects/mean_absolute_error.png" > -->

## Ejemplo

Existen algunas alternativas para controlar la profundidad del árbol, y muchas permiten que algunas rutas a través del árbol tengan mayor profundidad que otras. Sin embargo, el argumento `max_leaf_nodes` proporciona una forma muy razonable de controlar el equilibrio entre _overfitting_ y _underfitting_. Cuantas más hojas permitamos que el modelo cree, más nos moveremos del área de _underfitting_ en el gráfico anterior hacia el área de _overfitting_.

Podemos usar una función utilitaria para comparar las puntuaciones MAE de diferentes valores para `max_leaf_nodes`:

```python
# Importamos las bibliotecas necesarias
from sklearn.metrics import mean_absolute_error  # Para calcular el error absoluto medio (MAE)
from sklearn.tree import DecisionTreeRegressor  # Para crear un modelo de árbol de decisión

# Definimos una función para calcular el MAE dado un número máximo de nodos hoja
def get_mae(max_leaf_nodes, train_X, val_X, train_y, val_y):
    """
    Calcula el MAE para un modelo de árbol de decisión con un número específico de nodos hoja.

    Parámetros:
    max_leaf_nodes: int - Número máximo de nodos hoja permitidos en el árbol.
    train_X, val_X: DataFrame - Datos de entrada para entrenamiento y validación.
    train_y, val_y: Series - Valores objetivo para entrenamiento y validación.

    Retorna:
    float - El error absoluto medio (MAE) en los datos de validación.
    """
    # Creamos el modelo de árbol de decisión con los nodos hoja máximos especificados
    model = DecisionTreeRegressor(max_leaf_nodes=max_leaf_nodes, random_state=0)

    # Entrenamos el modelo con los datos de entrenamiento
    model.fit(train_X, train_y)

    # Realizamos predicciones en los datos de validación
    preds_val = model.predict(val_X)

    # Calculamos el error absoluto medio (MAE) comparando predicciones y valores reales
    mae = mean_absolute_error(val_y, preds_val)

    # Retornamos el MAE
    return mae
```

Los datos se cargan en `train_X`, `val_X`, `train_y` y `val_y` utilizando el código que ya has visto (y que ya has escrito).

```python
# Importamos la librería pandas para trabajar con los datos
import pandas as pd

# Cargamos los datos desde el archivo CSV
melbourne_file_path = '../input/melbourne-housing-snapshot/melb_data.csv'  # Ruta al archivo de datos
melbourne_data = pd.read_csv(melbourne_file_path)  # Leemos el archivo CSV y lo almacenamos en un DataFrame

# Filtramos las filas con valores faltantes
filtered_melbourne_data = melbourne_data.dropna(axis=0)  # Eliminamos las filas que tienen valores NaN

# Elegimos el objetivo (target) y las características (features)
y = filtered_melbourne_data.Price  # La variable objetivo es el precio de las casas
melbourne_features = ['Rooms', 'Bathroom', 'Landsize', 'BuildingArea', 'YearBuilt', 'Lattitude', 'Longtitude']  # Las características que usaremos para predecir el precio
X = filtered_melbourne_data[melbourne_features]  # Extraemos las columnas de características

# Importamos la función train_test_split para dividir los datos en entrenamiento y validación
from sklearn.model_selection import train_test_split

# Dividimos los datos en conjuntos de entrenamiento y validación, tanto para las características como para el objetivo
train_X, val_X, train_y, val_y = train_test_split(X, y, random_state=0)  # Establecemos una semilla aleatoria para reproducibilidad
```

Podemos usar un bucle `for` para comparar la precisión de los modelos construidos con diferentes valores para `max_leaf_nodes`.

```python
# Comparamos el MAE con diferentes valores para max_leaf_nodes
for max_leaf_nodes in [5, 50, 500, 5000]:  # Probamos con varios valores de nodos hoja
    # Calculamos el MAE usando la función get_mae definida previamente
    my_mae = get_mae(max_leaf_nodes, train_X, val_X, train_y, val_y)

    # Imprimimos el número de nodos hoja y el error absoluto medio (MAE)
    print("Max leaf nodes: %d  \t\t Mean Absolute Error:  %d" % (max_leaf_nodes, my_mae))
```

| Max leaf nodes | Mean Absolute Error |
| -------------- | ------------------- |
| 5              | 347380              |
| 50             | 258171              |
| 500            | 243495              |
| 5000           | 254983              |

De las opciones listadas, 500 es el número óptimo de hojas.

## Conclusión

Aquí está la conclusión: Los modelos pueden sufrir de:

- **Overfitting**: capturando patrones espurios que no se repetirán en el futuro, lo que lleva a predicciones menos precisas.
- **Underfitting**: no logrando capturar patrones relevantes, lo que nuevamente lleva a predicciones menos precisas.

Utilizamos datos de validación, que no se usan en el entrenamiento del modelo, para medir la precisión de un modelo candidato. Esto nos permite probar muchos modelos candidatos y mantener el mejor.
