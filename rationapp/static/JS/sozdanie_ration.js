const checkboxSubMainBlock2 = document.querySelectorAll(".subblock-category2")
const crossDel = document.querySelectorAll(".composition-title-field__del")
const yesBlock = document.querySelectorAll(".composition-delete-block__subfirst")
const noBlock = document.querySelectorAll(".composition-delete-block__subsecond")
const newBlock = document.querySelectorAll(".new-list")
const arrowNew = document.querySelectorAll(".add-field__arrow")

function delCross(event) {
    event.target.closest(".composition-title-field__del").parentNode.nextElementSibling.style.display = 'flex';
};
function nodelCross(event) {
    event.target.closest(".composition-delete-block__subsecond").parentNode.parentNode.style.display = 'none';
};
function delBlock(event) {
    event.target.closest(".food-composition").remove()
}
function newList(event) {
    if (event.target.closest(".add-field__arrow").nextElementSibling.nextElementSibling.style.display == 'none') {
        event.target.closest(".add-field__arrow").nextElementSibling.nextElementSibling.style.display = 'block';
    }
    else {
        event.target.closest(".add-field__arrow").nextElementSibling.nextElementSibling.style.display = 'none';
    }
}

arrowNew.forEach(function ourFunc(item, index, array) {
    item.addEventListener("click", newList)
});
crossDel.forEach(function ourFunc(item, index, array) {
    item.addEventListener("click", delCross)
});
yesBlock.forEach(function ourFunc(item, index, array) {
    item.addEventListener("click", delBlock)
});
noBlock.forEach(function ourFunc(item, index, array) {
    item.addEventListener("click", nodelCross)
});


// ! ВЗаимодействие со строками таблицы
const titleDate = document.querySelectorAll(".title-date")
const numberInputs = document.querySelectorAll('input[type="number"]');
const inputs = document.querySelectorAll("input")


inputs.forEach((block,number) => {
    block.addEventListener('keydown', function(event) {
      if(event.keyCode == 13) {
         event.preventDefault();
         event.stopPropagation()
      }
    });
  });


countStr=[]
for (let index = 0; index < titleDate.length; index++) {
    countStr.push([]);
}


// !Логика без ID
for (let index = 0; index < titleDate.length; index++) {
    let nextEl = titleDate[index];
    if (index!=titleDate.length-1){
        while (nextEl!=titleDate[index+1]) {
            countStr[index].push(nextEl);
            nextEl = nextEl.nextElementSibling;
        } 
    }
    else{
        while (!!nextEl) {
            countStr[index].push(nextEl);
            nextEl = nextEl.nextElementSibling;
        } 
    }
}
console.log(countStr)

/* Сложение столбцов */
function Schet(event){
    console.log(123)
    console.log(countStr)
    if(event.keyCode == 13) {
        mascount=[]
        for (let index = 0; index < 28; index++) {
            mascount.push(0);
        }
    
        for (let index = 0; index < titleDate.length; index++) {
            for (let indexDouble = 0; indexDouble < countStr[index].length-2; indexDouble++) {
                for (let indexTriple = 0; indexTriple < 28; indexTriple++) {
                    mascount[indexTriple]+= +countStr[index][indexDouble+1].children[indexTriple+1].querySelector("input").value
                }
            }
            console.log(mascount)
            for (let indexTriple = 0; indexTriple < 28; indexTriple++) {
                countStr[index][countStr[index].length-1].children[indexTriple+1].querySelector("input").value=`${mascount[indexTriple]}`
            }
            mascount=[]
            for (let index = 0; index < 28; index++) {
                mascount.push(0);
            }
        }
    }
    
}

function multiply() {
    var val1 = document.getElementById("myNumberInput1.1").value;
    var val2 = 100; // изначальное значение
    var val3 = 98; // изначальное значение
    var val4 = 97; // изначальное значение
    var val5 = 96; // изначальное значение
    var val6 = 100; // изначальное значение
    var val7 = 100; // изначальное значение
    var val8 = 100; // изначальное значение
    var val9 = 100; // изначальное значение
    var val10 = 100; // изначальное значение
    var val11 = 100; // изначальное значение
    var val12 = 100; // изначальное значение
    var val13 = 100; // изначальное значение
    var val14 = 100; // изначальное значение
    var val15 = 100; // изначальное значение
    var val16 = 100; // изначальное значение
    var val17 = 100; // изначальное значение
    var val18 = 100; // изначальное значение
    var val19 = 100; // изначальное значение
    var val20 = 100; // изначальное значение
    var val21 = 100; // изначальное значение
    var val22 = 100; // изначальное значение
    var val23 = 100; // изначальное значение
    var val24 = 100; // изначальное значение
    var val25 = 100; // изначальное значение
    var val26 = 100; // изначальное значение
    var val27 = 100; // изначальное значение
    var val28 = 100; // изначальное значение
    if (val1 !== "") {
      document.getElementById("cell1.2").value = val1 / 100 * val2;
      document.getElementById("cell1.3").value = val1 / 100 * val3;
      document.getElementById("cell1.4").value = val1 / 100 * val4;
      document.getElementById("cell1.5").value = val1 / 100 * val5;
      document.getElementById("cell1.6").value = val1 / 100 * val6;
      document.getElementById("cell1.7").value = val1 / 100 * val7;
      document.getElementById("cell1.8").value = val1 / 100 * val8;
      document.getElementById("cell1.9").value = val1 / 100 * val9;
      document.getElementById("cell1.10").value = val1 / 100 * val10;
      document.getElementById("cell1.11").value = val1 / 100 * val11;
      document.getElementById("cell1.12").value = val1 / 100 * val12;
      document.getElementById("cell1.13").value = val1 / 100 * val13;
      document.getElementById("cell1.14").value = val1 / 100 * val14;
      document.getElementById("cell1.15").value = val1 / 100 * val15;
      document.getElementById("cell1.16").value = val1 / 100 * val16;
      document.getElementById("cell1.17").value = val1 / 100 * val17;
      document.getElementById("cell1.18").value = val1 / 100 * val18;
      document.getElementById("cell1.19").value = val1 / 100 * val19;
      document.getElementById("cell1.20").value = val1 / 100 * val20;
      document.getElementById("cell1.21").value = val1 / 100 * val21;
      document.getElementById("cell1.22").value = val1 / 100 * val22;
      document.getElementById("cell1.23").value = val1 / 100 * val23;
      document.getElementById("cell1.24").value = val1 / 100 * val24;
      document.getElementById("cell1.25").value = val1 / 100 * val25;
      document.getElementById("cell1.26").value = val1 / 100 * val26;
      document.getElementById("cell1.27").value = val1 / 100 * val27;
      document.getElementById("cell1.28").value = val1 / 100 * val28;
    } else {
      document.getElementById("cell1.2").value = val2;
      document.getElementById("cell1.3").value = val3;
      document.getElementById("cell1.4").value = val4;
      document.getElementById("cell1.5").value = val5;
      document.getElementById("cell1.6").value = val6;
      document.getElementById("cell1.7").value = val7;
      document.getElementById("cell1.8").value = val8;
      document.getElementById("cell1.9").value = val9;
      document.getElementById("cell1.10").value = val10;
      document.getElementById("cell1.11").value = val11;
      document.getElementById("cell1.12").value = val12;
      document.getElementById("cell1.13").value = val13;
      document.getElementById("cell1.14").value = val14;
      document.getElementById("cell1.15").value = val15;
      document.getElementById("cell1.16").value = val16;
      document.getElementById("cell1.17").value = val17;
      document.getElementById("cell1.18").value = val18;
      document.getElementById("cell1.19").value = val19;
      document.getElementById("cell1.20").value = val20;
      document.getElementById("cell1.21").value = val21;
      document.getElementById("cell1.22").value = val22;
      document.getElementById("cell1.23").value = val23;
      document.getElementById("cell1.24").value = val24;
      document.getElementById("cell1.25").value = val25;
      document.getElementById("cell1.26").value = val26;
      document.getElementById("cell1.27").value = val27;
      document.getElementById("cell1.28").value = val28;
    }
}

function multiply2() {
    var val1 = document.getElementById("myNumberInput2.1").value;
    var val2 = 100; // изначальное значение
    var val3 = 98; // изначальное значение
    var val4 = 97; // изначальное значение
    var val5 = 96; // изначальное значение
    var val6 = 100; // изначальное значение
    var val7 = 100; // изначальное значение
    var val8 = 100; // изначальное значение
    var val9 = 100; // изначальное значение
    var val10 = 100; // изначальное значение
    var val11 = 100; // изначальное значение
    var val12 = 100; // изначальное значение
    var val13 = 100; // изначальное значение
    var val14 = 100; // изначальное значение
    var val15 = 100; // изначальное значение
    var val16 = 100; // изначальное значение
    var val17 = 100; // изначальное значение
    var val18 = 100; // изначальное значение
    var val19 = 100; // изначальное значение
    var val20 = 100; // изначальное значение
    var val21 = 100; // изначальное значение
    var val22 = 100; // изначальное значение
    var val23 = 100; // изначальное значение
    var val24 = 100; // изначальное значение
    var val25 = 100; // изначальное значение
    var val26 = 100; // изначальное значение
    var val27 = 100; // изначальное значение
    var val28 = 100; // изначальное значение
    if (val1 !== "") {
      document.getElementById("cell2.2").value = val1 / 100 * val2;
      document.getElementById("cell2.3").value = val1 / 100 * val3;
      document.getElementById("cell2.4").value = val1 / 100 * val4;
      document.getElementById("cell2.5").value = val1 / 100 * val5;
      document.getElementById("cell2.6").value = val1 / 100 * val6;
      document.getElementById("cell2.7").value = val1 / 100 * val7;
      document.getElementById("cell2.8").value = val1 / 100 * val8;
      document.getElementById("cell2.9").value = val1 / 100 * val9;
      document.getElementById("cell2.10").value = val1 / 100 * val10;
      document.getElementById("cell2.11").value = val1 / 100 * val11;
      document.getElementById("cell2.12").value = val1 / 100 * val12;
      document.getElementById("cell2.13").value = val1 / 100 * val13;
      document.getElementById("cell2.14").value = val1 / 100 * val14;
      document.getElementById("cell2.15").value = val1 / 100 * val15;
      document.getElementById("cell2.16").value = val1 / 100 * val16;
      document.getElementById("cell2.17").value = val1 / 100 * val17;
      document.getElementById("cell2.18").value = val1 / 100 * val18;
      document.getElementById("cell2.19").value = val1 / 100 * val19;
      document.getElementById("cell2.20").value = val1 / 100 * val20;
      document.getElementById("cell2.21").value = val1 / 100 * val21;
      document.getElementById("cell2.22").value = val1 / 100 * val22;
      document.getElementById("cell2.23").value = val1 / 100 * val23;
      document.getElementById("cell2.24").value = val1 / 100 * val24;
      document.getElementById("cell2.25").value = val1 / 100 * val25;
      document.getElementById("cell2.26").value = val1 / 100 * val26;
      document.getElementById("cell2.27").value = val1 / 100 * val27;
      document.getElementById("cell2.28").value = val1 / 100 * val28;
    } else {
      document.getElementById("cell2.2").value = val2;
      document.getElementById("cell2.3").value = val3;
      document.getElementById("cell2.4").value = val4;
      document.getElementById("cell2.5").value = val5;
      document.getElementById("cell2.6").value = val6;
      document.getElementById("cell2.7").value = val7;
      document.getElementById("cell2.8").value = val8;
      document.getElementById("cell2.9").value = val9;
      document.getElementById("cell2.10").value = val10;
      document.getElementById("cell2.11").value = val11;
      document.getElementById("cell2.12").value = val12;
      document.getElementById("cell2.13").value = val13;
      document.getElementById("cell2.14").value = val14;
      document.getElementById("cell2.15").value = val15;
      document.getElementById("cell2.16").value = val16;
      document.getElementById("cell2.17").value = val17;
      document.getElementById("cell2.18").value = val18;
      document.getElementById("cell2.19").value = val19;
      document.getElementById("cell2.20").value = val20;
      document.getElementById("cell2.21").value = val21;
      document.getElementById("cell2.22").value = val22;
      document.getElementById("cell2.23").value = val23;
      document.getElementById("cell2.24").value = val24;
      document.getElementById("cell2.25").value = val25;
      document.getElementById("cell2.26").value = val26;
      document.getElementById("cell2.27").value = val27;
      document.getElementById("cell2.28").value = val28;
    }
}

