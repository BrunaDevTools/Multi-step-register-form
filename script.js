// Funcion para estilo de botones de topic:
const options = document.querySelectorAll('.options-topic');
function selectOption(event){
    options.forEach(option=> {
        option.classList.remove('select');
    });
    event.currentTarget.classList.add('select');
};

options.forEach(option=> {
    option.addEventListener('click', selectOption);
});

