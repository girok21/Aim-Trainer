window.onload = function(){
    TestScreen = $('#TestScreen');
    target = $('#target');
    majorText = $("#majorText");
    secondaryText = $("#secondaryText");
    scoreText = $("#scoreText");
    RemainingTargets = $("#RemainingTargets");
    retryBtn = $('#retryBtn');
    var minLeftPos = 10;
    var minTopPos = 120;
    var maxLeftPos = TestScreen.width() - 125;
    var maxTopPos = TestScreen.height() + 65 - 50;
    var isFirstClick = true;
    var totalTime = 0;
    var prevTime = 0;
    var reactionTime = 0;
    var remainingClicks = 20;
    target.click(function(){
        reactionTime = Date.now();
        if(remainingClicks == 0)
        {
            majorText.text("Game Over!!!")
            target.css({position:'inherit'});
            secondaryText.text("Average time per target");
            RemainingTargets.text('');
            scoreText.text(Math.round((totalTime-10)/20) + " ms");
            return;
        }
        var leftPos = minLeftPos + Math.random()*(maxLeftPos-minLeftPos);//min 10px and max 
        var topPos = minTopPos + Math.random()*(maxTopPos-minTopPos);//min 120px and max
        if(isFirstClick){
            majorText.text("");
            secondaryText.text("");
            RemainingTargets.text(`Remaining ${remainingClicks}`);
            retryBtn.hide();
            isFirstClick = false;
            target.css({position:'absolute', left: leftPos, top: topPos});
            prevTime = Date.now();
            remainingClicks--;
            return;
        }
        // leftPos = 10 + TestScreen.width()- 135; 
        // topPos = 55 + TestScreen.height() - 40;
        RemainingTargets.text(`Remaining ${remainingClicks}`);
        totalTime += Date.now() - prevTime;
        target.css({left: leftPos, top: topPos})
        prevTime = Date.now();
        remainingClicks--;
        // if(remaining==0)//zero targets remaining, show result
        // {
        //     //print result to the user
        // }
    })
}