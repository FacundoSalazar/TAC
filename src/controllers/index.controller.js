
/** Documentacipn sobre este archivo:
    Generacion de Contenido en el Inicio.
    Basicamente, lo que se hace es crear el HTML que deseamos mostrar en la pantalla de inicio. 
    Importamos la estructura HTML desde otro archivo que se ubica en la carpeta controllers.

    Algo muy importante, es que este codigo lo que hace es generar el html y pegarlo en el index.
    Por ende, cuando querramos buscar una etiqueta, no tenemos que buscar documents.querySelector; 
    Tendriamos que buscar: mainElemetns.querySelector; Ya que sino, este iria a buscar el elemento al
    archivo principal y nos retornara error ya que es una etiqueta que todavia no esta creada
    en el archivo.
 */

/* Imports */
import viewHome from '../views/home.html'
export default () => {

    const mainElements = document.createElement('section');
    mainElements.innerHTML = viewHome


    /* Variables */
    const btnClickMain = mainElements.querySelector('.menu__btn') // Obtengo el div que hemos creado en el views/home.html
    const btnFilters = document.querySelector('.box__filters-menu') // Obtengo el boton de filtros que hemos creado en el index.html
    const aside = document.querySelector('aside') // Obtengo la etiqueta Aside que hemos creado en el index.html
    const main = document.querySelector('main') // Obtengo el main del index.html
    const homeWindow = window.location.hash; // Obtengo el Hash del Inicio.
    const btnRegister = mainElements.querySelector('.main__button-register')
    const form = mainElements.querySelector('.none')
    const BtnformQuit = mainElements.querySelector('.form__quit')
    const numeroNota = mainElements.querySelector('.form__numero-nota')
    const btnToday = mainElements.querySelector('.form__button-today')
    const area = mainElements.querySelector('.form__area')
    const btnForms = mainElements.querySelector('.form__buttons') // Caja de los botones Limpiar y Agregar. Debo acceder a sus hijos.
    const boxDate = mainElements.querySelector('.form__date-box') // Caja del input y boton de fecha de entradas. Debo acceder a sus hijos.
    const dateToday = new Date().toISOString().substring(0, 10); // Capturamos la fecha del día ycon substring le indicamos desde que indice
    // hasta cual, queremos que obtener las fechas.
    /* Events Listener */
    if (homeWindow == "" || homeWindow == "#/") {
        btnClickMain.addEventListener('click', () => {
            main.classList.toggle('main__with-filters')
            aside.classList.remove('filters-off')
            aside.classList.add('filters')
            btnClickMain.classList.remove('menu__btn')
        })

        btnFilters.addEventListener('click', () => {
            main.classList.remove('main__with-filters')
            aside.classList.add('filters-off')
            btnClickMain.classList.toggle('menu__btn')
        })
        btnRegister.addEventListener('click', () => {
            form.classList.remove('none')
            form.classList.add('form__container')
        })
        BtnformQuit.addEventListener('click', () => {
            form.classList.remove('form__container')
            form.classList.add('none')
        })
        btnToday.addEventListener('click', (e) => {
            e.preventDefault();
            if (boxDate.children[0].value == '') { // Terminar de hacer el ingreso de la fecha al input type=date.
                boxDate.children[0].value = dateToday;
            }
        })

        btnForms.children[0].addEventListener('click', (e) => {
            e.preventDefault();
            //dateToday.value = '';  No puedo aplicar value en un string.
        })
        /* btnForms.children[0].addEventListener('click', (e) => {
            e.preventDefault();
        }) */
    }
    return mainElements
}