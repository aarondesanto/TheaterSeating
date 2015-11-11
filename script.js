$(document).ready(function(){

	$('div').mouseenter(function(){
	   $(this).fadeTo('fast', 0.5);
	});
	$('div').mouseleave(function(){
	  $(this).fadeTo('fast', 1);
	});
	
	$('#inputReserve').hide();

	$('.formContainer').hide();

	$('div').each(function(index, div){
		$(this).click(function(){
		    $(this).prepend($('#inputReserve'));
		    $('#inputReserve').show();
		    $('#inputReserve').click(function(){
		 		$(this).replaceWith($('#reserveForm'));
			});
		}); 
	});
});




  




/*var theater = [
	[ // Row Zero

		{
			name: "seat1",
			reserved: true,
			cost:  8
		}, 
		{
			name: "seat2",
			reserved: true,
			cost:  8
		}, 
		{
			name: "seat3",
			reserved: true,
			cost:  8
		}, 
		{
			name: "seat4",
			reserved: true,
			cost:  8
		}, 
		{
			name: "seat5",
			reserved: true,
			cost:  8
		}, 
		{
			name: "seat6",
			reserved: false,
			cost:  8
		}
	], 
	[ Row One
		{
			name: "seat1",
			reserved: false,
			cost:  5
		}, 
		{
			name: "seat2",
			reserved: false,
			cost:  5
		}, 
		{
			name: "seat3",
			reserved: true,
			cost:  5
		}, 
		{
			name: "seat4",
			reserved: true,
			cost:  5
		}, 
		{
			name: "seat5",
			reserved: false,
			cost:  5
		}, 
		{
			name: "seat6",
			reserved: false,
			cost:  5
		}
	], 
	[ Row Two
		{
			name: "seat1",
			reserved: false,
			cost:  5
		}, 
		{
			name: "seat2",
			reserved: false,
			cost:  5
		}, 
		{
			name: "seat3",
			reserved: false,
			cost:  5
		}, 
		{
			name: "seat4",
			reserved: false,
			cost:  5
		}, 
		{
			name: "seat5",
			reserved: false,
			cost:  5
		}, 
		{
			name: "seat6",
			reserved: false,
			cost:  5
		}
	], 
	[ Row Three
		{
			name: "seat1",
			reserved: false,
			cost:  5
		}, 
		{
			name: "seat2",
			reserved: false,
			cost:  5
		}, 
		{
			name: "seat3",
			reserved: true,
			cost:  5
		}, 
		{
			name: "seat4",
			reserved: false,
			cost:  5
		}, 
		{
			name: "seat5",
			reserved: false,
			cost:  5
		}, 
		{
			name: "seat6",
			reserved: false,
			cost:  5
		}
	]
]

var reserveButton = document.querySelector("#inputReserve");
var reserveAnother = document.querySelector("#inputReserveAnother");
var reserveForm = document.querySelector("#reserveForm");

function isSeatReserved(rowNum, seatNum) {
	if (theater[rowNum][seatNum].reserved === true) {
		makeSeatRed(rowNum, seatNum);
	} else {
		console.log("Free");
	}
}

function makeSeatRed(rowNum, seatNum) {
	return document.querySelector(seatNumberToId(rowNum, seatNum)).style.backgroundColor = "#5B2025";
}

function seatNumberToId(rowNum, seatNum) {
	return ("#r" + rowNum + "s" + seatNum);
}

function appSeatID(ID) {
	var seatChosen = document.querySelector("#reserveFormPara");
	seatChosen.innerHTML = "You have chosen seat: " + ID;
}

// This event listener submits the reservation form and then hides it and shows the thank you message
reserveButton.addEventListener('click', function() {
	return (reserveForm.style.display = "none") && (document.querySelector("#thankYou").style.display = "block");
});

// This event listener hides the thank you message and shows the reservation form again if the user wishes to make multiple reservations
reserveAnother.addEventListener('click', function() {
	return (reserveForm.style.display = "block") && (document.querySelector("#thankYou").style.display = "none");
});

isSeatReserved(0, 0);
isSeatReserved(0, 3);
isSeatReserved(0, 2);
isSeatReserved(0, 4);
isSeatReserved(0, 1);
isSeatReserved(1, 2);
isSeatReserved(1, 3);
isSeatReserved(3, 2);
*/


//Exercise 1
//  $('img').mouseenter(function(){
//    $('img').fadeTo('fast', 0.5);
//  });
//  $('img').mouseleave(function(){
//    $('img').fadeTo('fast', 1);
//  });



 // $('.fade-button').click(function(){
 //   $('div').fadeOut();
 // });


 // $('.fade-button').click(function(){
 //   $('#fader').fadeOut();
 // });

 // $('.box').click(function(){
 //   $(this).fadeOut();
 // });


 // $('.longbox').mouseenter(function(){
 //   $(this).fadeTo('fast', 0.25);
 // });

 // $('.longbox').mouseleave(function(){
 //   $(this).fadeTo('fast', 1);
 // });

 // $('.longbox').click(function(){
 //   $(this).toggleClass('off-white');
 //   $(this).toggleClass('black-text');
 //   $(this).text('clicked!');
 // });


//});-->