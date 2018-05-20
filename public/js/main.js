num = 7;
let menuActive = false;
let menuArray = [];

menuArray[0] = [];
menuArray[0]['text'] = ["Home", "Introduction"];
menuArray[0]['links'] = ["/", "/introduction"];
menuArray[0]['img'] = "/assets/introbutton.jpg"
menuArray[0]['alt'] = "/assets/introbutton2.jpg"
menuArray[1] = [];
menuArray[1]['text'] = ["Prologue", "Chapter 1: Serdian War", "Chapter 2: The Platinum Shadow", "Chapter 3: Fate and Soul", "Chapter 4: Moon and Fate"];
menuArray[1]['links'] = ["/story/prologue", "/story/chapter1", "/story/chapter2", "/story/chapter3", "/story/chapter4"];
menuArray[1]['img'] = "/assets/storybutton.jpg"
menuArray[1]['alt'] = "/assets/storybutton2.jpg"
menuArray[2] = [];
menuArray[2]['text'] = ["Main Characters", "Other Characters"];
menuArray[2]['links'] = ["/characters/main", "/characters/other"];
menuArray[2]['img'] = "/assets/charactersbutton.jpg"
menuArray[2]['alt'] = "/assets/charactersbutton2.jpg"
menuArray[3] = [];
menuArray[3]['text'] = ["Abnormalities", "Accessories", "Additions", "Art of Fighting", "Enemies", "Experience", "Items", "Item Locations", "Shopping", "Sidequests", "Special Items", "Stardust", "Stardust Picture Guide", "Team/Stat Evaluation", "Weapons/Armor", "Walkthrough"];
menuArray[3]['links'] = ["/gamehelp/abnormalities", "/gamehelp/accessories", "/gamehelp/additions", "/gamehelp/fighting", "/gamehelp/enemies", "/gamehelp/experience", "/gamehelp/items", "/gamehelp/itemlocations", "/gamehelp/shopping", "/gamehelp/sidequests", "/gamehelp/specialitems", "/gamehelp/stardust", "/gamehelp/stardustpictureguide",
  "/gamehelp/teamstat", "/gamehelp/weaponsarmor", "/gamehelp/walkthrough"];
menuArray[3]['img'] = "/assets/gamehelpbutton.jpg"
menuArray[3]['alt'] = "/assets/gamehelpbutton2.jpg"
menuArray[4] = [];
menuArray[4]['text'] = ["Abnormalities", "Accessories", "Additions", "Art of Fighting", "Enemies", "Experience", "Items", "Item Locations", "Shopping", "Sidequests", "Special Items", "Stardust", "Stardust Picture Guide", "Team/Stat Evaluation", "Weapons/Armor", "Walkthrough"];
menuArray[4]['links'] = ["/printables/abnormalities.html", "/printables/accessories.html", "/printables/additions.html", "/printables/fighting.html", "/printables/enemies.html", "/printables/experience.html", "/printables/items.html", "/printables/itemlocations.html", "/printables/shopping.html", "/printables/sidequests.html", "/printables/specialitems.html", "/printables/stardust.html",
  "/printables/stardustpictureguide.html", "/printables/teamstat.html", "/printables/weaponsarmor.html", "/printables/walkthrough.html"];
menuArray[4]['img'] = "/assets/printablesbutton.jpg"
menuArray[4]['alt'] = "/assets/printablesbutton2.jpg"
menuArray[5] = [];
menuArray[5]['text'] = ["MIDIs", "MP3s", "Videos", "Voice Clips"];
menuArray[5]['links'] = ["/media/midis", "/media/mp3s", "/media/videos", "/media/voiceclips"];
menuArray[5]['img'] = "/assets/mediabutton.jpg"
menuArray[5]['alt'] = "/assets/mediabutton2.jpg"
menuArray[6] = [];
menuArray[6]['text'] = ["Contact", "Gallery", "Links In/Out", "Notes", "Voices/Lyrics", "Translations"];
menuArray[6]['links'] = ["/etc/contact",
  "/etc/imagegallery",
  "/etc/links",
  "/etc/notes",
  "/etc/voiceslyrics",
  "/etc/translations"];
menuArray[6]['img'] = "/assets/etcbutton.jpg"
menuArray[6]['alt'] = "/assets/etcbutton2.jpg"

function showMenu(menuNumber)
{
  let menuY = 0;
  for(let i=0;i<menuNumber;i++)
    menuY += (document.getElementById("image"+menuNumber).height+10);
  let menuX = document.getElementById("image"+menuNumber).width+5;
  menuY += 70;
  menuHeight = 18*(menuArray[menuNumber]['text'].length)+"px";

  myContent = "<div>";
  for(let i=0; i<menuArray[menuNumber]['text'].length; i++)
  {
    myContent += "<a href='"+menuArray[menuNumber]['links'][i]+"'>";
    myContent += menuArray[menuNumber]['text'][i];
    myContent += "</a><br/>";
  }
  myContent += "</div>";
  document.getElementById("popNav").innerHTML = myContent;
  document.getElementById("popNav").style.left = menuX+"px";
  document.getElementById("popNav").style.marginTop = menuY+"px";
  document.getElementById("popNav").style.height = menuHeight+"px";
  document.getElementById("popNav").style.display = "block";
}

function hideMenu() {
  document.getElementById("popNav").innerHTML = "";
  document.getElementById("popNav").style.display = "none";
}

function MouseOver(myImg, imgNum) {
  myImg.src = menuArray[imgNum]['alt'];
}

function MouseOut(myImg, imgNum) {
  myImg.src = menuArray[imgNum]['img'];
}