function multiply3() {
    var val1 = document.getElementById("myNumberInput3.1").value;
    var val2 = 100; // изначальное значение
    var val3 = 98; // изначальное значение
    var val4 = 97; // изначальное значение
    var val5 = 96; // изначальное значение
    var val6 = 100; // изначальное значение
    var val7 = 100; // изначальное значение
    var val8 = 100; // изначальное значение
    var val9 = 100; // изначальное значение
    var val10 = 100; // изначальное значение
    var val11 = 100; // изначальное значение
    var val12 = 100; // изначальное значение
    var val13 = 100; // изначальное значение
    var val14 = 100; // изначальное значение
    var val15 = 100; // изначальное значение
    var val16 = 100; // изначальное значение
    var val17 = 100; // изначальное значение
    var val18 = 100; // изначальное значение
    var val19 = 100; // изначальное значение
    var val20 = 100; // изначальное значение
    var val21 = 100; // изначальное значение
    var val22 = 100; // изначальное значение
    var val23 = 100; // изначальное значение
    var val24 = 100; // изначальное значение
    var val25 = 100; // изначальное значение
    var val26 = 100; // изначальное значение
    var val27 = 100; // изначальное значение
    var val28 = 100; // изначальное значение
    if (val1 !== "") {
      document.getElementById("cell3.2").value = val1 / 100 * val2;
      document.getElementById("cell3.3").value = val1 / 100 * val3;
      document.getElementById("cell3.4").value = val1 / 100 * val4;
      document.getElementById("cell3.5").value = val1 / 100 * val5;
      document.getElementById("cell3.6").value = val1 / 100 * val6;
      document.getElementById("cell3.7").value = val1 / 100 * val7;
      document.getElementById("cell3.8").value = val1 / 100 * val8;
      document.getElementById("cell3.9").value = val1 / 100 * val9;
      document.getElementById("cell3.10").value = val1 / 100 * val10;
      document.getElementById("cell3.11").value = val1 / 100 * val11;
      document.getElementById("cell3.12").value = val1 / 100 * val12;
      document.getElementById("cell3.13").value = val1 / 100 * val13;
      document.getElementById("cell3.14").value = val1 / 100 * val14;
      document.getElementById("cell3.15").value = val1 / 100 * val15;
      document.getElementById("cell3.16").value = val1 / 100 * val16;
      document.getElementById("cell3.17").value = val1 / 100 * val17;
      document.getElementById("cell3.18").value = val1 / 100 * val18;
      document.getElementById("cell3.19").value = val1 / 100 * val19;
      document.getElementById("cell3.20").value = val1 / 100 * val20;
      document.getElementById("cell3.21").value = val1 / 100 * val21;
      document.getElementById("cell3.22").value = val1 / 100 * val22;
      document.getElementById("cell3.23").value = val1 / 100 * val23;
      document.getElementById("cell3.24").value = val1 / 100 * val24;
      document.getElementById("cell3.25").value = val1 / 100 * val25;
      document.getElementById("cell3.26").value = val1 / 100 * val26;
      document.getElementById("cell3.27").value = val1 / 100 * val27;
      document.getElementById("cell3.28").value = val1 / 100 * val28;
    } else {
      document.getElementById("cell3.2").value = val2_3;
      document.getElementById("cell3.3").value = val3_3;
      document.getElementById("cell3.4").value = val4_3;
      document.getElementById("cell3.5").value = val5_3;
      document.getElementById("cell3.6").value = val6_3;
      document.getElementById("cell3.7").value = val7_3;
      document.getElementById("cell3.8").value = val8_3;
      document.getElementById("cell3.9").value = val9_3;
      document.getElementById("cell3.10").value = val10_3;
      document.getElementById("cell3.11").value = val11_3;
      document.getElementById("cell3.12").value = val12_3;
      document.getElementById("cell3.13").value = val13_3;
      document.getElementById("cell3.14").value = val14_3;
      document.getElementById("cell3.15").value = val15_3;
      document.getElementById("cell3.16").value = val16_3;
      document.getElementById("cell3.17").value = val17_3;
      document.getElementById("cell3.18").value = val18_3;
      document.getElementById("cell3.19").value = val19_3;
      document.getElementById("cell3.20").value = val20_3;
      document.getElementById("cell3.21").value = val21_3;
      document.getElementById("cell3.22").value = val22_3;
      document.getElementById("cell3.23").value = val23_3;
      document.getElementById("cell3.24").value = val24_3;
      document.getElementById("cell3.25").value = val25_3;
      document.getElementById("cell3.26").value = val26_3;
      document.getElementById("cell3.27").value = val27_3;
      document.getElementById("cell3.28").value = val28_3;
    }
}

function multiply4() {
    var val1 = document.getElementById("myNumberInput4.1").value;
    var val2 = 100; // изначальное значение
    var val3 = 98; // изначальное значение
    var val4 = 97; // изначальное значение
    var val5 = 96; // изначальное значение
    var val6 = 100; // изначальное значение
    var val7 = 100; // изначальное значение
    var val8 = 100; // изначальное значение
    var val9 = 100; // изначальное значение
    var val10 = 100; // изначальное значение
    var val11 = 100; // изначальное значение
    var val12 = 100; // изначальное значение
    var val13 = 100; // изначальное значение
    var val14 = 100; // изначальное значение
    var val15 = 100; // изначальное значение
    var val16 = 100; // изначальное значение
    var val17 = 100; // изначальное значение
    var val18 = 100; // изначальное значение
    var val19 = 100; // изначальное значение
    var val20 = 100; // изначальное значение
    var val21 = 100; // изначальное значение
    var val22 = 100; // изначальное значение
    var val23 = 100; // изначальное значение
    var val24 = 100; // изначальное значение
    var val25 = 100; // изначальное значение
    var val26 = 100; // изначальное значение
    var val27 = 100; // изначальное значение
    var val28 = 100; // изначальное значение
    if (val1 !== "") {
      document.getElementById("cell4.2").value = val1 / 100 * val2;
      document.getElementById("cell4.3").value = val1 / 100 * val3;
      document.getElementById("cell4.4").value = val1 / 100 * val4;
      document.getElementById("cell4.5").value = val1 / 100 * val5;
      document.getElementById("cell4.6").value = val1 / 100 * val6;
      document.getElementById("cell4.7").value = val1 / 100 * val7;
      document.getElementById("cell4.8").value = val1 / 100 * val8;
      document.getElementById("cell4.9").value = val1 / 100 * val9;
      document.getElementById("cell4.10").value = val1 / 100 * val10;
      document.getElementById("cell4.11").value = val1 / 100 * val11;
      document.getElementById("cell4.12").value = val1 / 100 * val12;
      document.getElementById("cell4.13").value = val1 / 100 * val13;
      document.getElementById("cell4.14").value = val1 / 100 * val14;
      document.getElementById("cell4.15").value = val1 / 100 * val15;
      document.getElementById("cell4.16").value = val1 / 100 * val16;
      document.getElementById("cell4.17").value = val1 / 100 * val17;
      document.getElementById("cell4.18").value = val1 / 100 * val18;
      document.getElementById("cell4.19").value = val1 / 100 * val19;
      document.getElementById("cell4.20").value = val1 / 100 * val20;
      document.getElementById("cell4.21").value = val1 / 100 * val21;
      document.getElementById("cell4.22").value = val1 / 100 * val22;
      document.getElementById("cell4.23").value = val1 / 100 * val23;
      document.getElementById("cell4.24").value = val1 / 100 * val24;
      document.getElementById("cell4.25").value = val1 / 100 * val25;
      document.getElementById("cell4.26").value = val1 / 100 * val26;
      document.getElementById("cell4.27").value = val1 / 100 * val27;
      document.getElementById("cell4.28").value = val1 / 100 * val28;
    } else {
      document.getElementById("cell4.2").value = val2;
      document.getElementById("cell4.3").value = val3;
      document.getElementById("cell4.4").value = val4;
      document.getElementById("cell4.5").value = val5;
      document.getElementById("cell4.6").value = val6;
      document.getElementById("cell4.7").value = val7;
      document.getElementById("cell4.8").value = val8;
      document.getElementById("cell4.9").value = val9;
      document.getElementById("cell4.10").value = val10;
      document.getElementById("cell4.11").value = val11;
      document.getElementById("cell4.12").value = val12;
      document.getElementById("cell4.13").value = val13;
      document.getElementById("cell4.14").value = val14;
      document.getElementById("cell4.15").value = val15;
      document.getElementById("cell4.16").value = val16;
      document.getElementById("cell4.17").value = val17;
      document.getElementById("cell4.18").value = val18;
      document.getElementById("cell4.19").value = val19;
      document.getElementById("cell4.20").value = val20;
      document.getElementById("cell4.21").value = val21;
      document.getElementById("cell4.22").value = val22;
      document.getElementById("cell4.23").value = val23;
      document.getElementById("cell4.24").value = val24;
      document.getElementById("cell4.25").value = val25;
      document.getElementById("cell4.26").value = val26;
      document.getElementById("cell4.27").value = val27;
      document.getElementById("cell4.28").value = val28;
    }
}

function multiply5() {
    var val1 = document.getElementById("myNumberInput5.1").value;
    var val2 = 100; // изначальное значение
    var val3 = 98; // изначальное значение
    var val4 = 97; // изначальное значение
    var val5 = 96; // изначальное значение
    var val6 = 100; // изначальное значение
    var val7 = 100; // изначальное значение
    var val8 = 100; // изначальное значение
    var val9 = 100; // изначальное значение
    var val10 = 100; // изначальное значение
    var val11 = 100; // изначальное значение
    var val12 = 100; // изначальное значение
    var val13 = 100; // изначальное значение
    var val14 = 100; // изначальное значение
    var val15 = 100; // изначальное значение
    var val16 = 100; // изначальное значение
    var val17 = 100; // изначальное значение
    var val18 = 100; // изначальное значение
    var val19 = 100; // изначальное значение
    var val20 = 100; // изначальное значение
    var val21 = 100; // изначальное значение
    var val22 = 100; // изначальное значение
    var val23 = 100; // изначальное значение
    var val24 = 100; // изначальное значение
    var val25 = 100; // изначальное значение
    var val26 = 100; // изначальное значение
    var val27 = 100; // изначальное значение
    var val28 = 100; // изначальное значение
    if (val1 !== "") {
      document.getElementById("cell5.2").value = val1 / 100 * val2;
      document.getElementById("cell5.3").value = val1 / 100 * val3;
      document.getElementById("cell5.4").value = val1 / 100 * val4;
      document.getElementById("cell5.5").value = val1 / 100 * val5;
      document.getElementById("cell5.6").value = val1 / 100 * val6;
      document.getElementById("cell5.7").value = val1 / 100 * val7;
      document.getElementById("cell5.8").value = val1 / 100 * val8;
      document.getElementById("cell5.9").value = val1 / 100 * val9;
      document.getElementById("cell5.10").value = val1 / 100 * val10;
      document.getElementById("cell5.11").value = val1 / 100 * val11;
      document.getElementById("cell5.12").value = val1 / 100 * val12;
      document.getElementById("cell5.13").value = val1 / 100 * val13;
      document.getElementById("cell5.14").value = val1 / 100 * val14;
      document.getElementById("cell5.15").value = val1 / 100 * val15;
      document.getElementById("cell5.16").value = val1 / 100 * val16;
      document.getElementById("cell5.17").value = val1 / 100 * val17;
      document.getElementById("cell5.18").value = val1 / 100 * val18;
      document.getElementById("cell5.19").value = val1 / 100 * val19;
      document.getElementById("cell5.20").value = val1 / 100 * val20;
      document.getElementById("cell5.21").value = val1 / 100 * val21;
      document.getElementById("cell5.22").value = val1 / 100 * val22;
      document.getElementById("cell5.23").value = val1 / 100 * val23;
      document.getElementById("cell5.24").value = val1 / 100 * val24;
      document.getElementById("cell5.25").value = val1 / 100 * val25;
      document.getElementById("cell5.26").value = val1 / 100 * val26;
      document.getElementById("cell5.27").value = val1 / 100 * val27;
      document.getElementById("cell5.28").value = val1 / 100 * val28;
    } else {
      document.getElementById("cell5.2").value = val2;
      document.getElementById("cell5.3").value = val3;
      document.getElementById("cell5.4").value = val4;
      document.getElementById("cell5.5").value = val5;
      document.getElementById("cell5.6").value = val6;
      document.getElementById("cell5.7").value = val7;
      document.getElementById("cell5.8").value = val8;
      document.getElementById("cell5.9").value = val9;
      document.getElementById("cell5.10").value = val10;
      document.getElementById("cell5.11").value = val11;
      document.getElementById("cell5.12").value = val12;
      document.getElementById("cell5.13").value = val13;
      document.getElementById("cell5.14").value = val14;
      document.getElementById("cell5.15").value = val15;
      document.getElementById("cell5.16").value = val16;
      document.getElementById("cell5.17").value = val17;
      document.getElementById("cell5.18").value = val18;
      document.getElementById("cell5.19").value = val19;
      document.getElementById("cell5.20").value = val20;
      document.getElementById("cell5.21").value = val21;
      document.getElementById("cell5.22").value = val22;
      document.getElementById("cell5.23").value = val23;
      document.getElementById("cell5.24").value = val24;
      document.getElementById("cell5.25").value = val25;
      document.getElementById("cell5.26").value = val26;
      document.getElementById("cell5.27").value = val27;
      document.getElementById("cell5.28").value = val28;
    }
}

