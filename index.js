//Challenge 1: Your age in Days

function ageInDays()
    {
        var birthYear = prompt('What year you were born?');
        var noOfDays = (2020 - birthYear)*365;
        var h1 = document.createElement('h1');
        var textAnswer = document.createTextNode('You are ' + noOfDays+ ' days Old.' );
        h1.setAttribute('id', 'noOfDays');
        h1.appendChild(textAnswer);
        document.getElementById('flex-box-result').appendChild(h1);
    }

function reset()
{
    document.getElementById('noOfDays').remove();
}

//Challenge 2: Cat Generator

function generateCat()
{
    var image = document.createElement('img');
    var div = document.getElementById('flex-box-gen');
    image.src = "https://cdn2.thecatapi.com/images/49i.gif"
    div.appendChild(image);
}


