var output = document.getElementById("fizzbuzz");


function addHref(element){
    var myrandom=Math.round(Math.random()*14)
    var links=new Array()
    links[0] = "https://www.youtube.com/watch?v=zsjZ2r9Ygzw&list=PLmKbqjSZR8TZa7wyVoVq2XMHxxWREyiFc&index=1"
    links[1] = "https://www.youtube.com/watch?v=fNS4lecOaAc&index=2&list=PLmKbqjSZR8TZa7wyVoVq2XMHxxWREyiFc"
    links[2] = "https://www.youtube.com/watch?v=vU8dCYocuyI&index=3&list=PLmKbqjSZR8TZa7wyVoVq2XMHxxWREyiFc"
    links[3] = "https://www.youtube.com/watch?v=Ylomy1Aw9Hk&index=4&list=PLmKbqjSZR8TZa7wyVoVq2XMHxxWREyiFc"
    links[4] = "https://www.youtube.com/watch?v=aRrDsbUdY_k&list=PLmKbqjSZR8TZa7wyVoVq2XMHxxWREyiFc&index=5"
    links[5] = "https://www.youtube.com/watch?v=GUizvEjR-0U&index=6&list=PLmKbqjSZR8TZa7wyVoVq2XMHxxWREyiFc"
    links[6] = "https://www.youtube.com/watch?v=Tt-mpuR_QHQ&list=PLmKbqjSZR8TZa7wyVoVq2XMHxxWREyiFc&index=7"
    links[7] = "https://www.youtube.com/watch?v=o5E7cG54VoA&index=8&list=PLmKbqjSZR8TZa7wyVoVq2XMHxxWREyiFc"
    links[8] = "https://www.youtube.com/watch?v=0Rnq1NpHdmw&index=9&list=PLmKbqjSZR8TZa7wyVoVq2XMHxxWREyiFc"
    links[9] = "https://www.youtube.com/watch?v=3saU5racsGE&list=PLmKbqjSZR8TZa7wyVoVq2XMHxxWREyiFc&index=10"
    links[10] = "https://www.youtube.com/watch?v=rHFOwlMCdto&index=11&list=PLmKbqjSZR8TZa7wyVoVq2XMHxxWREyiFc"
    links[11] = "https://www.youtube.com/watch?v=DRauXXz6t0Y&list=PLmKbqjSZR8TZa7wyVoVq2XMHxxWREyiFc&index=12"
    links[12] = "https://www.youtube.com/watch?v=DnpO_RTSNmQ&list=PLmKbqjSZR8TZa7wyVoVq2XMHxxWREyiFc&index=13"
    links[13] = "https://www.youtube.com/watch?v=XebG4TO_xss&list=PLmKbqjSZR8TZa7wyVoVq2XMHxxWREyiFc&index=14"
    links[14] = "https://www.youtube.com/watch?v=DgOgdGpWqzQ&list=PLmKbqjSZR8TZa7wyVoVq2XMHxxWREyiFc&index=15"
    element.setAttribute('href', links[myrandom])
    element.setAttribute('target', "_blank")
}

for(i = 1; i <= 100; i++){
	var p = document.createElement("p");
	p.classList.add("circle");
	
	if(i % 3 == 0 && i % 5 == 0){
		p.innerText = "FIZZBUZZ";
		p.classList.add("circleRed");
	} else if(i % 3 == 0){
		p.innerText = "FIZZ";
		p.classList.add("circleBlue");
	} else if(i % 5 == 0){
		p.innerText = "BUZZ";
		p.classList.add("circleYellow");
	} else {
		p.innerText = i;
		p.classList.add("circleGray");
	}
	var a = document.createElement("a");
	addHref(a);
	a.appendChild(p);
	a.classList.add("circle")
	a.classList.add("a:link")
	var div = document.createElement("div");
	div.classList.add("col-xs-4");
	div.classList.add("col-md-3");
	div.classList.add("col-lg-2");
	a.classList.add("col-centered");
	div.appendChild(a);
	output.appendChild(div);	
}







































