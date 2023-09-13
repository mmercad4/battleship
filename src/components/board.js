const Board = () => {
  const board = [],
    populateBoard = () => {
      for (let i = 0; i < 100; i++) {
        board.push(" ");
      }
    };

  return {
    board,
    populateBoard,
  };
};

export { Board };
