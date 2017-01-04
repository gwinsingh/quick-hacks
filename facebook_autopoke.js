/*
What does it do?
- Automatically pokes the friends who poke you
- You can choose the friends you want to poke

How it all began?
- Challenge among friends so as to who has most pokes between them on facebook

How to use?
Its Simple.
- go to https://www.facebook.com/pokes/
- Replace the persons array in this Code (Put First Name only -- Case sensitive!!!)
- Copy Paste and Run this whole script in developer console
*/


setInterval(function(){
	var newPokesParent = document.getElementById('poke_live_new');
	var newPokes = newPokesParent.children;

	// Put the name of the friends with whom you want to automate poke here
	persons = ['Hanumant','Sahil','Abhishek','Gurwinder'];

	for (var i = 0; i <= newPokes.length-1; i++) {
		poke = newPokes[i];
		var check = false
		for (var j = 0; j <= persons.length-1; j++)
			if (poke.innerHTML.search(persons[j]) >= 0) {check = true;}
		if (check) {
			try{
			poke.children[0].children[1].children[0].children[0].children[0].click();
			}
			catch(err){
				//console.log('ERROR:\n',err.message);
			}
		}
	}
},500);