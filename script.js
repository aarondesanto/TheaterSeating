var theater = [
	[ // Row One
		{
			name: "seat1",
			reserved: true,
			cost:  8
		}, 
		{
			name: "seat2",
			reserved: false,
			cost:  8
		}, 
		{
			name: "seat3",
			reserved: false,
			cost:  8
		}, 
		{
			name: "seat4",
			reserved: false,
			cost:  8
		}, 
		{
			name: "seat5",
			reserved: false,
			cost:  8
		}, 
		{
			name: "seat6",
			reserved: false,
			cost:  8
		}
	], 
	[ // Row Two
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
	[ // Row Three
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
	[ // Row Four
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
	]
]

var reserveButton = document.querySelector("#inputReserve");
var reserveAnother = document.querySelector("#inputReserveAnother");
var reserveForm = document.querySelector("#seatIsReserved");

function isSeatReserved(rowNum, seatNum) {
	if (theater[rowNum][seatNum].reserved === true) {
		makeSeatRed(rowNum, seatNum);
	} else {
		console.log("Free");
	}
}

function makeSeatRed(rowNum, seatNum) {
	return document.querySelector(seatNumberToId(rowNum, seatNum)).style.backgroundColor = "#991111";
}

function seatNumberToId(rowNum, seatNum) {
	return ("#r" + rowNum + "s" + seatNum);
}

// This function submits the reservation form and then hides it and shows the thank you message
reserveButton.addEventListener('click', function() {
	return (document.querySelector("#formContainer").style.display = "none") && (document.querySelector("#thankYou").style.display = "block");
});

// This function hides the thank you message and shows the reservation form again if the user wishes to make multiple reservations
reserveAnother.addEventListener('click', function() {
	return (document.querySelector("#formContainer").style.display = "block") && (document.querySelector("#thankYou").style.display = "none");
});



isSeatReserved(0, 0);

