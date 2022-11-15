const action_opt = ['+', '-', '*','/'];
const digitvalues = document.querySelectorAll('.value');
const calcvalues = document.querySelectorAll('.calc');
const dotvalue = document.querySelector('.dot');
const clear = document.querySelector('.clear');
const display = document.querySelector('#display');
const recheck = document.querySelector('.recheck');
const equal = document.querySelector('.equal');
const zero = '0';



if (display.value.length == 0) {
    display.value = "0";
}


digitvalues.forEach( digitvalue => {
    digitvalue.addEventListener('click' , function(e) {
        let display_value = display.value;
        let btnvalue = digitvalue.value;
        if(display_value.length = 1 && display_value.charAt(0) === '0' && display_value.charAt(1) != '.'){
            let zerovalue = display_value.charAt(0);
            let replaced_value = display_value.replace(zerovalue,btnvalue);
            display.value = replaced_value;
            
        }
        else {
            display.value += btnvalue; 
        }

       
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



calcvalues.forEach( calcvalue => {
    calcvalue.addEventListener('click' , function(e) {
        let res = action_opt.find(cl => display.value.includes(cl));
       // let last_char = display.value.charAt(display.value.length-1);
        if (res === undefined) {
            display.value += e.target.value;
        }

        // else{

        //     let optpos = display.value.indexOf(res);
        //     let opt = display.value.charAt(optpos);
        //     // let replaced_opt = display.value.replace(opt,e.target.value);
        //     // display.value = replaced_opt;
        //     // console.log(optpos);
        //     // console.log(display.value.length);

            
        // }

       
    })
});

equal.addEventListener('click' , function() {
    let res = action_opt.find(cl => display.value.includes(cl));
    if (res != undefined) {
        let values = display.value.split(res);
        let num1 = parseInt(values[0]);
        let num2 = parseInt(values[1]);

        if (res === '+') {
            display.value = num1+num2;
        }
        else if (res === '-'){
            display.value = num1-num2;
        }
        else if (res === '*'){
            display.value = num1*num2;
        }
        else {
            display.value = num1/num2;
        }
        
    }

});
