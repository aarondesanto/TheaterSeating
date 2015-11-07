var theater = [
	[
		{
			name: "seat1",
			reserved: false
		}, 
		{
			name: "seat2",
			reserved: false
		}, 
		{
			name: "seat3",
			reserved: false
		}, 
		{
			name: "seat4",
			reserved: false
		}, 
		{
			name: "seat5",
			reserved: false
		}, 
		{
			name: "seat6",
			reserved: false
		}
	], 
	[
		{
			name: "seat1",
			reserved: false
		}, 
		{
			name: "seat2",
			reserved: false
		}, 
		{
			name: "seat3",
			reserved: false
		}, 
		{
			name: "seat4",
			reserved: false
		}, 
		{
			name: "seat5",
			reserved: false
		}, 
		{
			name: "seat6",
			reserved: false
		}
	], 
	[
		{
			name: "seat1",
			reserved: false
		}, 
		{
			name: "seat2",
			reserved: false
		}, 
		{
			name: "seat3",
			reserved: true
		}, 
		{
			name: "seat4",
			reserved: false
		}, 
		{
			name: "seat5",
			reserved: false
		}, 
		{
			name: "seat6",
			reserved: false
		}
	], 
	[
		{
			name: "seat1",
			reserved: false
		}, 
		{
			name: "seat2",
			reserved: false
		}, 
		{
			name: "seat3",
			reserved: false
		}, 
		{
			name: "seat4",
			reserved: false
		}, 
		{
			name: "seat5",
			reserved: false
		}, 
		{
			name: "seat6",
			reserved: false
		}
	]
]

console.log(theater[0][0].name);
console.log(theater[0][0].reserved);

function isSeatReserved(rowNum, seatNum) {
	if (theater[rowNum][seatNum].reserved === true) {
		seatNumberToId(rowNum, seatNum);
	} else {
		console.log("Free");
	}
}



isSeatReserved(2, 2);

// var r1s6 = document.getElementById('r1s6');

// document.getElementById('r1s6').style.backgroundColor = "Blue";

// if (seatReserved === true) {
	// document.getElementById(seatID).style.backgroundColor = "Red";
// }



