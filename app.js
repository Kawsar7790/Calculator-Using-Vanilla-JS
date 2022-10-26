const action_opt = ['+', '-', '*','/'];
const digitvalues = document.querySelectorAll('.value');
const calcvalues = document.querySelectorAll('.calc');
const dotvalue = document.querySelector('.dot');
const clear = document.querySelector('.clear');
const display = document.querySelector('#display');
const recheck = document.querySelector('.recheck');
const zero = '0';

if (display.value.length == 0) {
    display.value = "0";
}


digitvalues.forEach( digitvalue => {
    digitvalue.addEventListener('click' , function(e) {
        let display_value = display.value;

        if(display_value.length > 1 && display_value.charAt(0) === '0' && display_value.charAt(1) === '.'){
            console.log("Latest");
            display_value += digitvalue;
            console.log(display_value);
        }
        else{
            let zerovalue = display_value.charAt(0);
            let replaced_value = display_value.replace(zerovalue,'');
            display.value = replaced_value;
        }
       
    })
});




digitvalues.forEach( digitvalue => {
    digitvalue.addEventListener('click' , function() {
            let btnvalue = digitvalue.value;
            display.value += btnvalue;    
    })
});



recheck.addEventListener('click' , function() {
    const deleted_val= display.value.substr(0,display.value.length-1);
    display.value = deleted_val;
    if (display.value.length === 0) {
        display.value = "0";
    }
});



clear.addEventListener('click' , function() {
    display.value = "0";
});



dotvalue.addEventListener('click' , function() {
    display.value += dotvalue.value;
});



 