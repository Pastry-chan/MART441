//Images
$(document).ready(function () {

    let index = 0;

    class DreamInfo {
        constructor(imagePath) {
            this.imagePath = imagePath;
        }

        get theImagePath() {
            return this.imagePath;
        }
    }

    const allDreams = [
        new DreamInfo("Images/dreams1.jpg"),
        new DreamInfo("Images/dreams2.jpg"),
        new DreamInfo("Images/dreams3.jpg"),
        new DreamInfo("Images/dreams4.jpg"),
        new DreamInfo("Images/dreams5.jpg")
    ];

    const $dream = $("#dream");
    $dream.css({ position: "absolute" });

    $("#dream").attr("src", allDreams[index].theImagePath);
    animateImage();
    function randomPosition() {
        const windowWidth = $(window).width() - $dream.width();
        const windowHeight = $(window).height() - $dream.height();

        const top = Math.floor(Math.random() * windowHeight);
        const left = Math.floor(Math.random() * windowWidth);

        return { top, left };
    }

    function animateImage() {
        const pos = randomPosition();
        $dream.animate({
            top: pos.top,
            left: pos.left
        }, 1000);
    }
    

    $("#nextBtn").click(function () {

        $("#dream").fadeOut("slow" , function () {

            index = (index + 1) % allDreams.length;
            $(this).attr("src", allDreams[index].theImagePath);

            $(this).fadeIn("slow", function () {
                animateImage();
            });

        });

    });
});

//quotes
$(document).ready(function () {

    let index = 0;

    class QuoteInfo {
        constructor(text) {
            this.text = text;
        }

        get theText() {
            return this.text;
        }
    }

    const allQuotes = [
        new QuoteInfo("All that we see or seem is but a dream within a dream. -Edgar Allan Poe"),
        new QuoteInfo("Dreaming is the beginning of getting everything you want. -Annette White"),
        new QuoteInfo("Breathing dreams like air. -F. Scott Fitzgerald"),
        new QuoteInfo("What if your dream is also seeking you?"),
        new QuoteInfo("The dream chooses the dreamer, not the other way around."),
    ];

    const $quote = $("#quote");
    $quote.css ({
        position: "absolute",
          });

    function randomPosition() {
        const windowWidth = $(window).width() - $quote.width();
        const windowHeight = $(window).height() - $quote.height();

        const top = Math.floor(Math.random() * windowHeight);
        const left = Math.floor(Math.random() * windowWidth);

        return { top, left };
    }
    function animateQuote() {
        const pos = randomPosition();
        $quote.animate({
            top: pos.top,
            left: pos.left
        }, 3000); 
    }

    function changeQuote() {
        index = (index + 1) % allQuotes.length;
        $quote.fadeOut("slow", function() {
            $quote.text(allQuotes[index].theText);
            $quote.fadeIn("slow", animateQuote);
        });
    }
    $quote.text(allQuotes[index].theText);
    animateQuote();

    setInterval(changeQuote, 5000);

});


//shapes
$(document).ready(function () {

    const $shapes = [$("#shape1"), $("#shape2"), $("#shape3")];
    const shapeClasses = ["circle", "square", "rectangle"];

    function randomPosition($el) {
        const windowWidth = $(window).width() - $el.outerWidth();
        const windowHeight = $(window).height() - $el.outerHeight();

        const top = Math.floor(Math.random() * windowHeight);
        const left = Math.floor(Math.random() * windowWidth);

        return { top, left };
    }

    function animateShape($el) {
        const pos = randomPosition($el);
        $el.animate({
            top: pos.top,
            left: pos.left
        }, 2000); 
    }

    function transformShape($el) {
        let currentClass = $el.attr("class").split(" ").find(c => shapeClasses.includes(c));
        let newClasses = shapeClasses.filter(c => c !== currentClass);
        let newClass = newClasses[Math.floor(Math.random() * newClasses.length)];
        $el.removeClass(currentClass).addClass(newClass);
    }

    function updateShapes() {
        $shapes.forEach($el => {
            $el.fadeOut(500, function() { 
                transformShape($el);
                $el.fadeIn(500);
                animateShape($el);
            });
        });
    }
    $shapes.forEach($el => animateShape($el));

    setInterval(updateShapes, 5000);

});