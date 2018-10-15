let diamondIndex = [
    [0,1] ,[1,0], [5,2] , [2,1] , [5,5]
]
let attempts = 0 ; 
$(document).ready(function(){
    $("th").html("<img class='img-responsive' src='./images/question.png' />" );
    
    $("th").click(function() {
        if($(this).html().length && diamondIndex.length ) {
            attempts++ ;
        } 

        $(this).html("");
        let row = $(this).closest("tr").index() ; 
        let column = $(this).index() ; 
        
        for(let i=0;i<diamondIndex.length;i++) {
            var findClosest = false ; 
            if(diamondIndex[i][0] === row) {
                if(diamondIndex[i][1]=== column) {
                    $(this).html("<img class='img-responsive' src='./images/diamond.png' />");
                    diamondIndex.splice(i,1) ;  
                    findClosest = true ; 
                    break ; 

                }
            }
        }

        //To find nearest Diamond from present location
        if(!findClosest) {
            let closestRow , closestColumn ; 
            let leastDist = 17; 
            for(let i=0;i<diamondIndex.length;i++) {
                if((Math.abs(diamondIndex[i][0]-row)+Math.abs(diamondIndex[i][1]-column)) < leastDist) {
                    leastDist = Math.abs(diamondIndex[i][0]-row)+Math.abs(diamondIndex[i][1]-column); 
                    closestRow = diamondIndex[i][0] ; 
                    closestColumn = diamondIndex[i][1] ;
                }
            }
           console.log(closestRow , closestColumn) ; 

        }
        if(!diamondIndex.length){
            let score = 64 - attempts ;
            $(".score").html(score) ;  
        }
       
    }) ; 
 });