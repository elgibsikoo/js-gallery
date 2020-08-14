
//array
pics = [
	"imgs/kitty_bed.jpg",		//0
	"imgs/kitty_basket.jpg", 	//1
	"imgs/kitty_laptop.jpg",	//2
	"imgs/kitty_door.jpg",		//3
	"imgs/kitty_sink.jpg",		//4
	"imgs/kitty_wall.jpg"		//5
]

var button = document.querySelector ("button");
var img = document.querySelector ("img");
var counter = 1;

button.addEventListener('click', function (){
	//if counter = 6, go back to 0 because last image is 5
	if(counter === 6){
		counter = 0;
	}
	img.src = pics [counter]
	counter = counter + 1;
});