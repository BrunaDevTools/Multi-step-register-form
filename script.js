// Funcion para estilo de botones de topic:
const options = document.querySelectorAll('.options-topic');
let arrayTopics = [];

function toggleOption(event) {
    const option = event.currentTarget;
    option.classList.toggle('select');
    
    const topicText = option.textContent;
    if(option.classList.contains('select')) {
        arrayTopics.push(topicText);
    } else {
        arrayTopics = arrayTopics.filter(topic => topic !== topicText);
    }
}

options.forEach(option => {
    option.addEventListener('click', toggleOption);
});


// Mostrar datos en summary:
let userName = '';
let userEmail = '';
let selectedTopic = '';

function updateSummary() {  // Actualizar datos en el ultimo paso
    const summaryName = document.querySelector('.summary p:nth-child(1)');
    const summaryEmail = document.querySelector('.summary p:nth-child(2)');
    const summaryTopics = document.querySelector('.summary ul');

    summaryName.innerHTML = `Name: <span class="summary-value"> ${userName}</span>`;
    summaryEmail.innerHTML = `Email: <span class="summary-value">${userEmail}</span>`;
    summaryTopics.innerHTML = `Topics: ${arrayTopics.map(topic => `<li class="summary-value">${topic}</li>`).join('')}`;
}

// Funcion para el boton continue, para cambiar de vista
const steps = [
    document.getElementById('container-step-one'),
    document.getElementById('container-step-two'),
    document.getElementById('container-step-three'),
];

const continueButtons = document.querySelectorAll('.btn-continue');

let currentStep = 0; // step actual. Esta ne 0 porq comienza en el indice del array cero

function changeStep() {
    const inputs = steps[currentStep].querySelectorAll('input');
    const allValid = Array.from(inputs).every(input=> input.checkValidity());
    if(!allValid){
        alert('Please complete the required form.');
        return;
    }
if(currentStep === 0){
    userName = document.getElementById('name').value;
    userEmail = document.getElementById('email').value;
}
if(currentStep === 1){
    const selectedOption = document.querySelector('.options-topic.select');
    if(!selectedOption) {
        alert('Please select a topic.');
        return;
    }
    selectedTopic = selectedOption.textContent;
}

    if(currentStep < steps.length -1) {
        steps[currentStep].classList.add('hidden');
        currentStep++;
        steps[currentStep].classList.remove('hidden');
    }

    if(currentStep === 2) {
        updateSummary();
    }
}

continueButtons.forEach(button => {
    button.addEventListener('click', changeStep);
});


// Funcion para volver atras
const backBtn = document.querySelectorAll('.btn-back');
function goBack(){
    if(currentStep > 0){
        steps[currentStep].classList.add('hidden');
        currentStep--;
        steps[currentStep].classList.remove('hidden');
    }
};
backBtn.forEach(button=> {
    button.addEventListener('click', goBack);
});



