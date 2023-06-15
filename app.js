let string = "";
let flag = 1;

function evaluateExpression() {
    try {
        const result = eval(string);
        const roundedResult = Number(result.toFixed(6));
        document.querySelector(".inp").value = roundedResult;
        string = String(result);
    } catch (error) {
        document.querySelector(".inp").value = "Syntax Error";
        string = "";
        setTimeout(function() {
            document.querySelector(".inp").value = "";
        }, 800);
    }
}

$(document).ready(function() {
    $(".btn").click(function() {
        Calculation(this.innerHTML);
    });

    $(document).keypress(function(event) {
        if ((event.key >= 0 && event.key <= 9) || event.key === "=" || event.key === "+" || event.key === "-" || event.key === "x" || event.key === "/" || event.key === "%" || event.key === ".") {
            Calculation(event.key);
        }
    });
});

function Calculation(key) {
    if (string.length === 0) {
        string = "";
    }
    if (key === "=") {
        evaluateExpression();
    } else if (key === "AC") {
        string = "";
        document.querySelector(".inp").value = string;
    } else if (key === "DEL") {
        let len = string.length - 1;
        string = string.slice(0, len);
        document.querySelector(".inp").value = string;
    } else {
        if (key.toLowerCase() === "x") {
            string = string + "*";
        } else {
            string = string + key;
        }
        console.log(string);
        document.querySelector(".inp").value = string;
    }
}

function Theme() {
    if (flag == 0) {
        $(".calculator").css("background-color", "#FEFEFE");
        $(".container").css("background-color", "#F5F5F5");
        $(".btn").removeClass("pressed2").addClass("pressed");
        $(".inp").css("color", "black");
        $(".fa").css("color", "black");
        flag = 1;
    } else {
        $(".calculator").css("background-color", "#36474F");
        $(".container").css("background-color", "#18212A");
        $(".btn").removeClass("pressed").addClass("pressed2");
        $(".inp").css("color", "white");
        $(".right").css("color", "black");
        $(".fa").css("color", "#fff");
        flag = 0;
    }
}