function multiply6() {
    var val1 = document.getElementById("myNumberInput6.1").value;
    var val2 = 100; // изначальное значение
    var val3 = 98; // изначальное значение
    var val4 = 97; // изначальное значение
    var val5 = 96; // изначальное значение
    var val6 = 100; // изначальное значение
    var val7 = 100; // изначальное значение
    var val8 = 100; // изначальное значение
    var val9 = 100; // изначальное значение
    var val10 = 100; // изначальное значение
    var val11 = 100; // изначальное значение
    var val12 = 100; // изначальное значение
    var val13 = 100; // изначальное значение
    var val14 = 100; // изначальное значение
    var val15 = 100; // изначальное значение
    var val16 = 100; // изначальное значение
    var val17 = 100; // изначальное значение
    var val18 = 100; // изначальное значение
    var val19 = 100; // изначальное значение
    var val20 = 100; // изначальное значение
    var val21 = 100; // изначальное значение
    var val22 = 100; // изначальное значение
    var val23 = 100; // изначальное значение
    var val24 = 100; // изначальное значение
    var val25 = 100; // изначальное значение
    var val26 = 100; // изначальное значение
    var val27 = 100; // изначальное значение
    var val28 = 100; // изначальное значение
    if (val1 !== "") {
      document.getElementById("cell6.2").value = val1 / 100 * val2;
      document.getElementById("cell6.3").value = val1 / 100 * val3;
      document.getElementById("cell6.4").value = val1 / 100 * val4;
      document.getElementById("cell6.5").value = val1 / 100 * val5;
      document.getElementById("cell6.6").value = val1 / 100 * val6;
      document.getElementById("cell6.7").value = val1 / 100 * val7;
      document.getElementById("cell6.8").value = val1 / 100 * val8;
      document.getElementById("cell6.9").value = val1 / 100 * val9;
      document.getElementById("cell6.10").value = val1 / 100 * val10;
      document.getElementById("cell6.11").value = val1 / 100 * val11;
      document.getElementById("cell6.12").value = val1 / 100 * val12;
      document.getElementById("cell6.13").value = val1 / 100 * val13;
      document.getElementById("cell6.14").value = val1 / 100 * val14;
      document.getElementById("cell6.15").value = val1 / 100 * val15;
      document.getElementById("cell6.16").value = val1 / 100 * val16;
      document.getElementById("cell6.17").value = val1 / 100 * val17;
      document.getElementById("cell6.18").value = val1 / 100 * val18;
      document.getElementById("cell6.19").value = val1 / 100 * val19;
      document.getElementById("cell6.20").value = val1 / 100 * val20;
      document.getElementById("cell6.21").value = val1 / 100 * val21;
      document.getElementById("cell6.22").value = val1 / 100 * val22;
      document.getElementById("cell6.23").value = val1 / 100 * val23;
      document.getElementById("cell6.24").value = val1 / 100 * val24;
      document.getElementById("cell6.25").value = val1 / 100 * val25;
      document.getElementById("cell6.26").value = val1 / 100 * val26;
      document.getElementById("cell6.27").value = val1 / 100 * val27;
      document.getElementById("cell6.28").value = val1 / 100 * val28;
    } else {
      document.getElementById("cell6.2").value = val2;
      document.getElementById("cell6.3").value = val3;
      document.getElementById("cell6.4").value = val4;
      document.getElementById("cell6.5").value = val5;
      document.getElementById("cell6.6").value = val6;
      document.getElementById("cell6.7").value = val7;
      document.getElementById("cell6.8").value = val8;
      document.getElementById("cell6.9").value = val9;
      document.getElementById("cell6.10").value = val10;
      document.getElementById("cell6.11").value = val11;
      document.getElementById("cell6.12").value = val12;
      document.getElementById("cell6.13").value = val13;
      document.getElementById("cell6.14").value = val14;
      document.getElementById("cell6.15").value = val15;
      document.getElementById("cell6.16").value = val16;
      document.getElementById("cell6.17").value = val17;
      document.getElementById("cell6.18").value = val18;
      document.getElementById("cell6.19").value = val19;
      document.getElementById("cell6.20").value = val20;
      document.getElementById("cell6.21").value = val21;
      document.getElementById("cell6.22").value = val22;
      document.getElementById("cell6.23").value = val23;
      document.getElementById("cell6.24").value = val24;
      document.getElementById("cell6.25").value = val25;
      document.getElementById("cell6.26").value = val26;
      document.getElementById("cell6.27").value = val27;
      document.getElementById("cell6.28").value = val28;
    }
}

function multiply7() {
    var val1 = document.getElementById("myNumberInput7.1").value;
    var val2 = 100; // изначальное значение
    var val3 = 98; // изначальное значение
    var val4 = 97; // изначальное значение
    var val5 = 96; // изначальное значение
    var val6 = 100; // изначальное значение
    var val7 = 100; // изначальное значение
    var val8 = 100; // изначальное значение
    var val9 = 100; // изначальное значение
    var val10 = 100; // изначальное значение
    var val11 = 100; // изначальное значение
    var val12 = 100; // изначальное значение
    var val13 = 100; // изначальное значение
    var val14 = 100; // изначальное значение
    var val15 = 100; // изначальное значение
    var val16 = 100; // изначальное значение
    var val17 = 100; // изначальное значение
    var val18 = 100; // изначальное значение
    var val19 = 100; // изначальное значение
    var val20 = 100; // изначальное значение
    var val21 = 100; // изначальное значение
    var val22 = 100; // изначальное значение
    var val23 = 100; // изначальное значение
    var val24 = 100; // изначальное значение
    var val25 = 100; // изначальное значение
    var val26 = 100; // изначальное значение
    var val27 = 100; // изначальное значение
    var val28 = 100; // изначальное значение
    if (val1 !== "") {
      document.getElementById("cell7.2").value = val1 / 100 * val2;
      document.getElementById("cell7.3").value = val1 / 100 * val3;
      document.getElementById("cell7.4").value = val1 / 100 * val4;
      document.getElementById("cell7.5").value = val1 / 100 * val5;
      document.getElementById("cell7.6").value = val1 / 100 * val6;
      document.getElementById("cell7.7").value = val1 / 100 * val7;
      document.getElementById("cell7.8").value = val1 / 100 * val8;
      document.getElementById("cell7.9").value = val1 / 100 * val9;
      document.getElementById("cell7.10").value = val1 / 100 * val10;
      document.getElementById("cell7.11").value = val1 / 100 * val11;
      document.getElementById("cell7.12").value = val1 / 100 * val12;
      document.getElementById("cell7.13").value = val1 / 100 * val13;
      document.getElementById("cell7.14").value = val1 / 100 * val14;
      document.getElementById("cell7.15").value = val1 / 100 * val15;
      document.getElementById("cell7.16").value = val1 / 100 * val16;
      document.getElementById("cell7.17").value = val1 / 100 * val17;
      document.getElementById("cell7.18").value = val1 / 100 * val18;
      document.getElementById("cell7.19").value = val1 / 100 * val19;
      document.getElementById("cell7.20").value = val1 / 100 * val20;
      document.getElementById("cell7.21").value = val1 / 100 * val21;
      document.getElementById("cell7.22").value = val1 / 100 * val22;
      document.getElementById("cell7.23").value = val1 / 100 * val23;
      document.getElementById("cell7.24").value = val1 / 100 * val24;
      document.getElementById("cell7.25").value = val1 / 100 * val25;
      document.getElementById("cell7.26").value = val1 / 100 * val26;
      document.getElementById("cell7.27").value = val1 / 100 * val27;
      document.getElementById("cell7.28").value = val1 / 100 * val28;
    } else {
      document.getElementById("cell7.2").value = val2;
      document.getElementById("cell7.3").value = val3;
      document.getElementById("cell7.4").value = val4;
      document.getElementById("cell7.5").value = val5;
      document.getElementById("cell7.6").value = val6;
      document.getElementById("cell7.7").value = val7;
      document.getElementById("cell7.8").value = val8;
      document.getElementById("cell7.9").value = val9;
      document.getElementById("cell7.10").value = val10;
      document.getElementById("cell7.11").value = val11;
      document.getElementById("cell7.12").value = val12;
      document.getElementById("cell7.13").value = val13;
      document.getElementById("cell7.14").value = val14;
      document.getElementById("cell7.15").value = val15;
      document.getElementById("cell7.16").value = val16;
      document.getElementById("cell7.17").value = val17;
      document.getElementById("cell7.18").value = val18;
      document.getElementById("cell7.19").value = val19;
      document.getElementById("cell7.20").value = val20;
      document.getElementById("cell7.21").value = val21;
      document.getElementById("cell7.22").value = val22;
      document.getElementById("cell7.23").value = val23;
      document.getElementById("cell7.24").value = val24;
      document.getElementById("cell7.25").value = val25;
      document.getElementById("cell7.26").value = val26;
      document.getElementById("cell7.27").value = val27;
      document.getElementById("cell7.28").value = val28;
    }
}

