var quotes=[`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss`,
`“Be the change that you wish to see in the world.”― Mahatma Gandhi`,
`“It is better to be hated for what you are than to be loved for what you are not.”― Andre Gide`,
`“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”― William W. Purkey`,
`“The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.”― Marilyn Monroe`,
`“When someone loves you, the way they talk about you is different. You feel safe and comfortable.”― Jess C. Scott, The Intern`,
`“One is loved because one is loved. No reason is needed for loving.”― Paulo Coelho, The Alchemist`,
`“We love the things we love for what they are.”― Robert Frost`,
`“The only thing worse than a boy who hates you: a boy that loves you.”― Markus Zusak, The Book Thief`,
`“You are my best friend as well as my lover, and I do not know which side of you I enjoy the most. I treasure each side, just as I have treasured our life together.”― Nicholas Sparks, The Notebook`,
`“You are, and always have been, my dream.”― Nicholas Sparks, The Notebook`,
`“Once upon a time there was a boy who loved a girl, and her laughter was a question he wanted to spend his whole life answering.”― Nicole Krauss, The History of Love`,
`“You don't get to choose if you get hurt in this world...but you do have some say in who hurts you. I like my choices.”― John Green, The Fault in Our Stars`,
`“It's a metaphor, see: You put the killing thing right between your teeth, but you don't give it the power to do its killing.”― John Green, The Fault in Our Stars`,
`“You gave me a forever within the numbered days, and I'm grateful.”― John Green, The Fault in Our Stars`];
var lastIndex,currIndx;
function pickRandomQuote(){
    do{
        currIndx = Math.floor(Math.random() * 15);
    }while(currIndx == lastIndex);
    var splittedQuote= quotes[currIndx].split('―')
    document.getElementById("quoteId").innerHTML= splittedQuote[0];
    document.getElementById("writterId").innerHTML= '--' + splittedQuote[1];
    lastIndex = currIndx;
}