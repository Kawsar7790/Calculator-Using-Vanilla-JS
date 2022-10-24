const action_opt = ['+', '-', '*','/'];
const digitvalues = document.querySelectorAll('.value');
const calcvalues = document.querySelectorAll('.calc');
const dotvalue = document.querySelector('.dot');
const clear = document.querySelector('.clear');
const display = document.querySelector('#display');
const zero = '0';

if (display.value.length == 0) {
    display.value = "0";
}

digitvalues.forEach( digitvalue => {
    digitvalue.addEventListener('click' , function() {
            let btnvalue = digitvalue.value;
            display.value += btnvalue;    
    })
});

digitvalues.forEach( digitvalue => {
    digitvalue.addEventListener('click' , function(e) {
        let display_value = display.value;
        if (display_value.length > 1 && display_value.charAt(0) === '0' && e.target.value != '.' ) {
            let zerovalue = display_value.charAt(0);
            let replaced_value = display_value.replace(zerovalue,'');
            display.value = replaced_value;
        }
    })
});

let recheck = document.querySelector('.recheck');
recheck.addEventListener('click' , function() {
    const deleted_val= display.value.substr(0,display.value.length-1);
    display.value = deleted_val;
    if (display.value.length === 0) {
        display.value = "0";
    }
});



clear.addEventListener('click' , function() {
    display.value = "0";
    if (display.value.charAt(1) === 1 ) {
        
    }
});



dotvalue.addEventListener('click' , function(e) {
    display.value += '0.';
});

// calcvalues.forEach( calcvalue => {
//     calcvalue.addEventListener('click' , function() {
//             let operatorvalue = calcvalue.value;
//             display.value += operatorvalue;
//             for (let i = 0; i < display.value.length; i++) {
//                 for (let j = 0; j < action_opt.length; j++) {
//                     if (display.value.includes(action_opt[j])) {
//                         calcvalues.forEach( calcvalue => {
//                             calcvalue.addEventListener('click' , function(e) {
//                                 let opt_pos = display.value.indexOf(action_opt[j]);
//                                 let signvalue = display.value.charAt(opt_pos);
//                                 console.log(signvalue);
//                                 let replaced_sign_value = display.value.replace(signvalue,'');
//                                 display.value = replaced_sign_value;
//                             })
//                         });
//                     }    

//                         digitvalues.forEach( digitvalue => {
//                             digitvalue.addEventListener('click' , function() {
//                                 for (const calcvalue of calcvalues) {
//                                     calcvalue.disabled = true;
//                                   }
//                             })
//                         });
                        
//                         recheck.addEventListener('click' , function() {
//                             if (display.value.slice(-1) == action_opt[j]) {
//                                 for (const calcvalue of calcvalues) {
//                                     calcvalue.disabled = false;
//                                   }
//                             }
//                         });

//                     }
//                 }
              
//     })
// });

 