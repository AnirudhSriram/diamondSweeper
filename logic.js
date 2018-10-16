//diamond co-ordinates for testing 
let diamondIndex = [
    [0, 1], [1, 0], [5, 2], [2, 1], [5, 5] ,[7,7] , [1,6] , [4,7]
]
let attempts = 0;
let score = 64 ;
$(document).ready(function () {
    //set all squares with question marks //
    $("th").html("<img class='img-responsive' src='./images/question.png' />");


    $("th").click(function () {
        //using Id to keep track of previous square with arrow to clear it on next square click
        $("#arrowed").html("");
        $("#arrowed").attr('id', "");

        //rudimentary check to count only if square has not been already tried
        if ($(this).html().length && diamondIndex.length) {
            attempts++;
        }
        //clear the square before inserting arrow or diamond
        $(this).html("");

        let row = $(this).closest("tr").index();
        let column = $(this).index();

        for (let i = 0; i < diamondIndex.length; i++) {
            var findClosest = false;
            if (diamondIndex[i][0] === row) {
                if (diamondIndex[i][1] === column) {
                    $(this).html("<img class='img-responsive' src='./images/diamond.png' />");
                    diamondIndex.splice(i, 1);
                    findClosest = true;
                    break;
                }
            }
        }

        //To find nearest Diamond from present location
        if (!findClosest) {
            let closestRow, closestColumn;
            let leastDist = 17;
            for (let i = 0; i < diamondIndex.length; i++) {
                if ((Math.abs(diamondIndex[i][0] - row) + Math.abs(diamondIndex[i][1] - column)) < leastDist) {
                    leastDist = Math.abs(diamondIndex[i][0] - row) + Math.abs(diamondIndex[i][1] - column);
                    closestRow = diamondIndex[i][0];
                    closestColumn = diamondIndex[i][1];
                }
            }

            let rowMag = closestRow - row;
            let columnMag = closestColumn - column;

            //variable to hold arrow direction 
            let direction;
            if (rowMag == 0) {
                if (columnMag > 0) {
                    direction = "RIGHT";
                } else {
                    direction = "LEFT";
                }
            } else if (columnMag == 0) {
                if (rowMag > 0) {
                    direction = "DOWN";
                } else {
                    direction = "TOP";
                }
            } else {
                if (Math.abs(rowMag) < Math.abs(columnMag)) {
                    if (rowMag > 0) {
                        direction = "DOWN";
                    } else {
                        direction = "TOP";
                    }
                } else {
                    if (columnMag > 0) {
                        direction = "RIGHT";
                    } else {
                        direction = "LEFT";
                    }
                }
            }

            $(this).html("<img class='img-responsive' src='./images/arrow.png' />");
            
            if (direction === "DOWN") {
                $(this).css("transform", "rotate(90deg)");
            }
            if (direction === "LEFT") {
                $(this).css("transform", "rotate(180deg)");
            }
            if (direction === "TOP") {
                $(this).css("transform", "rotate(-90deg)");
            }
            // setting id to square to keep track of square with arrow on next user click 
            $(this).attr('id', 'arrowed');
            score--;
        }
        
        $(".score").html("Current score is : " + score);
        if (!diamondIndex.length) {
           
            //Display modal to replay the game
            $("#myModal").css("display", "block");
            $("#modalScore").append(score);
        }

        $("#replay").click(function () {
            location.reload();
        })

    });
});