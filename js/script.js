$(document).ready(function() {
	// creates a 16x16 
	var numCols = 16, numRows = 16;
	for(var r=1; r<=numRows; r++) {
		var $row = "<tr id='row "+r+"'>";
		for(var c=1; c<=numCols; c++) {
			$row += "<td class='box'></td>";
		}
		$row += "</tr>";
		$("#grid table tbody").append($row);
	}

	$("td").hover(function() {
		$(this).addClass("fill");
	});
});