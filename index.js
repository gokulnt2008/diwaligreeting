const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('name');



document.getElementById('bg').innerHTML = myParam + "<br> <br>" + "Wishing You A Very Happy Diwali" + "<br><br>" + "<img class=gif src=https://im6.ezgif.com/tmp/ezgif-6-13a1085f983b.gif>" + "<div class=footer><input id=input type=Text><button onclick=share()>Share On Whatsapp</button></div>"


function share() { 

    const form = document.getElementById('input')
const name = `https://gokulnt2008.github.io/diwaligreeting/?name=${form.value }`
console.log(form.value)
  
    // Getting user input 
    var message = $("input[name=message]").val(); 

    // Opening URL 
    window.open( 
        "whatsapp://send?text=" + name, 

        // This is what makes it  
        // open in a new window. 
        '_blank'  
    ); 
} 
