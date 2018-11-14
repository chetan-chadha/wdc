// JavaScript Document
$(document).ready(function(){
var config = {
    apiKey: "AIzaSyBd6EjZBcXnMU2lOyt3WqrqxqCB9jKaDIs",
    authDomain: "wdciedc.firebaseapp.com",
    databaseURL: "https://wdciedc.firebaseio.com",
    projectId: "wdciedc",
    storageBucket: "wdciedc.appspot.com",
    messagingSenderId: "521624977091"
  };
  firebase.initializeApp(config);
	var WaterS1=document.getElementById('WaterS1');
	var WaterS2=document.getElementById('WaterS2');
	var WaterS3=document.getElementById('WaterS3');
	var dbRef=firebase.database().ref().child('Controls');
	dbRef.on("value", function(snapshot){
		snapshot.forEach(function(childSnapshot) {
				    
				    //Create labels (Light, Sensors)
				    var node = childSnapshot.key;

				    childSnapshot.forEach(function(nodeChildSnapshot) {

				    	var node_child_key = nodeChildSnapshot.key;
				    	var node_child_value = nodeChildSnapshot.val();
						switch(node){
								case "Sensors":
								switch(node_child_key){
									case "WUhouse1":
									var rows = "";
									rows += "<td>"+"HOUSE NO1"+"</td><td>"+node_child_value.Currentvalue+"</td><td>"+node_child_value.FInalvalue+"</td>"
									$("#WaterS1").html(rows);
									break;
									case "WUhouse2":
									var rows = "";
									rows += "<td>"+"HOUSE NO2"+"</td><td>"+node_child_value.Currentvalue+"</td><td>"+node_child_value.FInalvalue+"</td>"
									$("#WaterS2").html(rows);
									break;
									case "WUhouse3":
									var rows = "";
									rows += "<td>"+"HOUSE NO3"+"</td><td>"+node_child_value.Currentvalue+"</td><td>"+node_child_value.FInalvalue+"</td>"
									$("#WaterS3").html(rows);
									break;
								}
									break;
//								case "RAM":
//
//							var canvas_container_ram = $("#canvas_container_ram");
//							canvas_container_ram.html("<canvas id='ram_chart'></canvas>");
//
//
//							var data = {
//							    labels: [
//							        "Free",
//							        "Used"
//							    ],
//							    datasets: [
//							        {
//							            data: [node_value.free, node_value.used],
//							            backgroundColor: [
//							                "#FF6384",
//							                "#36A2EB"
//							            ]
//							        }]
//							};
//							var options = {
//							    responsive: false,
//							    maintainAspectRatio: false,
//							    title:{
//							    	display: true,
//							    	text: "RAM USAGE"
//							    }
//							};
//							//Se up chart
//							var ctx = $("#ram_chart");
//							var myDoughnutChart = new Chart(ctx, {
//							    type: 'doughnut',
//							    data: data,
//							    options: options
//							});
//
//							console.log("Free: " +node_value.free);
//
//						break;
//						case "DISK":
//
//							var canvas_container_ram = $("#canvas_container_disk");
//							canvas_container_ram.html("<canvas id='disk_chart'></canvas>");
//
//
//							var data = {
//							    labels: [
//							        "Free",
//							        "Used"
//							    ],
//							    datasets: [
//							        {
//							            data: [node_value.free, (node_value.total-node_value.free)],
//							            backgroundColor: [
//							                "#FF6384",
//							                "#FFCE56"
//							            ]
//							        }]
//							};
//							var options = {
//							    responsive: false,
//							    maintainAspectRatio: false,
//							    title:{
//							    	display: true,
//							    	text: "DISK SPACE"
//							    }
//							};
//							//Se up chart
//							var ctx = $("#disk_chart");
//							var myDoughnutChart = new Chart(ctx, {
//							    type: 'doughnut',
//							    data: data,
//							    options: options
//							});
//
//						break;
//						case "CPU":
//							var temp =  node_value.temperature;
//							var color;
//							var suggestion = "";
//							
//							if(temp < 10 || temp > 75){
//								//Red
//								color = "alert alert-danger";
//								suggestion = "Not Good! Danger";
//							}  else if(temp > 10 && temp < 25 || temp > 55 && temp < 75){
//								//orange
//								color = "alert alert-warning";
//								suggestion = "Not So Good";
//							}else if(temp > 25 && temp < 55){
//								//green
//								color = "alert alert-success";
//								suggestion = "Good";
//							}
//								   
//							$("#cpu_container").html("<h5 class='"+color+"'>CPU Temperature: "+temp+" °C ("+suggestion+")</h5>");
//							break;
							
				
								   	}
				    });
				  });

	});
	
	
});