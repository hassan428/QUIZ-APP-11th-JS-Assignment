var jsQues = [

    {        
        question: "Which of the following is a server-side Java Script object?",
        opt1: "Function",
        opt2: "File",
        opt3:  "FileUpload",
        opt4: "Date",
        correctAns: "File"
    },
    

    
    {        
        question: "To insert a JavaScript into an HTML page, which tag is used?",
        opt1: "<script=â€™javaâ€™>",
        opt2: "<javascript>",
        opt3:  "<script>",
        opt4: "<js>",
        correctAns: "<script>"
    },
    
        

    
    {        
        question: "How does Java Script store dates in objects of Date type?",
        opt1: "The number of days since January 1st, 1900",
        opt2: "The number of seconds since January 1st, 1970",
        opt3:  "The number of milliseconds since January 1st, 1970",
        opt4: "The number of picoseconds since January 1st, 1970",
        correctAns: "The number of milliseconds since January 1st, 1970"
    },
    

    {        
        question: "Which is the correct way to write a JavaScript array?",
        opt1: 'var txt = new Array(1:"arr",2:"kim",3:"jim")',
        opt2: 'var txt = new Array:1=(" arr ")2=("kim")3=("jim")',
        opt3:  'var txt = new Array["arr ","kim","jim"]',
        opt4: 'var txt = new Array=" arr ","kim","jim"',
        correctAns: 'var txt = new Array["arr ","kim","jim"]'
    },
    

    
    {        
        question: "Which of the following is correct to write Hello World on the web page?",
        opt1: "System.out.println(Hello World)",
        opt2: "print(Hello World)",
        opt3:  "document.write(Hello World)",
        opt4: "response.write(Hello World)",
        correctAns: "document.write(Hello World)"
    },
    
  
    
    {        
        question: "Which of the following is used to capture all click events in a window?",
        opt1: "window.captureEvents(Event.CLICK);",
        opt2: "window.routeEvents(Event.CLICK );",
        opt3:  "window.handleEvents (Event.CLICK);",
        opt4: "window.raiseEvents(Event.CLICK );",
        correctAns: "window.captureEvents(Event.CLICK);"
    },
    
   
    {        
        question: "Which of the following is not a valid JavaScript variable name?",
        opt1: "2java",
        opt2: "_java_and_ java _names",
        opt3:  "javaandjava",
        opt4: "None of the above",
        correctAns: "2java"
    },
    
    
    {        
        question: "___________ JavaScript is also called client-side JavaScript.",
        opt1: "Microsoft",
        opt2: "Navigator",
        opt3:  "LiveWire",
        opt4: "Native",
        correctAns: "Navigator"
    },
    

    {        
        question: "What language defines the behavior of a web page?",
        opt1: "JavaScript",
        opt2: "HTML",
        opt3:  "CSS",
        opt4: "XML",
        correctAns: "JavaScript"
    },
    

    
    {        
        question: "Which of the following is a client-side Java Script object?",
        opt1: "File",
        opt2: "Function",
        opt3:  "FileUpload",
        opt4: "Time",
        correctAns: "FileUpload"
    },
    
    
    
    {        
        question: "What java wrapper type is created when a JavaScript object is sent to Java?",
        opt1: "ScriptObject",
        opt2: "JavaObject",
        opt3:  "Jobject",
        opt4: "JSObject",
        correctAns: "JSObject"
    },
    
        
    
    {        
        question: "Which of the following method is used to evaluate a string of Java Script code in the context of the specified object?",
        opt1: "Eval",
        opt2: "ParseDoule",
        opt3:  "ParseObject",
        opt4: "Efloat",
        correctAns: "Eval"
    },
    
    
    {        
        question: "How to append a value to an array of Java Script?",
        opt1: "arr[arr.length] = value",
        opt2: "arr[arr.length+1] = new Arrays()",
        opt3:  "arr[arr.length-1] = value",
        opt4: "arr[arr.length*1] = value",
        correctAns: "arr[arr.length] = value"
    },
    

    
    {        
        question: "What is the alternate name for Java script?",
        opt1: "LimeScript",
        opt2: "Both a and d",
        opt3:  "ECMScript",
        opt4: "ECMAScript",
        correctAns: "ECMAScript"
    },
    

    
    {        
        question: "Which of the following function of Array object returns true if at least one element in this array satisfies the provided testing function?",
        opt1: "reverse()",
        opt2: "shift()",
        opt3:  "slice()",
        opt4: "some()",
        correctAns: "some()"
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
                var selectedQues = jsQues[index - 1]["question"];
                var selectedAns = jsQues[index-1][`opt${selectedValue}`]
                var correctAns = jsQues[index - 1]["correctAns"]
                if(selectedAns == correctAns){
                    score++
                }
            }
            radio[i].checked = false
        }
    
        button.disabled = true;
    
        if(index >jsQues.length - 1){
    
            clearInterval(interval);
            var input1 = document.getElementById("input1").disabled = true;
            var input2 = document.getElementById("input2").disabled = true;
            var input3 = document.getElementById("input3").disabled = true;
            var input4 = document.getElementById("input4").disabled = true;
            var percentage = ((score / jsQues.length)*100).toFixed(2);
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
            `Your percentage is ${percentage}%`                  
                )
            }
        }
        else{            
            ques.innerHTML = jsQues[index].question;
            opt1.innerText = jsQues[index].opt1;
            opt2.innerText = jsQues[index].opt2;
            opt3.innerText = jsQues[index].opt3;
            opt4.innerText = jsQues[index].opt4;
            index++
            num.innerHTML = `Question ${index} of ${jsQues.length}`
        }
    }
    
    // nextQues()
    
    
    function selects()
    {
        button.disabled = false;
    }

