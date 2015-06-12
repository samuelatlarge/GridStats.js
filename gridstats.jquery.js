"use strict";
function gridStats (e)
{
			var user = e.user;
			var ID = e.ID;
			console.log(user);
			console.log(ID);
		//var uservars = $.extend(defaults, e){
		//	user: user,
	     //   ID: ID,
	    
		
	var results = $.getJSON('https://secure.worldcommunitygrid.org/api/members/' + user + '/results?code=' + ID + '&format=json&callback=test');
	console.log(results);
		}
