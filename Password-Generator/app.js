

function makeid(length) {
    let result = '';

    let lower = document.getElementById('flexCheckChecked1').checked;
    let upper = document.getElementById('flexCheckChecked2').checked;
    let valNumbers = document.getElementById('flexCheckChecked3').checked;
    let valSymbols = document.getElementById('flexCheckChecked4').checked;

    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%&*();:.?/{}';
    
    var charactersList = [];

    if (lower) {
        charactersList.push(lowerLetters)}

    if (upper == true){
        charactersList.push(upperLetters)}

    if (valNumbers == true){
        charactersList.push(numbers)}

    if (valSymbols == true){
        charactersList.push(symbols)}
    
    const characters = charactersList.toString().replace(',','');
    
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }

    return result;
}

function slider() {
    var x = document.getElementById('customRange1')
    document.getElementById('count').innerHTML = x.value

    document.getElementById("pass").value = makeid(x.value)
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
    };

function popUp(state) {
    var popup = document.getElementById('popup')
    var popupText = document.getElementById('popupText').innerHTML

    popup.style.backgroundColor = "#19af0e"
    popupText = 'Text Copied to clipboard.'

    if (state == true) {
        popup.style.top = "33.4%";
        sleep(2000).then(() => {
            popup.style.top = "40%"; 
        });
    }else{
        popup.style.backgroundColor = "#bc2c0b"
        popupText = 'Unsuccessful, unable to copy.'
        popup.style.top = "33.4%";
        sleep(2000).then(() => {
            popup.style.top = "40%"; 
        }); 
    };
};

function copy() {
  var copyTextarea = document.getElementById("pass");
  copyTextarea.focus();
  copyTextarea.select();
  var popup = document.getElementById('popup')

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);

    if (msg == 'successful'){
        popUp(true)
    }else{
        popUp(false)
    };

  } catch (err) {
    console.log('Oops, unable to copy');
  }
};
