    // create variables
    // var wins = 0;
    // var loss = 0;
    // var counter = ++

    // function newGame(min, max) {
    //     var randNum = Math.floor(Math.random() * 120) + 19;
    //     $("#score").html(randNum);

    // }

    $(document).ready(function () {

        var randNum = Math.floor(Math.random() * 100) + 20;
        $("#score").html(randNum);


        // create a countNum formula between 1-12

        var num1 = Math.floor(Math.random() * 12 + 1)
        var num2 = Math.floor(Math.random() * 12 + 1)
        var num3 = Math.floor(Math.random() * 12 + 1)
        var num4 = Math.floor(Math.random() * 12 + 1)

        // function getRandomIntScore(min, max) {
        //     var countNum = Math.floor(Math.random() * 12) + 1;
        //     $("#player-score").html(sumUp(countNum));

        // }

        var playerTotal = 0;
        var wins = 0;
        var losses = 0;

        function reset() {
            randNum = Math.floor(Math.random() * 100) + 19;
            console.log(randNum);
            $('#score').text(randNum);
            num1 = Math.floor(Math.random() * 12 + 1);
            num2 = Math.floor(Math.random() * 12 + 1);
            num3 = Math.floor(Math.random() * 12 + 1);
            num4 = Math.floor(Math.random() * 12 + 1);
            playerTotal = 0;
            $('#player-score').html(playerTotal);
        }

        function woohoo() {
            alert("Congrats! You won!");
            wins++;
            $('#wins').html(wins);
            reset();
        }
        // Display losses
        function loser() {
            alert("Sorry! You lose!");
            losses++;
            $('#losses').html(losses);
            reset()
        }

        $("#square").on("click", function () {
            playerTotal = playerTotal + num1;
            $('#player-score').html(playerTotal);
            if (playerTotal == randNum) {
                woohoo();
            } else if (playerTotal > randNum) {
                loser()

            }

        })

        $("#circle").on("click", function () {
            playerTotal = playerTotal + num2;
            $('#player-score').html(playerTotal);
            if (playerTotal == randNum) {
                woohoo();
            } else if (playerTotal > randNum) {
                loser()

            }
           
        })
        $("#diamond").on("click", function () {
            playerTotal = playerTotal + num3;
            $('#player-score').html(playerTotal);
            if (playerTotal == randNum) {
                woohoo();
            } else if (playerTotal > randNum) {
                loser()

            }
        })
        $("#triangle").on("click", function () {
            playerTotal = playerTotal + num4;
            $('#player-score').html(playerTotal);
            if (playerTotal == randNum) {
                woohoo();
            } else if (playerTotal > randNum) {
                loser()

            }

        })

        // grab id's from the dom and attach click events to each image

        // $("#square").on("click", function () {
        //     getRandomIntScore(1, 12)
        // })

        // $("#circle").on("click", function () {
        //     getRandomIntScore(1, 12)
        // })
        // $("#diamond").on("click", function () {
        //     getRandomIntScore(1, 12)
        // })
        // $("#triangle").on("click", function () {
        //     getRandomIntScore(1, 12)

        // })


        // per image click = total sum

        // var sumUp = (function () {
        //     var sum = 0;
        //     return function (n) {
        //         return sum += n;
        //     }
        // })();

        // create another randNum formula that generates numbers between (20-120)




        // $("#wins").html(wooHoo)
        // console.log(wooHoo);


        // if (sumUp == randNum) {
        //     alert("you win")
        //     wins++;
        // }
        // if (sumUp(sumUp) > randNum) {
        //     alert("you lose")
        // }



        // if the countNum = randNum, then you win, add ++ to win(html) and reset game
        // if countNum > randNum, then you lose, add ++ to losses(html) and reset game


    });