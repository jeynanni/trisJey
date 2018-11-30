import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      writeX: true,
      board: [
      ],
      winner : ''
     }

     for(let i=0; i<9; i++){
       this.state.board.push(
         {
           idx: i,
           val:""
         }
       )
    }
  }

  play(idx) {
    const text = this.state.writeX ? 'X' : 'O' ;
    const board = this.state.board 
    
   if (board[idx].val == "O" || board[idx].val == "X"){
     return
   }

    board [idx].val = text;
    this.setState ({
      board: board,
      writeX: !this.state.writeX,
      
    });

    console.log(board[idx])

    this.winnerPlayer()
    
  }
  winnerPlayer() {
    const myArray = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [2,4,6]
    ]
    for (let i of myArray){
      const cell1 = this.state.board[i[0]];
      const cell2 = this.state.board[i[1]];
      const cell3 = this.state.board[i[2]];
      if(cell1.val != "" && cell1.val.valueOf() === cell2.val.valueOf() && cell3.val.valueOf() === cell1.val.valueOf()){
        alert(cell1.val + ' is the winner!')
      }
    }
  }
    
  render() {
    return (
      
      <div className="App">
      <h1>Lets play Tris!</h1>
      <h2> {this.state.writeX ? "turno di 'X'" : "turno di 'O'"}</h2>
        <div className="Row">
        
        {this.state.board &&
        this.state.board.map((item,index) => {
          console.log(item)
          return (
            <div key={index} onClick={() => { item.val =="" && this.play(index, item.val) }}>
          {this.state.board[index].val}
          
          </div>
          )
        })
        }
      </div>
      </div>
    );
  }
}



export default App;
