class TicTacToe {
    constructor() {
    	this.currentPlayerSymbol = 'x';
      this.matrix = 
      	[[null,null,null],
         [null,null,null],
         [null,null,null]];
    }

    getCurrentPlayerSymbol() {
			return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
			if (  this.matrix[rowIndex][columnIndex] == null ){
        this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
        }
        else{
            return;
				}
			
			if (this.currentPlayerSymbol == 'x'){
					this.currentPlayerSymbol = 'o';
			}
			else {
					this.currentPlayerSymbol = 'x';
			}
    }

    isFinished() {
			if(this.getWinner() != null || this.noMoreTurns() == true){
				return true;
			}
			return false;
    }

    getWinner() {
			for (let i = 0; i < 3; i++) {
				let counter  = 0;
				let counter2 = 0;
				for(let j =0; j<3;j++){
					if(this.matrix[i][j] == this.matrix[i][0]){
						counter++;
					}
					if(this.matrix[j][i] == this.matrix[0][i]){
						counter2++;
					}
				}
				if(counter == 3){
					return this.matrix[i][0];
				}
				else if(counter2 == 3){
					return this.matrix[0][i];
				}
			}
			
			let counter = 0;
			for(let i = 1;i<3;i++){
				if(this.matrix[i][i] == this.matrix[0][0]){
					counter++;
					continue;
				}
				break;
			}

			if(counter == 2 ){
				return this.matrix[0][0];
			}

			counter  = 0;
			for(let i = 1;i<3;i++){
					if(this.matrix[i][2-i] == this.matrix[0][2]){
							counter++;
							continue;
					}
					break;
			}
			if (counter == 2){
				return this.matrix[0][2];
			}

			return null;
    }

    noMoreTurns() {
			let counter =0;
			for(let i = 0 ;i < 3; i++){
				for(let j = 0 ;j < 3; j++){
					if(this.matrix[i][j] != null){
						counter++;
					}
				}
			}
			if (counter == 9){
				return true;
			}

			return false;
    }

    isDraw() {
			if (this.noMoreTurns() && this.getWinner() == null){
        return true;
			}

			return false;
    }

    getFieldValue(rowIndex, colIndex) {
			return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
