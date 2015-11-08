var theater = [
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
	[ // Row One
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

var r0s0Click = document.querySelector("#r0s0");
var r0s1Click = document.querySelector("#r0s1");
var r0s2Click = document.querySelector("#r0s2");
var r0s3Click = document.querySelector("#r0s3");
var r0s4Click = document.querySelector("#r0s4");
var r0s5Click = document.querySelector("#r0s5");

var r1s0Click = document.querySelector("#r1s0");
var r1s1Click = document.querySelector("#r1s1");
var r1s2Click = document.querySelector("#r1s2");
var r1s3Click = document.querySelector("#r1s3");
var r1s4Click = document.querySelector("#r1s4");
var r1s5Click = document.querySelector("#r1s5");

var r2s0Click = document.querySelector("#r2s0");
var r2s1Click = document.querySelector("#r2s1");
var r2s2Click = document.querySelector("#r2s2");
var r2s3Click = document.querySelector("#r2s3");
var r2s4Click = document.querySelector("#r2s4");
var r2s5Click = document.querySelector("#r2s5");

var r3s0Click = document.querySelector("#r3s0");
var r3s1Click = document.querySelector("#r3s1");
var r3s2Click = document.querySelector("#r3s2");
var r3s3Click = document.querySelector("#r3s3");
var r3s4Click = document.querySelector("#r3s4");
var r3s5Click = document.querySelector("#r3s5");

var reserveButton = document.querySelector("#inputReserve");
var reserveAnother = document.querySelector("#inputReserveAnother");
var reserveForm = document.querySelector("#seatIsReserved");
var formContainer = document.querySelector("#formContainer");


function isSeatReserved(rowNum, seatNum) {
	if (theater[rowNum][seatNum].reserved === true) {
		makeSeatRed(rowNum, seatNum);
	} else {
		console.log("Free");
	}
}

function makeSeatRed(rowNum, seatNum) {
	return document.querySelector(seatNumberToId(rowNum, seatNum)).style.backgroundColor = "#771111";
}

function seatNumberToId(rowNum, seatNum) {
	return ("#r" + rowNum + "s" + seatNum);
}

function appSeatID(ID) {
	var seatChosen = document.querySelector("#formContainerPara");
	seatChosen.innerHTML = "You have chosen seat: " + ID;
}

// This event listener submits the reservation form and then hides it and shows the thank you message
reserveButton.addEventListener('click', function() {
	return (formContainer.style.display = "none") && (document.querySelector("#thankYou").style.display = "block");
});

// This event listener hides the thank you message and shows the reservation form again if the user wishes to make multiple reservations
reserveAnother.addEventListener('click', function() {
	return (formContainer.style.display = "block") && (document.querySelector("#thankYou").style.display = "none");
});

// Row Zero Event Listeners
r0s0Click.addEventListener('click', function() {
	appSeatID("A1");
	return formContainer.style.display = "block";
});
r0s1Click.addEventListener('click', function() {
	appSeatID("A2");
	return formContainer.style.display = "block";
});
r0s2Click.addEventListener('click', function() {
	appSeatID("A3");
	return formContainer.style.display = "block";
});
r0s3Click.addEventListener('click', function() {
	appSeatID("A4");
	return formContainer.style.display = "block";
});
r0s4Click.addEventListener('click', function() {
	appSeatID("A5");
	return formContainer.style.display = "block";
});
r0s5Click.addEventListener('click', function() {
	appSeatID("A6");
	return formContainer.style.display = "block";
});

// Row One Listeners
r1s0Click.addEventListener('click', function() {
	appSeatID("B1");
	return formContainer.style.display = "block";
});
r1s1Click.addEventListener('click', function() {
	appSeatID("B2");
	return formContainer.style.display = "block";
});
r1s2Click.addEventListener('click', function() {
	appSeatID("B3");
	return formContainer.style.display = "block";
});
r1s3Click.addEventListener('click', function() {
	appSeatID("B4");
	return formContainer.style.display = "block";
});
r1s4Click.addEventListener('click', function() {
	appSeatID("B5");
	return formContainer.style.display = "block";
});
r1s5Click.addEventListener('click', function() {
	appSeatID("B6");
	return formContainer.style.display = "block";
});

// Row Two Listeners
r2s0Click.addEventListener('click', function() {
	appSeatID("C1");
	return formContainer.style.display = "block";
});
r2s1Click.addEventListener('click', function() {
	appSeatID("C2");
	return formContainer.style.display = "block";
});
r2s2Click.addEventListener('click', function() {
	appSeatID("C3");
	return formContainer.style.display = "block";
});
r2s3Click.addEventListener('click', function() {
	appSeatID("C4");
	return formContainer.style.display = "block";
});
r2s4Click.addEventListener('click', function() {
	appSeatID("C5");
	return formContainer.style.display = "block";
});
r2s5Click.addEventListener('click', function() {
	appSeatID("C6");
	return formContainer.style.display = "block";
});

// Row Three Listeners
r3s0Click.addEventListener('click', function() {
	appSeatID("D1");
	return formContainer.style.display = "block";
});
r3s1Click.addEventListener('click', function() {
	appSeatID("D2");
	return formContainer.style.display = "block";
});
r3s2Click.addEventListener('click', function() {
	appSeatID("D3");
	return formContainer.style.display = "block";
});
r3s3Click.addEventListener('click', function() {
	appSeatID("D4");
	return formContainer.style.display = "block";
});
r3s4Click.addEventListener('click', function() {
	appSeatID("D5");
	return formContainer.style.display = "block";
});
r3s5Click.addEventListener('click', function() {
	appSeatID("D6");
	return formContainer.style.display = "block";
});


isSeatReserved(0, 0);
isSeatReserved(0, 3);
isSeatReserved(0, 2);
isSeatReserved(0, 4);
isSeatReserved(0, 1);
isSeatReserved(1, 2);
isSeatReserved(1, 3);
isSeatReserved(3, 2);

