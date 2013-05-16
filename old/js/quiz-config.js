// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "USCIS Practice Quiz!!",
        "main":    "<p>Practice for your American citizenship Civis Exam! Find out what you need to know!</p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1
            "q": "Who wrote the Declaration of Independence?",
            "a": [
                {"option": "George Washington",      "correct": false},
                {"option": "Thomas Jefferson",     "correct": true},
                {"option": "John Madison",      "correct": false},
				{"option": "John Madison",      "correct": false},
                {"option": "Abraham Lincoln",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The Declaration of Independence was written by Thomas Jefferson!</p>",
            "incorrect": "<p><span>Fail.</span> The Declaration of Independence was written by Thomas Jefferson. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 2
            "q": "What is the Supreme Law of the Land?",
            "a": [
                {"option": "The Articles of Incorporation",    "correct": false},
                {"option": "The Magna Carta",     "correct": false},
				{"option": "The Federalist Papers",     "correct": false},
                {"option": "The Constitution",      "correct": true},
                {"option": "The Declaration of Independence",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> Good Job! Correct!</p>",
            "incorrect": "<p><span>Fail!</span> Sorry. You lose. The Supreme Law of the Land is the constitution.</p>" // no comma here
        },
        { // Question 3
            "q": "We elect a U.S. Senator for how many years?",
            "a": [
                {"option": "2",        "correct": false},
                {"option": "4",           "correct": false},
                {"option": "6",  "correct": true},
                {"option": "8",   "correct": false}, // no comma here
				{"option": "10",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span> They are elected for 6 years.</p>",
            "incorrect": "<p><span>Fail!</span> Try 6 years.</p>" // no comma here
        },
        { // Question 4
            "q": "How many Amendments does the Constitution have?",
            "a": [
                {"option": "21",        "correct": false},
                {"option": "32",           "correct": false},
				{"option": "35",           "correct": false},
                {"option": "27",  "correct": true},
                {"option": "23",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be smart!</p>",
            "incorrect": "<p><span>Fail!</span> It's currently 27.</p>" // no comma here
        },
        { // Question 5
            "q": "We elect a U.S. represenative for how many years?",
            "a": [
                {"option": "2",        "correct": true},
                {"option": "4",           "correct": false},
				{"option": "6",           "correct": false},
                {"option": "8",  "correct": false},
                {"option": "10",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius.</p>",
            "incorrect": "<p><span>Fail!</span> It's 2 years. But nice try.</p>" // no comma here
        } // no comma here
    ]
};