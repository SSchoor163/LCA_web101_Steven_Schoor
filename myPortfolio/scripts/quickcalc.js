$(document).ready(function(){
    let calcInput = '0';
    let currentNumber = 0.0;
    let currentNumStr = '0';
    $('button').click(function(e){
        e.preventDefault();
        let text = this.value;
        let reset = false;
//fix
        if(currentNumStr=="0" && calcInput == "0")
        {
            if(text== 'del' || text=='enter' || text == '+' || text=='-' || text =='*' || text=='/' || text=="clear" || text=="neg")
            {
                return;
            }
        }
        if(text=="neg")
        {
            if(currentNumStr == "0")
            {
                return;
            }
            else
            {
                currentNumber = parseFloat(currentNumStr);
                currentNumber = currentNumber * -1;
                currentNumStr = currentNumber.toString();
                currentNumber = 0;
                $('fieldset').text(currentNumStr);
            }
        }
        else if(text == 'del')
        {
            if(currentNumber != 0)
            {
            currentNumber = 0;
            }else
            {
                return;
            }
        }
        else if(text == "enter")
        {
            currentNumber = parseFloat(currentNumStr);
            calcInput +=currentNumber;
            calcInput = eval(calcInput);
            $('fieldset').text(calcInput);
            reset = true;
        }
        else if (text == 'clear')
        {
            reset = true
            $('fieldset').text('0');
        }
        else if (text == "+" || text == "-" || text == "*" || text == "/")
        {
            if(calcInput.slice(-1) =='+' || calcInput.slice(-1) =='-' || calcInput.slice(-1) =='*' || calcInput.slice(-1) =='/')
            {
                return;
            }
            else
            {
            currentNumber = parseFloat(currentNumStr);
            if(calcInput == "0")
            {
                calcInput = null;
            }
            calcInput = calcInput+ currentNumber + text;
            currentNumber = 0;
            currentNumStr = "0";
            $('fieldset').text(calcInput);
            }
        }else 
        {   if(currentNumStr== '0')
            {
                currentNumStr = text;
            }else
            {
            currentNumStr += text;
            }
            $('fieldset').text(currentNumStr);
        }

        
       
        if(reset== true){
            reset = false;
            calcInput = "0";
            currentNumber = 0.0;
            currentNumStr = "0"
        }
    });

});