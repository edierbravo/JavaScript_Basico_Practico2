# CURSO PRACTICO DE JAVASCRIPT BASICO PARTE 2

En este curso vas a poner en practica los conceptos del curso de [JavaScript Basico](https://github.com/edierbravo/JavaScript_Basico) y del curso [JavaScript Basico Practico parte 1](https://github.com/edierbravo/JavaScript_Basico_Practico)

Accede a este [enlace](https://edierbravo.github.io/JavaScript_Basico_Practico2/) para observar el resultado final

## Por: Edier Dario Bravo Bravo

# Classlist.toggle()

Se usa para alternar clases al elemento. Significa agregar una nueva clase o eliminar las clases existentes. En el siguiente codigo `desktopMenu` es la seccion de codigo a la cual se le agregara y quitara alternamente la clase  `inactive`

```js
const menuEmail = document.querySelector(`.navbar-right`);  // selector de la opcion al que se le dara click
const desktopMenu = document.querySelector(`.desktop-menu`); // selector de la seccion de codigo

menuEmail.addEventListener(`click`, toggleDesktopMenu); // añade evento 

function toggleDesktopMenu(){
    desktopMenu.classList.toggle(`inactive`) // aparece y desaparece la clase inactive a la seccion desktopMenu
}
```

# SIGUE APRENDIENDO ❤️❤️❤️❤️❤️❤️
