const loadHome = () => {
    var str = 
    "<div id='pageContent' class='divDisJustify'>" +
        "<div >" +
            "<div id='titlePHome'>" +
                "<h2>A little about me</h2>" +
                "<p id='firstPHome'>"+
                    "Hello! My name is Álvaro and I am a web and software developer student.<br><br>" +
                    "I have worked in several projects that covered several areas in computer programming, from algorithms to complex data structures.<br><br>" +
                    "Since I discovered computer programming I have had the chance to work with different computer programming languages such <span class='italic'>Python</span>, <span class='italic'>Java</span> or <span class='italic'>C++</span>." +
                "</p>" +
            "</div>" +
            "<img class='homeImg' src='./resources/img/htmlImg.jpg' alt='A html file'>" +
        "</div>" +
        "<div>" +
            "<img class='homeImg' src='./resources/img/javascriptImg.jpg' alt='a javaScript file'>" +
            "<p id='secondPHome'>" +
            "I have seen the benefits of building web applications as they provide a lot of flexibility when designing the front and back end.<br><br>" +
            "Furthermore, web development provides an excellent way to work with databases if you need to handle information.<br><br>" +
            "Nowdays, working with webs allows you to use many programming languages for the back-end, choosing the one that works better for your website needs." +
            "</p>" +
        "</div>'" +
    "</div>";
    var Obj = document.getElementById('pageContent');
    Obj.outerHTML = str;
}

const loadProjects = () => {
    var str = 
    "<div id='pageContent' class='divDisJustify'>" +
        "<h2>Projects I have worked in:</h2>" +
        "<ul>" +
            "<div class='projectsLi'>" +
                "<li><span class='italic'>Financial</span> consisted in creating a website where <span class='italic'>the user could buy or sell shares</span>. This project used <span class='importantText'>API keys</span> provided by <a href='https://iexcloud.io'>IEX</a>.<br><br>What does this exactly mean?<br><br>The shares bought by the user are updated in real time so they can track what the current price is for that share. Among other features, the user can buy, sell, check transactions history or manage their wallet.</li><img class='projectsImg' src='./resources/img/financeProjects.jpg'>" +
            "</div>" +
            "<div class='projectsLi'>" +
                "<li>" +
                    "This project was about creating a whole <span class='italic'>staff management website</span> where different user permissions exist.Here, I had the chance to work with <span class='importantText'>databases</span> to store staff information with different data types.<br><br>From there, depending on the permit's user, someone can <span class='italic'>create, modify or delete information</span> about a staff member. Also, there is a History Actions to check who modifies staff information and what they do. Furthermore, there is an account settings option to change a user password after creating a profile.<br><br>From the user's perspective, a rookie staff member could only check their own personal information whereas a manager has access to all staff management features.</li><img class='projectsImg' src='./resources/img/staffManagementProjects1.jpg'>" +
            "</div>" +
            "<div>" +
                "<li><a href='https://binarysearch.com'>BinarySearch</a> is a website where you can test your <span class='italic'>coding skills</span> in different programming languages.<br><br>It's a greate place to work with algorithms and data structures. You can test your ability not only to solve a coding problem but to find the most efficient way to solve it.<br><br>So far I have solved 250 problems from <span class='italic'>Easy to Hard</span> level and thanks to this website I have developed enourmously my coding skills.</li><img class='projectsImg' src='./resources/img/binarySearch.jpg'>" +
            "</div>" +
        "</ul>" +
    "</div>";
    var Obj = document.getElementById('pageContent');
    Obj.outerHTML = str;
}

const loadAboutMe = () => {
    var str = 
    "<div id='pageContent'>"+
        "<h2>Maybe you wonder...</h2>"+
            "<button type='button' class='collapsible'>Who is Álvaro?</button>" +
            "<div class='content'>" +
                "<p>Álvaro was born in Madrid in 1990. From a very young age, he loved playing video games (and he still does!). That little Álvaro wondered how something so beautiful and complex could exist. It was his favourite hobbie and he admired all people behind those video games.<br><br>" +
                "He grew up, then, new techonologies were released, like the Internet or later on, smartphones!<br><br>They seemed limitless, and he started thinking how they actually worked...</p>" +
            "</div>" +
        "<button type='button' class='collapsible'>How did he started?</button>" +
            "<div class='content'>" +
                "<p>Before learning formal code, he started working as pseudo-code teacher working with children and teaching other adults how to code pseudo-code. It was a job he loved, actually, he loved it so much that he worked for three and a half years as it!<br><br>" +
                "He consolidated the basic concepts about coding... But he realised he wanted to know more as he discovered that there were very few little things you couldn't do with code...</p>" +
            "</div>" +
        "<button type='button' class='collapsible'>How is it going now?</button>" +
            "<div class='content'>" +
                "<p>After studying more than one year and a half, he learned many things about formal code in many programming languages. He discovered the wonders of <span class='italic'>Python</span> or how flexible are <span class='italic'>Html, css and javascript</span> are working together.<br><br>" +
                "He even coded a way to sort his pictures in the way he likes just by running a program!<br><br>" +
                "He enjoys so much coding that he can code for 10 hours and forget about everything else! (Well, yes, maybe that's too extreme)</p>" +
            "</div>" +
    "</div>";
    var Obj = document.getElementById('pageContent');
    Obj.outerHTML = str;

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
            content.style.display = "none";
            } else {
            content.style.display = "block";
            }
        });
    }

}

const loadContact = () => {
    var str = 
    "<div id='pageContent'>" +
        "<div>" +
            "<h2>If you need to know more about me...</h2>" +
            "<p>You can reach me out on: <a href='mailto:email@gmail.com'>email@gmail.com</a></p>" +
            "<p>On GitHub: <a href='https://github.com/Alvaropz'>@alvaropz</a></p>" +
            "<p>On BinarySearch: <a href='https://binarysearch.com/@/Alvpz'>@alvpz</a></p>" +
        "</div>" +
    "</div>";
    var Obj = document.getElementById('pageContent');
    Obj.outerHTML = str;
}