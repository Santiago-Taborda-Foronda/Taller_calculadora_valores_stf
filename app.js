// const btnGreat = document.querySelector('#btnGreat')

// btnGreat.addEventListener('click', great)

// function great () {
  //   alert(username.value)
  // }
  
  const username = document.getElementById('nombre')
  const data1 = document.getElementById('nota1')
  const data2 = document.getElementById('nota2')
  const data3 = document.getElementById('nota3')
  const btnCalculate = document.getElementById('btn-calculate')
  const response = document.getElementById('resultado')
  const btnPredecir = document.getElementById('btn-prediccion')
  
  btnCalculate.addEventListener('click', calculateNote )

  function calculateNote(event) {

    event.preventDefault()

    let note1 = Number(data1.value)        
    let note2 = Number(data2.value)        
    let note3 = Number(data3.value)
    
    let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)).toFixed(2)
    // template string o template literal
    response.style.color = 'green'
    response.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es: ${result}`  
    if (result< 3.5) {
      response.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es: ${result} usted no ha pasado la materia`
      response.style.color = 'black'
    }else if (result>=3.5 && result <=4.5) {
       response.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es: ${result} usted a ganado la materia`
      response.style.color = 'orange'
    }else if (result > 4.5) {
      response.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es: ${result} Su nota es sobresaliente`
      response.style.color = 'green'
    }  
  }


  btnPredecir.addEventListener('click', prediccionNota )
  function prediccionNota(event) {
    event.preventDefault()

    let note1 = Number(data1.value)
    let note2 = Number(data2.value)

    let notefin = ((3.5 - (note1 * 0.3) - (note2 * 0.3)) / 0.4).toFixed(2);

    nota3.value = notefin;
    response.textContent = `Si quiere aprobar debera tener una nota de 3.5 y para esto debe sacar ${notefin}`;
}




