export interface GameState {
  board: Array<Array<Player1["symbol"] | Player2["symbol"] | "">>;
  numSquares: 3 | 4 | 5 | 6;
  currentPlayerIndex: number;
  status: "inProgress" | "foundAWinner";
  errorMsg: string;
}

interface Player {
  name: string;
  symbol: string;
}

export interface Action {
  type: ActionTypes;
  data?: any;
}

export type ActionTypes =
  | "Reset"
  | "UpdateNumSquares"
  | "MarkSquare"
  | "UpdateGameSize";

interface UpdateNumSquaresData {
  numSquares: GameState["numSquares"];
}
