# 🎉 Sorteador de Amigos

Este es un proyecto web que permite a los usuarios agregar nombres de amigos a una lista y, posteriormente, realizar un sorteo aleatorio para elegir a uno de ellos. Además, cuenta con atajos de teclado para facilitar la interacción.

---

## 🚀 Características

1. **Agregar amigos**: Escribe el nombre de un amigo y presiona `Enter` para agregarlo a la lista.
2. **Sorteo aleatorio**: Presiona `Ctrl + Enter` en cualquier momento para seleccionar aleatoriamente a un amigo de la lista.
3. **Atajos de teclado**:
   - Presiona `/` para enfocar el input y comenzar a escribir.
   - Presiona `Enter` en el input para agregar un amigo.
   - Presiona `Ctrl + Enter` para realizar el sorteo.

---

## 📂 Estructura del Proyecto

- **HTML:** Contiene la estructura básica de la página con elementos como:
  - Un input para escribir los nombres.
  - Una lista para mostrar los nombres agregados.
  - Un espacio para mostrar el resultado del sorteo.
- **JavaScript:** Implementa la lógica principal:
  - Manejo de eventos para atajos de teclado.
  - Validación de entradas.
  - Renderización dinámica de la lista y del resultado del sorteo.

---

## 🛠 Instalación y Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/quserforgitp/challenge-amigo-secreto-one-g-8.git
   ```
2. Abre el archivo `index.html` en tu navegador.
3. ¡Listo! Puedes comenzar a usar la aplicación.

---

## 📋 Uso

### **Agregar un amigo**
1. Escribe el nombre de tu amigo en el input.
2. Presiona `Enter`.
3. El nombre aparecerá en la lista de amigos.

### **Sortear un amigo**
1. Presiona `Ctrl + Enter`.
2. Se seleccionará aleatoriamente un amigo de la lista y aparecerá en la sección de resultados.

### **Atajos**
- `/` para enfocar el input.
- `Enter` para agregar un nombre.
- `Ctrl + Enter` para realizar el sorteo.

---

## 🧩 Código Principal

El proyecto utiliza las siguientes funciones principales:

- **`agregaAmigo()`**: Valida y agrega el nombre al array `amigos`, actualizando la lista en la interfaz.
- **`sorteaAmigo()`**: Selecciona aleatoriamente un amigo de la lista y lo muestra en el resultado.
- **Funciones de utilidad**: Ayudan a manejar elementos DOM, validar entradas y formatear nombres.

---

## 🌟 Ejemplo de Uso

1. Abre la página en el navegador.
2. Escribe "Carlos" en el input y presiona `Enter`.
3. Escribe "Ana" y presiona `Enter`.
4. Presiona `Ctrl + Enter`. El resultado mostrará un nombre aleatorio (por ejemplo, "Carlos").

---

## 🔑 Requisitos

- Navegador compatible con ES6 (modernos como Chrome, Firefox, Edge, etc.).
- No se requieren dependencias externas.

---

## 📝 Notas

- Los nombres no distinguen mayúsculas y minúsculas.
- Si intentas agregar un nombre que ya existe, recibirás una alerta.

---

## 🧑‍💻 Autor

Creado por **Raul Cardenas Gomez**.