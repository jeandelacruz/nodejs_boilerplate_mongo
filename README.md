# MongoDB

### Comandos utiles (CLI)

- Listar base de datos

```sh
show dbs
```

- Crear base de datos (Este se mantendra en memoria hasta no crear una colección)

```sh
use nombreBD
```

- Crear una colección
  https://www.mongodb.com/docs/manual/reference/method/js-collection/

```sh
db.createCollection("nombreColeccion")
```

- Obtener todos los documentos (de una coleccion)

```sh
db.nombreColeccion.find()
```

- Insertar un documento (en una coleccion)

```sh
db.nombreColeccion.insertOne({ name: '', last_name: '' })
```

- Insertar varios documentos (en una coleccion)

```sh
db.nombreColeccion.insertMany([{}, {}])
```

- Obtener un documento (en una coleccion)

```sh
db.nombreColeccion.findOne({})
```

- Actualizar un documento (en una coleccion)

```sh
db.nombreColeccion.updateOne({ campo: "valor" }, { $set: { campo_2: "valor_2" } })
```

- Actualizar varios documentos (en una coleccion)

```sh
db.nombreColeccion.updateMany({ campo: "valor" }, { $set: { campo_2: "valor_2" } })
```

- Eliminar un documento (en una coleccion)

```sh
db.nombreColeccion.deleteOne({})
```

- Eliminar varios documentos (en una coleccion)

```sh
db.nombreColeccion.deleteMany({})
```

# Nodejs Sesion

### Principios SOLID

- S (SRP), Principio de responsabilidad unica
- O (OCP), Principio de Abierto/Cerrado
- L (LSP), Principio de sustitución de Liskov
- I (ISP), Principio de segregacion de interfaces
- D (DSP), Principio de inversion de dependencia

# Documentación

# Comandos

- Iniciar la aplicación (Modo Dev)

```sh
npm run dev
```

- Crear una migración

```sh
npx makemigration --name nombre_migracion
```

- Ejecutar migración (Sincronizar)

```sh
npx runmigration
```
