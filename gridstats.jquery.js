"use strict";
function gridStats (e)
{
			var user = e[0];
			var ID = e[1];
	
		//var uservars = $.extend(defaults, e){
		//	user: user,
	     //   ID: ID,
	    
		
	$.getJSON('https://secure.worldcommunitygrid.org/api/members/' + user + '/results?code=' + ID + '&format=json');
		}


gridStats({user:'kittythecat',ID:'bdcae8159c0d7d87e85f82618de46abc'})
