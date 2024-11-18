
# Usando Pandas para Familiarizarte con tus Datos

## Introducción

El primer paso en cualquier proyecto de *machine learning* es familiarizarse con los datos. Para esto, utilizaremos la biblioteca **Pandas**, que es la herramienta principal que los científicos de datos emplean para explorar y manipular datos. La mayoría de las personas abrevia *pandas* en su código como `pd`, lo cual se hace con el siguiente comando:

```python
import pandas as pd
```

La parte más importante de la biblioteca *Pandas* es el **DataFrame**. Un DataFrame almacena datos en un formato similar a una tabla, como una hoja de Excel o una tabla en una base de datos SQL.

*Pandas* cuenta con métodos potentes para realizar la mayoría de las operaciones necesarias en este tipo de datos.

Como ejemplo, analizaremos datos sobre precios de viviendas en Melbourne, Australia. En los ejercicios prácticos, aplicarás estos mismos procesos a un nuevo conjunto de datos con precios de viviendas en Iowa.

Los datos del ejemplo (Melbourne) están en la ruta de archivo `../input/melbourne-housing-snapshot/melb_data.csv`.

Cargamos y exploramos los datos con los siguientes comandos:

```python
# Guardar la ruta del archivo en una variable para un acceso más fácil
melbourne_file_path = '../input/melbourne-housing-snapshot/melb_data.csv'
# Leer los datos y almacenar en un DataFrame llamado melbourne_data
melbourne_data = pd.read_csv(melbourne_file_path)
# Imprimir un resumen de los datos en melbourne_data
melbourne_data.describe()
```

El comando `describe()` proporciona un resumen estadístico de los datos, como se muestra a continuación:

| Rooms | Price | Distance | Postcode | Bedroom2 | Bathroom | Car | Landsize | BuildingArea | YearBuilt | Latitude | Longitude | Propertycount |
|-------|-------|----------|----------|----------|----------|-----|----------|--------------|-----------|----------|-----------|---------------|
| count | 13580 | 13580    | 13580    | 13580    | 13580    | 13518| 13580    | 7130         | 8205      | 13580    | 13580     | 13580         |
| mean  | 2.94  | 1.08e+06 | 10.14    | 3105.30  | 2.91     | 1.53 | 1.61     | 558.42       | 151.97    | 1964.68  | -37.81    | 7454.42       |
| ...   | ...   | ...      | ...      | ...      | ...      | ... | ...      | ...          | ...       | ...      | ...       | ...           |

## Interpretación de la Descripción de los Datos

Los resultados muestran 8 valores para cada columna del conjunto de datos original. A continuación, una explicación de cada valor:

- **count**: Indica cuántas filas tienen valores no nulos. Los valores faltantes pueden surgir por diversas razones. Por ejemplo, el tamaño del segundo dormitorio no se recopila cuando se inspecciona una casa de una sola habitación.

- **mean**: Es el promedio de los valores.

- **std**: La desviación estándar, que mide cuán dispersos están los valores numéricamente.

Para interpretar los valores **min**, **25%**, **50%**, **75%** y **max**:

1. **min**: El valor más pequeño de la columna.
2. **25%**: Al ordenar la columna de menor a mayor, este valor es más alto que el 25% de los datos y más bajo que el 75%.
3. **50%**: Similar al 25%, pero representa la mediana (50% de los datos por debajo y 50% por encima).
4. **75%**: Representa el valor que es mayor que el 75% de los datos y menor que el 25% superior.
5. **max**: El valor más grande de la columna.

Este análisis preliminar es crucial para comprender la distribución de los datos y detectar valores atípicos o posibles problemas, como datos faltantes, que abordaremos en fases posteriores.
