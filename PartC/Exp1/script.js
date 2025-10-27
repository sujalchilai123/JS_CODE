const name_ele = document.getElementById("name");
    const body = document.getElementById("body");
    const input = document.getElementById('input');

    name_ele.addEventListener('mouseover', function() {
      body.style.backgroundColor = 'yellow';
      name.style.backgroundColor = 'cyan';
    });

    name_ele.addEventListener('mouseout', function() {
      body.style.backgroundColor = 'magenta';
      name.style.backgroundColor ='green';
    });
    input.addEventListener("focus", function(){
        body.style.backgroundColor = 'orange';
    });
    input.addEventListener("blur" , function(){
        body.style.backgroundColor = 'cyan';
    })