function multiply8() {
    var val1 = document.getElementById("myNumberInput8.1").value;
    var val2 = 100; // изначальное значение
    var val3 = 98; // изначальное значение
    var val4 = 97; // изначальное значение
    var val5 = 96; // изначальное значение
    var val6 = 100; // изначальное значение
    var val7 = 100; // изначальное значение
    var val8 = 100; // изначальное значение
    var val9 = 100; // изначальное значение
    var val10 = 100; // изначальное значение
    var val11 = 100; // изначальное значение
    var val12 = 100; // изначальное значение
    var val13 = 100; // изначальное значение
    var val14 = 100; // изначальное значение
    var val15 = 100; // изначальное значение
    var val16 = 100; // изначальное значение
    var val17 = 100; // изначальное значение
    var val18 = 100; // изначальное значение
    var val19 = 100; // изначальное значение
    var val20 = 100; // изначальное значение
    var val21 = 100; // изначальное значение
    var val22 = 100; // изначальное значение
    var val23 = 100; // изначальное значение
    var val24 = 100; // изначальное значение
    var val25 = 100; // изначальное значение
    var val26 = 100; // изначальное значение
    var val27 = 100; // изначальное значение
    var val28 = 100; // изначальное значение
    if (val1 !== "") {
      document.getElementById("cell8.2").value = val1 / 100 * val2;
      document.getElementById("cell8.3").value = val1 / 100 * val3;
      document.getElementById("cell8.4").value = val1 / 100 * val4;
      document.getElementById("cell8.5").value = val1 / 100 * val5;
      document.getElementById("cell8.6").value = val1 / 100 * val6;
      document.getElementById("cell8.7").value = val1 / 100 * val7;
      document.getElementById("cell8.8").value = val1 / 100 * val8;
      document.getElementById("cell8.9").value = val1 / 100 * val9;
      document.getElementById("cell8.10").value = val1 / 100 * val10;
      document.getElementById("cell8.11").value = val1 / 100 * val11;
      document.getElementById("cell8.12").value = val1 / 100 * val12;
      document.getElementById("cell8.13").value = val1 / 100 * val13;
      document.getElementById("cell8.14").value = val1 / 100 * val14;
      document.getElementById("cell8.15").value = val1 / 100 * val15;
      document.getElementById("cell8.16").value = val1 / 100 * val16;
      document.getElementById("cell8.17").value = val1 / 100 * val17;
      document.getElementById("cell8.18").value = val1 / 100 * val18;
      document.getElementById("cell8.19").value = val1 / 100 * val19;
      document.getElementById("cell8.20").value = val1 / 100 * val20;
      document.getElementById("cell8.21").value = val1 / 100 * val21;
      document.getElementById("cell8.22").value = val1 / 100 * val22;
      document.getElementById("cell8.23").value = val1 / 100 * val23;
      document.getElementById("cell8.24").value = val1 / 100 * val24;
      document.getElementById("cell8.25").value = val1 / 100 * val25;
      document.getElementById("cell8.26").value = val1 / 100 * val26;
      document.getElementById("cell8.27").value = val1 / 100 * val27;
      document.getElementById("cell8.28").value = val1 / 100 * val28;
    } else {
      document.getElementById("cell8.2").value = val2;
      document.getElementById("cell8.3").value = val3;
      document.getElementById("cell8.4").value = val4;
      document.getElementById("cell8.5").value = val5;
      document.getElementById("cell8.6").value = val6;
      document.getElementById("cell8.7").value = val7;
      document.getElementById("cell8.8").value = val8;
      document.getElementById("cell8.9").value = val9;
      document.getElementById("cell8.10").value = val10;
      document.getElementById("cell8.11").value = val11;
      document.getElementById("cell8.12").value = val12;
      document.getElementById("cell8.13").value = val13;
      document.getElementById("cell8.14").value = val14;
      document.getElementById("cell8.15").value = val15;
      document.getElementById("cell8.16").value = val16;
      document.getElementById("cell8.17").value = val17;
      document.getElementById("cell8.18").value = val18;
      document.getElementById("cell8.19").value = val19;
      document.getElementById("cell8.20").value = val20;
      document.getElementById("cell8.21").value = val21;
      document.getElementById("cell8.22").value = val22;
      document.getElementById("cell8.23").value = val23;
      document.getElementById("cell8.24").value = val24;
      document.getElementById("cell8.25").value = val25;
      document.getElementById("cell8.26").value = val26;
      document.getElementById("cell8.27").value = val27;
      document.getElementById("cell8.28").value = val28;
    }
}

function multiply9() {
    var val1 = document.getElementById("myNumberInput9.1").value;
    var val2 = 100; // изначальное значение
    var val3 = 98; // изначальное значение
    var val4 = 97; // изначальное значение
    var val5 = 96; // изначальное значение
    var val6 = 100; // изначальное значение
    var val7 = 100; // изначальное значение
    var val8 = 100; // изначальное значение
    var val9 = 100; // изначальное значение
    var val10 = 100; // изначальное значение
    var val11 = 100; // изначальное значение
    var val12 = 100; // изначальное значение
    var val13 = 100; // изначальное значение
    var val14 = 100; // изначальное значение
    var val15 = 100; // изначальное значение
    var val16 = 100; // изначальное значение
    var val17 = 100; // изначальное значение
    var val18 = 100; // изначальное значение
    var val19 = 100; // изначальное значение
    var val20 = 100; // изначальное значение
    var val21 = 100; // изначальное значение
    var val22 = 100; // изначальное значение
    var val23 = 100; // изначальное значение
    var val24 = 100; // изначальное значение
    var val25 = 100; // изначальное значение
    var val26 = 100; // изначальное значение
    var val27 = 100; // изначальное значение
    var val28 = 100; // изначальное значение
    if (val1 !== "") {
      document.getElementById("cell9.2").value = val1 / 100 * val2;
      document.getElementById("cell9.3").value = val1 / 100 * val3;
      document.getElementById("cell9.4").value = val1 / 100 * val4;
      document.getElementById("cell9.5").value = val1 / 100 * val5;
      document.getElementById("cell9.6").value = val1 / 100 * val6;
      document.getElementById("cell9.7").value = val1 / 100 * val7;
      document.getElementById("cell9.8").value = val1 / 100 * val8;
      document.getElementById("cell9.9").value = val1 / 100 * val9;
      document.getElementById("cell9.10").value = val1 / 100 * val10;
      document.getElementById("cell9.11").value = val1 / 100 * val11;
      document.getElementById("cell9.12").value = val1 / 100 * val12;
      document.getElementById("cell9.13").value = val1 / 100 * val13;
      document.getElementById("cell9.14").value = val1 / 100 * val14;
      document.getElementById("cell9.15").value = val1 / 100 * val15;
      document.getElementById("cell9.16").value = val1 / 100 * val16;
      document.getElementById("cell9.17").value = val1 / 100 * val17;
      document.getElementById("cell9.18").value = val1 / 100 * val18;
      document.getElementById("cell9.19").value = val1 / 100 * val19;
      document.getElementById("cell9.20").value = val1 / 100 * val20;
      document.getElementById("cell9.21").value = val1 / 100 * val21;
      document.getElementById("cell9.22").value = val1 / 100 * val22;
      document.getElementById("cell9.23").value = val1 / 100 * val23;
      document.getElementById("cell9.24").value = val1 / 100 * val24;
      document.getElementById("cell9.25").value = val1 / 100 * val25;
      document.getElementById("cell9.26").value = val1 / 100 * val26;
      document.getElementById("cell9.27").value = val1 / 100 * val27;
      document.getElementById("cell9.28").value = val1 / 100 * val28;
    } else {
      document.getElementById("cell9.2").value = val2;
      document.getElementById("cell9.3").value = val3;
      document.getElementById("cell9.4").value = val4;
      document.getElementById("cell9.5").value = val5;
      document.getElementById("cell9.6").value = val6;
      document.getElementById("cell9.7").value = val7;
      document.getElementById("cell9.8").value = val8;
      document.getElementById("cell9.9").value = val9;
      document.getElementById("cell9.10").value = val10;
      document.getElementById("cell9.11").value = val11;
      document.getElementById("cell9.12").value = val12;
      document.getElementById("cell9.13").value = val13;
      document.getElementById("cell9.14").value = val14;
      document.getElementById("cell9.15").value = val15;
      document.getElementById("cell9.16").value = val16;
      document.getElementById("cell9.17").value = val17;
      document.getElementById("cell9.18").value = val18;
      document.getElementById("cell9.19").value = val19;
      document.getElementById("cell9.20").value = val20;
      document.getElementById("cell9.21").value = val21;
      document.getElementById("cell9.22").value = val22;
      document.getElementById("cell9.23").value = val23;
      document.getElementById("cell9.24").value = val24;
      document.getElementById("cell9.25").value = val25;
      document.getElementById("cell9.26").value = val26;
      document.getElementById("cell9.27").value = val27;
      document.getElementById("cell9.28").value = val28;
    }
}

function multiply10() {
    var val1 = document.getElementById("myNumberInput10.1").value;
    var val2 = 100; // изначальное значение
    var val3 = 98; // изначальное значение
    var val4 = 97; // изначальное значение
    var val5 = 96; // изначальное значение
    var val6 = 100; // изначальное значение
    var val7 = 100; // изначальное значение
    var val8 = 100; // изначальное значение
    var val9 = 100; // изначальное значение
    var val10 = 100; // изначальное значение
    var val11 = 100; // изначальное значение
    var val12 = 100; // изначальное значение
    var val13 = 100; // изначальное значение
    var val14 = 100; // изначальное значение
    var val15 = 100; // изначальное значение
    var val16 = 100; // изначальное значение
    var val17 = 100; // изначальное значение
    var val18 = 100; // изначальное значение
    var val19 = 100; // изначальное значение
    var val20 = 100; // изначальное значение
    var val21 = 100; // изначальное значение
    var val22 = 100; // изначальное значение
    var val23 = 100; // изначальное значение
    var val24 = 100; // изначальное значение
    var val25 = 100; // изначальное значение
    var val26 = 100; // изначальное значение
    var val27 = 100; // изначальное значение
    var val28 = 100; // изначальное значение
    if (val1 !== "") {
      document.getElementById("cell10.2").value = val1 / 100 * val2;
      document.getElementById("cell10.3").value = val1 / 100 * val3;
      document.getElementById("cell10.4").value = val1 / 100 * val4;
      document.getElementById("cell10.5").value = val1 / 100 * val5;
      document.getElementById("cell10.6").value = val1 / 100 * val6;
      document.getElementById("cell10.7").value = val1 / 100 * val7;
      document.getElementById("cell10.8").value = val1 / 100 * val8;
      document.getElementById("cell10.9").value = val1 / 100 * val9;
      document.getElementById("cell10.10").value = val1 / 100 * val10;
      document.getElementById("cell10.11").value = val1 / 100 * val11;
      document.getElementById("cell10.12").value = val1 / 100 * val12;
      document.getElementById("cell10.13").value = val1 / 100 * val13;
      document.getElementById("cell10.14").value = val1 / 100 * val14;
      document.getElementById("cell10.15").value = val1 / 100 * val15;
      document.getElementById("cell10.16").value = val1 / 100 * val16;
      document.getElementById("cell10.17").value = val1 / 100 * val17;
      document.getElementById("cell10.18").value = val1 / 100 * val18;
      document.getElementById("cell10.19").value = val1 / 100 * val19;
      document.getElementById("cell10.20").value = val1 / 100 * val20;
      document.getElementById("cell10.21").value = val1 / 100 * val21;
      document.getElementById("cell10.22").value = val1 / 100 * val22;
      document.getElementById("cell10.23").value = val1 / 100 * val23;
      document.getElementById("cell10.24").value = val1 / 100 * val24;
      document.getElementById("cell10.25").value = val1 / 100 * val25;
      document.getElementById("cell10.26").value = val1 / 100 * val26;
      document.getElementById("cell10.27").value = val1 / 100 * val27;
      document.getElementById("cell10.28").value = val1 / 100 * val28;
    } else {
      document.getElementById("cell10.2").value = val2;
      document.getElementById("cell10.3").value = val3;
      document.getElementById("cell10.4").value = val4;
      document.getElementById("cell10.5").value = val5;
      document.getElementById("cell10.6").value = val6;
      document.getElementById("cell10.7").value = val7;
      document.getElementById("cell10.8").value = val8;
      document.getElementById("cell10.9").value = val9;
      document.getElementById("cell10.10").value = val10;
      document.getElementById("cell10.11").value = val11;
      document.getElementById("cell10.12").value = val12;
      document.getElementById("cell10.13").value = val13;
      document.getElementById("cell10.14").value = val14;
      document.getElementById("cell10.15").value = val15;
      document.getElementById("cell10.16").value = val16;
      document.getElementById("cell10.17").value = val17;
      document.getElementById("cell10.18").value = val18;
      document.getElementById("cell10.19").value = val19;
      document.getElementById("cell10.20").value = val20;
      document.getElementById("cell10.21").value = val21;
      document.getElementById("cell10.22").value = val22;
      document.getElementById("cell10.23").value = val23;
      document.getElementById("cell10.24").value = val24;
      document.getElementById("cell10.25").value = val25;
      document.getElementById("cell10.26").value = val26;
      document.getElementById("cell10.27").value = val27;
      document.getElementById("cell10.28").value = val28;
    }
}

