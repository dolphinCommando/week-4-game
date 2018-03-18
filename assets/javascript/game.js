
$(document).ready(function() { 
    var jediSkill = 0;
    var jediStamina = 0;
    var isVader = false;
    var sithSkill = 0;
    var sithStamina = 0;
    var levelUpIncrement = 5;
    var battleNotOver = true;
    
    $('#intro').on('click', '.heroes', function(event) {
        jediSkill = +$(this).attr('data-skill');
        jediStamina = +$(this).attr('data-stamina');
        isVader = $(this).attr('data-vader');
        $('#battle').append($(this));
        $('#intro').css('visibility', 'hidden');
        $('#arena').css('visibility', 'visible');
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
        deactivateLink(this);
    });

    $('#battle').on('click', '#attack', function(event) {
    if (battleNotOver) {
       sithStamina -= jediSkill;
       if (sithStamina <= 0) {
            jediSkill += 2 * levelUpIncrement;
            $('#battle h2').prepend('<p>Enemy defeated!</p>');
            $('#next').css('visibility', 'visible');
            battleNotOver = false;
       }
       else if (jediStamina <= 0) {
           $('#battle h2').prepend('<p>You have been slain!</p>');
           // needs lose condition 
       }
       else {
           jediStamina -= sithSkill;
           jediSkill += levelUpIncrement;
       }
       $('#stats').append('<p>Skill: ' + jediSkill + ' Stamina: ' + jediStamina + ' Enemy Stamina ' + sithStamina + '</p>');
    }
       
    });

    

    $('#next').click(function() {
        console.log($('#battle > .villains'));
        $('#stats').empty();
        $('#battle h2').empty();
        $('#battle .villains').css('opacity', '0.5'); 
        $('#defeated').append($('#battle > .villains'));
        $('#arena').remove('#battle > .villains');
        $('#battle').remove('.villains');
        $('#battle').css('visibility', 'hidden');
        $('#arena').css('visibility', 'visible');
        $('#next').css('visibility', 'hidden');
        battleNotOver = true;
    });

    

    function deactivateLink(selector) { 
        $(selector).css('cursor', 'default');
        $(selector).css('background', 'white');
        $(selector).css('opacity', '1.0');
    }
    
    


});