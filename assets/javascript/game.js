
$(document).ready(function() { 
    var jediSkill;
    var jediStamina;
    var isVader;
    var sithSkill;
    var sithStamina;
    var levelUpIncrement;
    var battleNotOver;
    var enemiesDefeated;
    var heroCSS = {hover: {}};
    var villainCSS = {hover: {}};
    //console.log($('.villains'));
    //console.log($('.villains')[2]);

    $('#intro').on('click', '.heroes', function(event) {
        setVariables();
        jediSkill = +$(this).attr('data-skill');
        jediStamina = +$(this).attr('data-stamina');
        isVader = $(this).attr('data-vader');
        $('#battle').append($(this).clone());
        $('#intro').css('visibility', 'hidden');
        $('#arena').css('visibility', 'visible');
        //saveCSS(this, 'good');
        deactivateLink(this);
        
    });

    
    $('#alive').on('click', '.villains', function(event) {
        sithSkill = +$(this).attr('data-skill');
        sithStamina = +$(this).attr('data-stamina');
        $('#battle').append($(this));
        $('#arena').css('visibility', 'hidden');
        $('#battle').css('visibility', 'visible');
        $('#battle h2').text('Press attack buttom below to simulate an epic Jedi battle.');
        $('#next').css('visibility', 'hidden');
        $('#new').css('visibility', 'hidden');
        //saveCSS(this, 'evil');
        deactivateLink(this);
    });

    $('#battle').on('click', '#attack', function(event) {
    if (battleNotOver) {
       sithStamina -= jediSkill;
       jediStamina -= sithSkill;
       jediSkill += levelUpIncrement;
       if (sithStamina <= 0) {
            jediSkill += 2 * levelUpIncrement;
            enemiesDefeated++;
            $('#battle h2').append('<p>Enemy defeated!</p>');
            $('#next').css('visibility', 'visible');
            battleNotOver = false;
       }
       else if (jediStamina <= 0) {
           $('#battle h2').append('<p>You have been slain!</p>');
           $('#battle h2').append('<p>Jedi skill learned: ' + jediSkill + '</p>');
           $('#battle h2').append('<p>Enemies defeated: ' + enemiesDefeated + '</p>');
           $('#new').css('visibility', 'visible');
           battleNotOver = false;
       }
       $('#stats').append('<p>Skill: ' + jediSkill + ' Stamina: ' + jediStamina + ' Enemy Stamina ' + sithStamina + '</p>');
    }
       
    });

    

    $('#next').click(function() {
        //console.log($('#battle > .villains'));
        $('#stats').empty();
        $('#battle h2').empty();
        $('#battle .villains').css('opacity', '0.5'); 
        $('#defeated').append($('#battle .villains'));
        $('#alive').remove('#battle .villains');
        $('#battle').remove('.villains');
        $('#battle').css('visibility', 'hidden');
        $('#arena').css('visibility', 'visible');
        $('#next').css('visibility', 'hidden');
        battleNotOver = true;
    });

    $('#new').click(function() {
        console.log('New game started');
        //defaultHeroCSS('.heroes');
        //defaultHeroCSS('.villains');
        $('#alive').append($('#battle .villains'));
        $('#battle').remove('.heroes');
        $('#battle h2').empty();
        $('#alive').append($('#defeated .villains'));
        $('#battle').css('visibility', 'hidden');
        $('#arena').css('visibility', 'hidden');
        $('#intro').css('visibility', 'visible');
        $('#new').css('visibility', 'hidden');

        //Changing the CSS needs work!
    });
/*
    function saveCSS(selector, allegiance) {
        if (allegiance === 'good') {
            heroCSS.cursor = $(selector).css('cursor');
            heroCSS.background = $(selector).css('background-color');
            heroCSS.opacity = $(selector).css('opacity');
            heroCSS.hover.cursor = $(selector + ':hover').css('cursor');
            heroCSS.hover.background = $(selector + ':hover').css('background-color');
            heroCSS.hover.opacity = $(selector + ':hover').css('opacity');  
        }
        else if (allegiance === 'evil') {
            villainCSS.cursor = $(selector).css('cursor');
            villainCSS.background = $(selector).css('background-color');
            villainCSS.opacity = $(selector).css('opacity');
            villainCSS.hover.cursor = $(selector + ':hover').css('cursor');
            villainCSS.hover.background = $(selector + ':hover').css('background-color');
            villainCSS.hover.opacity = $(selector + ':hover').css('opacity');
        }
    }
*/
    function deactivateLink(selector) {
        $(selector).css('cursor', 'default');
        $(selector).css('background', 'white');
        $(selector).css('opacity', '1.0');
    }
 /*   
    function defaultCSS(selectors) {
        for (let item in selectors) {
            console.log($(selectors[item]));
            $(selectors[item]).css('cursor', heroCSS.cursor);
            $(selectors[item]).css('background', heroCSS.background);
            $(selectors[item]).css('opacity', heroCSS.opacity);
        }
        
    }
*/

    function setVariables() {
        jediSkill = 0;
        jediStamina = 0;
        isVader = false;
        sithSkill = 0;
        sithStamina = 0;
        levelUpIncrement = 5;
        battleNotOver = true;
        enemiesDefeated = 0;
    }


});