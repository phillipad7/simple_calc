
let oprand = '+-*/=';
let total = '0';
$('#calBody').css({minWidth: '250px', maxWidth:"800px", minHeight: '400px'});
$('#calBody').children().addClass('w3-margin-top');
$('#calBody').children().css({minHeight:'65px'});

// $('#calBody').children().css("margin-right","10px");

$(".w3-black").click( function(){
    if(total === '0'){
        total = $(this).val();
    }
    else if( total[total.length-1] !== '.' || (total[total.length-1] === '.' && $(this).val() !=='.') ){
        total += $(this).val();
    }
    
    console.log(total);

    let displayText = (lastCharIsOprand(total)) ? $(this).val() : total.split(/[\+\-\*\/]/).pop()
    $("#display").text(displayText);
    

    if($('.op').hasClass('w3-red')){
        $('.op').removeClass('w3-red');
    }
});

$('.op').click( function(){
    
    $(this).addClass('w3-red');

    let evalTotal = getTotal(total);
    if(!lastCharIsOprand(total)){
        total += $(this).val();
    }
    if(evalTotal.length > 8){
        evalTotal = evalTotal.substring(0,8);
        console.log(evalTotal)
    }
    $("#display").text(evalTotal);
    console.log('evt: ');console.log(evalTotal);
    console.log('tot: ');console.log(total);
})




$('.w3-yellow').click( function() {
    let evalTotal = getTotal(total);
    $('#display').text( evalTotal );
    total = '0';

    console.log('final : ' + evalTotal);
})

$('.w3-blue').click( function(){
    $('#display').text('0');
    total = '0';
})



function lastCharIsOprand(total){
    let oprand = '+-*/=';
    let lastChar = total[total.length-1];
    return oprand.includes(lastChar);
}

function getTotal(total){
    return (lastCharIsOprand(total)) ? eval(total.substring(0, total.length-1)) : eval(total);
}
