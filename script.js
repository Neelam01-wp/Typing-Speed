document.addEventListener('DOMContentLoaded', () => {
  const toggleIcon = document.getElementById('toggleIcon');
  const body = document.body; 
  const container = document.querySelector('.container'); 

  toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bi-toggle-on'); 
    toggleIcon.classList.toggle('bi-toggle-off'); 

    if (toggleIcon.classList.contains('bi-toggle-on')) {
      body.classList.add('dark'); 
      container.classList.add('dark'); 
    } else {
      body.classList.remove('dark'); 
      container.classList.remove('dark'); 
    }
  });
});



const saveProgress = (results) => {
  try {
    const storedData = JSON.parse(localStorage.getItem("typingProgress")) || [];

    console.log("Existing Data:", storedData); 

    storedData.push(results);

    console.log("New Data:", results); 

    localStorage.setItem("typingProgress", JSON.stringify(storedData));

    console.log("Progress saved:", results);
  } catch (error) {
    console.error("Error saving progress:", error);
  }
};

const wordList = ["the", "name", "of", "very", "to", "through", "and", "just", "a", "form", "in", "much", "is", "Great", "it", "Think", "You", "say", "that", "Help", "He", "low", "was", "line", "for", "Before", "on", "turn", "are", "Cause", "with", "same", "as", "mean", "I", "differ", "his", "Move", "They", "Right", "be", "boy", "at", "old", "one", "too", "Have", "does", "This", "tell", "from", "Sentence", "or", "set", "had", "three", "by", "want", "hot", "air", "but", "well", "some", "also", "what", "play", "there", "small", "we", "end", "can", "put", "out", "Home", "other", "read", "were", "hand", "all", "port", "your", "large", "when", "spell", "up", "add", "use", "even", "word", "land", "how", "Here", "said", "must", "an", "big", "each", "high", "she", "such", "which", "follow", "do", "Act", "their", "why", "time", "Ask", "if", "men", "will", "change", "way", "went", "about", "light", "many", "kind", "then", "off", "Them", "need", "would", "house", "write", "picture", "like", "try", "so", "us", "these", "again", "her", "animal", "long", "point", "make", "mother", "thing", "world", "see", "near", "him", "build", "two", "self", "has", "earth", "look", "father", "more", "head", "day", "stand", "could", "own", "go", "page", "come", "should", "did", "country", "my", "found", "sound", "answer", "no", "school", "most", "grow", "number", "study", "who", "still", "over", "learn", "know", "plant", "Water", "cover", "than", "food", "call", "sun", "first", "four", "people", "thought", "may", "let", "down", "keep", "side", "eye", "been", "never", "now", "last", "find", "door", "any", "between", "new", "city", "work", "tree", "part", "cross", "take", "since", "get", "hard", "place", "start", "made", "Might", "live", "story", "where", "Saw", "after", "far", "back", "Sea", "little", "draw", "only", "left", "round", "late", "man", "run", "year", "don't", "came", "while", "show", "press", "every", "close", "good", "45632", "night", "me", "real", "give", "life", "our", "few", "under", "stop", "1234", "open", "ten", "seem", "simple", "together", "several", "next", "vowel", "white", "toward", "children", "war", "begin", "lay", "got", "against", "walk", "Pattern", "example", "slow", "ease", "center", "Paper", "Love", "often", "Person", "Always", "money", "Music", "serve", "those", "Appear", "both", "road", "mark", "Map", "book", "science", "letter", "rule", "until", "Govern", "mile", "pull", "river", "cold", "car", "notice", "feet", "voice", "care", "fall", "second", "power", "group", "town", "carry", "fine", "took", "certain", "rain", "fly", "eat", "unit", "room", "lead", "friend", "CRY", "began", "dark", "!idea", "Machine", "fish", "note", "Mountain", "wait", "north", "plan", "once", "figure", "base", "star", "hear", "box", "horse", "noun", "cut", "field", "sure", "rest", "watch", "correct", "color", "able", "face", "pound", "wood", "done", "Main", "beauty", "enough", "Drive", "plain", "Stood", "girl", "contain", "usual", "Front", "1900", "young", "teach", "ready", "week", "Above", "final", "ever", "gave", "red", "green", "list", "oh", "though", "Quick", "feel", "Develop", "talk", "sleep", "bird", "warm", "soon", "free", "body", "minute", "dog", "strong", "family", "special", "direct", "mind", "pose", "behind", "leave", "clear", "song", "tail", "measure", "produce", "state", "fact", "product", "street", "black", "inch", "short", "lot", "numeral", "nothing", "class", "course", "wind", "stay", "question", "wheel", "happen", "full", "complete", "force", "ship", "blue", "area", "object", "half", "Decide", "rock", "surface", "order", "deep", "fire", "Moon", "south", "island", "problem", "foot", "piece", "yet", "told", "busy", "knew", "test", "pass", "record", "farm", "boat", "top", "common", "whole", "gold", "king", "possible", "size", "plane", "heard", "age", "best", "dry", "hour", "wonder", "better", "laugh", "true", "thousand", "during", "ago", "hundred", "ran", "am", "check", "remember", "game", "step", "shape", "early", "yes", "hold", "hot", "west", "miss", "ground", "brought", "interest", "heat", "reach", "snow", "fast", "bed", "five", "bring", "sing", "sit", "listen", "perhaps", "six", "fill", "table", "east", "travel", "weight", "less", "language", "morning", "among"];

