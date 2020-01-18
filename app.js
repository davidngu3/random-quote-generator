$(document).ready(function() {
    newQuote();  // on initial load, fetch and display random quote

    
});

let quotes = [
    ['A ship is safe in the harbor, but that\'s not what ships are for.', 'Unknown'],
    ['We must be careful who we pretend to be, because we are who we pretend to be.', 'Kurt Vonnegut'],
    ['Never attribute to malice that which is adequately explained by stupidity.', 'Hanlon\'s Razor'],
    ['We are what we repeatedly do. Excellence, then, is not an act, but a habit.', 'Aristotle'],
    ['Don\'t do something permanently stupid when you\'re temporarily upset.', 'Unknown'],
    ['We judge ourselves by our intentions and others by their behaviour.', 'Stephen M.R. Covey'],
    ['Years of love have been forgot, in the hatred of a minute.', 'Edgar Allan Poe']
]

function newQuote() {
    // get a random quote
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex][0];
    let randomAuthor = quotes[randomIndex][1];
    
    // put random quote into quote and author box
    $("#text").html(randomQuote);
    $("#author").html("- " + randomAuthor);

    // configure twitter button by url encoding
    let twitterUrl = "https://twitter.com/intent/tweet?hashtags=quotes&text=";
    let encodedUrl = twitterUrl + randomQuote + " - " + randomAuthor;
    $("#tweet-quote").prop("href", encodedUrl);

    return '';
}





/*
<!-- 
User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

-->
*/