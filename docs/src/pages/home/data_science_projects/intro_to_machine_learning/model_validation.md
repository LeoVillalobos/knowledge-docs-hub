# Has construido un modelo. ¿Pero qué tan bueno es?

En esta lección, aprenderás a usar la validación de modelos para medir la calidad de tu modelo. Medir la calidad del modelo es clave para mejorar iterativamente tus modelos.

---

## ¿Qué es la Validación de Modelos?

Querrás evaluar casi todos los modelos que construyas. En la mayoría (aunque no todos) los casos, la medida relevante de la calidad del modelo es la precisión predictiva. En otras palabras, ¿serán las predicciones del modelo cercanas a lo que realmente ocurre?

Muchas personas cometen un gran error al medir la precisión predictiva. Hacen predicciones con sus datos de entrenamiento y comparan esas predicciones con los valores objetivos en los datos de entrenamiento. Verás el problema con este enfoque y cómo solucionarlo en un momento, pero primero pensemos en cómo lo haríamos.

Primero, necesitarías resumir la calidad del modelo de manera comprensible. Si comparas los valores predichos y reales de 10,000 casas, probablemente encontrarás una mezcla de buenas y malas predicciones. Revisar una lista de 10,000 valores predichos y reales sería inútil. Necesitamos resumir esto en una sola métrica.

Existen muchas métricas para resumir la calidad del modelo, pero comenzaremos con una llamada **Error Absoluto Medio** (también conocido como **MAE**). Desglosemos esta métrica comenzando con la última palabra, *error*.

El error de predicción para cada casa es:

```python

error=actual−predicted

```

Entonces, si una casa cuesta $150,000 y predijiste que costaría $100,000, el error es $50,000.

Con la métrica MAE, tomamos el valor absoluto de cada error. Esto convierte cada error en un número positivo. Luego tomamos el promedio de esos errores absolutos. Esta es nuestra medida de calidad del modelo. En palabras simples, se puede decir como:

**En promedio, nuestras predicciones están erradas por alrededor de X.**

Para calcular el MAE, primero necesitamos un modelo. Eso se construye en una celda oculta a continuación, que puedes revisar haciendo clic en el botón de código.

---

### Código de Carga de Datos Oculto Aquí

```python
import pandas as pd

# Cargar los datos
melbourne_file_path = '../input/melbourne-housing-snapshot/melb_data.csv'
melbourne_data = pd.read_csv(melbourne_file_path)
# Filtrar filas con valores de precio faltantes
filtered_melbourne_data = melbourne_data.dropna(axis=0)
# Elegir objetivo y características
y = filtered_melbourne_data.Price
melbourne_features = ['Rooms', 'Bathroom', 'Landsize', 'BuildingArea',
                        'YearBuilt', 'Lattitude', 'Longtitude']
X = filtered_melbourne_data[melbourne_features]

from sklearn.tree import DecisionTreeRegressor
# Definir el modelo
melbourne_model = DecisionTreeRegressor()
# Ajustar el modelo
melbourne_model.fit(X, y)
```

Una vez que tenemos un modelo, aquí es cómo calculamos el error absoluto medio:

---

```python
from sklearn.metrics import mean_absolute_error

predicted_home_prices = melbourne_model.predict(X)
mean_absolute_error(y, predicted_home_prices)
# Salida: 434.71594577146544
```

---

## El Problema con las Puntuaciones "In-Sample"

La medida que acabamos de calcular puede llamarse una puntuación "in-sample". Usamos una única "muestra" de casas tanto para construir el modelo como para evaluarlo. Aquí está el porqué esto es malo.

Imagina que, en el gran mercado inmobiliario, el color de la puerta no tiene relación con el precio de la casa.

Sin embargo, en la muestra de datos que usaste para construir el modelo, todas las casas con puertas verdes eran muy caras. El trabajo del modelo es encontrar patrones que predigan los precios de las casas, por lo que verá este patrón y siempre predecirá precios altos para casas con puertas verdes.

Dado que este patrón se derivó de los datos de entrenamiento, el modelo parecerá preciso en esos datos.

Pero si este patrón no se mantiene cuando el modelo ve nuevos datos, el modelo sería muy inexacto cuando se use en la práctica.

Dado que el valor práctico de los modelos proviene de hacer predicciones sobre nuevos datos, medimos el rendimiento con datos que no se usaron para construir el modelo. La forma más directa de hacerlo es excluir algunos datos del proceso de construcción del modelo y luego usar esos datos para probar la precisión del modelo con datos que no ha visto antes. Estos datos se llaman **datos de validación**.

---

## Codificación

La biblioteca `scikit-learn` tiene una función `train_test_split` para dividir los datos en dos partes. Usaremos algunos de esos datos como datos de entrenamiento para ajustar el modelo, y usaremos los otros datos como datos de validación para calcular el error absoluto medio.

Aquí está el código:

```python
from sklearn.model_selection import train_test_split

# dividir los datos en datos de entrenamiento y validación, tanto para características como para el objetivo
# La división se basa en un generador de números aleatorios. Suministrar un valor numérico al argumento
# random_state garantiza que obtengamos la misma división cada vez que
# ejecutemos este script.
train_X, val_X, train_y, val_y = train_test_split(X, y, random_state=0)
# Definir el modelo
melbourne_model = DecisionTreeRegressor()
# Ajustar el modelo
melbourne_model.fit(train_X, train_y)

# obtener los precios predichos sobre los datos de validación
val_predictions = melbourne_model.predict(val_X)
print(mean_absolute_error(val_y, val_predictions))
# Salida: 265806.91478373145
```

---

## ¡Increíble!

Tu error absoluto medio para los datos "in-sample" fue de alrededor de **500 dólares**. Para los datos "out-of-sample" es más de **250,000 dólares**.

Esta es la diferencia entre un modelo que está casi exactamente correcto y uno que no es útil para la mayoría de los fines prácticos. Como referencia, el valor promedio de las casas en los datos de validación es de **1.1 millones de dólares**. Así que el error en los nuevos datos es aproximadamente una cuarta parte del valor promedio de una casa.

Existen muchas maneras de mejorar este modelo, como experimentar para encontrar mejores características o diferentes tipos de modelos.
