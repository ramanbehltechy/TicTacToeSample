import React from 'react';

function Welcome() {

    return (

        <div className="container">

            <div class="jumbotron">
                <h1 class="display-4">Tic Tac Toe !</h1>
                <p class="lead">Play the classic Tic-Tac-Toe game (also called Noughts and Crosses) with one or two players. </p>
                <hr class="my-4" />
                <p>Tic Tac Toe is Cool Math Games: Play the classic game of X's and O's </p>
                <p class="lead">
                    <a href="/players" class="btn btn-success btn-lg" role="button">Start Game</a>
                </p>
            </div>

        </div>
    );
}

export default Welcome