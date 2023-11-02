var htmlQues = [

    {        
        question: "What does HTML stand for?",
        opt1: "Hyper Text markup language",
        opt2: "Home tools markup language",
        opt3:  "Hyperlink text Markup language",
        opt4: "Hide Text makeup language",
        correctAns: "Hyper Text markup language"
    },
    
    
    
    {        
        question: "Choose the correct HTML element for the largest heading:",
        opt1: "<h1>",
        opt2: "<Heading>",
        opt3:  "<Head>",
        opt4: "<h5>",
        correctAns: "<h1>"
    },
    
    
    
    
    {        
        question: "What is the correct HTML element for inserting a line break?",
        opt1: "<br>",
        opt2: "<break>",
        opt3:  "<brk>",
        opt4: "<Br>",
        correctAns: "<br>"
    },
    
    
    
    {        
        question: "How many tags are in a regular element?",
        opt1: "1",
        opt2: "2",
        opt3:  "3",
        opt4: "4",
        correctAns: "2"
    },
    
    
    
    {        
        question: "What is the difference between an opening tag and a closing tag?",
        opt1: "Opening tag has a / in front",
        opt2: "Closing tag has a / in front",
        opt3:  "There is no difference",
        opt4: "None of these",
        correctAns: "Closing tag has a / in front"
    },
    
    
    
    {        
        question: "Where is the meta tag only found?",
        opt1: "The last page",
        opt2: "The home page",
        opt3:  "The second page",
        opt4: "The second last page",
        correctAns: "The home page"
    },
    
    
    
    {        
        question: "Which is the correct way to tag an image?",
        opt1: 'src=”image.jpg/gif” alt=”type some text”',
        opt2: 'Src=”image.jpg/gif” alt=type some text”',
        opt3:  '<img src="image.jpg/gif" alt="type some text">',
        opt4: 'Src.”image.jpg/gif” alt=type some text”',
        correctAns: '<img src="image.jpg/gif" alt="type some text">'
    },
    
    
    
    {        
        question: "What is an element that does not have a closing tag called?",
        opt1: "Tag",
        opt2: "Empty element",
        opt3:  "Closed element",
        opt4: "Opened Closed element",
        correctAns: "Empty element"
    },
    
    
    
    {        
        question: "Which of the following is an example of an empty element?",
        opt1: "<img />",
        opt2: "<img> </img>",
        opt3:  "</img>",
        opt4: "</img/>",
        correctAns: "<img> </img>"
    },
    
    
    
    {        
        question: "What should values always be enclosed in?",
        opt1: "Quotation marks",
        opt2: "Commas",
        opt3:  "Parenthesis",
        opt4: "Exclamation marks",
        correctAns: "Quotation marks"
    },
    
    
    
    {        
        question: "Where do all items for the same website need to be saved?",
        opt1: "In the same folder",
        opt2: "Where ever is fine",
        opt3:  "In different folders",
        opt4: "None of these",
        correctAns: "In the same folder"
    },
    
    
    
    {        
        question: 'What does <a href="https://www.google.com" title="Link to Google  " target = " _ blank  "> Google </a> do?',
        opt1: "Adds a link to google on the page",
        opt2: "Adds a search engine to the page",
        opt3:  "Adds a new tab to the page",
        opt4: "none of these",
        correctAns: "Adds a link to google on the page"
    },
    
    
    
    {        
        question: "What is always a welcome page, and explains the purpose or topic of the site?",
        opt1: "Page 4",
        opt2: "Homepage",
        opt3:  "Table of contents",
        opt4: "Last page",
        correctAns: "Homepage"
    },
    
    
    
    
    {        
        question: "HTML program is saved using _________ extension.",
        opt1: ".html",
        opt2: ":html",
        opt3:  "html.",
        opt4: ",html",
        correctAns: ".html"
    },
    
    
    
    {        
        question: "What are < div> tags used for?",
        opt1: "To replace paragraphs. i.e. p tags",
        opt2: "To logically divide the paragraphs",
        opt3:  "To provide space between tables",
        opt4: "To logically divide the document",
        correctAns: "To logically divide the document"
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
                var selectedQues = htmlQues[index - 1]["question"];
                var selectedAns = htmlQues[index-1][`opt${selectedValue}`]
                var correctAns = htmlQues[index - 1]["correctAns"]
                if(selectedAns == correctAns){
                    score++
                }
            }
            radio[i].checked = false
        }
    
        button.disabled = true;
    
        if(index >htmlQues.length - 1){
    
            clearInterval(interval);
            var input1 = document.getElementById("input1").disabled = true;
            var input2 = document.getElementById("input2").disabled = true;
            var input3 = document.getElementById("input3").disabled = true;
            var input4 = document.getElementById("input4").disabled = true;
            var percentage = ((score / htmlQues.length)*100).toFixed(2);
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
            ques.innerHTML = htmlQues[index].question;
            opt1.innerText = htmlQues[index].opt1;
            opt2.innerText = htmlQues[index].opt2;
            opt3.innerText = htmlQues[index].opt3;
            opt4.innerText = htmlQues[index].opt4;
            index++
            num.innerHTML = `Question ${index} of ${htmlQues.length}`
        }
    }
    
    // nextQues()
    
    
    function selects()
    {
        button.disabled = false;
    }