
        document.getElementById("button-reset").addEventListener('click',Reset,false);
        document.getElementById("button-percent").addEventListener('click',percent,false);
        document.getElementById("button-SquareRoot").addEventListener('click',SquareRoot,false);
        document.getElementById("button-changeSign").addEventListener('click',changeSign,false);

    var FirstOperand = null,
        flagNewOperand = false,
        opSelection = '';

    function Reset() {
        document.calculator.display.value = '0';
        FirstOperand = null;
        flagNewOperand = false;
        opSelection = '';
    }

    function getData(i) {
        var i,
        nul = document.calculator.display.value,
        number;
        if (flagNewOperand) {
            document.calculator.display.value = ''
        }
        if (nul == '0') {
             document.calculator.display.value = '';
        }
        flagNewOperand = false;
        number = document.calculator.display.value + i;
        document.calculator.display.value = number;
    }

    function calculation (op) {
        var FirstOperand = document.calculator.display.value;
        if (flagNewOperand && opSelection != "=")
        {
            document.calculator.display.value = total;
        }
        else
        {
            flagNewOperand = true;
            if ( '+' == opSelection )
                total += parseFloat(FirstOperand);
            else if ( '-' == opSelection )
                total -= parseFloat(FirstOperand);
            else if ( '/' == opSelection )
                total /= parseFloat(FirstOperand);
            else if ( '*' == opSelection )
                total *= parseFloat(FirstOperand);
            else
                total = parseFloat(FirstOperand);
            document.calculator.display.value = total;
            opSelection = op;
        }
    }
    function changeSign() {
        document.calculator.display.value = parseFloat(document.calculator.display.value)*-1;
    }

    function percent() {
        document.calculator.display.value = (parseFloat(document.calculator.display.value)/100)*total;
    }
    function SquareRoot() {
        document.calculator.display.value = Math.sqrt(parseFloat(document.calculator.display.value));
    }
