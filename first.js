window.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
    const resetBtn = document.getElementById("reset-button");
  
    let turn = "X";
    let gameOver = false;
  
    const winPatterns = [
      [0,1,2], [3,4,5], [6,7,8], // rows
      [0,3,6], [1,4,7], [2,5,8], // columns
      [0,4,8], [2,4,6]           // diagonals
    ];
  
    function checkWin() {
      for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (
          boxes[a].textContent &&
          boxes[a].textContent === boxes[b].textContent &&
          boxes[a].textContent === boxes[c].textContent
        ) {
          gameOver = true;
          alert(`${boxes[a].textContent} wins!`);
          return;
        }
      }
  
      if ([...boxes].every(box => box.textContent) && !gameOver) {
        gameOver = true;
        alert("It's a draw!");
      }
    }
  
    boxes.forEach(box => {
      box.addEventListener("click", () => {
        if (!box.textContent && !gameOver) {
          box.textContent = turn;
          checkWin();
          turn = turn === "X" ? "O" : "X";
        }
      });
    });
  
    resetBtn.addEventListener("click", () => {
      boxes.forEach(box => box.textContent = "");
      turn = "X";
      gameOver = false;
    });
  });
  