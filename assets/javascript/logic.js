$(document).ready(function () {
    const pages = [
        newPage('<h2>About Me</h2> <hr> <img src="assets/images/dog.png" id="profilepicture" alt="A photo of me" id="MyPhoto.png"> <p> I am a 21 year old male with an Assosiates in General Science currently attending a University of Arizona Coding Bootcamp. I have taught myself a few coding launguages such as C, Java, Python and have taken a course in Data Structures for Java. Before taking this Bootcamp course I thought CSS stood for Can Script Sometimes. I really like spaghetti and taco tuesday should be cancelled. </p> <p> I have a few special talents such as: <ul> <li>3+ years of drumline experience</li> <li>Above average sight reading</li> <li>Calculating friction of a Box using less than 2 papers</li> <li>Taking care of 6 big dumb cats</li> <li>Digesting food and fluids</li> <li>Not knowing the difference between a few and several</li> </ul> </p>'),//main page
        newPage('<h2> Portfolio </h2> <hr><!-- <div class="PortImg"> <img src="assets/images/Java.png" alt=""> <div class="PortTxt"> <a href="" target="_blank" class="PortTxtColor"> Java </a> </div> </div> --> <div class="PortImg"> <img src="assets/images/FE_RPG.png" alt=""> <div class="PortTxt"> <a href="https://jmatt21.github.io/FE_RPG/" target="_blank" class="PortTxtColor"> Fire Emblem RPG </a> </div> </div> <div class="PortImg"> <img src="assets/images/music_trivia.png"> <div class="PortTxt"> <a href="https://jmatt21.github.io/TriviaGame/" target="_blank" class="PortTxtColor"> Music Trivia </a> </div> </div> <div class="PortImg"> <img src="assets/images/GifTastic.png"> <div class="PortTxt"> <a href="https://jmatt21.github.io/GifTastic/" target="_blank" class="PortTxtColor"> GifTastic Web-Page </a> </div> </div> <div class="PortImg"> <img src="assets/images/Train_Activity.png"> <div class="PortTxt"> <a href="https://jmatt21.github.io/Train_Activity/" target="_blank" class="PortTxtColor"> Train Activity </a> </div> </div> <div class="PortImg"> <img src="assets/images/HydroBudget.png"> <div class="PortTxt"> <a href="https://youngbrennin.github.io/HydroBudget/" target="_blank" class="PortTxtColor"> Hydro Budget </a> </div> </div>'),
        newPage('<h2> Contact Me </h2> <hr> <p> Email: MatthewBertrandt@gmail.com </p> <p> Github: <a href="github.com/JMatt21" target="_blank">JMatt21</a> </p> <p> LinkedIn: <a href="https://www.linkedin.com/in/matthew-bertrandt-153000162/" target="_blank">Matthew Bertrandt</a> </p> <p> <a href="https://github.com/JMatt21" target="_blank"> <img src="assets/images/github-icon.png" class="contactIcon"> </a> <a href="https://www.linkedin.com/in/matthew-bertrandt-153000162/" target="_blank"> <img src="assets/images/linkedin-icon.png" class="contactIcon"> </a> </p> </div>')//contact page
    ];
    // let current_page;
    function newPage(content) {
        const display_page = $("#content");
        let ret = {
            content: content,
            display: function () {
                display_page.html(this.content);
                // current_page = this;
            },
            toNext: function () {
                pages[pages.indexOf(this) + 1];
            },
            toPrevious: function () {
                pages[pages.indexOf(this) - 1];
            }
        }
        return ret;
    }
    //on startup
    pages[0].display();

    //Link Buttons
    $("#about").on('click', function(){
        pages[0].display();
    });
    $("#portfolio").on('click', function(){
        pages[1].display();
    });
    $("#contact").on('click', function(){
        pages[2].display();
    });

});