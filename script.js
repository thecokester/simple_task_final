 var sentence = 'Hey, My name is Markus ;-)';
   
    
document.addEventListener('DOMContentLoaded', function(){
    var button = document.createElement('button');
    var first = document.querySelector('#first');
    first.appendChild(button);
    button.innerText = 'click me!';
    button.addEventListener('click', function(){
        alert('Roll Tide Roll');
    });  
    
    var textBox = document.querySelector('#text-box');
    var textButton = document.querySelector('#text-button');
    textButton.addEventListener('click', function(){
        
        textBox.value = 'Can\'t Touch This';
        
    });
 
    var mouseColors = document.querySelector('#mouse-colors');
    mouseColors.addEventListener('mouseover', function(){
        mouseColors.style.backgroundColor = 'green';
    });
    mouseColors.addEventListener('mouseleave', function(){
        mouseColors.style.backgroundColor = 'yellow';
    });
    
    var randomColorText = document.querySelector('#random-color-text');
    randomColorText.addEventListener('click', function(){
       var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        randomColorText.style.color = hue;
    });
    
    var addSpan = document.querySelector('#add-span');
    var buttonSpan = document.querySelector('#span-button');
    buttonSpan.addEventListener('click', function(){
        var spanName = document.createElement('span');
        addSpan.appendChild(spanName);
        spanName.innerText = 'Markus is the Man!';
    });
    
    var friendsUl = document.querySelector('#friends-ul');
    var friendsButton = document.querySelector('#friends-button');
    var friends = ['Jermain', 'Dylan', 'JB', 'Carlton', 'Greg', 'Chance'
        , 'Tyler', 'Lance', 'Domonique', 'Chris'];
    friendsButton.addEventListener('click', function(){
        for(var i = 0; i < friends.length; i++){
                var lis = document.createElement('li');
                
                friendsUl.appendChild(lis);
                lis.innerHTML = friends[i];
        }
  });
})

    /*7*/
    var changeNames = document.querySelector('#change-name');
    changeNames.addEventListener('click', function(){
       var newLi = document.querySelector('li');
    })