var contacts = {	"caitlin" : {	personName: "Caitlin Hyland",
							job : "HR",
							phone : 4241453392,
							textColor : "pink"
						},
					"jeffrey" : {	personName: "Jeff Backofen",
							job : "Student", 
							phone : 1231233211,
							textColor : "red"
						},
					"sarvesh" : {	personName: "Sarvesh Joshi",
							job : "Software Dev",
							phone : 9929583924,
							textColor : "orange"
						},
					"prachi" : {	personName: "Prachi Ghadge",
							job : "Software Dev",
							phone : 3295392934,
							textColor : "purple"
						},
					"manasa" : {	personName: "Manasa Tumkur",
							job : "Software Dev",
							phone : 4392934952,
							textColor : "green"
						},
					"muhammad" :{	personName: "Muhammad Zaman",
							job : "Software Dev",
							phone : 4953945093,
							textColor : "blue"
						}
				}
var colorOn = false;
var color = "#000000";

$(document).ready(setListView);

function setListView() {
	for(var person in contacts) {
		console.log(contacts[person].personName);
		//Create ListItems for Panel ListView
		var li = document.createElement("li");
		var a = document.createElement("a");
		//Add href, class, and data-rel attributes
		a.setAttribute("href","#");
		a.setAttribute("class","person");
		a.setAttribute("data-rel","close");
		//Set ListItem Text to person's name
		a.innerHTML = contacts[person].personName;
		//Bind click event listener to ListItem
		$(a).bind("click", function() {
			loadPerson($(this).html());
		});
		$(li).append(a);
		//Append ListItems to Panel ListView	
		var listView = $("#contacts");
		listView.append(li).listview("refresh");
	}
}

function loadPerson(person) {
	for(var per in contacts) {
		if(contacts[per].personName == person) {
			$("#current-name").html(contacts[per].personName);
			$("#current-job").html(contacts[per].job);
			$("#current-phone-number").html(contacts[per].phone);
			color = contacts[per].textColor;
			if(colorOn) {
				$("#current-name").css("color",color);
			}
			break;
		}
	}
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
		$("#color-button").prop("disabled",true).css("background-color","grey");
;
	}else {
		$("#color-button").prop("disabled",false).css("background-color","white");
	}
})