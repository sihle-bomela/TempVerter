window.onload = ()=>{

    let button = document.querySelector('.button')

    button.addEventListener("click", ()=>{

        let temp = document.querySelectorAll("#temperature") //select element 
        let degree = document.querySelector('#value').value; 
        let answer = document.querySelector('.answer') // answer text

        //change color just in case it is red
        answer.classList.remove("text-red-400")
        answer.classList.add("text-black")


        if(temp[0].value == 'Fahrenheit' && temp[1].value == 'Celsius'){
            answer.innerHTML = (degree - 32) / 1.8 + " °C";
        }
        
        else if(temp[0].value == 'Celsius' && temp[1].value == 'Fahrenheit'){
            answer.innerHTML = degree * 1.8 + 32 + " °F";
        }
        
        else if(temp[0].value == 'Celsius' && temp[1].value == 'Kelvin'){
            answer.innerHTML = degree + 273.15 + " K";
        }

        else if(temp[0].value == 'Fahrenheit' && temp[1].value == 'Kelvin'){
            answer.innerHTML = (degree + 459.67) * 5/9 + " K";
        }

        else if(temp[0].value == 'Kelvin' && temp[1].value == 'Celsius'){
            answer.innerHTML = degree - 273.15 + " °C";
        }

        else if(temp[0].value == 'Kelvin' && temp[1].value == 'Fahrenheit'){
            answer.innerHTML = degree * 9/5 - 459.67 + " °F";
        }

        else if(temp[0].value == temp[1].value && degree > 1){
            answer.classList.add("text-red-400")
            answer.innerHTML = 'you are not converting to another scale';
        }
        else if(!(degree > 0)){
            answer.classList.add("text-red-400")
            answer.innerHTML = "no degree to convert has been added";
        }
    })
}