var theater = {
	reserved: ["#r0s0", "#r0s1", "#r0s2", "#r0s3", "#r0s4", "#r1s2", "#r1s3", "#r3s2"],
	userinfo: [
		{
			id: "#r0s0",
			name: "User Name",
			ccn: "1234567890123456",
			email: "user@example.com"
		},
		{
			id: "#r0s1",
			name: "User Name",
			ccn: "1234567890123456",
			email: "user@example.com"
		},
		{
			id: "#r0s2",
			name: "User Name",
			ccn: "1234567890123456",
			email: "user@example.com"
		},
		{
			id: "#r0s3",
			name: "User Name",
			ccn: "1234567890123456",
			email: "user@example.com"
		},
		{
			id: "#r0s4",
			name: "User Name",
			ccn: "1234567890123456",
			email: "user@example.com"
		},
		{
			id: "#r1s2",
			name: "User Name",
			ccn: "1234567890123456",
			email: "user@example.com"
		},
		{
			id: "#r1s3",
			name: "User Name",
			ccn: "1234567890123456",
			email: "user@example.com"
		},
		{
			id: "#r3s2",
			name: "User Name",
			ccn: "1234567890123456",
			email: "user@example.com"
		}
	]
}

var arr1LengthMinusOne = "";
var arr2LengthMinusOne = "";

console.log(theater.reserved[1]);
console.log(theater.userinfo[1].name);
console.log(theater.userinfo[1].ccn);
console.log(theater.userinfo[1].email);
console.log(theater.userinfo[1].ID);

function addReservation(seatId, uName, uCcn, uEmail) {
	theater.userinfo.push( { name: uName, ccn: uCcn, email: uEmail, id: seatId} );
	theater.reserved[theater.reserved.length] = seatId;
	arr1LengthMinusOne = (theater.userinfo.length) - 1;
	arr2LengthMinusOne = (theater.userinfo.length) - 1;
}

function showResStatus(seatId) {
	var seatPosition = theater.reserved.indexOf(seatId);
	console.log(seatPosition);
	console.log(theater.userinfo[seatPosition].name);
	console.log(theater.userinfo[seatPosition].ccn);
	console.log(theater.userinfo[seatPosition].email);
}

addReservation("#r2s2", "User Name", "5555", "user@eample.com");

console.log(theater.reserved[arr2LengthMinusOne]);
console.log(theater.userinfo[arr1LengthMinusOne].name);
console.log(theater.userinfo[arr1LengthMinusOne].ccn);
console.log(theater.userinfo[arr1LengthMinusOne].email);
console.log(theater.userinfo[arr1LengthMinusOne].ID);

addReservation("#r2s3", "Name User", "4444", "user@xample.com");

console.log(theater.reserved[arr2LengthMinusOne]);
console.log(theater.userinfo[arr1LengthMinusOne].name);
console.log(theater.userinfo[arr1LengthMinusOne].ccn);
console.log(theater.userinfo[arr1LengthMinusOne].email);
console.log(theater.userinfo[arr1LengthMinusOne].ID);

showResStatus("#r2s2");
showResStatus("#r2s3");

// $(document).ready(function(){

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