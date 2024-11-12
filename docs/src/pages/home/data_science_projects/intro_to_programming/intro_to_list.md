# Tipos de Comprehensions en Python

En Python, existen **cuatro tipos principales de comprehensions** (o comprensiones), cada una diseñada para crear una colección de datos de manera concisa y eficiente:

1. **List Comprehension**:
   - Crea una lista basada en una secuencia o iterable existente.
   - **Sintaxis**: `[expression for item in iterable if condition]`
   - **Ejemplo**:
     ```python
     squares = [x**2 for x in range(10)]
     # Resultado: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
     ```

2. **Dictionary Comprehension**:
   - Crea un diccionario a partir de otro iterable (lista, conjunto, otro diccionario, etc.).
   - **Sintaxis**: `{key_expression: value_expression for item in iterable if condition}`
   - **Ejemplo**:
     ```python
     squares_dict = {x: x**2 for x in range(10)}
     # Resultado: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}
     ```

3. **Set Comprehension**:
   - Similar a la list comprehension, pero crea un conjunto en lugar de una lista.
   - **Sintaxis**: `{expression for item in iterable if condition}`
   - **Ejemplo**:
     ```python
     unique_squares = {x**2 for x in range(10)}
     # Resultado: {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}
     ```

4. **Generator Comprehension**:
   - Similar a una list comprehension, pero devuelve un generador en lugar de una lista, ahorrando memoria cuando no es necesario almacenar todos los elementos.
   - **Sintaxis**: `(expression for item in iterable if condition)`
   - **Ejemplo**:
     ```python
     squares_gen = (x**2 for x in range(10))
     # squares_gen es un generador que genera valores sobre demanda
     ```

Cada tipo de comprensión tiene una utilidad específica y permite escribir código más compacto y expresivo.
