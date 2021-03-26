
// variables
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// function that takes array, and returns one of the items stored inside the array at random.
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// text strings that will act as input
 let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. James saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
 let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

 let insertY = ["the soup kitchen", "Disneyland", "the White House"];

 let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// event handler
randomize.addEventListener('click', result);

 $("button.randomize").click(function() {
    $("p.beforenews").hide();
});

function result() {
    console.log(randomValueFromArray(insertX));

    let newStory = storyText; /*creating a new variable newStory, and setting its value to equal storyText. This is needed so 
                                we can create a new random story each time the button is presses and the function is run*/

    let xItem = randomValueFromArray(insertX); 
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);


    if(customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if(document.getElementById("uk").checked) {
        let weight = Math.round(300 * 0.0714286) + ' stones ';
        let temperature =  Math.round((94 - 32) * (5/9)) + ' celsius';
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}