function multiply11() {
    var val1 = document.getElementById("myNumberInput11.1").value;
    var val2 = 100; // изначальное значение
    var val3 = 98; // изначальное значение
    var val4 = 97; // изначальное значение
    var val5 = 96; // изначальное значение
    var val6 = 100; // изначальное значение
    var val7 = 100; // изначальное значение
    var val8 = 100; // изначальное значение
    var val9 = 100; // изначальное значение
    var val10 = 100; // изначальное значение
    var val11 = 100; // изначальное значение
    var val12 = 100; // изначальное значение
    var val13 = 100; // изначальное значение
    var val14 = 100; // изначальное значение
    var val15 = 100; // изначальное значение
    var val16 = 100; // изначальное значение
    var val17 = 100; // изначальное значение
    var val18 = 100; // изначальное значение
    var val19 = 100; // изначальное значение
    var val20 = 100; // изначальное значение
    var val21 = 100; // изначальное значение
    var val22 = 100; // изначальное значение
    var val23 = 100; // изначальное значение
    var val24 = 100; // изначальное значение
    var val25 = 100; // изначальное значение
    var val26 = 100; // изначальное значение
    var val27 = 100; // изначальное значение
    var val28 = 100; // изначальное значение
    if (val1 !== "") {
      document.getElementById("cell11.2").value = val1 / 100 * val2;
      document.getElementById("cell11.3").value = val1 / 100 * val3;
      document.getElementById("cell11.4").value = val1 / 100 * val4;
      document.getElementById("cell11.5").value = val1 / 100 * val5;
      document.getElementById("cell11.6").value = val1 / 100 * val6;
      document.getElementById("cell11.7").value = val1 / 100 * val7;
      document.getElementById("cell11.8").value = val1 / 100 * val8;
      document.getElementById("cell11.9").value = val1 / 100 * val9;
      document.getElementById("cell11.10").value = val1 / 100 * val10;
      document.getElementById("cell11.11").value = val1 / 100 * val11;
      document.getElementById("cell11.12").value = val1 / 100 * val12;
      document.getElementById("cell11.13").value = val1 / 100 * val13;
      document.getElementById("cell11.14").value = val1 / 100 * val14;
      document.getElementById("cell11.15").value = val1 / 100 * val15;
      document.getElementById("cell11.16").value = val1 / 100 * val16;
      document.getElementById("cell11.17").value = val1 / 100 * val17;
      document.getElementById("cell11.18").value = val1 / 100 * val18;
      document.getElementById("cell11.19").value = val1 / 100 * val19;
      document.getElementById("cell11.20").value = val1 / 100 * val20;
      document.getElementById("cell11.21").value = val1 / 100 * val21;
      document.getElementById("cell11.22").value = val1 / 100 * val22;
      document.getElementById("cell11.23").value = val1 / 100 * val23;
      document.getElementById("cell11.24").value = val1 / 100 * val24;
      document.getElementById("cell11.25").value = val1 / 100 * val25;
      document.getElementById("cell11.26").value = val1 / 100 * val26;
      document.getElementById("cell11.27").value = val1 / 100 * val27;
      document.getElementById("cell11.28").value = val1 / 100 * val28;
    } else {
      document.getElementById("cell11.2").value = val2;
      document.getElementById("cell11.3").value = val3;
      document.getElementById("cell11.4").value = val4;
      document.getElementById("cell11.5").value = val5;
      document.getElementById("cell11.6").value = val6;
      document.getElementById("cell11.7").value = val7;
      document.getElementById("cell11.8").value = val8;
      document.getElementById("cell11.9").value = val9;
      document.getElementById("cell11.10").value = val10;
      document.getElementById("cell11.11").value = val11;
      document.getElementById("cell11.12").value = val12;
      document.getElementById("cell11.13").value = val13;
      document.getElementById("cell11.14").value = val14;
      document.getElementById("cell11.15").value = val15;
      document.getElementById("cell11.16").value = val16;
      document.getElementById("cell11.17").value = val17;
      document.getElementById("cell11.18").value = val18;
      document.getElementById("cell11.19").value = val19;
      document.getElementById("cell11.20").value = val20;
      document.getElementById("cell11.21").value = val21;
      document.getElementById("cell11.22").value = val22;
      document.getElementById("cell11.23").value = val23;
      document.getElementById("cell11.24").value = val24;
      document.getElementById("cell11.25").value = val25;
      document.getElementById("cell11.26").value = val26;
      document.getElementById("cell11.27").value = val27;
      document.getElementById("cell11.28").value = val28;
    }
}

function multiply12() {
    var val1 = document.getElementById("myNumberInput12.1").value;
    var val2 = 100; // изначальное значение
    var val3 = 98; // изначальное значение
    var val4 = 97; // изначальное значение
    var val5 = 96; // изначальное значение
    var val6 = 100; // изначальное значение
    var val7 = 100; // изначальное значение
    var val8 = 100; // изначальное значение
    var val9 = 100; // изначальное значение
    var val10 = 100; // изначальное значение
    var val11 = 100; // изначальное значение
    var val12 = 100; // изначальное значение
    var val13 = 100; // изначальное значение
    var val14 = 100; // изначальное значение
    var val15 = 100; // изначальное значение
    var val16 = 100; // изначальное значение
    var val17 = 100; // изначальное значение
    var val18 = 100; // изначальное значение
    var val19 = 100; // изначальное значение
    var val20 = 100; // изначальное значение
    var val21 = 100; // изначальное значение
    var val22 = 100; // изначальное значение
    var val23 = 100; // изначальное значение
    var val24 = 100; // изначальное значение
    var val25 = 100; // изначальное значение
    var val26 = 100; // изначальное значение
    var val27 = 100; // изначальное значение
    var val28 = 100; // изначальное значение
    if (val1 !== "") {
      document.getElementById("cell12.2").value = val1 / 100 * val2;
      document.getElementById("cell12.3").value = val1 / 100 * val3;
      document.getElementById("cell12.4").value = val1 / 100 * val4;
      document.getElementById("cell12.5").value = val1 / 100 * val5;
      document.getElementById("cell12.6").value = val1 / 100 * val6;
      document.getElementById("cell12.7").value = val1 / 100 * val7;
      document.getElementById("cell12.8").value = val1 / 100 * val8;
      document.getElementById("cell12.9").value = val1 / 100 * val9;
      document.getElementById("cell12.10").value = val1 / 100 * val10;
      document.getElementById("cell12.11").value = val1 / 100 * val11;
      document.getElementById("cell12.12").value = val1 / 100 * val12;
      document.getElementById("cell12.13").value = val1 / 100 * val13;
      document.getElementById("cell12.14").value = val1 / 100 * val14;
      document.getElementById("cell12.15").value = val1 / 100 * val15;
      document.getElementById("cell12.16").value = val1 / 100 * val16;
      document.getElementById("cell12.17").value = val1 / 100 * val17;
      document.getElementById("cell12.18").value = val1 / 100 * val18;
      document.getElementById("cell12.19").value = val1 / 100 * val19;
      document.getElementById("cell12.20").value = val1 / 100 * val20;
      document.getElementById("cell12.21").value = val1 / 100 * val21;
      document.getElementById("cell12.22").value = val1 / 100 * val22;
      document.getElementById("cell12.23").value = val1 / 100 * val23;
      document.getElementById("cell12.24").value = val1 / 100 * val24;
      document.getElementById("cell12.25").value = val1 / 100 * val25;
      document.getElementById("cell12.26").value = val1 / 100 * val26;
      document.getElementById("cell12.27").value = val1 / 100 * val27;
      document.getElementById("cell12.28").value = val1 / 100 * val28;
    } else {
      document.getElementById("cell12.2").value = val2;
      document.getElementById("cell12.3").value = val3;
      document.getElementById("cell12.4").value = val4;
      document.getElementById("cell12.5").value = val5;
      document.getElementById("cell12.6").value = val6;
      document.getElementById("cell12.7").value = val7;
      document.getElementById("cell12.8").value = val8;
      document.getElementById("cell12.9").value = val9;
      document.getElementById("cell12.10").value = val10;
      document.getElementById("cell12.11").value = val11;
      document.getElementById("cell12.12").value = val12;
      document.getElementById("cell12.13").value = val13;
      document.getElementById("cell12.14").value = val14;
      document.getElementById("cell12.15").value = val15;
      document.getElementById("cell12.16").value = val16;
      document.getElementById("cell12.17").value = val17;
      document.getElementById("cell12.18").value = val18;
      document.getElementById("cell12.19").value = val19;
      document.getElementById("cell12.20").value = val20;
      document.getElementById("cell12.21").value = val21;
      document.getElementById("cell12.22").value = val22;
      document.getElementById("cell12.23").value = val23;
      document.getElementById("cell12.24").value = val24;
      document.getElementById("cell12.25").value = val25;
      document.getElementById("cell12.26").value = val26;
      document.getElementById("cell12.27").value = val27;
      document.getElementById("cell12.28").value = val28;
    }
}

function multiply13() {
    var val1 = document.getElementById("myNumberInput13.1").value;
    var val2 = 100; // изначальное значение
    var val3 = 98; // изначальное значение
    var val4 = 97; // изначальное значение
    var val5 = 96; // изначальное значение
    var val6 = 100; // изначальное значение
    var val7 = 100; // изначальное значение
    var val8 = 100; // изначальное значение
    var val9 = 100; // изначальное значение
    var val10 = 100; // изначальное значение
    var val11 = 100; // изначальное значение
    var val12 = 100; // изначальное значение
    var val13 = 100; // изначальное значение
    var val14 = 100; // изначальное значение
    var val15 = 100; // изначальное значение
    var val16 = 100; // изначальное значение
    var val17 = 100; // изначальное значение
    var val18 = 100; // изначальное значение
    var val19 = 100; // изначальное значение
    var val20 = 100; // изначальное значение
    var val21 = 100; // изначальное значение
    var val22 = 100; // изначальное значение
    var val23 = 100; // изначальное значение
    var val24 = 100; // изначальное значение
    var val25 = 100; // изначальное значение
    var val26 = 100; // изначальное значение
    var val27 = 100; // изначальное значение
    var val28 = 100; // изначальное значение
    if (val1 !== "") {
      document.getElementById("cell13.2").value = val1 / 100 * val2;
      document.getElementById("cell13.3").value = val1 / 100 * val3;
      document.getElementById("cell13.4").value = val1 / 100 * val4;
      document.getElementById("cell13.5").value = val1 / 100 * val5;
      document.getElementById("cell13.6").value = val1 / 100 * val6;
      document.getElementById("cell13.7").value = val1 / 100 * val7;
      document.getElementById("cell13.8").value = val1 / 100 * val8;
      document.getElementById("cell13.9").value = val1 / 100 * val9;
      document.getElementById("cell13.10").value = val1 / 100 * val10;
      document.getElementById("cell13.11").value = val1 / 100 * val11;
      document.getElementById("cell13.12").value = val1 / 100 * val12;
      document.getElementById("cell13.13").value = val1 / 100 * val13;
      document.getElementById("cell13.14").value = val1 / 100 * val14;
      document.getElementById("cell13.15").value = val1 / 100 * val15;
      document.getElementById("cell13.16").value = val1 / 100 * val16;
      document.getElementById("cell13.17").value = val1 / 100 * val17;
      document.getElementById("cell13.18").value = val1 / 100 * val18;
      document.getElementById("cell13.19").value = val1 / 100 * val19;
      document.getElementById("cell13.20").value = val1 / 100 * val20;
      document.getElementById("cell13.21").value = val1 / 100 * val21;
      document.getElementById("cell13.22").value = val1 / 100 * val22;
      document.getElementById("cell13.23").value = val1 / 100 * val23;
      document.getElementById("cell13.24").value = val1 / 100 * val24;
      document.getElementById("cell13.25").value = val1 / 100 * val25;
      document.getElementById("cell13.26").value = val1 / 100 * val26;
      document.getElementById("cell13.27").value = val1 / 100 * val27;
      document.getElementById("cell13.28").value = val1 / 100 * val28;
    } else {
      document.getElementById("cell13.2").value = val2;
      document.getElementById("cell13.3").value = val3;
      document.getElementById("cell13.4").value = val4;
      document.getElementById("cell13.5").value = val5;
      document.getElementById("cell13.6").value = val6;
      document.getElementById("cell13.7").value = val7;
      document.getElementById("cell13.8").value = val8;
      document.getElementById("cell13.9").value = val9;
      document.getElementById("cell13.10").value = val10;
      document.getElementById("cell13.11").value = val11;
      document.getElementById("cell13.12").value = val12;
      document.getElementById("cell13.13").value = val13;
      document.getElementById("cell13.14").value = val14;
      document.getElementById("cell13.15").value = val15;
      document.getElementById("cell13.16").value = val16;
      document.getElementById("cell13.17").value = val17;
      document.getElementById("cell13.18").value = val18;
      document.getElementById("cell13.19").value = val19;
      document.getElementById("cell13.20").value = val20;
      document.getElementById("cell13.21").value = val21;
      document.getElementById("cell13.22").value = val22;
      document.getElementById("cell13.23").value = val23;
      document.getElementById("cell13.24").value = val24;
      document.getElementById("cell13.25").value = val25;
      document.getElementById("cell13.26").value = val26;
      document.getElementById("cell13.27").value = val27;
      document.getElementById("cell13.28").value = val28;
    }
}

