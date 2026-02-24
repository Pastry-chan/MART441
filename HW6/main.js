// create an array of image names that correspond to the image tags
var imageTags = [
    "card1", "card2", "card3", "card4",
    "card5", "card6", "card7", "card8",
    "card9", "card10", "card11", "card12"
];
// create a variable with the blank image name
var blankImagePath = "./Images/back.jpg";
// create a empty array for the actual images
var actualImages = new Array();
    
function printBlanks()
{
   // call our random image creation function
    createRandomImageArray();
    // create a for loop
    for(var i = 0; i < imageTags.length; i++)
    {
    // iterate through the image tag ids and sets the source 
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
       
    
    
}

function createRandomImageArray()
{
    // create an array of actual images
    actualImages = [];
    var actualImagePath = ["./Images/card1.jpg", "./Images/card2.jpg", "./Images/card3.jpg", "./Images/card4.jpg"];
    // create another array to make sure the images only get added twice
    var count = [0,0,0,0,];
    // create a while statement to check to see if our actual image array is full
    while(actualImages.length < 12)
    {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
          // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array
        if(count[randomNumber] < 3)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
    
  
    
    
        
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
        // this should be a quick function that just changes
        // the image based on what number was pressed
        
    
}