
$(document).ready(function() { 
    var heroSkill = 0;
    var heroStamina = 0;
    var isVader = false;
    
    $('#intro').on('click', '.heroes', function(event) {
        heroSkill = $(this).attr('data-skill');
        heroStamina = $(this).attr('data-stamina');
        isVader = $(this).attr('data-vader');
        $('#battle').append($(this));
        $('#intro').css('visibility', 'hidden');
        $('#arena').css('visibility', 'visible');
        deactivateLink(this);
        
    });

    
    $('#alive').on('click', '.villains', function(event) {
        $('#battle').append($(this));
        $('#arena').css('visibility', 'hidden');
        $('#battle').css('visibility', 'visible');
        deactivateLink(this);
    });


    function deactivateLink(selector) { 
        $(selector).css('cursor', 'default');
        $(selector).css('background', 'white');
        $(selector).css('opacity', '1.0');
    }
    


});