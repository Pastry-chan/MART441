var myViewFinderArray = new Array();

class ViewFinder
{
    constructor(title, image, description, author, year)
    {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;
    }

    toString()
    {
        return "Title: " + this.title;
    }

    get theTitle()
    {
        return this.title;
    }
}
function initializeArray()
{
    var slide1 = new ViewFinder(
        "Missing and Murdered Indigenous Women Mural",
        "Images/Image1.jpg",
        "A mural marking the two year anniversary of Hanna Harris who was violently murdered on July 8th 2013. The mural is a tribute to her while also bringing awarness to the countless missing and murdered Indigenous women.",
        "Lucinda Hinojos",
        2020
    );

    var slide2 = new ViewFinder(
        "Japan's anti-nuke movement",
        "Images/Image2.jpg",
        "Following the Fukushima nuclear disaster in 2011, people in Japan advocated for global abolition of nuclear weapons as well as nuclear power. This movement aimed to bring attention to the devastating effects of nuclear disasters on both living beings and the environment.",
        "European Pressphoto Agency",
        2011
    );

    var slide3 = new ViewFinder(
        "Yellow Vest Protests in France",
        "Images/Image3.jpg",
        "Yellow Vest Protests in France that started in 2018 as a response to rising fuel prices and economic inequality including high living costs. This movement was important because it highlighted the struggles of the working-class living in rural and semi-rural areas.",
        "Getty Images",
        2018
    );

    var slide4 = new ViewFinder(
        "#EndSARS now Movement",
        "Images/Image4.jpg",
        "The #ENDSars now movement started in Nigeria in 2020 in protest against police brutality and corruption. It started as a protest against the Special Anti-Robbery Squad (SARS) which was known for abusing citizens, illegally detaining people and even killing people. The movement gained widespead attention after a video showed a SARS officer killing a young man. It brough global attention to the human rights violation in Nigreria.",
        "Crisisgroup.org",
        2020
    );

    var slide5 = new ViewFinder(
        "Walk for Peace",
        "Images/Image5.jpeg",
        "A group of 19 Buddhist monks completing a 2,300-mile peace walk from Texas to Washington DC. The pilgrimage was advocate for national unity, compassion, and nonviolence.",
        "rvamag.com",
        2026
    );

    myViewFinderArray.push(slide1);
    myViewFinderArray.push(slide2);
    myViewFinderArray.push(slide3);
    myViewFinderArray.push(slide4);
    myViewFinderArray.push(slide5);
}

function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);

    document.getElementById("title").innerHTML =
        myViewFinderArray[randomNumber].title;

    document.getElementById("image").src =
        myViewFinderArray[randomNumber].image;

    document.getElementById("description").innerHTML =
        myViewFinderArray[randomNumber].description;

    document.getElementById("author").innerHTML =
        myViewFinderArray[randomNumber].author;

    document.getElementById("year").innerHTML =
        myViewFinderArray[randomNumber].year;
}