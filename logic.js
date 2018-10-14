let diamondIndex = [
    [0,1] , [5,2] , [2,1]
]
let attempts = 0 ; 
$(document).ready(function(){
    $("th").html("<img class='img-responsive' src='./images/question.png' />" );
    
    $("th").click(function() {
        if($(this).html().length) {
            attempts++ ;
        } 
        $(this).html("");
        let row = $(this).closest("tr").index() ; 
        let column = $(this).index() ; 
        console.log(row,column) ; 
        for(let i=0;i<diamondIndex.length;i++) {
            if(diamondIndex[i][0] === row) {
                if(diamondIndex[i][1]=== column) {
                    console.log("Diamond found") ; 
                    $(this).html("<img class='img-responsive' src='./images/diamond.png' />");
                    diamondIndex.splice(i,1) ; 
                    console.log(diamondIndex) ;
                    break ; 
                }
            }
        }
        if(!diamondIndex.length){
            let score = 64 - attempts ;
            $(".score").html(score) ; 
            
        }
       
    }) ; 
 });