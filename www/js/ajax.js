var i = 0;
var colorOn = false;
var color = "#000000";
var contacts;

$(document).ready(function() {
	$.getJSON('../data/contacts.json', function(data) {
		contacts = data;
		$.each(contacts, function(index, contact) {
			var li = $("<li/>");
			var a = $("<a/>", {
				href : "#",
				class : "person",
				"data-rel" : "close",
				text : contact.personName
			})
			//Bind click event listener to Anchor
			a.on("click", function() {
				loadPerson($(this).html());
			});
			//Append Anchor to ListItem
			$(li).append(a);
			//Append ListItem to Panel ListView	
			var listView = $("#contacts");
			listView.append(li).listview("refresh");
		})
	}).fail(function(jqXHR, textStatus, errorThrown) {
		console.log("jqXHR: " + jqXHR.status +
			"\ntextStatus: " + textStatus +
			"\nerrorThrown: " + errorThrown);
	})


	function loadPerson(person) {
		$.each(contacts, function(index, contact) {
			if(contact.personName == person){
				$("#current-name").html(contacts[index].personName);
				$("#current-job").html(contacts[index].job);
				$("#current-phone-number").html(contacts[index].phone);
				color = contacts[index].textColor;
				if(colorOn) {
					$("#current-name").css("color",color);
				}
			}
		})
	}

	$("#color-button").on("click", function(){
		if(colorOn) {
			$("#current-name").css("color","black");
			colorOn = false;
		} else {
			$("#current-name").css("color",color);
			colorOn = true;
		}	
	})

	$("#checkbox-1").on("click", function() {
		if(this.checked) {
			$("#color-button").prop("disabled",false).css("background-color","white");
		}else {
			$("#color-button").prop("disabled",true).css("background-color","grey");
		}
	})
})

document.addEventListener("deviceready", function() {
	navigator.vibrate([1000,1000,1000,250,250,250,250]);

	function onSuccess(acceleration) {
	    alert('Acceleration X: ' + acceleration.x + '\n' +
	          'Acceleration Y: ' + acceleration.y + '\n' +
	          'Acceleration Z: ' + acceleration.z + '\n' +
	          'Timestamp: '      + acceleration.timestamp + '\n');
	};

	function onError() {
	    alert('onError!');
	};

	var options = { frequency: 3000 };  // Update every 3 seconds

	var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}, false);




