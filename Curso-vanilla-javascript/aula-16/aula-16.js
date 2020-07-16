(function readyJS() {
  "use strict";

  //TYPE OF
  // let type = null
  // console.log(typeof type)//null é reconhecido como objeto

  //tanto array com objeto são reconhecidos como object no JS
  let arr = [0, 1, "Samara", { "age": 21 }]
  let obj = { "name": "samara", "city": "Anápolis" }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      console.log(arr[i])//percorre o array e retorna os elementos dos tipo object
    }
  }

  //diferencia array de objeto. Passa entre parâmetro a variável que amarzena o array
  console.log(Array.isArray(arr))


  //JSON
  //criando o JSON em formato de objeto
  let data = {
    car: {
      year: 2018,
      color: "black",
      arr: [0, 1, 2, 3]
    }
  }
  //transforma o JSON em string
  console.log(JSON.stringify(data))

  //criando o JSON em formato de string
  let data2 = '{"name": "Samara","age": "21"}';
  //transforma a string em objeto JSON
  console.log(JSON.parse(data2))
})();