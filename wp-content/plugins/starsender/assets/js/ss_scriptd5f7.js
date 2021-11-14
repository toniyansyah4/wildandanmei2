(function($){
	if(fid!==''){
		fid.forEach(function(form){
			var sent = false;
			$('#'+form).find('[type=submit]').on('click',function(e){
			    var btn = $(this);
		 		var data = {};
				if(!sent){ e.preventDefault(); } else { sent = false; return; }
		 		btn.attr('disabled','disabled');
				$('#'+form).find('input:not([type=button]):not([type=reset]):not([type=submit]):not([type=hidden]):not([type=file]),select,textarea')
						.each(function(n,e){

					if($(e).attr('type')=='radio' || $(e).attr('type')=='checkbox' || $(e).prop('tagName').toLowerCase()=='select'){
						var selected, type = $(e).attr('type'), name = $(e).attr('name');

						if($('#'+form).hasClass('elementor-form')){
							var id = $(e).attr('id');
								id = id===undefined||id===''?'Tidak ada ID':id;

							switch (true) {
								case (type=='radio'):
								case (type=='checkbox'):
									var val = $('input[name="'+name+'"]:checked').next().text();
										data[id]=val;
									break;
								case ($(e).prop('tagName').toLowerCase()=='select'):
									var val = $(e).find(':selected').text();
										data[id]=val;
									break;
								default:
									break;
							}
						}

					} else {

						var id = $(e).attr('id');
							id = id===undefined||id===''?'Tidak ada ID':id;
						var val = $(e).val();
							data[id]=val;

					}
				});
				data[form] = form;
				jQuery.post(ssAjaxUrl,{action:"starsender_send", send_wa:data}).done(function(){
					sent=true;
					btn.removeAttr('disabled');
					btn.click();
				});
			});			
		})
	}
}(jQuery));
