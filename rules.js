var buttons = Array.from(document.getElementsByClassName("design-btn"));
const container = document.querySelector(".display_number");
const numeros = [];
const ope = [];

window.onload = function () {
  


  buttons.forEach((btn) => {
    btn.addEventListener("click", boxClicked);
  });
};

function boxClicked(e) {
  const action = e.target.dataset.action;
  const text = e.target.textContent;
  const displaynumb = container.textContent;

  if (displaynumb === "0") {
    container.innerHTML = text;
  } else if (action === "decimal" || action === "0") {
    container.innerHTML = displaynumb + text;
  }
  if (displaynumb.length === 7) {
    container.innerHTML = displaynumb;
  }
  switch (action) {
    case "add":
      sumar(container.innerHTML);
      container.innerHTML = "0";
      break;
    case "equal":
      equal(container.innerHTML);
      break;
    case "substract":
      substract(container.innerHTML);
      container.innerHTML = "0";
      break;
    case "multiply":
      multiply(container.innerHTML);
      container.innerHTML = "0";
      break;
    case "divide":
      divide(container.innerHTML);
      container.innerHTML = "0";
      break;
    case"reset":
      container.innerHTML="0"
      numeros.lenght=0;
      break;
    case "del":
      del(container.innerHTML);
  }
}

function del (valor){
   const leng = container.textContent.length;
  // container.innerHTML = valor.slice(leng)
  // console.log(valor.slice(leng));
  // console.log(valor.slice(0,-1));
  container.innerHTML = valor.slice(0,-1); 
}

function sumar(valor) {
  
  numeros.push(parseFloat(valor));
  ope.push(1);

  if (numeros.length === 2) {
    numeros[2] = numeros[0] + numeros[1];
    // container.innerHTML=numeros[2];
    console.log(numeros);
  }
  if (numeros.length === 3) {
    var a = numeros[2];
    numeros.length = 0;
    numeros.push(a);
  }
}
function substract(valor) {
  container.innerHTML = "0";
  numeros.push(parseFloat(valor));
  ope.push(2);

  if (numeros.length === 2) {
    numeros[2] = numeros[0] - numeros[1];
    // container.innerHTML=numeros[2];
  }
  if (numeros.length === 3) {
    // numeros[0] = numeros[2];

    var a = numeros[2];
    numeros.length = 0;
    numeros.push(a);
  }
}
function multiply(valor) {
  container.innerHTML = "0";
  numeros.push(parseFloat(valor));
  ope.push(3);

  if (numeros.length === 2) {
    numeros[2] = numeros[0] - numeros[1];
    // container.innerHTML=numeros[2];
    console.log(numeros);
  }
  if (numeros.length === 3) {
    // numeros[0] = numeros[2];
    console.log(numeros);
    var a = numeros[2];
    numeros.length = 0;
    numeros.push(a);
  }
}

function divide(valor) {
  container.innerHTML = "0";
  numeros.push(parseFloat(valor));
  ope.push(4);

  if (numeros.length === 2) {
    numeros[2] = numeros[0] - numeros[1];
    // container.innerHTML=numeros[2];
    console.log(numeros);
  }
  if (numeros.length === 3) {
    // numeros[0] = numeros[2];
    console.log(numeros);
    var a = numeros[2];
    numeros.length = 0;
    numeros.push(a);
  }
}

function equal(valor) {
  numeros.push(parseFloat(valor));
  ope.forEach((opera) => {
    switch (opera) {
      case 1:
        var a = numeros[0] + numeros[1];
        container.innerHTML = a;

        break;
      case 2:
        var a = numeros[0] - numeros[1];
        container.innerHTML = a;
        break;
      case 3:
        var a = numeros[0] * numeros[1];
        container.innerHTML = a;
        break;
      case 4:
        var a = numeros[0] / numeros[1];
        container.innerHTML = a;
        break;
    }
  });
}
