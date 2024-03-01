function onSubmit() {
    let input1 = Number(document.getElementById('input1').value);
    let input2 = Number(document.getElementById('input2').value);
    let input3 = Number(document.getElementById('input3').value); 
    if(input1 == 0 && input2 == 0 && input3 == 0){
        document.getElementById("korni").innerHTML = "Корнями уравнения являются все действительные числа."//alert('Корнями уравнения являются все действительные числа');
         return;
    }
    //else if(input1 >= -10000 && input2 >= -10000 && input3 >= -10000)
    {
        let D = input2**2 - 4 * input1 * input3;
        let x1 = (-1 * input2 - Math.sqrt(D))/ 2 * input1;
        let x2 = (-1 * input2 + Math.sqrt(D))/ 2 * input1;
        let x = -1 * input2 / 2 * input1;
        if(D > 0){
            document.getElementById("korni").innerHTML = "Корни уравнения: "
            document.getElementById("X1").innerHTML = "X1 = " + x1.toFixed(2);
            document.getElementById("X2").innerHTML = "X2 = " + x2.toFixed(2);
        } 
        if (D==0){
            document.getElementById(korni).innerHTML = "Корень уравнения: ";    
            document.getElementById("X1").innerHTML = "X = " + x1.toFixed(2);
        }//? alert(`Уровнение имеет два корня \n x1 = ${x1.toFixed(2)} \n x2 = ${x2.toFixed(2)}`) : 
        //(D == 0 ? alert(`Уровнение имеет один действительный корень \n x = ${x.toFixed(2)}`) : 
        //(D < 0 ? document.getElementById(korni).innerHTML = "Уравнение не имеет корней."//alert('Уровнение не имеет корней'): alert('')));
        if (D<0){
            document.getElementById("korni").innerHTML = "Уравнение не имеет корней."
        }
    }
    //else{
    //    alert('Данные введены некорректно');
    //}
}
function onClear() {
    let input1 = Number(document.getElementById('input1').value = '');
    let input2 = Number(document.getElementById('input2').value = '');
    let input3 = Number(document.getElementById('input3').value = ''); 
    document.getElementById("korni").innerHTML = "";
    document.getElementById("X1").innerHTML = "";
    document.getElementById("X2").innerHTML = "";
}