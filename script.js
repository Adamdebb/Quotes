const funnyTravel =['It is not down in any map; true places never are.', 
'Travel makes a wise man better, and a fool worse.', 
'It is called present...it must be a reason for that!', 
'A journey is measured in friends rather than miles.', 
'When life knocks you down, roll over and look at the stars.', 
'There are two kinds of travel: first class and with children.', 
'Have you ever stopped to think, maybe travel is addicted to me?', 
'I have panicked unnecessarily in all four corners of the globe.', 
'Sometimes the road less traveled is less traveled for a reason.', ];
const funnyLife =['Maybe there are no excuses to be lazy, but I am still going to keep looking.', 
'If I won the award for laziness, I would send somebody to pick it up for me.', 
'He is so lazy that if there were work in bed, he would rather sleep on the floor.', 
'I wonder, we lazy people go to heaven... or do they send someone to pick us up? ', 
'Retirement is great, you get to be your own boss and tell yourself to do nothing all day.', 
'There is no better moment to postpone something you do nott want to do other than right now.', 
'Today I will live in the moment... unless that moment becomes unpleasant, in which case I will take a nap.', 
'Ultimate lazy moment: Watching the sunrise on TV because you are too lazy to get up and watch it for real.', 
'Son, if you really want something in this life, you have to work for it. Now quiet! They are about to announce the lottery numbers.', ];
const funnyLazy=['Everyone desires to live long, but no one would be old.', 
'The cure for boredom is curiosity. There is no cure for curiosity.', 
'Luck is a dividend of sweat. The more you sweat, the luckier you get.', 
'The best thing about the future is that it comes one day at a time.', 
'Life is a shipwreck but we must not forget tossing in the lifeboats.', 
'Life is rather like a tin of sardineswe are all of us looking for the key.', 
'Do not judge each day by the harvest you reap, but by the seed that you plant.', 
'Wisdom comes from experience. Experience is often a result of lack of wisdom.', 
'All you need in this life is ignorance and confidence, and then success is sure.', 
'Life is like an onion: You peel it off one layer at a time, and sometimes you weep.', 
'If you think you are too small to make a difference, try sleeping with a mosquito.', 
'Life is so constructed that an event does not, cannot, will not, match the expectation.', 
'I have a simple philosophy: Fill what is empty. Empty what is full. Scratch where it itches.', 
'I know God will not give me anything I cannot handle. I just wish He did not trust me so much.', 
'We are all here on earth to help others; what on earth the others are here for I do not know.', 
'The average man does not know what to do with his life yet wants another one which will last forever.', 
'It is a funny thing about life; if you refuse to accept anything but the best, you very often get it.  ', 
'Life does not cease to be funny when people die any more than it ceases to be serious when people laugh.', 
'Be who you are and say what you feel, because those who mind do not matter and those who matter do not mind.', 
'My life has no purpose, no direction, no aim, no meaning, and yet I am happy. I cannot figure it out. What am I doing right?', 
'Life...is like a grapefruit. It is orange and squishy and has a few pips in it, and some folks have half a one for breakfast.', 
'The simple act of opening a bottle of wine has brought more happiness to the human race than all the collective governments in the history of earth.', 
'I have learned that you can tell a lot about a person by the way (s)he handles these three things: a rainy day, lost luggage, and tangled Christmas tree lights. ', 
'Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.', ];


let travelQ = funnyTravel[Math.floor(Math.random() *  funnyTravel.length)];
let lifeQ = funnyLife[Math.floor(Math.random() *  funnyLife.length)];
let lazyQ = funnyLazy[Math.floor(Math.random() *  funnyLazy.length)];

console.log("Travel Quote: " + travelQ);
console.log("Life Quote: " + lifeQ);
console.log("Lazy Quote: " + lazyQ);


