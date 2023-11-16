
window.addEventListener('load', ()=>{
    // muestra de numero en pantalla
    let numeroTermporal = '';
    let calculador = 1;
    let operacionesPendientes = '';
    document.querySelectorAll('.numb').forEach((event)=>{
        event.addEventListener('click', (evento)=>{
            let valorNumero = evento.currentTarget.getAttribute("data-numero");  
            numeroTermporal+= valorNumero;
            document.getElementById('displayNumber').innerHTML= numeroTermporal;
        })

    })
    // funciones de operaciones calculadora de numeros
    function sumar(){
        calculador+= parseFloat(numeroTermporal); 
        numeroTermporal = ''; 
    }
    function restar(){
        calculador = parseFloat(numeroTermporal); 
        numeroTermporal = ''; 
    }
    function dividir(){
        calculador/= parseFloat(numeroTermporal); 
        numeroTermporal = ''; 
    }
    function multiplicar(){
        calculador *= parseFloat(numeroTermporal); 
        numeroTermporal = ''; 
    }

    // detector de click de operaciones de la calculadora
    document.querySelectorAll('.funciones').forEach((event)=>{
        event.addEventListener('click', (evento)=>{
            let eventoCalcular = evento.currentTarget.getAttribute("data-funtion");  
            if(eventoCalcular == 'limpiar'){
                numeroTermporal = '';
                calculador = 0;
                document.getElementById('displayNumber').innerHTML= '0';
            }
            if(eventoCalcular == 'sumar'){
                if(numeroTermporal != ''){
                    sumar(); 
                    document.getElementById('displayNumber').innerHTML= calculador;
                }
            }
        })

    })
})
