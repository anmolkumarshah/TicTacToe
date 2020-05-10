let cell = Array.from(document.querySelectorAll('.cell'));

document.querySelector('#reset').addEventListener('click',function(){
  location.reload();
});

const winningCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

const x = {
sym : 'X',
isturn : true,
}

const o = {
sym : 'O',
isturn : false,
}

init();



function init(){      
    cell.forEach((item)=>item.addEventListener('click',play,{once:true}));
}
    


    function switchMark(){
        if(x.isturn === true){
          x.isturn = false;
      }else{
        x.isturn = true;
      }
    }

    function checkForWin(current){
      return winningCombinations.some(combination => {
        return combination.every(index => {
            return cell[index].innerHTML === current;
        })
      })
    }

    function isDraw(){
      return cell.every((item) => {
          if(item.innerHTML === 'X' || item.innerHTML === 'O'){
            return true;
          }
      })
    }

    function display(mark){
      let text = document.querySelector('#message');
      if(mark === 1){
          text.textContent = 'Game Draws';
          document.querySelector('.message').classList.add('show');
      }else{
        text.textContent = `${mark} win's`;
        document.querySelector('.message').classList.add('show');
      }    
    }

    function endGame(draw, mark){
        if(draw){
          console.log('draw');
        }else{
          display(mark);
        }
    }

    function play(event){  
      event.target.innerHTML = x.isturn ? x.sym : o.sym;
      let mark = x.isturn ? x.sym : o.sym;

      // check for win
      if(checkForWin(mark)){
        endGame(false, mark);
      }else if(isDraw()){
          display(1);
      }
      // switch marks
        switchMark();
    }





