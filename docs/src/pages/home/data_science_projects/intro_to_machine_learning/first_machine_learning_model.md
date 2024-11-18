
# Selección de Datos para Modelado

Tu conjunto de datos tenía demasiadas variables para comprenderlas todas de una vez o incluso para imprimirlas de manera ordenada. ¿Cómo puedes reducir esta abrumadora cantidad de datos a algo que puedas entender?

Comenzaremos seleccionando algunas variables utilizando nuestra intuición. En cursos posteriores, aprenderás técnicas estadísticas para priorizar automáticamente las variables.

Para elegir variables/columnas, necesitaremos ver una lista de todas las columnas en el conjunto de datos. Esto se hace con la propiedad `columns` del DataFrame (la última línea del código a continuación).

```python
import pandas as pd

melbourne_file_path = '../input/melbourne-housing-snapshot/melb_data.csv'
melbourne_data = pd.read_csv(melbourne_file_path)
melbourne_data.columns
```
```
Index(['Suburb', 'Address', 'Rooms', 'Type', 'Price', 'Method', 'SellerG',
       'Date', 'Distance', 'Postcode', 'Bedroom2', 'Bathroom', 'Car',
       'Landsize', 'BuildingArea', 'YearBuilt', 'CouncilArea', 'Lattitude',
       'Longtitude', 'Regionname', 'Propertycount'],
      dtype='object')
```

Los datos de Melbourne tienen algunos valores faltantes (algunas casas para las cuales no se registraron ciertas variables). Aprenderemos a manejar valores faltantes en un tutorial posterior. Tu conjunto de datos de Iowa no tiene valores faltantes en las columnas que utilizas. Por ahora, tomaremos la opción más sencilla y eliminaremos las casas con valores faltantes. No te preocupes demasiado por esto ahora, el código es:

```python
# dropna elimina valores faltantes (piensa en na como "no disponible")
melbourne_data = melbourne_data.dropna(axis=0)
```

Hay muchas maneras de seleccionar un subconjunto de tus datos. El curso de Pandas cubre estas opciones con más profundidad, pero nos enfocaremos en dos enfoques por ahora:

- Notación de puntos, que utilizamos para seleccionar el "objetivo de predicción".
- Selección con una lista de columnas, que utilizamos para seleccionar las "características".

## Seleccionando el Objetivo de Predicción

Puedes extraer una variable usando la notación de puntos. Esta única columna se almacena en una Serie, que es en términos generales como un DataFrame con una sola columna de datos.

Usaremos la notación de puntos para seleccionar la columna que queremos predecir, que se llama el objetivo de predicción. Por convención, el objetivo de predicción se llama `y`. Así que el código que necesitamos para guardar los precios de las casas en los datos de Melbourne es:

```python
y = melbourne_data.Price
```

## Seleccionando "Características"

Las columnas que se ingresan en nuestro modelo (y que luego se usan para hacer predicciones) se llaman "características". En nuestro caso, serían las columnas utilizadas para determinar el precio de la casa. A veces, usarás todas las columnas excepto el objetivo como características. Otras veces será mejor usar menos características.

Por ahora, construiremos un modelo con solo unas pocas características. Más adelante verás cómo iterar y comparar modelos construidos con diferentes características.

Seleccionamos múltiples características proporcionando una lista de nombres de columnas entre corchetes. Cada elemento de esa lista debe ser una cadena (con comillas).

Aquí tienes un ejemplo:

```python
melbourne_features = ['Rooms', 'Bathroom', 'Landsize', 'Lattitude', 'Longtitude']
```

Por convención, estos datos se llaman `X`.

```python
X = melbourne_data[melbourne_features]
```

Revisemos rápidamente los datos que utilizaremos para predecir precios de casas utilizando el método `describe` y el método `head`, que muestra las primeras filas.

```python
X.describe()
```
```
       Rooms  Bathroom    Landsize  Lattitude  Longtitude
count  6196.0   6196.0  6196.00000  6196.0000  6196.00000
mean      2.93      1.57   471.00694   -37.8079   144.9902
std       0.97      0.71   897.44988     0.0759     0.0992
min       1.00      1.00     0.00000   -38.1649   144.5424
25%       2.00      1.00   152.00000   -37.8554   144.9262
50%       3.00      1.00   373.00000   -37.8023   144.9958
75%       4.00      2.00   628.00000   -37.7582   145.0527
max       8.00      8.00  37000.00000   -37.4571   145.5264
```

```python
X.head()
```
```
   Rooms  Bathroom  Landsize  Lattitude  Longtitude
1      2       1.0     156.0   -37.8079    144.9934
2      3       2.0     134.0   -37.8093    144.9944
4      4       1.0     120.0   -37.8072    144.9941
6      3       2.0     245.0   -37.8024    144.9993
7      2       1.0     256.0   -37.8060    144.9954
```

Revisar visualmente tus datos con estos comandos es una parte importante del trabajo de un científico de datos. Con frecuencia encontrarás sorpresas en el conjunto de datos que merecen más inspección.

## Construyendo Tu Modelo

Utilizarás la biblioteca `scikit-learn` para crear tus modelos. Al escribir código, esta biblioteca se representa como `sklearn`, como verás en el código de ejemplo. Scikit-learn es fácilmente la biblioteca más popular para modelar los tipos de datos que generalmente se almacenan en DataFrames.

Los pasos para construir y usar un modelo son:

1. **Definir**: ¿Qué tipo de modelo será? ¿Un árbol de decisión? ¿Otro tipo de modelo? También se especifican algunos otros parámetros del tipo de modelo.
2. **Ajustar (Fit)**: Capturar patrones de los datos proporcionados. Este es el corazón del modelado.
3. **Predecir**: Exactamente lo que parece.
4. **Evaluar**: Determinar qué tan precisas son las predicciones del modelo.

Aquí tienes un ejemplo de cómo definir un modelo de árbol de decisión con scikit-learn y ajustarlo con las características y la variable objetivo:

```python
from sklearn.tree import DecisionTreeRegressor

# Definir el modelo. Especifica un número para random_state para asegurar los mismos resultados en cada ejecución
melbourne_model = DecisionTreeRegressor(random_state=1)

# Ajustar el modelo
melbourne_model.fit(X, y)
```

```
DecisionTreeRegressor(random_state=1)
```

Muchos modelos de aprendizaje automático permiten cierta aleatoriedad en el entrenamiento. Especificar un número para `random_state` asegura que obtengas los mismos resultados en cada ejecución. Esto se considera una buena práctica. Puedes usar cualquier número, y la calidad del modelo no dependerá significativamente del valor exacto que elijas.

Ahora tenemos un modelo ajustado que podemos usar para hacer predicciones.

En la práctica, querrás hacer predicciones para nuevas casas que llegan al mercado en lugar de las casas para las cuales ya tenemos precios. Pero haremos predicciones para las primeras filas de los datos de entrenamiento para ver cómo funciona la función `predict`.

```python
print("Haciendo predicciones para las siguientes 5 casas:")
print(X.head())
print("Las predicciones son")
print(melbourne_model.predict(X.head()))
```

```
Haciendo predicciones para las siguientes 5 casas:
   Rooms  Bathroom  Landsize  Lattitude  Longtitude
1      2       1.0     156.0   -37.8079    144.9934
2      3       2.0     134.0   -37.8093    144.9944
4      4       1.0     120.0   -37.8072    144.9941
6      3       2.0     245.0   -37.8024    144.9993
7      2       1.0     256.0   -37.8060    144.9954
Las predicciones son
[1035000. 1465000. 1600000. 1876000. 1636000.]
```

