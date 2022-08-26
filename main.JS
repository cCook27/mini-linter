let story = 'Last weekend, I took literally most the beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let punctuation = ['.', '!', '?'];





var betterWords = storyWords.reduce(function(accumulator, word){
  var exist = unnecessaryWords.find(function(item){
    return item === word;
  });
  if(!exist){
    accumulator.push(word)
  };
    return accumulator;
}, []);


var wordCount = betterWords.length;


var howManyOver = betterWords.reduce(function(accumulator, word){
  overUse = overusedWords.forEach(function(item){
    if(item === word){
      accumulator[word] += 1
    };
  });
    return accumulator;
},
  {really: 0, very: 0, basically: 0}
);


var howManySentences = betterWords.reduce(function(accumulator, word){
  var punc = punctuation.forEach(function(item){
    if(word.includes(item)){
      accumulator += 1;
    };
  });
  return accumulator;
},0);


function logAll(words, sentences, overuses){
  console.log(`There are ${words} words and ${sentences} sentences. Here are the overused words you had:`, overuses);
};

console.log(betterWords.join(' '));

logAll(wordCount, howManySentences, howManyOver);
