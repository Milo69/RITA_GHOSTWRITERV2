var lexicon;




function setup() {
  lexicon = new RiLexicon();
  separateSentences();
  separateWords();
  sendMail();

  var allsentences = document.getElementsByClassName("phrase");
  for(var i = 0; i < allsentences.length; i++) {
//      console.log(allsentences[i].lastElementChild);
      var child =  allsentences[i].lastElementChild;
      child.addEventListener("click", changeWord);
  }
    
    
}

function separateSentences() {
     var plot = document.getElementById("plot").textContent;
     var retour = /\n/; // regex d'un retour à la ligne
     var sentences = plot.split(retour); // fonction pour séparer chaque mot
     var newPlot =  "";
    for(var i = 0; i<sentences.length; i++) {
        newPlot += "<span class='phrase'>" + sentences[i] + "</span><br>";
        
    }
    document.getElementById('plot').innerHTML = newPlot;
}


function changeWord(event) {
    var clickedWord = event.target.textContent;
    console.log(event);
    console.log(clickedWord);
    findRhymes(clickedWord, event.target);
    
}

function separateWords() {
    var sentences = document.getElementsByClassName("phrase");
    for (var i = 0; i<sentences.length; i++) { 
        var allwords = RiTa.tokenize(sentences[i].textContent);
        var newSentence = "";
        for(var j = 0; j<allwords.length; j++) {
            newSentence += "<span class='mot'>" + allwords[j] + "</span> ";
        
        }
        document.getElementsByClassName('phrase')[i].innerHTML = newSentence;

//        var allwords = sentences[i].textContent.split(" ");
//        var lastindex = allwords.length-1; // var qui vient prendre le dernier index(numero) de la liste
//        var lastword = allwords[lastindex]; // = dernier mot de la liste
//        console.log(lastword);
//        console.log(sentences[i].textContent.search(lastword));
    
    }
}



function findRhymes(word, element) { 
  var tmp = '';
   if (lexicon.rhymes(word).length>0){ // pour éviter le bug de "wallpaper"
        do {
            tmp = lexicon.rhymes(word);
        } while(word && tmp.length < 3)
            console.log(tmp.length);
          rhymeIndex = random(0, tmp.length);
          rhyme = tmp[int(rhymeIndex)];
          element.innerHTML= rhyme;
        //    console.log('rhyme ' + rhyme);
        return rhyme;
   }
}

function sendMail() {
            var mailPlot = document.getElementById("plot");
            var buttonMail= document.getElementById("mail");
            buttonMail.href="mailto:contact@marketingmusical.fr?subject=Ghostwritter - Trackshit 1&body=" +"Hey motherfucker ! Here's a little rap song I wrote for you, listen my dopeshit and promote it please : %0D%0A %0D%0A" + mailPlot.textContent;     
}

//
//function postTag(output) {
//
//RiTa.getPosTags("");
//
//}