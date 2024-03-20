1. Crear repositorio nuevo en github.com

2. Para crear un nuevo repositorio en una carpeta "local" o de mi computadora:
```
git init
```

3. Crear los archivos que se van a subir al repositorio por primera vez

4. Agregar los archivos para una "subida" inicial
```
git add .
```

5. Hacer commit con los archivos
```
git commit -m 'first commit'
```

6. Cambiar el nombre de la rama principal a subir:
```
git branch -M main
```

7. Agregar la conexion al repositorio remoto creado en github en el paso 1.
```
git remote add origin git@github.com:<usuario>/<repositorio.git>
```

8. Para subir los "paquetes" o commits locales al repositorio ("nube") por primera vez con el nombre del paso 6.
```
git push -u origin main
```
