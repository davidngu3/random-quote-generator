$(document).ready(function() {
  preLoadImages(backgrounds); // preload images for faster transition times
  newQuote();  // on initial load, fetch and display random quote

    
});

function preLoadImages(array) {
  array.map((bg) => {
    var img = new Image();
    img.src =  './backgrounds/' + bg + '.jpg';
  });
} 

let quotes = [
    ['A ship is safe in the harbor, but that\'s not what ships are for.', 'Unknown'],
    ['We must be careful who we pretend to be, because we are who we pretend to be.', 'Kurt Vonnegut'],
    ['Never attribute to malice that which is adequately explained by stupidity.', 'Hanlon\'s Razor'],
    ['We are what we repeatedly do. Excellence, then, is not an act, but a habit.', 'Aristotle'],
    ['Don\'t do something permanently stupid when you\'re temporarily upset.', 'Unknown'],
    ['We judge ourselves by our intentions and others by their behaviour.', 'Stephen M.R. Covey'],
    ['Years of love have been forgot, in the hatred of a minute.', 'Edgar Allan Poe']
];

let backgrounds = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7'];


function newQuote() {
    // configure random background image
    let randomImageIndex = Math.floor(Math.random() * backgrounds.length);
    let imageURL = "url(./backgrounds/" + backgrounds[randomImageIndex] + ".jpg)";
    $("body").css("background-image", imageURL); 
      
    // get a random quote
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex][0];
    let randomAuthor = quotes[randomIndex][1];
    
    // put random quote into quote and author box with smooth transitions
    $("#text").animate(
        { opacity: 0 },
        1000,
        function() {
          $(this).animate({ opacity: 1}, 1000);
          $('#text').html("<i class=\"fas fa-quote-left\"></i> " + randomQuote);
        }
      );

    $("#author").animate(
        { opacity: 0 },
        1000,
        function() {
          $(this).animate({ opacity: 1}, 1000);
          $('#author').html("- " + randomAuthor);
        }
    );


    // configure twitter button by url encoding
    let twitterUrl = "https://twitter.com/intent/tweet?hashtags=quotes&text=";
    let encodedUrl = twitterUrl + "\"" + randomQuote + "\"" + " - " + randomAuthor;
    $("#tweet-quote").prop("href", encodedUrl);

    return '';
}




