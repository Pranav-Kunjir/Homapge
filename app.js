function update_time () {
	var today = new Date();
	// var time = today.getHours() + ":" + today.getMinutes();
	// let time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const monthNames = ["January", "February", "March", "April", "May", "June",
	  "July", "August", "September", "October", "November", "December"];
	var time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
	var dayName = days[today.getDay()];
	var monthName = monthNames[today.getMonth()]
	time_element = document.getElementById("time");
	day_element = document.getElementById("day");
	date_element = document.getElementById("date")
	time_element.innerHTML = time; 
	day_element.innerHTML = dayName;
	// date_element.innerHTML = monthName + " "+ today.getDate();
	date_element.innerHTML = monthName + " "+ "<span class='red-font'>"+ today.getDate() +"</span>";

}
update_time();

function render_shortcut () {
	for (var i = 0; i < localStorage.length; ++i) {
    var link = localStorage.key(i);
    var value = localStorage.getItem(link);
    shortcuts = document.getElementById("shortcut");
    if (link != "background_video_link" && link != "background_video_start") {
    	// shortcuts.innerHTML += "<div class='shotcut-card' id='"+link+" links'><a href='"+ link +"'><img src='https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url="+ link +"&size=64'></a></div>";
    	shortcuts.innerHTML += value;
    	}else {
			var video_link = localStorage.getItem('background_video_link');
	    	var video_start = localStorage.getItem('background_video_start')
			document.getElementById('background').innerHTML = '<iframe height="100%" width="100%" src="'+video_link+'?&controls=0&autoplay=1&mute=1&start='+video_start+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		};
	};
}
render_shortcut()

function AddShortcut() {
	let link = prompt("Where should the shortcut take you:", "https://example.com");
	if (link != null && link != "" && link != "https://example.com"){
		shortcuts = document.getElementById("shortcut");
		shortcuts.innerHTML += "<div class='shotcut-card' id='"+link+" link'><a href='"+ link +"'><img src='https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url="+ link +"&size=64'></a></div>";
		localStorage.setItem(link, "<div class='shotcut-card' id='"+link+" link'><a href='"+ link +"'><img src='https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url="+ link +"&size=64'></a></div>")
		console.log(localStorage)
	} else {
		console.log('user canselld the operation')
	}
}
function customizePopup () {
	let video_link = prompt("Bacgkround youtube video link", "https://www.youtube.com/embed/ismUOuFi118");
	let video_start = prompt("Start the youtube video at", "00");
	if (video_link == null || video_link == ""){
		console.log('No Bacgkround Video')
	} else {
		document.getElementById('background').innerHTML = '<iframe height="100%" width="100%" src="'+video_link+'?start='+video_start+'&controls=0&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		localStorage.setItem("background_video_link",video_link)
		localStorage.setItem("background_video_start",video_start)
	}
}


function addlistener () {
	var add_shortcut = document.getElementById('add_shortcut');
	add_shortcut.addEventListener('click', AddShortcut);
	var customize = document.getElementById('customize');
	customize.addEventListener('click', customizePopup); 

}


setInterval(update_time, 30000);
setInterval(addlistener, 1000);
