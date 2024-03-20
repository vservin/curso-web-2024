--- Solo para Windows
Para autenticarse en la terminal "git bash" ejecutar:
```
git config --global alias.credential-manager "credential-manager-core"
git config --global credential.helper manager
```

Posteriormente, en un `git push` se pedira la autenticacion por navegador.
---

Para "bajar" o "clonar" un repositorio existente a una carpeta "local" de mi computadora:
```
git clone <url>
```

Para ver el status actual de los archivos de un repositorio local
```
git status
```

---
Ver diagrama entre fase unstaged, staged y commit de mi local
---

Para ver la diferencia entre mis archivos "unstaged" y los archivos en "remoto" o la "nube":
```
git diff
```

Para ver la diferencia entre mis archivos "staged" y los archivos en "remoto" o la "nube":
```
git diff --staged
```

Para mover un archivo de "unstaged" a "staged" o "pre-commit":
```
git add <ruta-archivo>
```

Para mover todos los archivos "unstaged" a "staged o "pre-commit":
```
git add .
```

Para regresar achivos de "staged" a "unstaged"
```
git restore --staged <ruta-archivo>
```

Para "empaquetar" los archivos "staged" a un commit (cambio en el tiempo)
```
git commit -m '<descripcion del cambio>'
```

Para subir los "paquetes" o commits locales al repositorio ("nube")
```
git push
```

Para bajar los "paquetes" o commits remotos a los archivos "locales"
```
git pull
```
