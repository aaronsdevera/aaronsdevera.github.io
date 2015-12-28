var user_says = document.getElementById('user_says');
var is_bot_speaking = false;

function httpGetAsync(url, callback)
{
    console.log(url);
    var xmlhttp = new XMLHttpRequest();
    var resp ='';
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    resp = JSON.parse(xmlhttp.responseText)['response'];
    /*
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            resp = JSON.parse(xmlhttp.responseText);
        }
    };
    */
    console.log(resp);
    return resp;

    /*
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
    
    var resp = xmlHttp.responseText;
    console.log(resp);
    return resp;
    */
}



function doSpeak(s) {
    
	
	var msg = new SpeechSynthesisUtterance();
	msg.voice = window.speechSynthesis.getVoices().filter(function(voice) {
	  		return voice.name == "Samantha";
	  	})[0];
  
	msg.rate = 1; // 0.1 to 10
	
	msg.pitch = 1; // 0 to 2
	msg.text = s;
	
	//msg.onend = function(e) {
	//  console.log('elapsedTime=' + e.elapsedTime + ',timeStamp=' + e.timeStamp);
	//};
	
	// Now speak...
    msg.onstart = function(){
        
        console.log("Bot is speaking...");
        is_bot_speaking = true;
        speech.stop();

    }
     msg.onend = function(){
        console.log("Bot is done speaking...");
        is_bot_speaking = false;
        speech.start();
    }
	var bot_resp_audio = document.getElementById('#bot_response');
    bot_resp_audio = window.speechSynthesis.speak(msg);
    console.log('hit');
	return false;
}

function initSpeech() {
	var msg = new SpeechSynthesisUtterance('');
	window.speechSynthesis.cancel(); // Cancel previous
	
	var smsg = '';
	if('speechSynthesis' in window) {
		//smsg = "Your browser <strong>supports</strong> speech synthesis.";
	} else {
    		smsg = 'Sorry your browser <strong>does not support</strong> speech synthesis.<br>Try this in <a href="http://www.google.co.uk/intl/en/chrome/browser/canary.html">Chrome Canary</a>.';
	}
	user_says.lastElementChild.innerHTML = '<b>'+smsg+'</b>';
	return false;
}

var speech = new Speech({
    debugging: true,
    continuous: true,
    interimResults: true,
    autoRestart: true
    });

speech
    .on('start', function () {
        user_says.innerHTML = 'Come on, talk to me.'
    })
    .on('end', function () {
        if (is_bot_speaking == false) {
            //speech.stop();
        }
        else {
            //speech.stop();
        }
        
        //user_says.innerHTML = 'Stopped listening.'
    })
    .on('interimResult', function (msg) {
        var newP = document.createElement('p');
        user_says.appendChild(newP);
        user_says.lastElementChild.innerHTML = msg;
        user_says.scrollTop = user_says.scrollHeight;
    })
    .on('finalResult', function (msg) {
        
        var send_payload = msg.replace(/ /gi,'+');
        //var url = 'http://localhost:5000/api/v1/bots/bot2therapy/'
        var url = 'http://104.236.255.173/api/v1/bots/bot2therapy/'
        
        // Send request to server
        var bot_response = httpGetAsync(url+send_payload);

        //bot_response = bot_response.response;
        
        doSpeak(bot_response);
        //var x = 8000;
        //setTimeout(console.log("timer for "+ x), x);
        
        /*
        var myAudio = document.getElementById('#bot_response');
        
        while (myAudio.duration > 0 && !myAudio.paused) {
            if (myAudio.duration > 0 && !myAudio.paused) {

                //Its playing...do your job
                is_bot_speaking = true;
            } 
            else {

                //Not playing...maybe paused, stopped or never played.
                is_bot_speaking = false;
            }
        }
        */
        
        var newP = document.createElement('p');
        user_says.appendChild(newP);
        user_says.lastElementChild.innerHTML = '<b>'+msg+'</b>';
        user_says.scrollTop = user_says.scrollHeight;
        
        
        
    })
    .start()