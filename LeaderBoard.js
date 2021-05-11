public static class LeaderBoard{
    constructor(name, score) {
        this.name = name.toString();
        this.score = parseInt(score);
      


        // The array will contain positions must be avoid when add to position_of_bombs
        // Ex: The duplicate bombs, the first click of user, ...
        this.exception = [];
    }
}