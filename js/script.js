$(document).ready(function() {
	const HEIGHT = 960;
	const WIDTH = 960;

	var side = 16;
	var randomRGBMode = false;

	$("#grid").css({"width":  WIDTH, "height": HEIGHT});

	function generateGrid(sideLength) {
		for(var r=1; r<=sideLength; r++) {
			var $row = "<tr id='row "+r+"'>";
			for(var c=1; c<=sideLength; c++) {
				$row += "<td class='box'></td>";
			}
			$row += "</tr>";
			$("#grid table tbody").append($row);
		}
		$(".box").css({"height": (HEIGHT/sideLength)+"px", "width": (WIDTH/sideLength)+"px"});
	}

	function clear() {
		console.log("clear is called");
		$("td").removeClass("fill");
		$("tbody tr").remove();
		var size = prompt("How many squares per side would you like to make the new grid?");
		generateGrid(size);
	}

	function randomRGB() {
		return "rgb("+Math.floor(Math.random() * 256)+
				  ","+Math.floor(Math.random() * 256)+
				  ","+Math.floor(Math.random() * 256)+")";
	}

	generateGrid(side);

	$(document).on({
    	mouseenter: function () {
    		randomRGBMode ? $(this).css("background-color", randomRGB()) : $(this).addClass("fill");	
    	}
	}, 'td');
	

	$("#clear-btn").click(function() {
		clear();		
	});		
		

	$("#random-btn").click(function() {
		randomRGBMode = !randomRGBMode;
		clear();
	});
});