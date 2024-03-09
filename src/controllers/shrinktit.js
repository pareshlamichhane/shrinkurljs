const allChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","@","#"]


function generateRandomURL() {
    let urlName = "";
    for(let i = 0; i < 6; i++) {
        urlName += allChars[generateRandomNumber()];   
    }
    return urlName;
}

function generateRandomNumber() {
    let maxLength = allChars.length - 1;
    let ranD = Math.floor(Math.random() * 1000);
    let random;
    if(ranD > maxLength) {
        
        if(ranD / ranD+(ranD % maxLength)) {
            random = ranD / ranD+(ranD % maxLength);

        }
        else {
            random = (ranD % maxLength);
                };
        
    }
    else {
        random = ranD;

    }
    return random; 
}

export { generateRandomURL};