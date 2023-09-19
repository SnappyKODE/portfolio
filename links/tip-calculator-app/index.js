let tip_percent = 0;
let bill =0;
let people =0;
let tip;
let total;

$("button.tip").click(function(){
    tip_percent = $(this).val();
    check();
})

$("#custom").keypress(function (e) { 
    if(e.keyCode == 13){
        tip_percent = $(this).val();
        check();
    }
});

$(".bill_amt input").keypress(function (e) { 
    if(e.keyCode == 13){
        tip_percent = $(this).val();
        check();
    }
});

$(".people_count input").keypress(function (e) { 
    if(e.keyCode == 13){
        tip_percent = $(this).val();
        check();
    }
});


function check()
{
    bill=$(".bill_amt input").val();
    people=$(".people_count input").val();
    tip = (bill * (tip_percent/100))/people;
    total = (bill*(1 + (tip_percent/100)))/people;
    if(people != 0){
        $("#tip_amount").text("$"+tip.toFixed(2));
        $("#total_tip").text("$"+total.toFixed(2));
        $("#error").css("display","none");
        $(".people_count input").removeClass("error_border");
    }
    else{
        $("#error").css("display","inline");
        $(".people_count input").addClass("error_border");
    }
}

$("#reset").click(function(){
    $(".bill_amt input").val("0");
    $(".people_count input").val("0");
    $("#tip_amount").text("$0.00");
    $("#total_tip").text("$0.00");
});