function multiply14() {
    var val1 = document.getElementById("myNumberInput14.1").value;
    var val2 = 100; // изначальное значение
    var val3 = 98; // изначальное значение
    var val4 = 97; // изначальное значение
    var val5 = 96; // изначальное значение
    var val6 = 100; // изначальное значение
    var val7 = 100; // изначальное значение
    var val8 = 100; // изначальное значение
    var val9 = 100; // изначальное значение
    var val10 = 100; // изначальное значение
    var val11 = 100; // изначальное значение
    var val12 = 100; // изначальное значение
    var val13 = 100; // изначальное значение
    var val14 = 100; // изначальное значение
    var val15 = 100; // изначальное значение
    var val16 = 100; // изначальное значение
    var val17 = 100; // изначальное значение
    var val18 = 100; // изначальное значение
    var val19 = 100; // изначальное значение
    var val20 = 100; // изначальное значение
    var val21 = 100; // изначальное значение
    var val22 = 100; // изначальное значение
    var val23 = 100; // изначальное значение
    var val24 = 100; // изначальное значение
    var val25 = 100; // изначальное значение
    var val26 = 100; // изначальное значение
    var val27 = 100; // изначальное значение
    var val28 = 100; // изначальное значение
    if (val1 !== "") {
      document.getElementById("cell14.2").value = val1 / 100 * val2;
      document.getElementById("cell14.3").value = val1 / 100 * val3;
      document.getElementById("cell14.4").value = val1 / 100 * val4;
      document.getElementById("cell14.5").value = val1 / 100 * val5;
      document.getElementById("cell14.6").value = val1 / 100 * val6;
      document.getElementById("cell14.7").value = val1 / 100 * val7;
      document.getElementById("cell14.8").value = val1 / 100 * val8;
      document.getElementById("cell14.9").value = val1 / 100 * val9;
      document.getElementById("cell14.10").value = val1 / 100 * val10;
      document.getElementById("cell14.11").value = val1 / 100 * val11;
      document.getElementById("cell14.12").value = val1 / 100 * val12;
      document.getElementById("cell14.13").value = val1 / 100 * val13;
      document.getElementById("cell14.14").value = val1 / 100 * val14;
      document.getElementById("cell14.15").value = val1 / 100 * val15;
      document.getElementById("cell14.16").value = val1 / 100 * val16;
      document.getElementById("cell14.17").value = val1 / 100 * val17;
      document.getElementById("cell14.18").value = val1 / 100 * val18;
      document.getElementById("cell14.19").value = val1 / 100 * val19;
      document.getElementById("cell14.20").value = val1 / 100 * val20;
      document.getElementById("cell14.21").value = val1 / 100 * val21;
      document.getElementById("cell14.22").value = val1 / 100 * val22;
      document.getElementById("cell14.23").value = val1 / 100 * val23;
      document.getElementById("cell14.24").value = val1 / 100 * val24;
      document.getElementById("cell14.25").value = val1 / 100 * val25;
      document.getElementById("cell14.26").value = val1 / 100 * val26;
      document.getElementById("cell14.27").value = val1 / 100 * val27;
      document.getElementById("cell14.28").value = val1 / 100 * val28;
    } else {
      document.getElementById("cell14.2").value = val2;
      document.getElementById("cell14.3").value = val3;
      document.getElementById("cell14.4").value = val4;
      document.getElementById("cell14.5").value = val5;
      document.getElementById("cell14.6").value = val6;
      document.getElementById("cell14.7").value = val7;
      document.getElementById("cell14.8").value = val8;
      document.getElementById("cell14.9").value = val9;
      document.getElementById("cell14.10").value = val10;
      document.getElementById("cell14.11").value = val11;
      document.getElementById("cell14.12").value = val12;
      document.getElementById("cell14.13").value = val13;
      document.getElementById("cell14.14").value = val14;
      document.getElementById("cell14.15").value = val15;
      document.getElementById("cell14.16").value = val16;
      document.getElementById("cell14.17").value = val17;
      document.getElementById("cell14.18").value = val18;
      document.getElementById("cell14.19").value = val19;
      document.getElementById("cell14.20").value = val20;
      document.getElementById("cell14.21").value = val21;
      document.getElementById("cell14.22").value = val22;
      document.getElementById("cell14.23").value = val23;
      document.getElementById("cell14.24").value = val24;
      document.getElementById("cell14.25").value = val25;
      document.getElementById("cell14.26").value = val26;
      document.getElementById("cell14.27").value = val27;
      document.getElementById("cell14.28").value = val28;
    }
}

function multiply15() {
    var val1 = document.getElementById("myNumberInput15.1").value;
    var val2 = 100; // изначальное значение
    var val3 = 98; // изначальное значение
    var val4 = 97; // изначальное значение
    var val5 = 96; // изначальное значение
    var val6 = 100; // изначальное значение
    var val7 = 100; // изначальное значение
    var val8 = 100; // изначальное значение
    var val9 = 100; // изначальное значение
    var val10 = 100; // изначальное значение
    var val11 = 100; // изначальное значение
    var val12 = 100; // изначальное значение
    var val13 = 100; // изначальное значение
    var val14 = 100; // изначальное значение
    var val15 = 100; // изначальное значение
    var val16 = 100; // изначальное значение
    var val17 = 100; // изначальное значение
    var val18 = 100; // изначальное значение
    var val19 = 100; // изначальное значение
    var val20 = 100; // изначальное значение
    var val21 = 100; // изначальное значение
    var val22 = 100; // изначальное значение
    var val23 = 100; // изначальное значение
    var val24 = 100; // изначальное значение
    var val25 = 100; // изначальное значение
    var val26 = 100; // изначальное значение
    var val27 = 100; // изначальное значение
    var val28 = 100; // изначальное значение
    if (val1 !== "") {
      document.getElementById("cell15.2").value = val1 / 100 * val2;
      document.getElementById("cell15.3").value = val1 / 100 * val3;
      document.getElementById("cell15.4").value = val1 / 100 * val4;
      document.getElementById("cell15.5").value = val1 / 100 * val5;
      document.getElementById("cell15.6").value = val1 / 100 * val6;
      document.getElementById("cell15.7").value = val1 / 100 * val7;
      document.getElementById("cell15.8").value = val1 / 100 * val8;
      document.getElementById("cell15.9").value = val1 / 100 * val9;
      document.getElementById("cell15.10").value = val1 / 100 * val10;
      document.getElementById("cell15.11").value = val1 / 100 * val11;
      document.getElementById("cell15.12").value = val1 / 100 * val12;
      document.getElementById("cell15.13").value = val1 / 100 * val13;
      document.getElementById("cell15.14").value = val1 / 100 * val14;
      document.getElementById("cell15.15").value = val1 / 100 * val15;
      document.getElementById("cell15.16").value = val1 / 100 * val16;
      document.getElementById("cell15.17").value = val1 / 100 * val17;
      document.getElementById("cell15.18").value = val1 / 100 * val18;
      document.getElementById("cell15.19").value = val1 / 100 * val19;
      document.getElementById("cell15.20").value = val1 / 100 * val20;
      document.getElementById("cell15.21").value = val1 / 100 * val21;
      document.getElementById("cell15.22").value = val1 / 100 * val22;
      document.getElementById("cell15.23").value = val1 / 100 * val23;
      document.getElementById("cell15.24").value = val1 / 100 * val24;
      document.getElementById("cell15.25").value = val1 / 100 * val25;
      document.getElementById("cell15.26").value = val1 / 100 * val26;
      document.getElementById("cell15.27").value = val1 / 100 * val27;
      document.getElementById("cell15.28").value = val1 / 100 * val28;
    } else {
      document.getElementById("cell15.2").value = val2;
      document.getElementById("cell15.3").value = val3;
      document.getElementById("cell15.4").value = val4;
      document.getElementById("cell15.5").value = val5;
      document.getElementById("cell15.6").value = val6;
      document.getElementById("cell15.7").value = val7;
      document.getElementById("cell15.8").value = val8;
      document.getElementById("cell15.9").value = val9;
      document.getElementById("cell15.10").value = val10;
      document.getElementById("cell15.11").value = val11;
      document.getElementById("cell15.12").value = val12;
      document.getElementById("cell15.13").value = val13;
      document.getElementById("cell15.14").value = val14;
      document.getElementById("cell15.15").value = val15;
      document.getElementById("cell15.16").value = val16;
      document.getElementById("cell15.17").value = val17;
      document.getElementById("cell15.18").value = val18;
      document.getElementById("cell15.19").value = val19;
      document.getElementById("cell15.20").value = val20;
      document.getElementById("cell15.21").value = val21;
      document.getElementById("cell15.22").value = val22;
      document.getElementById("cell15.23").value = val23;
      document.getElementById("cell15.24").value = val24;
      document.getElementById("cell15.25").value = val25;
      document.getElementById("cell15.26").value = val26;
      document.getElementById("cell15.27").value = val27;
      document.getElementById("cell15.28").value = val28;
    }
}

