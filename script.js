'use-strict'


let api = ['https://countryflagsapi.com/png/']


let randomFlagNo = 0
let randomFlag = function(){

    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    let randomiseFlag = function(){
           randomFlagNo = generateRandomIntegerInRange(0, flagArr.length -1)
           console.log(randomFlagNo);
           console.log(api[0]+flagArr[randomFlagNo]['flag']);
        
    }
    randomiseFlag()
}
randomFlag()

let makeFlag = function(a){
    document.querySelector('#flag-image').textContent = ''
    
    let resultsContainer = document.querySelector('#flag-image')

    //creates h2 for name
    let pic = document.createElement('img')
    pic.setAttribute("id", "img1");
    pic.setAttribute('crossorigin', 'anonymous')
    pic.src = api[0]+flagArr[a]['flag']
    
    resultsContainer.append(pic)
}

makeFlag(randomFlagNo)



