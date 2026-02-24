var imageTags = [
    "card1", "card2", "card3", "card4",
    "card5", "card6", "card7", "card8",
    "card9", "card10", "card11", "card12"
];

var blankImagePath = "./Images/back.jpg";
var actualImages = new Array();
    
function printBlanks()
{
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
}

function createRandomImageArray()
{
    actualImages = [];
    var actualImagePath = ["./Images/card1.jpg", "./Images/card2.jpg", "./Images/card3.jpg", "./Images/card4.jpg"];
    var count = [0,0,0,0,];
    while(actualImages.length < 12)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 3)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
    
        
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
        
    
}