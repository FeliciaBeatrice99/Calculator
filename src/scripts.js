
// to execute the js after html and css is completely
document.addEventListener("DOMContentLoaded", function(){
    const display = document.getElementById("calcDisplay");
    const buttons = document.getElementsByClassName("btn");

    let currentValue = "";
    function test() {
        try {
          console.log(currentValue);
          const convertedValue = currentValue.replace("×", "*")
          .replace("÷", "/")
          .replace("%", "*0.01");
          console.log(convertedValue);

          const result = eval(convertedValue);
          display.value = result;
          currentValue = result;
        } catch (error) {
            display.value = 'Error';
        }
      }
    function test1(){
        const currentValue1 = currentValue;
const result = eval(currentValue1); // This will result in 18
console.log(result);
        // currentValue = 9*2;
        //     const result = eval(currentValue);
        //     console.log(result);
    }
    for(i=0; i<buttons.length; i++){
        const button = buttons[i];
        
            button.addEventListener('click', function() {
                const value = button.innerText;
                if(value == "CE"){
                    currentValue = "0";
                    display.value = currentValue;
                    currentValue = "";

                }else if(value == "="){
                    test();

                } else {
                    currentValue += value;
                    display.value = currentValue;
                }
                
            });

            // if(buttons[i] = buttons[3] ){
            //     buttons[3].addEventListener('click', function() {
            //         currentValue = "0";
            //         display.value = currentValue;
            //         currentValue = "";

            //     })
            // }

        
    }
});