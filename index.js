// JavaScript Document
$(document).ready(function() {
	var x = "x"
	var o = "o"
	var count = 0;
	var o_win = 0;
	var x_win = 0;
	$('#game li').click(function(){

		if ( horizontal(o, 3) == true || vertical(o,3) == true || diagonal(o,3)) //3 for tictactoe width
		{
			alert('O has won the game. Start a new game')
			reset();
		}
		else if ( horizontal(x, 3) == true || vertical(x,3) == true || diagonal(x,3))
		{
			alert('X wins has won the game. Start a new game')
			reset();
		}
		else if (count == 9)
		{
			alert('Its a tie. It will restart.')
			reset();
			count = 0
		}
		else if ($(this).hasClass('disable'))
		{
			alert('Already selected')
		}
		else if (count%2 == 0)
		{
			count++
			$(this).text(o)
			$(this).addClass('disable o btn-primary')
			if ( horizontal(o, 3) == true || vertical(o,3) == true || diagonal(o,3))
			{
				alert('O wins')
				count = 0
				o_win++
				$('#o_win').text(o_win)
			}
		}
		else  
		{
			count++;
			$(this).text(x);
			$(this).addClass('disable x btn-info');
			if (horizontal(x, 3) == true || vertical(x,3) == true || diagonal(x,3))
			{
				alert('X wins')
				count = 0
				x_win++
				$('#x_win').text(x_win)
			}
		}

	});
	
	$("#reset").click(function () {
		reset();
		count = 0;
	});

	function reset(){
		$("#game li").text("+");
		$("#game li").removeClass('disable o x btn-primary btn-info');
	}

	function horizontal(c, range){ //c for class, range for scalable tictactoe width
		for(var i = 1; i<= Math.pow(range,2);i){
			var row = 0;
			for(var j = 0; j < range; j++){
				var num = i+j;
				if($('#btn_'+num).hasClass(c)){
					row++;	
				}
			}
			if (row == range){
				return true;
			}
			
			i+=range;
		}
	}

	function vertical(c,range){
		for(var i = 1; i<= range;i++){
			var row = 0;
			for(var j = i; j <= Math.pow(range,2); j){
				var num = j;
				if($('#btn_'+num).hasClass(c)){
					row++;	
				}
				j+=range;
			}
			if (row == range){
				return true;
			}
		}
	}

	function diagonal(c, range){
		//diagonal from left to right
		var row = 0;
		for(var j = 1; j <= Math.pow(range,2); j) { 
			var num = j;
			if($('#btn_'+num).hasClass(c)){
				row++;	
			}
			var rg = range+1;
			j+=rg;
		}
		if (row == range){
			return true;
		}


		//diagonal from right to left
		var row = 0;
		for(var j = range; j <= (Math.pow(range,2) - (range-1)); j){ 
			var num = j;
			if($('#btn_'+num).hasClass(c)){
				row++;	
			}
			var rg = range-1;
			j+=rg;
		}
		if (row == range){
			return true;
		}
	}
});