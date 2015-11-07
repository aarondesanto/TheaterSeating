var theater = [
	[
		{
			name: "seat1",
			reserved: true
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
	]
]

function isSeatReserved(rowNum, seatNum) {
	if (theater[rowNum][seatNum].reserved === true) {
		document.getElementById(seatNumberToId(rowNum, seatNum)).style.backgroundColor = "#991111";
	} else {
		console.log("Free");
	}
}

function seatNumberToId(rowNum, seatNum) {
	return ("r" + rowNum + "s" + seatNum);
}

isSeatReserved(0, 0);

