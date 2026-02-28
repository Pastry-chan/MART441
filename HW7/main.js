var imageTags = [
    "card1", "card2", "card3", "card4",
    "card5", "card6", "card7", "card8",
    "card9", "card10", "card11", "card12"
];
var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;
var player = JSON.parse(localStorage.getItem("playerInfo"));
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
    var actualImagePath = ["./Images/card1.jpg", "./Images/card2.jpg", "./Images/card3.jpg", "./Images/card4.jpg", "./Images/card5.jpg", "./Images/card6.jpg"];
    var count = [0,0,0,0,0,0];
    while(actualImages.length < 12)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }  
}

function flipImage(number)
{
    if(firstNumber >= 0)
    {
        secondNumber = number;
    document.getElementById(imageTags[number]).src= actualImages[number];   
            }
    else if(firstNumber < 0)
    {
        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src= actualImages[firstNumber];
    
    }
        if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        setTimeout(imagesDisappear, 1000);
    }
 
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        allFound++;
        
        firstNumber = -1;
        secondNumber = -1;
        if(allFound == actualImages.length/2)
        {  
            player.score = score;
            localStorage.setItem("playerInfo", JSON.stringify(player));
            window.location = "End.html";
        }
    }
}

function imagesDisappear()
{

    console.log(firstNumber);
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;
   
    var player = {
        firstname: firstName,
        lastname: lastName,
        age: age,
        score: 0
    };
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "Game.html";
}

function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" +
              "Age: " + player.age + "<br>" +
              "Score: " + player.score;
    if(document.getElementById("endInformation") != null)
    {
        document.getElementById("endInformation").innerHTML = str;
    }
    
   
}