function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    var answer3 = document.getElementById("choice3").innerHTML;
    if (choice == 1 && answer1 == "Lets Go!") {
        document.getElementById("story").innerHTML = "The house is pretty small. A living room, a bedroom and a kitchen. Where do you want to go?";
        document.getElementById("choice1").innerHTML = "Stay in the living room";
        document.getElementById("choice2").innerHTML = "Explore the bedroom";
        document.getElementById("choice3").innerHTML = "Explore the kitchen";
    } else if (choice == 3 && answer3 == "Yes but as a different button") {
        document.getElementById("story").innerHTML = "The house is pretty small. A living room, a bedroom and a kitchen. Where do you want to go?";
        document.getElementById("choice1").innerHTML = "Stay in the living room";
        document.getElementById("choice2").innerHTML = "Explore the bedroom";
        document.getElementById("choice3").innerHTML = "Explore the kitchen";
    } else if (choice == 2 && answer2 == "No, I just want to nap") {
        document.getElementById("story").innerHTML = "You just want to nap today? That's ok. Nothing interesting is going to happen. You slept until your owner came back.";
        document.getElementById("choice1").innerHTML = "Tomorrow is a new day";
        document.getElementById("choice2").innerHTML = "Quit";
    //Living room
    } else if (choice == 1 && answer1 == "Stay in the living room") {
        document.getElementById("story").innerHTML = "Your favorite place to nap is on the window sill where you are right now. Your owner is an older lady who has a big chair she likes to sit in";
        document.getElementById("choice1").innerHTML = "Move to the chair";
        document.getElementById("choice2").innerHTML = "Explore the bedroom";
        document.getElementById("choice3").innerHTML = "Explore the kitchen";
    //Bedroom
    } else if (choice == 2 && answer2 == "Explore the bedroom") {
        document.getElementById("story").innerHTML = "The bedroom door is closed but you've seen your owner press down on the handle and it opens. As long as you can reach it, you should be able to open it.";
        document.getElementById("choice1").innerHTML = "Try to reach";
        document.getElementById("choice3").innerHTML = "Explore the kitchen";
           document.getElementById("choice2").innerHTML = "Go back to the living room";
    //Kitchen
    } else if (choice == 3 && answer3 == "Explore the kitchen") {
        document.getElementById("story").innerHTML = "You decide to explore the kitchen. Normally you only go in here for food but today is different.";
        document.getElementById("choice1").innerHTML = "Hop up on the counter";
        document.getElementById("choice2").innerHTML = "Examine the backdoor";
           document.getElementById("choice2").innerHTML = "Go back to the living room";
     } else if (choice == 1 && answer1 == "Hop up on the counter") {
        document.getElementById("story").innerHTML = "You hop up on the counter and look around. You see a picture of a dog with a collar sitting next to the frame. You never met this dog but you smelled him when you first arrived here as a kitten. Nothing else super interesting up here.";
        document.getElementById("choice1").innerHTML = "Examine the backdoor";
        document.getElementById("choice2").innerHTML = "Go back to the living room";
        document.getElementById("choice3").innerHTML = "Explore the bedroom";
    } else if (choice == 1 && answer1 == "Examine the backdoor") {
        document.getElementById("story").innerHTML = "You examine the backdoor and see a dog door but it doesn't open when you push against it. A little light blinks everytime you push against it. Maybe it needs something specific to open it?";
        document.getElementById("choice1").innerHTML = "Hop on the counter and look around for something that might open the dog door";
        document.getElementById("choice2").innerHTML = "Go back to the living room";
        document.getElementById("choice3").innerHTML = "Explore the bedroom";
    } else if (choice == 1 && answer1 == "Hop on the counter and look around for something that might open the dog door") {
        document.getElementById("story").innerHTML = "You hop on the counter and look around for something that might open the dog door. You see the dog collar next to the picture has a tag on it. You grab the collar and bring it over to the dog door. The light blinks again but this time the door opens and you are free!";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
     }
    //Living room 2
    else if (choice == 1 && answer1 == "Move to the chair") {
        document.getElementById("story").innerHTML = "The chair looked so nice and cozy, you just had to move there. You jump down from the window sill and hop up on the chair but when you do, you accidentally hit the remote and the TV turns on.";
        document.getElementById("choice1").innerHTML = "Mess with the remote";
        document.getElementById("choice2").innerHTML = "Explore the bedroom";
        document.getElementById("choice3").innerHTML = "Explore the kitchen";
    //Bedroom 2
    } else if (choice == 1 && answer1 == "Try to reach") {
        document.getElementById("story").innerHTML = "You jump up and try to reach the handle but you just can't get there. You are so close but you just can't reach it.";
        document.getElementById("choice1").innerHTML = "Jump up on the plant stand next to the door";
        document.getElementById("choice2").innerHTML = "Go back to the living room";
        document.getElementById("choice3").innerHTML = "Explore the kitchen";
    } else if (choice == 1 && answer1 == "Jump up on the plant stand next to the door") {
        document.getElementById("story").innerHTML = "You jump up on the plant stand and are now able to use your paw to press down on the handle and open the dooor!";
        document.getElementById("choice1").innerHTML = "Explore the bedroom";
        document.getElementById("choice2").innerHTML = "Go back to the living room";
        document.getElementById("choice3").innerHTML = "Explore the kitchen";
    } else if (choice == 1 && answer1 == "Explore the bedroom") {
        document.getElementById("story").innerHTML = "The bedroom is small, just a bed and a dresser. You jump up on the bed and look around. You see the window above the dresser is open but there is a screen in the way.";
        document.getElementById("choice1").innerHTML = "Tear the screen open with your claws";
        document.getElementById("choice2").innerHTML = "Go back to the living room";
        document.getElementById("choice3").innerHTML = "Explore the kitchen";
    // Back to living room
        } else if (choice == 2 && answer2 == "Go back to the living room") {
         document.getElementById("story").innerHTML = "Your favorite place to nap is on the window sill. Your owner is an older lady who has a big chair she likes to sit in";
        document.getElementById("choice1").innerHTML = "Move to the chair";
        document.getElementById("choice2").innerHTML = "Explore the bedroom";
        document.getElementById("choice3").innerHTML = "Explore the kitchen";
    // Mess with remote 
    } else if (choice == 1 && answer1 == "Mess with the remote") {
        document.getElementById("story").innerHTML = "You start pressing buttons on the remote and the TV starts changing channels. One time your owner fell asleep while watching something loud and a bunch of people came over to check on her. Maybe if you choose something loud, someone will come and open the front door.";
        document.getElementById("choice1").innerHTML = "Channel 1";
        document.getElementById("choice2").innerHTML = "Channel 2";
        document.getElementById("choice3").innerHTML = "Channel 3";
    //Channels
     } else if (choice == 1 && answer1 == "Channel 1") {
        document.getElementById("story").innerHTML = "You press channel 1 and two people appear on screen. 'blah blah blah' says one of them, 'blah blah blah' says the other. Ah yes, very interesting, worth watching hours of even but not loud enough, lets try other channels.";
        document.getElementById("choice1").innerHTML = "Channel 2";
        document.getElementById("choice2").innerHTML = "Channel 3";
        document.getElementById("choice3").innerHTML = "Explore the kitchen";
    } else if (choice == 1 && answer1 == "Channel 2") {
        document.getElementById("story").innerHTML = "You press channel 2 and a loud commercial comes on. 'BLAH BLAH BLAH' shouts the human. Perfect! Loud enough! But it doesn't last long. Lets try the next channel.";
        document.getElementById("choice1").innerHTML = "Channel 3";
        document.getElementById("choice2").innerHTML = "Explore the kitchen";
        document.getElementById("choice3").innerHTML = "Explore the bedroom";
     } else if (choice == 1 && answer1 == "Channel 3") {
        document.getElementById("story").innerHTML = "You press channel 3 and a loud movie comes on. One human starts screaming and won't stop. Finally! You turn up the volume and wait. Soon enough you hear loud bangs on the front door before it eventually opens up and humans in blue outfits open the front dooor.";
        document.getElementById("choice1").innerHTML = "Escape through the front door";
        document.getElementById("choice2").innerHTML = "Hurry escape!";
        document.getElementById("choice3").innerHTML = "Get scared and hide under the chair";
    // TV ending
     } else if (choice == 1 && answer1 == "Escape through the front door") {
        document.getElementById("story").innerHTML = "You run out the front door and are free!";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
        document.getElementById("choice3").innerHTML = "random third button that does nothing";
     } else if (choice == 1 && answer1 == "Get scared and hide under the chair") {
        document.getElementById("story").innerHTML = "You get scared and hide under the chair. There is always tomorrow.";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
        document.getElementById("choice3").innerHTML = "random third button that does nothing";
    //Bedroom ending
     } else if (choice == 1 && answer1 == "Tear the screen open with your claws") {
        document.getElementById("story").innerHTML = "You tear the screen open with your claws and jump out the window! You are free!"+ "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    //Restart
    } else if (choice == 1 && answer1 == "Tomorrow is a new day") {
        document.getElementById("story").innerHTML = "Your owner has just left for the day, now is your chance to escape!";
        document.getElementById("choice1").innerHTML = "Let's Go!";
        document.getElementById("choice2").innerHTML = "No, I just want to nap";
        document.getElementById("choice3").innerHTML = "Yes but as a different button";
     } else if (choice == 1 && answer1 == "Restart") {
        document.getElementById("story").innerHTML = "Your owner has just left for the day, now is your chance to escape!";
        document.getElementById("choice1").innerHTML = "Let's Go!";
        document.getElementById("choice2").innerHTML = "No, I just want to nap";
        document.getElementById("choice3").innerHTML = "Yes but as a different button";
    //Quit
    } else if (choice == 2 && answer2 == "Quit") {
        document.getElementById("story").innerHTML = "Thanks for playing!";
    }

}