// var number = 3;
// var counter = 0;




// function findTub(num) {
//   for (let i = 0; i <= number; i++) {
//     // console.log(number);
//     if (num % i == 0) {
//       console.log(i);
//       counter++
//     }
//   }
// }

// findTub(number);

var movies = [
  {
    "Title": "Hannibal",
    "fulltitle": "Hannibal (2001)",
    "movie_year": 2001,
    "Categories": "Action|Crime|Drama|Thriller",
    "summary": "The continuing saga of Hannibal Lecter, the murdering cannibal. He is presently in Italy and works as a curator at a museum. Clarice Starling, the FBI agent whom he aided to apprehend a serial killer, was placed in charge of an operation but when one of her men botches it, she's called to the mat by the Bureau. One high ranking official, Paul Krendler has it in for her. But she gets a reprieve because Mason Verger, one of Lecter's victims who is looking to get back at Lecter for what Lecter did to him, wants to use Starling to lure him out. When Lecter sends her a note she learns that he's in Italy so she asks the police to keep an eye out for him. But a corrupt policeman who wants to get the reward that Verger placed on him, tells Verger where he is. But they fail to get him. Later Verger decides to frame Starling which makes Lecter return to the States. And the race to get Lecter begins.",
    "ImageURL": "https://www.film.ru/sites/default/files/images/6sK8e9KRuEbLUB8SfIKmkQEprO8.jpg",
    "imdb_id": "tt0212985",
    "imdb_rating": 6.8,
    "runtime": 131,
    "language": "English",
    "ytid": "eHSYth2wSEk"
  },
  
  {
    "Title": "Hanna",
    "fulltitle": "Hanna (2011)",
    "movie_year": 2011,
    "Categories": "Action|Adventure|Drama|Thriller",
    "summary": "Hanna (Ronan) is a teenage girl. Uniquely, she has the strength, the stamina, and the skills of a soldier; these come from being raised by her father (Bana), an ex-CIA man, in the wilds of Finland. Living a life unlike any other teenager, her upbringing and training have been one and the same, all geared to making her the perfect assassin. The turning point in her adolescence is a sharp one; sent into the world by her father on a mission, Hanna journeys stealthily across Europe while eluding agents dispatched after her by a ruthless intelligence operative with secrets of her own (Blanchett). As she nears her ultimate target, Hanna faces startling revelations about her existence and unexpected questions about her humanity.",
    "ImageURL": "https://media.kg-portal.ru/images/hanna/hanna_4.jpg",
    "imdb_id": "tt0993842",
    "imdb_rating": 6.8,
    "runtime": 111,
    "language": "English",
    "ytid": "u73CLdHpbNk"
  },
  
  {
    "Title": "Halloween",
    "fulltitle": "Halloween (2007)",
    "movie_year": 2007,
    "Categories": "Action|Fantasy|Horror",
    "summary": "The residents of Haddonfield don't know it yet... but death is coming to their small sleepy town. Sixteen years ago, a ten year old boy called Michael Myers brutally kills his step father, his elder sister and her boyfriend. Sixteen years later, he escapes from the mental institution and makes his way back to his hometown intent on a murderous rampage pursued by Dr Sam Loomis who is Michael's doctor and the only one who knows Michael's true evil. Elsewhere a shy teenager by the name of Laurie Strode is babysitting on the night Michael comes home... is it pure coincidence that she and her friends are being stalked by him?",
    "ImageURL": "https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "imdb_id": "tt0373883",
    "imdb_rating": 6.1,
    "runtime": 109,
    "language": "English",
    "ytid": "IeQiSdznHGo"
  }
  
]

var unOrdinaryList =  document.querySelector(".list");

function movie(movie) {
  for (let i = 0; i < movies.length; i++) {
    var li = document.createElement("li");
    unOrdinaryList.appendChild(li);
    
    for (let j = 0; j < 1; j++) {
    
      var listImg = document.createElement("img");
      li.appendChild(listImg);
      listImg.src = movies[i]["ImageURL"];
      listImg.width = 300;
      listImg.height = 200; 
      var headingTwo = document.createElement("h2");
      li.appendChild(headingTwo);
      headingTwo.textContent = movies[i]["Title"];

      var filmRate = document.createElement("p");
      li.appendChild(filmRate);
      filmRate.textContent = movies[i]["imdb_rating"]
    
    }
  }
}

movie()





// let elList = document.querySelector(".list");

// function moviesSearch(movie) {
//   for (let i = 0; i < movies.length; i++) {
//     let elLi = document.createElement("li");
//     elList.appendChild(elLi);
//     for (let j = 0; j < 1; j++) {
//       let elH2 = document.createElement("h2")
//       elLi.appendChild(elH2)
//       elH2.textContent = movies[i]["Title"]
//     }
//     for (let j = 0; j < 1; j++) {
//       let elImg = document.createElement("img")
//       elLi.appendChild(elImg)
//       elImg.src = movies[i]["ImageURL"]
//     }
//   }
// }

// moviesSearch()

