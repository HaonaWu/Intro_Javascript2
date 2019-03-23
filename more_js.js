function changeColor(name){
	var r = Math.random()*256;
	var g = Math.random()*(0,256);
	var b = Math.random()*(0,256);

	//"hello" +"there" --> "hellothere"
	
	var color = "rgb("+r+","+g+","+b+")";
	document.getElementById(name).style.backgroundColor=color;
	
}
	var groceryList= ["potatoes", "oat milk","eggs", "blackberry"];
		//indicies:     0			 1			2			3
	
	/*var favouriteFood= gorceryList[0]
	 console.log(favouriteFood)
	 */

//Math.floor(something) ==> chop a decimal point()

function randomItem(){
	var randomIndex = Math.floor(Math.random()*4);
	console.log(randomIndex);
	document.getElementById("two").innerHTML=groceryList[randomIndex];
	
	changeColor("two");
}