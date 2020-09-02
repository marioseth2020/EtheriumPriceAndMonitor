$('body').append('<div id="et-885697"></div>');
$(function (){	
				
				$.ajax({
					url:'https://etherpricemonitor.online/ethprice.php',
					type:'post',
					data: {},
					success: function(data){
						$("#et-885697").html(data);
					}			
				
				});
			});	