function multiply16() {
    var val1 = document.getElementById("myNumberInput16.1").value;
    var val2 = 100; // изначальное значение
    var val3 = 98; // изначальное значение
    var val4 = 97; // изначальное значение
    var val5 = 96; // изначальное значение
    var val6 = 100; // изначальное значение
    var val7 = 100; // изначальное значение
    var val8 = 100; // изначальное значение
    var val9 = 100; // изначальное значение
    var val10 = 100; // изначальное значение
    var val11 = 100; // изначальное значение
    var val12 = 100; // изначальное значение
    var val13 = 100; // изначальное значение
    var val14 = 100; // изначальное значение
    var val15 = 100; // изначальное значение
    var val16 = 100; // изначальное значение
    var val17 = 100; // изначальное значение
    var val18 = 100; // изначальное значение
    var val19 = 100; // изначальное значение
    var val20 = 100; // изначальное значение
    var val21 = 100; // изначальное значение
    var val22 = 100; // изначальное значение
    var val23 = 100; // изначальное значение
    var val24 = 100; // изначальное значение
    var val25 = 100; // изначальное значение
    var val26 = 100; // изначальное значение
    var val27 = 100; // изначальное значение
    var val28 = 100; // изначальное значение
    if (val1 !== "") {
      document.getElementById("cell16.2").value = val1 / 100 * val2;
      document.getElementById("cell16.3").value = val1 / 100 * val3;
      document.getElementById("cell16.4").value = val1 / 100 * val4;
      document.getElementById("cell16.5").value = val1 / 100 * val5;
      document.getElementById("cell16.6").value = val1 / 100 * val6;
      document.getElementById("cell16.7").value = val1 / 100 * val7;
      document.getElementById("cell16.8").value = val1 / 100 * val8;
      document.getElementById("cell16.9").value = val1 / 100 * val9;
      document.getElementById("cell16.10").value = val1 / 100 * val10;
      document.getElementById("cell16.11").value = val1 / 100 * val11;
      document.getElementById("cell16.12").value = val1 / 100 * val12;
      document.getElementById("cell16.13").value = val1 / 100 * val13;
      document.getElementById("cell16.14").value = val1 / 100 * val14;
      document.getElementById("cell16.15").value = val1 / 100 * val15;
      document.getElementById("cell16.16").value = val1 / 100 * val16;
      document.getElementById("cell16.17").value = val1 / 100 * val17;
      document.getElementById("cell16.18").value = val1 / 100 * val18;
      document.getElementById("cell16.19").value = val1 / 100 * val19;
      document.getElementById("cell16.20").value = val1 / 100 * val20;
      document.getElementById("cell16.21").value = val1 / 100 * val21;
      document.getElementById("cell16.22").value = val1 / 100 * val22;
      document.getElementById("cell16.23").value = val1 / 100 * val23;
      document.getElementById("cell16.24").value = val1 / 100 * val24;
      document.getElementById("cell16.25").value = val1 / 100 * val25;
      document.getElementById("cell16.26").value = val1 / 100 * val26;
      document.getElementById("cell16.27").value = val1 / 100 * val27;
      document.getElementById("cell16.28").value = val1 / 100 * val28;
    } else {
      document.getElementById("cell16.2").value = val2;
      document.getElementById("cell16.3").value = val3;
      document.getElementById("cell16.4").value = val4;
      document.getElementById("cell16.5").value = val5;
      document.getElementById("cell16.6").value = val6;
      document.getElementById("cell16.7").value = val7;
      document.getElementById("cell16.8").value = val8;
      document.getElementById("cell16.9").value = val9;
      document.getElementById("cell16.10").value = val10;
      document.getElementById("cell16.11").value = val11;
      document.getElementById("cell16.12").value = val12;
      document.getElementById("cell16.13").value = val13;
      document.getElementById("cell16.14").value = val14;
      document.getElementById("cell16.15").value = val15;
      document.getElementById("cell16.16").value = val16;
      document.getElementById("cell16.17").value = val17;
      document.getElementById("cell16.18").value = val18;
      document.getElementById("cell16.19").value = val19;
      document.getElementById("cell16.20").value = val20;
      document.getElementById("cell16.21").value = val21;
      document.getElementById("cell16.22").value = val22;
      document.getElementById("cell16.23").value = val23;
      document.getElementById("cell16.24").value = val24;
      document.getElementById("cell16.25").value = val25;
      document.getElementById("cell16.26").value = val26;
      document.getElementById("cell16.27").value = val27;
      document.getElementById("cell16.28").value = val28;
    }
}


numberInputs.forEach(function ourFunc(item, index, array) {
    item.addEventListener('keydown', function(event) {
        if(event.keyCode == 13) {
           Schet(event)
        }
      });
});

const ingredientsLink = document.querySelectorAll(".new-list__ingredients-link")
const allBlock = document.querySelectorAll(".new-list")

function useIngredientsLink(event){
    event.target.closest(".new-list").style.display="none";
}


allBlock.forEach((block, index) => {
    block.addEventListener('mouseover', () => {
        block.style.display="block";
    });
    
    block.addEventListener('mouseout', () => {
       block.style.display="none";
    });
  });

ingredientsLink.forEach( function ourFunction(item,index,array){
    item.addEventListener("click",useIngredientsLink)
});






// !Popup
const popupIngred = document.querySelectorAll(".new-list__ingredients")
const g = document.querySelectorAll(".ingredients-block__main-subblock");
const arrowList = document.querySelectorAll(".ingredients-block__img")
const checkboxNew = document.querySelectorAll(".ingredients-block__checkbox")
const checkboxSubMainBlock = document.querySelectorAll(".subblock-category")
const checkboxChoosen = document.querySelectorAll(".options-block__checkbox__checkbox")
const chechboxSubCheckbox = document.querySelectorAll(".subblock-category__checkbox") 
const vibranieCheckboxMainBlock = document.querySelector(".selected-ingredients") 
const zeroBlock = document.querySelector(".selected-ingredients__invisible")

function useArrowList(event){
    if (event.target.closest(".ingredients-block__main-subblock").nextElementSibling.hidden == false){

        event.target.closest(".ingredients-block__main-subblock").nextElementSibling.hidden = true;

        event.target.closest(".ingredients-block__img").classList.remove("ingredients-block__img_rotate");

    } else{
        event.target.closest(".ingredients-block__main-subblock").nextElementSibling.hidden = false;
        

        event.target.closest(".ingredients-block__img").classList.add("ingredients-block__img_rotate");
    }
}
function useSubCheckbox(event){
    let par = event.target.closest(".subblock-category").previousElementSibling.querySelector('.ingredients-block__checkbox')
    let count = 0
    if (par.checked==true){
        for (let index = 0; index < event.target.closest(".subblock-category").children.length; index++) {
            if (event.target.closest(".subblock-category").children[index].querySelector('.subblock-category__checkbox').checked==true) {
                count++;
            }
        if (count!=event.target.closest(".subblock-category").children.length) {
            par.checked=false
        }}
        if (event.target.checked == false) {
            let parentEvent = event.target.closest(".subblock-category").previousElementSibling.querySelector(".ingredients-block__text")
            let selectParentEvent = vibranieCheckboxMainBlock.querySelectorAll(".ingredients-block__text")
            for (let index = 0; index < selectParentEvent.length; index++) {
                if (selectParentEvent[index].textContent.replace(/\n/g, '').trim() == parentEvent.textContent.replace(/\n/g, '').trim()){
                    selectParentEvent[index].closest(".ingredients-block__category").remove()
                    break;
                }
            }   
            let eventSiblings = event.target.closest(".subblock-category").children
            for (let index = 0; index < eventSiblings.length; index++) {
                if (eventSiblings[index].querySelector(".subblock-category__checkbox").checked == true){
                    let newElem = eventSiblings[index].closest(".subblock-category__subcategory-block").cloneNode(true);
                    newElem.querySelector(".subblock-category__checkbox").checked=true;
                    newElem.querySelector(".subblock-category__checkbox").disabled=true;
                    vibranieCheckboxMainBlock.insertBefore(newElem, document.querySelectorAll(".selected-ingredients__line")[document.querySelectorAll(".selected-ingredients__line").length-1]);
                }
            }
            if (vibranieCheckboxMainBlock.querySelectorAll(".ingredients-block__category").length!=0 || vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block").length!=0){
                zeroBlock.hidden = true;
            }
            else{
                zeroBlock.hidden = false;
            }
        }
    } 
    else{
        for (let index = 0; index < event.target.closest(".subblock-category").children.length; index++) {
            if (event.target.closest(".subblock-category").children[index].querySelector('.subblock-category__checkbox').checked==true) {
                count++;
            }
        if (count==event.target.closest(".subblock-category").children.length) {
            par.checked=true
        }}
        if (event.target.checked == true) {
            let newElem = event.target.closest(".subblock-category__subcategory-block").cloneNode(true);
            vibranieCheckboxMainBlock.insertBefore(newElem, document.querySelectorAll(".selected-ingredients__line")[document.querySelectorAll(".selected-ingredients__line").length-1]);
            newElem.querySelector('.subblock-category__checkbox').disabled=true;   
            if (par.checked==true){
                newElemDelText = vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block")
                masOldSubElements = event.target.closest(".subblock-category").children
                masNewSubElements=[];
                for (let index = 0; index < masOldSubElements.length; index++) {
                    masNewSubElements.push(masOldSubElements[index].querySelector(".subblock-category__text").textContent.replace(/\n/g, '').trim())
                }
                for (let index = 0; index < newElemDelText.length; index++) {
                    if (masNewSubElements.includes(newElemDelText[index].querySelector(".subblock-category__text").textContent.replace(/\n/g, '').trim())) {
                        newElemDelText[index].remove();
                    }    
                }
                let newElem = event.target.closest(".ingredients-block__category").cloneNode(true);
                vibranieCheckboxMainBlock.insertBefore(newElem, document.querySelectorAll(".selected-ingredients__line")[document.querySelectorAll(".selected-ingredients__line").length-1]);
                for (let index = 0; index < newElem.querySelectorAll('input[type="checkbox"]').length; index++) {
                    newElem.querySelectorAll('input[type="checkbox"]')[index].disabled=true;   
                }
                newElem.querySelectorAll(".ingredients-block__img").forEach( function ourFunction(item, index, array){
                    item.addEventListener("click",useSelectArrow)
                });
            }
            if (vibranieCheckboxMainBlock.querySelectorAll(".ingredients-block__category").length!=0 || vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block").length!=0){
                zeroBlock.hidden = true;
            }
            else{
                zeroBlock.hidden = false;
            }
        }
        else{
            newElemDel = vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block")
            for (let index = 0; index < newElemDel.length; index++) {
                if (newElemDel[index].textContent.replace(/\n/g, '').trim() == event.target.nextElementSibling.textContent.replace(/\n/g, '').trim()) {
                    newElemDel[index].remove();
                    break
                }
            }
            if (vibranieCheckboxMainBlock.querySelectorAll(".ingredients-block__category").length!=0 || vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block").length!=0){
                zeroBlock.hidden = true;
            }
            else{
                zeroBlock.hidden = false;
            }
        }
    }
}

function useSelectArrow(event){
    if (event.target.closest(".ingredients-block__main-subblock").nextElementSibling.hidden == false){

        event.target.closest(".ingredients-block__main-subblock").nextElementSibling.hidden = true;

        event.target.closest(".ingredients-block__img").classList.remove("ingredients-block__img_rotate");

    } else{
        event.target.closest(".ingredients-block__main-subblock").nextElementSibling.hidden = false;
        

        event.target.closest(".ingredients-block__img").classList.add("ingredients-block__img_rotate");
    }
};

function useCheckbox(event){
    if (event.target.closest(".ingredients-block__checkbox").checked == true){
        for (let index = 0; index < event.target.closest(".ingredients-block__checkbox").parentNode.parentNode.nextElementSibling.children.length; index++) {
            event.target.closest(".ingredients-block__main-subblock").nextElementSibling.children[index].firstElementChild.checked=true;
        }
        newElemDelText = vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block")
        masOldSubElements = event.target.closest(".ingredients-block__main-subblock").nextElementSibling.children
        masNewSubElements=[];
        for (let index = 0; index < masOldSubElements.length; index++) {
            masNewSubElements.push(masOldSubElements[index].querySelector(".subblock-category__text").textContent.replace(/\n/g, '').trim())
        }
        for (let index = 0; index < newElemDelText.length; index++) {
            if (masNewSubElements.includes(newElemDelText[index].querySelector(".subblock-category__text").textContent.replace(/\n/g, '').trim())) {
                newElemDelText[index].remove();
            }    
        }
        let newElem = event.target.closest(".ingredients-block__category").cloneNode(true);
        vibranieCheckboxMainBlock.insertBefore(newElem, document.querySelectorAll(".selected-ingredients__line")[document.querySelectorAll(".selected-ingredients__line").length-1]);
        for (let index = 0; index < newElem.querySelectorAll('input[type="checkbox"]').length; index++) {
            newElem.querySelectorAll('input[type="checkbox"]')[index].disabled=true;
            
        }
        newElem.querySelectorAll(".ingredients-block__img").forEach( function ourFunction(item, index, array){
            item.addEventListener("click",useSelectArrow)
        });
        if (vibranieCheckboxMainBlock.querySelectorAll(".ingredients-block__category").length!=0 || vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block").length!=0){
            zeroBlock.hidden = true;
        }
        else{
            zeroBlock.hidden = false;
        }
    }
    else{
        for (let index = 0; index < event.target.closest(".ingredients-block__checkbox").parentNode.parentNode.nextElementSibling.children.length; index++) {
            event.target.closest(".ingredients-block__main-subblock").nextElementSibling.children[index].firstElementChild.checked=false;
        }
        newElemDel = vibranieCheckboxMainBlock.querySelectorAll(".ingredients-block__text")
        for (let index = 0; index < newElemDel.length; index++) {
            if (newElemDel[index].textContent.replace(/\n/g, '').trim() == event.target.nextElementSibling.textContent.replace(/\n/g, '').trim()) {
                newElemDel[index].closest(".ingredients-block__category").remove();
            }     
        }
        if (vibranieCheckboxMainBlock.querySelectorAll(".ingredients-block__category").length!=0 || vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block").length!=0){
            zeroBlock.hidden = true;
        }
        else{
            zeroBlock.hidden = false;
        }
    }
};


