# tlp4-Clase03-POO
## Como acceder los puntos

- En el html redirijase al body en donde dice script y encontrara algo escrito como puntoCuatro.js
- Solamente cambie el script borrando la palabra que representa el numero y remplazar por los demas javascript (puntoCuatro.js, tres.js, dos.js, etc)
- Para ejectutar el html solo tiene que dar click derecho y seleccionar open with live server(requisto tener instalado la extension de live server) 
- Una vez ejectutado el html haga click derecho y seleccione inspeccionar y redirijase en donde dice console para ver los resultados de cada uno de los archivos javascript

---

## ✅ 5. Análisis final (teórico)

**Responder lo siguiente:**

- ¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con `prototype` y usar `class`? 

**Diferencia**

- la funcion constructora que tiene al usar class el constructor se define como una funcion especial que utiliza como nombre constructor siempre y cuando este dentro de una clase, mientras que el prototype este se define como solamente como funcion definiendo su nombre y sus parametros.

**Ventajas y desventajas de la funcion constructora con prototype**
- Ventajas:
- Control explicito: Tenes que manejar explicitamente el prototipo, lo que te da control fino sobre la herencia y los metodos.
- Entendes como funciona JS "por debajo": Aprender prototipos te ayuda a entender mejor la base del sistema de objetos en JS.

-Desventajas:
- Sintaxis menos clara: Puede ser mas difícil de leer y entender para quien no conoce bien prototipos.
- Menos intuitivo: Para quienes vienen de otros lenguajes OO, puede parecer raro y poco amigable.

**Ventajas y desventajas de la funcion constructora con class**

- ¿Cuáles son las ventajas de usar `getters` y `setters`?

**Ventajas de getters**
- Podes validar o transformar datos antes de asignarlos o devolverlos.
- Podes cambiar la implementación interna sin afectar el código que usa la clase.
- Podes agregar fácilmente logs o debug cuando alguien lee o escribe una propiedad.


- ¿Qué problemas pueden surgir al modificar prototipos nativos como `String`?
- Teniendo en cuenta un objeto `personPrototype` que contiene un método `greet`, ¿qué diferencias encontrás entre asignar ese método directamente al `prototype` de una función constructora o usar `Object.assign`?

---