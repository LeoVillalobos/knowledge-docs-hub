---
outline: deep
title: Data Science
titleTemplate: Intro to Machine Learning
---

# Introducción

Comenzaremos con una visión general de cómo funcionan los modelos de machine learning y cómo se utilizan. Esto puede parecer básico si ya has hecho modelado estadístico o machine learning antes. No te preocupes, pronto avanzaremos a la construcción de modelos poderosos.

Este curso te guiará en la construcción de modelos a través del siguiente escenario:

Tu primo ha ganado millones de dólares especulando en bienes raíces. Te ha ofrecido convertirse en tu socio comercial debido a tu interés en ciencia de datos. Él pondrá el dinero, y tú proporcionarás los modelos que predigan el valor de diversas casas.

Le preguntas a tu primo cómo ha predicho los valores inmobiliarios en el pasado, y él responde que solo usa la intuición. Pero, al hacerle más preguntas, revela que ha identificado patrones de precios en las casas que ha visto antes y usa esos patrones para hacer predicciones para nuevas casas que está considerando.

El machine learning funciona de la misma manera. Comenzaremos con un modelo llamado **Árbol de Decisión**. Existen modelos más avanzados que brindan predicciones más precisas, pero los árboles de decisión son fáciles de entender y son el bloque básico de algunos de los mejores modelos en ciencia de datos.

Para simplificar, comenzaremos con el árbol de decisión más simple posible.

<img src="/home/data_science_projects/models_work_3.png" >


Este modelo básico divide las casas en solo dos categorías. El precio predicho para cualquier casa bajo consideración es el precio promedio histórico de las casas en la misma categoría.

Usamos datos para decidir cómo dividir las casas en dos grupos y, luego, para determinar el precio predicho en cada grupo. Este paso de capturar patrones de los datos se llama **ajuste** o **entrenamiento del modelo**. Los datos usados para ajustar el modelo se llaman **datos de entrenamiento**.

Los detalles de cómo se ajusta el modelo (por ejemplo, cómo dividir los datos) son lo suficientemente complejos como para dejarlos para más adelante. Después de que el modelo se haya ajustado, puedes aplicarlo a nuevos datos para predecir precios de otras viviendas.


---

## Mejorando el Árbol de Decisión

¿Cuál de los siguientes dos árboles de decisión es más probable que resulte al ajustar los datos de entrenamiento de bienes raíces?

<img src="/home/data_science_projects/models_work_2.png" >

El árbol de decisión de la izquierda (Árbol de Decisión 1) probablemente tiene más sentido, ya que captura la realidad de que las casas con más habitaciones tienden a venderse a precios más altos que las casas con menos habitaciones. La mayor limitación de este modelo es que no captura la mayoría de los factores que afectan el precio de una vivienda, como el número de baños, el tamaño del terreno, la ubicación, etc.

Puedes capturar más factores usando un árbol con más "divisiones", llamados **árboles más profundos**. Un árbol de decisión que también considere el tamaño total del terreno de cada casa podría verse de la siguiente forma:

**Árbol de Profundidad 2**

<img src="/home/data_science_projects/models_work_1.png" />

Predices el precio de cualquier casa siguiendo el árbol de decisión, siempre eligiendo el camino que corresponde a las características de esa casa. El precio predicho para la casa está en la parte inferior del árbol. El punto en la parte inferior donde hacemos una predicción se llama **hoja**.

Las divisiones y los valores en las hojas serán determinados por los datos, así que es momento de que revises los datos con los que estarás trabajando.
