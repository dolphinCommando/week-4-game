
$(document).ready(function() { 
    var jediSkill;
    var jediStamina;
    var isVader;
    var sithSkill;
    var sithStamina;
    var levelUpIncrement;
    var battleNotOver;
    var enemiesDefeated;
    var numberOfEnemies;

    $('#intro').on('click', '.heroes', function(event) {
        setVariables();
        numberOfEnemies = $('#arena .villains').length;
        console.log(numberOfEnemies);
        jediSkill = +$(this).attr('data-skill');
        jediStamina = +$(this).attr('data-stamina');
        isVader = $(this).attr('data-vader');
        var copy = $(this).clone();
        $('#battle').append(copy);
        $('#intro').css('visibility', 'hidden');
        $('#arena').css('visibility', 'visible');
        //saveCSS(this, 'good');
        deactivateLink(copy);
        $('#gamewon').append(copy.clone());
        $('#imagestore').empty();
        
    });

    
    $('#alive').on('click', '.villains', function(event) {
        sithSkill = +$(this).attr('data-skill');
        sithStamina = +$(this).attr('data-stamina');
        var copy = $(this).clone();
        $('#battle').append(copy);
        $('#imagestore').append($(this));
        $('#arena').css('visibility', 'hidden');
        $('#battle').css('visibility', 'visible');
        $('#battle h2').text('Press attack buttom below to simulate an epic Jedi battle.');
        $('#next').css('visibility', 'hidden');
        $('.new').css('visibility', 'hidden');
        //saveCSS(this, 'evil');
        deactivateLink(copy);
    });

    $('#battle').on('click', '#attack', function(event) {
    if (battleNotOver) {
       sithStamina -= jediSkill;
       jediStamina -= sithSkill;
       jediSkill += levelUpIncrement;
       if (sithStamina <= 0) {
            jediSkill += 2 * levelUpIncrement;
            enemiesDefeated++;
            numberOfEnemies--;
            $('#battle h2').append('<p>Enemy defeated!</p>');
            $('#next').css('visibility', 'visible');
            battleNotOver = false;
       }
       else if (jediStamina <= 0) {
           $('#battle h2').append('<p>You have been slain!</p>');
           $('#battle h2').append('<p>Jedi skill learned: ' + jediSkill + '</p>');
           $('#battle h2').append('<p>Enemies defeated: ' + enemiesDefeated + '</p>');
           $('#battle .new').css('visibility', 'visible');
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
        $('#next').css('visibility', 'hidden');
        if (numberOfEnemies === 0) {
            $('#gamewon').css('visibility', 'visible');
            $('#gamewon .new').css('visibility', 'visible');
            $('#gamewon .score').html('<p>Enemies defeated: ' + enemiesDefeated + '</p>' + '<p>Final skill level: ' + jediSkill + '</p>' + '<p>Stamina remaining: ' + jediStamina + '</p>');
        }
        else {
            $('#arena').css('visibility', 'visible');
            battleNotOver = true;
        }
        
    });

    $('.new').click(function() {
        console.log('New game started');
        //defaultHeroCSS('.heroes');
        //defaultHeroCSS('.villains');
        $('#alive').append($('#imagestore .villains'));
        $('#defeated .villains').remove();
        $('#battle .heroes').remove();
        $('#battle .villains').remove();
        $('#battle h2').empty();
        $('#stats').empty();
        $('#battle').css('visibility', 'hidden');
        $('#arena').css('visibility', 'hidden');
        $('#intro').css('visibility', 'visible');
        $('#new').css('visibility', 'hidden');
        $('#gamewon .heroes').remove();
        $('#gamewon').css('visibility', 'hidden');
        $('.new').css('visibility', 'hidden');

    });

    function deactivateLink(selector) {
        $(selector).css('cursor', 'default');
        $(selector).css('background', 'white');
        $(selector).css('opacity', '1.0');
    }
 
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