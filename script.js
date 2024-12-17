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


// Funcion para el boton continue, para cambiar de vista
const steps = [
    document.getElementById('container-step-one'),
    document.getElementById('container-step-two'),
    document.getElementById('container-step-three'),
];

const continueButtons = document.querySelectorAll('.btn-continue');

let currentStep = 0; // step actual. Esta ne 0 porq comienza en el indice del array cero

function changeStep() {
    if(currentStep < steps.length -1) {
        steps[currentStep].classList.add('hidden');

        currentStep++;
        steps[currentStep].classList.remove('hidden');
    }
}

continueButtons.forEach(button => {
    button.addEventListener('click', changeStep);
});

