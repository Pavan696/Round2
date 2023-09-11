function func() {
    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var b3 = document.getElementById("b3").value;
    var b4 = document.getElementById("b4").value;
    var b5 = document.getElementById("b5").value;
    var b6 = document.getElementById("b6").value;
    var b7 = document.getElementById("b7").value;
    var b8 = document.getElementById("b8").value;
    var b9 = document.getElementById("b9").value;
          
    var btn1 = document.getElementById("b1");
    var btn2 = document.getElementById("b2");
    var btn3 = document.getElementById("b3");
    var btn4 = document.getElementById("b4");
    var btn5 = document.getElementById("b5");
    var btn6 = document.getElementById("b6");
    var btn7 = document.getElementById("b7");
    var btn8 = document.getElementById("b8");
    var btn9 = document.getElementById("b9");
  
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
  
        btn1.style.color = "red";
        btn2.style.color = "red";
        btn3.style.color = "red";
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        btn2.disabled = true;
        btn3.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
  
        btn1.style.color = "red";
        btn4.style.color = "red";
        btn7.style.color = "red";
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
  
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
  
        btn7.style.color = "red";
        btn8.style.color = "red";
        btn9.style.color = "red";
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
  
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
  
        btn3.style.color = "red";
        btn6.style.color = "red";
        btn9.style.color = "red";
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
  
        btn1.style.color = "red";
        btn5.style.color = "red";
        btn9.style.color = "red";
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
  
        btn3.style.color = "red";
        btn5.style.color = "red";
        btn7.style.color = "red";
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn9.disabled = true;
  
        btn2.style.color = "red";
        btn5.style.color = "red";
        btn8.style.color = "red";
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
  
        btn4.style.color = "red";
        btn5.style.color = "red";
        btn6.style.color = "red";
    }
    else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
        b2 == '0') && (b3 == '0' || b3 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
  
        btn1.style.color = "red";
        btn2.style.color = "red";
        btn3.style.color = "red";
    }
    else if ((b1 == '0') && (b4 == '0' ||
        b4 == '0') && (b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        btn2.disabled = true;
        btn3.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
  
        btn1.style.color = "red";
        btn4.style.color = "red";
        btn7.style.color = "red";
    }
    else if ((b7 == '0') && (b8 == '0') && (b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
  
        btn7.style.color = "red";
        btn8.style.color = "red";
        btn9.style.color = "red";
    }
    else if ((b3 == '0') && (b6 == '0') && (b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn3.style.color = "red";
        btn6.style.color = "red";
        btn9.style.color = "red";
    }
    else if ((b1 == '0') && (b5 == '0') && (b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
  
        btn1.style.color = "red";
        btn5.style.color = "red";
        btn9.style.color = "red";
    }
    else if ((b3 == '0') && (b5 == '0') && (b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
  
        btn3.style.color = "red";
        btn5.style.color = "red";
        btn7.style.color = "red";
    }
    else if ((b2 == '0') && (b5 == '0') && (b8 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        btn1.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn9.disabled = true;
  
        btn2.style.color = "red";
        btn5.style.color = "red";
        btn8.style.color = "red";
    }
    else if ((b4 == '0') && (b5 == '0') && (b6 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
  
        btn4.style.color = "red";
        btn5.style.color = "red";
        btn6.style.color = "red";
    }
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
            b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
            b8 == '0') && (b9 == 'X' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Match Tie";
    }
    else {
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "First Player Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Second Player Turn";
        }
    }
}
function func_2() {
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}
flag = 1;
function func_3() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}
  
function func_4() {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
  
function func_5() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}
  
function func_6() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
  
function func_7() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
  
function func_8() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}
  
function func_9() {
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}
  
function func_10() {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
  
function func_11() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}