window.onload = function(){
    TestScreen = $('#TestScreen');
    target = $('#target');
    majorText = $("#majorText");
    secondaryText = $("#secondaryText");
    var isFirstClick = true;
    var remaining = 15;
    target.click(function(){
        if(isFirstClick){
            majorText.text("");
            secondaryText.text("");
            isFirstClick = false;
            return;
        }
        // target.css({letft: 10 , top: 25})

        // if(remaining==0)//zero targets remaining, show result
        // {
        //     //print result to the user
        // }
    })
}