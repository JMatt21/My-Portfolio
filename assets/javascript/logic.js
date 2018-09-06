$(document).ready(function () {

    // Global Variables 
    let maxNumberOfListItems = getMaxListItemNumber();
    console.log("max list items", maxNumberOfListItems);

    // Animate.css jquery function
    // use .animateCss()
    $.fn.extend({
        animateCss: function (animationName, callback) {
            var animationEnd = (function (el) {
                var animations = {
                    animation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    MozAnimation: 'mozAnimationEnd',
                    WebkitAnimation: 'webkitAnimationEnd',
                };

                for (var t in animations) {
                    if (el.style[t] !== undefined) {
                        return animations[t];
                    }
                }
            })(document.createElement('div'));

            this.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);

                if (typeof callback === 'function') callback();
            });

            return this;
        },
    });

    // Functions
    function getMaxListItemNumber() {
        let numOfListItems = 1;
        while ($(".list-item-" + numOfListItems).text()) {
            numOfListItems++;
        }
        return numOfListItems - 1;
    }

    function displayList(listIndex) {
        $("#lists").attr("current-index", listIndex);
        for (let i = 1; i <= maxNumberOfListItems; i++) {
            if (i != listIndex) {
                $(".list-item-" + i).hide();
            } else {
                $(".list-item-" + i).show().animateCss('fadeIn', () => { });
            }
        }
    };

    function traverseList() {
        const direction = $(this).attr("direction");
        let currentListIndex = parseInt($("#lists").attr("current-index"));
        if (direction === "left" && currentListIndex > 1) {
            currentListIndex--;
            
            displayList(currentListIndex);
        } else if (direction === "right" && currentListIndex < maxNumberOfListItems) {
            currentListIndex++;
            $("#lists").attr("current-index", currentListIndex);
            displayList(currentListIndex);
        }
    }

    function Card(projectName, gitHubURL, websiteURL, imageLink, description) {
        this.projectName = projectName;
        this.gitHubURL = gitHubURL;
        this.websiteURL = websiteURL;
        this.imageLink = "./assets/" + imageLink;
        this.description = description;
    }

    function generateCards() {
        const cards = [
            new Card("Fire Emblem RPG", "https://github.com/JMatt21/unit-4-game", "https://jmatt21.github.io/unit-4-game/", "./images/FE_RPG.png", "This is a Fire Emblem themed duel simulator using only front-end JS."),
            new Card("Music Trivia", "https://github.com/JMatt21/TriviaGame", "https://jmatt21.github.io/TriviaGame/", "./images/music_trivia.png", "A modular front-end JS game. Questions can easily be added with any number of answers."),
            new Card("Gif-Tastic", "https://github.com/JMatt21/GifTastic", "https://jmatt21.github.io/GifTastic/", "./images/GifTastic.png", "This project uses the GiphyAPI to display gifs on the page. The user can search for gifs and can favorite certain gifs. Favorites are stored on the local storage of the browser."),
            new Card("Catch a Train!", "https://github.com/JMatt21/Train_Activity", "https://jmatt21.github.io/Train_Activity/", "./images/Train_Activity.png", "This program allows users to schedule, edit, or remove trains. It uses Google's Firebase to read/edit/delete data and moment.js to calculate time."),
            new Card("Hydro Budget", "https://youngbrennin.github.io/HydroBudget/", "https://github.com/youngbrennin/HydroBudget", "./images/hydrobudget.png", "This program is used for calculating a monthly budget for users. It also uses Firebase to store data. Users can select a date, name, and cost of a bill to add to their total bills. They can also set their savings."),
            new Card("Friend Finder", "https://github.com/JMatt21/Friend-Man", "https://sleepy-hollows-58676.herokuapp.com/", "./images/Friend_Finder.png", "This app allows users to find friends by comparing scores they submitted on a survey and suggesting them the person with similar scores to them using JS logic and a MySQL database."),
            new Card("Burger Muncher", "https://github.com/JMatt21/burger-muncher", "https://powerful-shore-77872.herokuapp.com/", "./images/burger.png", "Using HandleBars and MySQL, users can create and eat burgers than everyone can see."),

        ];

        for (card of cards) {
            let newCard = $('<div class="project-content clearfix list list-item-' + (++maxNumberOfListItems) + '">');
            let leftSide = $('<div class="project-left">');
            let rightSide = $('<div class="project-right">');
            let webLink = $('<a target="_blank">').attr("href", card.websiteURL)
                .append($('<img>').attr({
                    src: card.imageLink,
                    class: "card-image"
                }));

            let gitLink = $('<a target="_blank">').attr("href", card.gitHubURL)
                .append($('<div>').attr("class", "gitlink"));

            let cardText = $('<div>').attr("class", "card-text")
                .append($('<h3>').text(card.projectName))
                .append($('<p>').text(card.description));
            
            // leftSide.append(webLink);
            leftSide.append($('<img>').attr({
                src: card.imageLink,
                class: "card-image"
            }));;
            rightSide.append(cardText, gitLink)
            newCard.append(leftSide, rightSide);
            $('#lists').append(newCard);
        }
        console.log(maxNumberOfListItems);
    }

    // Clickables
    $(".arrow").on("click", traverseList);

    // On Startup
    console.log("hi there c:");

    generateCards();
    displayList(1);
});