arrowList.forEach( function ourFunction(item,index,array){
    item.addEventListener("click",useArrowList)
});
chechboxSubCheckbox.forEach( function ourFunction(item,index,array){
    item.addEventListener("click",useSubCheckbox)
});

checkboxNew.forEach( function ourFunction(item, index, array){
    item.addEventListener("click",useCheckbox)
});

const searchInput = document.querySelector('.choise-block__search');
const religions = document.querySelectorAll('.Ch');

searchInput.addEventListener('input', function() {
  const searchText = this.value.toLowerCase();

  religions.forEach(function(religion) {
    const religionText = religion.textContent.toLowerCase();
    const religionBlock = religion.nextElementSibling;

    if (religionText.includes(searchText)) {
      religion.style.display = 'block';
      religionBlock.style.display = 'block';
    } else {
      religion.style.display = 'none';
      religionBlock.style.display = 'none';
    }
  });
});

const religions2 = document.querySelectorAll('.Ch2');

searchInput.addEventListener('input', function() {
  const searchText = this.value.toLowerCase();

  religions2.forEach(function(religion) {
    const religionText = religion.textContent.toLowerCase();
    const religionBlock = religion.nextElementSibling;

    if (religionText.includes(searchText)) {
      religion.style.display = 'block';
      religionBlock.style.display = 'block';
    } else {
      religion.style.display = 'none';
      religionBlock.style.display = 'none';
    }
  });
});

const religions3 = document.querySelectorAll('.Ch3');

searchInput.addEventListener('input', function() {
  const searchText = this.value.toLowerCase();

  religions3.forEach(function(religion) {
    const religionText = religion.textContent.toLowerCase();
    const religionBlock = religion.nextElementSibling;

    if (religionText.includes(searchText)) {
      religion.style.display = 'block';
      religionBlock.style.display = 'block';
    } else {
      religion.style.display = 'none';
      religionBlock.style.display = 'none';
    }
  });
});

const religions4 = document.querySelectorAll('.Ch4');

searchInput.addEventListener('input', function() {
  const searchText = this.value.toLowerCase();

  religions4.forEach(function(religion) {
    const religionText = religion.textContent.toLowerCase();
    const religionBlock = religion.nextElementSibling;

    if (religionText.includes(searchText)) {
      religion.style.display = 'block';
      religionBlock.style.display = 'block';
    } else {
      religion.style.display = 'none';
      religionBlock.style.display = 'none';
    }
  });
});

/*
document.getElementById('myNumberInput1.1').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1;
    }
});

document.getElementById('myNumberInput2.1').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1;
    }
});

document.getElementById('myNumberInput3.1').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1;
    }
});

document.getElementById('myNumberInput4.1').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1;
    }
});

document.getElementById('myNumberInput5.1').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1;
    }
});

document.getElementById('myNumberInput6.1').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1;
    }
});

document.getElementById('myNumberInput7.1').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1;
    }
});

document.getElementById('myNumberInput8.1').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1;
    }
});

document.getElementById('myNumberInput9.1').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1;
    }
});

document.getElementById('myNumberInput10.1').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1;
    }
});

document.getElementById('myNumberInput11.1').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1;
    }
});

document.getElementById('myNumberInput12.1').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1;
    }
});

document.getElementById('myNumberInput13.1').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1;
    }
});

document.getElementById('myNumberInput14.1').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1;
    }
});

document.getElementById('myNumberInput15.1').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1;
    }
});

document.getElementById('myNumberInput16.1').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1;
    }
});
*/


function addRow() {
    const table = document.getElementById('foodTable0').getElementsByTagName('tbody')[0];
    const newRow = document.createElement('tr');
    newRow.setAttribute('align', 'center');
    newRow.setAttribute('class', 'food-composition');
    newRow.setAttribute('id', `id${table.rows.length + 1}`);

    // Создание ячейки содержания
    const titleCell = document.createElement('td');
    titleCell.setAttribute('class', 'food-composition__title composition-title-field');

    const titleDiv = document.createElement('div');
    titleDiv.setAttribute('class', 'composition-title-field__flex');

    const titleText = document.createElement('div');
    titleText.setAttribute('class', 'composition-title-field__text');
    titleText.textContent = document.getElementById('inputTitle').value || 'ПК';

    titleDiv.appendChild(createImage('img/pencil.png', 'composition-title-field__edit'));
    titleDiv.appendChild(titleText);
    titleDiv.appendChild(createImage('img/black_cross.png', 'composition-title-field__del'));

    titleCell.appendChild(titleDiv);
    titleCell.appendChild(createHiddenDeleteBlock());
    newRow.appendChild(titleCell);

    // Создание остальных ячеек с input
    newRow.appendChild(createInputCell('weight-cell', 'myNumberInput', document.getElementById('inputWeight').value));
    newRow.appendChild(createInputCell('water-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('protein-cell', 'cell', 98, true));
    newRow.appendChild(createInputCell('fat-cell', 'cell', 97, true));
    newRow.appendChild(createInputCell('nshk-cell', 'cell', 96, true));
    newRow.appendChild(createInputCell('hol-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('mds-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('kp-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('ugl-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('pv-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('ok-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('ash-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('na-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('k-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('ca-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('mg-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('p-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('fe-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('a-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('kar-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('pe-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('te-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('b1-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('b2-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('pp-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('ne-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('c-cell', 'cell', 100, true));
    newRow.appendChild(createInputCell('ec-cell', 'cell', 100, true));

    // Добавляем новую строку в таблицу
    table.appendChild(newRow);
    
}

function createImage(src, className) {
    const img = document.createElement('img');
    img.setAttribute('src', `{% static '${src}' %}`);
    img.setAttribute('class', className);
    return img;
}

function createHiddenDeleteBlock() {
    const hiddenBlock = document.createElement('div');
    hiddenBlock.setAttribute('class', 'composition-title-field__hidden composition-delete-block');
    hiddenBlock.style.display = 'none';

    const title = document.createElement('div');
    title.setAttribute('class', 'composition-delete-block__title');
    title.textContent = 'Точно хотите удалить?';

    const subBlockFirst = createDeleteSubBlock('Да');
    const subBlockSecond = createDeleteSubBlock('Нет');

    hiddenBlock.appendChild(title);
    hiddenBlock.appendChild(subBlockFirst);
    hiddenBlock.appendChild(subBlockSecond);

    return hiddenBlock;
}

function createDeleteSubBlock(text) {
    const subBlock = document.createElement('div');
    subBlock.setAttribute('class', `composition-delete-block__subblock`);

    const subInner = document.createElement('div');
    subInner.setAttribute('class', `composition-delete-block__sub${text.toLowerCase()}`);
    
    const innerText = document.createElement('div');
    innerText.setAttribute('class', `composition-delete-block__${text.toLowerCase()}`);
    innerText.textContent = text;

    subInner.appendChild(innerText);
    subBlock.appendChild(subInner);
    return subBlock;
}

function createInputCell(className, idPrefix, value, isDisabled = false) {
    const cell = document.createElement('td');
    const input = document.createElement('input');
    input.setAttribute('oninput', 'multiply()');
    input.setAttribute('type', 'number');
    if (isDisabled) {
        input.setAttribute('disabled', true);
    } else {
        input.setAttribute('min', 1);
        input.setAttribute('onkeydown', 'return event.key !== "-"');
    }
    input.setAttribute('class', className);
    input.setAttribute('id', `${idPrefix}${document.getElementById('foodTable0').rows.length}.${className}`);
    input.value = value;

    cell.appendChild(input);
    return cell;
}

function multiply0() {
    var val1 = document.getElementById("myNumberInput0.1").value;
    var val2 = 100; // изначальное значение
    var val3 = 98; // изначальное значение
    var val4 = 97; // изначальное значение
    var val5 = 96; // изначальное значение
    var val6 = 100; // изначальное значение
    var val7 = 100; // изначальное значение
    var val8 = 100; // изначальное значение
    var val9 = 100; // изначальное значение
    var val10 = 100; // изначальное значение
    var val11 = 100; // изначальное значение
    var val12 = 100; // изначальное значение
    var val13 = 100; // изначальное значение
    var val14 = 100; // изначальное значение
    var val15 = 100; // изначальное значение
    var val16 = 100; // изначальное значение
    var val17 = 100; // изначальное значение
    var val18 = 100; // изначальное значение
    var val19 = 100; // изначальное значение
    var val20 = 100; // изначальное значение
    var val21 = 100; // изначальное значение
    var val22 = 100; // изначальное значение
    var val23 = 100; // изначальное значение
    var val24 = 100; // изначальное значение
    var val25 = 100; // изначальное значение
    var val26 = 100; // изначальное значение
    var val27 = 100; // изначальное значение
    var val28 = 100; // изначальное значение
    if (val1 !== "") {
      document.getElementById("cell0.2").value = val1 / 100 * val2;
      document.getElementById("cell0.3").value = val1 / 100 * val3;
      document.getElementById("cell0.4").value = val1 / 100 * val4;
      document.getElementById("cell0.5").value = val1 / 100 * val5;
      document.getElementById("cell0.6").value = val1 / 100 * val6;
      document.getElementById("cell0.7").value = val1 / 100 * val7;
      document.getElementById("cell0.8").value = val1 / 100 * val8;
      document.getElementById("cell0.9").value = val1 / 100 * val9;
      document.getElementById("cell0.10").value = val1 / 100 * val10;
      document.getElementById("cell0.11").value = val1 / 100 * val11;
      document.getElementById("cell0.12").value = val1 / 100 * val12;
      document.getElementById("cell0.13").value = val1 / 100 * val13;
      document.getElementById("cell0.14").value = val1 / 100 * val14;
      document.getElementById("cell0.15").value = val1 / 100 * val15;
      document.getElementById("cell0.16").value = val1 / 100 * val16;
      document.getElementById("cell0.17").value = val1 / 100 * val17;
      document.getElementById("cell0.18").value = val1 / 100 * val18;
      document.getElementById("cell0.19").value = val1 / 100 * val19;
      document.getElementById("cell0.20").value = val1 / 100 * val20;
      document.getElementById("cell0.21").value = val1 / 100 * val21;
      document.getElementById("cell0.22").value = val1 / 100 * val22;
      document.getElementById("cell0.23").value = val1 / 100 * val23;
      document.getElementById("cell0.24").value = val1 / 100 * val24;
      document.getElementById("cell0.25").value = val1 / 100 * val25;
      document.getElementById("cell0.26").value = val1 / 100 * val26;
      document.getElementById("cell0.27").value = val1 / 100 * val27;
      document.getElementById("cell0.28").value = val1 / 100 * val28;
    } else {
      document.getElementById("cell0.2").value = val2;
      document.getElementById("cell0.3").value = val3;
      document.getElementById("cell0.4").value = val4;
      document.getElementById("cell0.5").value = val5;
      document.getElementById("cell0.6").value = val6;
      document.getElementById("cell0.7").value = val7;
      document.getElementById("cell0.8").value = val8;
      document.getElementById("cell0.9").value = val9;
      document.getElementById("cell0.10").value = val10;
      document.getElementById("cell0.11").value = val11;
      document.getElementById("cell0.12").value = val12;
      document.getElementById("cell0.13").value = val13;
      document.getElementById("cell0.14").value = val14;
      document.getElementById("cell0.15").value = val15;
      document.getElementById("cell0.16").value = val16;
      document.getElementById("cell0.17").value = val17;
      document.getElementById("cell0.18").value = val18;
      document.getElementById("cell0.19").value = val19;
      document.getElementById("cell0.20").value = val20;
      document.getElementById("cell0.21").value = val21;
      document.getElementById("cell0.22").value = val22;
      document.getElementById("cell0.23").value = val23;
      document.getElementById("cell0.24").value = val24;
      document.getElementById("cell0.25").value = val25;
      document.getElementById("cell0.26").value = val26;
      document.getElementById("cell0.27").value = val27;
      document.getElementById("cell0.28").value = val28;
    }
}