var roundnum = 1;
var numname;
var name1;
var name2;
var name3;
var name4;
var numact;
onEvent("buttonNEWGAME", "click", function( ) {
  setScreen("screenplayernames");
});
onEvent("buttonstartgame", "click", function( ) {
  setScreen("loadingdarescreen");
  name1 = getText("textinputname1");
  name2 = getText("textinputname2");
  name3 = getText("textinputname3");
  name4 = getText("textinputname4");
  numname = randomNumber(1, 4);
  numact = randomNumber(1, 17);
  setTimeout(function() {
    setScreen("screenactivities");
    setText("labelroundnumber", "Round " + roundnum);
    if (numname==1) {
      setText("Labelname", name1);
    }
    if (numname==2) {
      setText("Labelname", name2);
    }
    if (numname==3) {
      setText("Labelname", name3);
    }
    if (numname==4) {
      setText("Labelname", name4);
    }
    if (numact == 1) {
      setText("labelACTIVITY", "Dance to the song,I'm Gonna Move it Move it.");
    }
    if (numact == 2) {
      setText("labelACTIVITY", "Go outside and dance like a cowboy!");
    }
    if (numact == 3) {
      setText("labelACTIVITY", "Do a handstand for one minute.");
    }
    if (numact == 4) {
      setText("labelACTIVITY", "Put chocolate syrup on a pickle and eat it.");
    }
    if (numact == 5) {
      setText("labelACTIVITY", "Say the alphabet backwards as fast as you can.");
    }
    if (numact == 6) {
      setText("labelACTIVITY", "Pound on your chest and act like a gorila for the next minute.");
    }
    if (numact == 7) {
      setText("labelACTIVITY", "Put on a weird hat and make faces in the mirror.");
    }
    if (numact == 8) {
      setText("labelACTIVITY", "Lie down and pretend you're a fish.");
    }
    if (numact == 9) {
      setText("labelACTIVITY", "Make cat sounds for one minute.");
    }
    if (numact == 10) {
      setText("labelACTIVITY", "Go outside and yell,Happy New Year!");
    }
    if (numact == 11) {
      setText("labelACTIVITY", "Keep a straight face as the other kids do their best to make you laugh for one minute.");
    }
    if (numact == 12) {
      setText("labelACTIVITY", "Fill your mouth with water, and each person in the group must tell the funniest joke they know. ");
    }
    if (numact == 13) {
      setText("labelACTIVITY", "Talk in an accent for the next 3 rounds.");
    }
    if (numact == 14) {
      setText("labelACTIVITY", "Crabwalk across the room.");
    }
    if (numact == 15) {
      setText("labelACTIVITY", "Attempt to do a magic trick.");
    }
    if (numact == 16) {
      setText("labelACTIVITY", "Start barking at every dog you meet.");
    }
    if (numact == 17) {
      setText("labelACTIVITY", "Imitate a monkey as good as you can.");
    }
  }, 6000);
});
onEvent("buttonnextround", "click", function( ) {
  setScreen("loadingdarescreen");
  name1 = getText("textinputname1");
  name2 = getText("textinputname2");
  name3 = getText("textinputname3");
  name4 = getText("textinputname4");
  numname = randomNumber(1, 4);
  numact = randomNumber(1, 15);
  roundnum = roundnum+1;
  setTimeout(function() {
    setScreen("screenactivities");
    setText("labelroundnumber", "Round " + roundnum);
    if (numname==1) {
      setText("Labelname", name1);
    }
    if (numname==2) {
      setText("Labelname", name2);
    }
    if (numname==3) {
      setText("Labelname", name3);
    }
    if (numname==4) {
      setText("Labelname", name4);
    }
    if (numact == 1) {
      setText("labelACTIVITY", "Dance to the song,I'm Gonna Move it Move it.");
    }
    if (numact == 2) {
      setText("labelACTIVITY", "Go outside and dance like a cowboy!");
    }
    if (numact == 3) {
      setText("labelACTIVITY", "Do a handstand for one minute.");
    }
    if (numact == 4) {
      setText("labelACTIVITY", "Put chocolate syrup on a pickle and eat it.");
    }
    if (numact == 5) {
      setText("labelACTIVITY", "Say the alphabet backwards as fast as you can.");
    }
    if (numact == 6) {
      setText("labelACTIVITY", "Pound on your chest and act like a gorila for the next minute.");
    }
    if (numact == 7) {
      setText("labelACTIVITY", "Put on a weird hat and make faces in the mirror.");
    }
    if (numact == 8) {
      setText("labelACTIVITY", "Lie down and pretend you're a fish.");
    }
    if (numact == 9) {
      setText("labelACTIVITY", "Bark like a dog for a minute.");
    }
    if (numact == 10) {
      setText("labelACTIVITY", "Go outside and yell,Happy New Year!");
    }
    if (numact == 11) {
      setText("labelACTIVITY", "Keep a straight face as the other kids do their best to make you laugh for one minute.");
    }
    if (numact == 12) {
      setText("labelACTIVITY", "Fill your mouth with water, and each person in the group must tell the funniest joke they know. ");
    }
    if (numact == 13) {
      setText("labelACTIVITY", "Talk in an accent for the next 3 rounds.");
    }
    if (numact == 14) {
      setText("labelACTIVITY", "Crabwalk across the room.");
    }
    if (numact == 15) {
      setText("labelACTIVITY", "Attempt to do a magic trick.");
    }
  }, 6000);
});