function shuffle(array) {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

function $(selector) {
  return document.querySelectorAll(selector);
}

function addWords() {
  const wordSection = document.querySelector("#word-section");
  wordSection.innerHTML = ""; 
  const shuffledWords = shuffle(wordList);

  for (let i = 0; i < 350; i++) {
    const wordSpan = document.createElement("span");
    wordSpan.textContent = shuffledWords[i];
    wordSection.appendChild(wordSpan);
  }

  if (wordSection.firstChild) {
    wordSection.firstChild.classList.add("current-word");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  addWords(); 
  console.log(document.getElementById("word-section").innerHTML); 
});


const colorCurrentWord = "#dddddd";
const colorCorrectWord = "#93C572";
const colorIncorrectWord = "#e50000";

const wordData = {
  seconds: 60,
  correct: 0,
  incorrect: 0,
  total: 0,
  typed: 0
};




function checkWord(word) {
  const wlen = word.value.length;
  const wval = word.value.trim();

  const current = $(".current-word")[0];
  const currentSubstring = current.innerHTML.substring(0, wlen);

  const noMatch = wval !== currentSubstring;
  const emptyWords = wval === '' || currentSubstring === '';

  if (noMatch || emptyWords) {
    current.classList.add("incorrect-word-bg");
    return false;
  } else {
    current.classList.remove("incorrect-word-bg");
    return true;
  }
}

function submitWord(word) {
  const current = $(".current-word")[0];

  if (checkWord(word)) {
    current.classList.remove("current-word");
    current.classList.add("correct-word-c");
    wordData.correct += 1;
  } else {
    current.classList.remove("current-word", "incorrect-word-bg");
    current.classList.add("incorrect-word-c");
    wordData.incorrect += 1;
  }

  wordData.total = wordData.correct + wordData.incorrect;

  current.nextSibling.classList.add("current-word");
}

function clearLine() {
  const wordSection = $("#word-section")[0];
  const current = $(".current-word")[0];
  const previous = current.previousSibling;
  const children = $(".correct-word-c, .incorrect-word-c").length;

  if (current.offsetTop > previous.offsetTop) {
    for (let i = 0; i < children; i++) {
      wordSection.removeChild(wordSection.firstChild);
    }
  }
}

let typingTimer = null;

function isTimer(seconds) {
  const time = $("#timer > span")[0].innerHTML;
  if (time === "0:00") {
    return false;
  }

  if (time === "1:00" && typingTimer === null) {
    typingTimer = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(typingTimer);
        typingTimer = null;
        calculateWPM(wordData); 
        $("#typebox")[0].disabled = true; 
      } else {
        seconds -= 1;
        const timePad = seconds < 10 ? "0" + seconds : seconds;
        $("#timer > span")[0].innerHTML = `0:${timePad}`;
      }
    }, 1000);
  }

  return true;
}


function calculateWPM(data) {
  const { seconds, correct, incorrect, total, typed } = data;
  const minutes = seconds / 60;
  const wpm = Math.max(0, Math.ceil(((typed / 5) - incorrect) / minutes));
  const accuracy = Math.ceil((correct / total) * 100);

  const results = `
    <ul id="results">
      <li>WPM: <span class="wpm-value">${wpm}</span></li>
      <li>Accuracy: <span class="wpm-value">${accuracy}%</span></li>
      <li id="results-stats">
        Total Words: <span>${total}</span> |
        Correct Words: <span>${correct}</span> |
        Incorrect Words: <span>${incorrect}</span> |
        Characters Typed: <span>${typed}</span>
      </li>
    </ul>
  `;

  $("#word-section")[0].innerHTML = results;


  saveProgress({
    wpm,
    accuracy,
    correct,
    incorrect,
    total,
    typed,
    date: new Date().toISOString() 
  });
  const wpmClass = $("li:nth-child(2) .wpm-value")[0].classList;
  if (accuracy > 80) {
    wpmClass.add("correct-word-c");
  } else {
    wpmClass.add("incorrect-word-c");
  }

  console.log(wordData);
}
function typingTest(e) {
  const SPACE = 32;
  e = e || window.event;
  const kcode = e.keyCode;
  const word = $("#typebox")[0];

  if (word.value.match(/^\s/g)) {
    word.value = "";
    return;
  }

  const isGameover = !isTimer(wordData.seconds);
  if (isGameover) {
    calculateWPM(wordData);
    return;
  }

  checkWord(word);
  if (kcode === SPACE) {
    submitWord(word);
    clearLine();
    $("#typebox")[0].value = "";
  }

  wordData.typed += 1;
}

function restartTest() {
  $("#typebox")[0].value = "";
  window.location.reload();
}

