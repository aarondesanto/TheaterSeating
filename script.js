$(document).ready(function() { // Ready function waits to run until HTML has loaded.

	// Theater object.  Contains two key:value pairs - 'reserved' and 'userinfo'.
	var theater = { // Both keys have an array as their value.  The 'reserved' array has <div> IDs of reserved seats in it.
		reserved: ["#r0s0", "#r0s1", "#r0s2", "#r0s3", "#r0s4", "#r1s2", "#r1s3", "#r3s2"],
		userinfo: [ // 'Userinfo' is an array of objects.  Each object relates to one of the IDs from
			{		// the array in 'reserved'.
				id: "#r0s0",
				name: "User Name",
				ccn: "1234567890123456",
				email: "user@example.com"
			},
			{
				id: "#r0s1",
				name: "User Name",	// Customer name is stored here.
				ccn: "1234567890123456", // Credit card number
				email: "user@example.com" // Email address
			},
			{
				id: "#r0s2",
				name: "User Name",
				ccn: "1234567890123456",
				email: "user@example.com"
			},
			{
				id: "#r0s3",			// Note: nothing calls on this 'id' property.  It's just here to
				name: "User Name",		// make things easier for me to read.
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

	// This function handles the user input collected from the form that appears upon clicking a seat.
	// 'seatId' = <div> ID of the seat that is being reserved (#r0s0, #r3s5, etc.)
	// 'uName' = Customer name
	// 'uCcn' = Credit card number
	// 'uEmail' = Email address
	function addReservation(seatId, uName, uCcn, uEmail) {
		// A new object is created with the same format as the objects stored in 'theater'.
		// This is an object literal so it has no name.
		// The object is then .push-ed onto the end of the array 'userinfo' under the 'theater' object.
		theater.userinfo.push( { name: uName, ccn: uCcn, email: uEmail, id: seatId} );
		theater.reserved[theater.reserved.length] = seatId;
	}	// This trick with .length adds a new value to the end of array 'reserved'.
		// Note: It is important that these two lines of code are executed without anything in between.
		// This ensures customer information objects are stored at the same position in array 'userinfo'
		// as the <div> ID of their respective seat is stored in array 'reserved'.
	
	
	// This function handles finding user reservation info based off the seat <div> ID.
	// It is passed the raw seat ID (#r0s4, r2s1, etc.)
	function showResStatus(seatId) {
		var seatPosition = theater.reserved.indexOf(seatId); // The .indexOf function searches array
		console.log(seatPosition);							 // 'reserved' for the seat <div>s ID.
		console.log(theater.userinfo[seatPosition].name);	 // It can then be called using the variable
		console.log(theater.userinfo[seatPosition].ccn);	 // 'seatPosition' and then the property 
		console.log(theater.userinfo[seatPosition].email);	 // 'name', 'ccn', or 'email'.
	}
	
	// All the console.logs here are just for testing purposes.
	// As are all the function calls below here.
	
	addReservation("#r2s2", "User Name", "5555", "user@eample.com");
	addReservation("#r2s3", "Name User", "4444", "user@xample.com");
	addReservation("#r3s5", "Nser Uame", "32 32 32 23", "nser@uame.com");
	
	showResStatus("#r2s2");
	showResStatus("#r2s3");
	showResStatus("#r3s5");

});