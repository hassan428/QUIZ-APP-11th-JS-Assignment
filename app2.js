var cssQues = [

    {        
        question: " What are the first three values of text-shadow in order?",
        opt1: "vertical, blur, horizontal",
        opt2: "blur, vertical, horizontal",
        opt3:  "vertical, horizontal, blur",
        opt4: "horizontal, vertical, blur",
        correctAns: "horizontal, vertical, blur"
    },
    
    
    
    
    {        
        question: "How do four values work on border-radius",
        opt1: "top, bottom, left, right",
        opt2: "up, down, front, behind",
        opt3:  "top-left, top-right, bottom-right, bottom-left",
        opt4: "bottom-left, bottom-right, top-right, top-left",
        correctAns: "top-left, top-right, bottom-right, bottom-left"
    },
    
    
    
    {        
        question: "How to you modify a border image using CSS3?",
        opt1: "border: url(image.png);",
        opt2: "border-variable: image url(image.png);",
        opt3:  "border-image: url(border.png) 30 30 round;",
        opt4: "border,image: url(image.png);",
        correctAns: "border-image: url(border.png) 30 30 round;"
    },
    
    
    
    {        
        question: "How to resize a background image using CSS3?",
        opt1: "background-size: 80px 60px;",
        opt2: "bg-dimensions: 80px 60px",
        opt3:  "background-proportion: 80px 60px;",
        opt4: "alpha-effect: bg-resize 80px 60px;",
        correctAns: "background-size: 80px 60px;"
    },
    
    
    
    {        
        question: "How to force a word wrap using CSS3?",
        opt1: "word-wrap: break-word;",
        opt2: "text-wrap: break-word;",
        opt3:  "text-wrap: force;",
        opt4: "text-width: set;",
        correctAns: "word-wrap: break-word;"
    },
    
    
    
    {        
        question: "Which of these are valid CSS3 transformation statements (select only one):",
        opt1: "matrix()",
        opt2: "modify()",
        opt3:  "skip()",
        opt4: "simulate()",
        correctAns: "matrix()"
    },
    
    
    
    {        
        question: "The ____________ property specifies the stack order of an element",
        opt1: "a-index",
        opt2: "z-index",
        opt3:  "x-index",
        opt4: "s-index",
        correctAns: "z-index"
    },
    
    
    
    {        
        question: "What is css Float?",
        opt1: "allows other elements to wrap around an element",
        opt2: "element can be pushed to the left or right",
        opt3:  "element can be pushed to any direction",
        opt4: "both a and b above",
        correctAns: "both a and b above"
    },
    
    
    
    {        
        question: "____________ property specifies an image to use as the background of an element",
        opt1: "background-img",
        opt2: "bg-image",
        opt3:  "background-image",
        opt4: "bg-img",
        correctAns: "background-image"
    },
    
    
    
    {        
        question: "The _____________ selector is used to specify a style for a single, unique element",
        opt1: "id",
        opt2: "class",
        opt3:  "text",
        opt4: "div",
        correctAns: "id"
    },
    
    
    
    {        
        question: "What does RGBa mean?",
        opt1: "Red Green Blue alpha",
        opt2: "Red Gray Brown alpha",
        opt3:  "Red Gold Black alpha",
        opt4: "none of these",
        correctAns: "Red Green Blue alpha"
    },
    
    
    
    {        
        question: "Box-Shadow is a property that allows developers to apply a",
        opt1: "Drop Shadow",
        opt2: "Border",
        opt3:  "Rounded Corner",
        opt4: "Background",
        correctAns: "Drop Shadow"
    },
    
    
    
    {        
        question: "If you put a value of 0 for a Border-Radius what will happen?.",
        opt1: "The Corner will curve horizontal.",
        opt2: "The Corner will be square",
        opt3:  "The Corner will curve vertical.",
        opt4: "The world will end",
        correctAns: "The Corner will be square"
    },
    
    
    {        
        question: "border-radius is a property that allows developers to apply a",
        opt1: "Drop Shadow",
        opt2: "Border",
        opt3:  "Rounded Corner",
        opt4: "Background",
        correctAns: "Rounded Corner"
    },
    


    {        
        question: "position is a property that allows developers to apply a",
        opt1: "Drop Shadow",
        opt2: "Border",
        opt3:  "Rounded Corner",
        opt4: "Alignment",
        correctAns: "Alignment"
    },    
    ]

    var ques = document.getElementById("ques");
    var opt1 = document.getElementById("opt1");
    var opt2 = document.getElementById("opt2");
    var opt3 = document.getElementById("opt3");
    var opt4 = document.getElementById("opt4");
    var radio = document.getElementsByName("answer")
    var button = document.getElementById("NextBtn");
    var num = document.getElementById("num");
    var timer = document.getElementById("timer")
    var index = 0;
    var score = 0;
    var min = 1;
    var sec = 59;
    
    
    
    var interval = setInterval(function(){
        timer.innerHTML = `${min}:${sec}`;
        sec--
        if(sec<0){
            min--;
            sec = 59
        }
        if(min<0){
            min= 1;
            sec = 59;
            nextQues()
        }
    },1000)
    
    nextQues()
    function nextQues(){
        min = 1;
        sec = 59;
        var radio = document.getElementsByName("answer");
        var num = document.getElementById("num");
    
        for(var i = 0;i<radio.length;i++)
        {
            if(radio[i].checked){
                var selectedValue = radio[i].value;
                var selectedQues = cssQues[index - 1]["question"];
                var selectedAns = cssQues[index-1][`opt${selectedValue}`]
                var correctAns = cssQues[index - 1]["correctAns"]
                if(selectedAns == correctAns){
                    score++
                }
            }
            radio[i].checked = false
        }
    
        button.disabled = true;
    
        if(index >cssQues.length - 1){
    
            clearInterval(interval);
            var input1 = document.getElementById("input1").disabled = true;
            var input2 = document.getElementById("input2").disabled = true;
            var input3 = document.getElementById("input3").disabled = true;
            var input4 = document.getElementById("input4").disabled = true;
            var percentage = ((score / cssQues.length)*100).toFixed(2);
            if(percentage > 65)
            {
                Swal.fire(
                    'Good job!',
                    `Your percentage is ${percentage}%`,
                'success'   
                )
            }
            else
            {
                Swal.fire(
            `Your percentage is ${percentage}%`,                    
                )
            }
        }
        else{            
            ques.innerHTML = cssQues[index].question;
            opt1.innerText = cssQues[index].opt1;
            opt2.innerText = cssQues[index].opt2;
            opt3.innerText = cssQues[index].opt3;
            opt4.innerText = cssQues[index].opt4;
            index++
            num.innerHTML = `Question ${index} of ${cssQues.length}`
        }
    }
    
    // nextQues()
    
    
    function selects()
    {
        button.disabled = false;
    }







