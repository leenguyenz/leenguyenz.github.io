var columnType = ["todo","doing","done"];
var count = $('.count');

//count to job
function index(){
	count[0].innerHTML = '(' + $('#todo .collection-item').length + ')';
	count[1].innerHTML = '(' + $('#doing .collection-item').length + ')';
	count[2].innerHTML = '(' + $('#done .collection-item').length + ')';
}

var DB = {
	getData: function(){
		if (typeof(Storage) !== "undefined") {
    		var data;
    		try{
				data = JSON.parse(localStorage.getItem('list')) || {};
    		} catch (error) {
    			data = {};
    		}
    		return data;
		} else {
    		return {};
		}
	},
	setData: function(data){
		localStorage.setItem('list',JSON.stringify(data));
	}
}

var list = DB.getData();

var app = {
	newJob: function(e, type, input){
		var inputVal = $(input).val();

		var event = window.event || e;

		if(event.keyCode === 13 && inputVal.trim() !== ''){
			if(!list[type]) list[type] = [];

			list[type].push(inputVal);
			DB.setData(list);

			// update dom
			this.addJob(type,inputVal);
			// reset dom
			$(input).val('');

			index();
		}
	},
	addJob: function(type,inputVal){
		var item = '<div class="collection-item">'+ inputVal +'<i class="fa fa-trash-o" onclick="app.deleteJob(this)"></i></div>';

		$('#' + type).append(item);

		index()
	},
	deleteJob: function(i){
		var modal = $('#modal-comfirm').modal();

		var item = $(i).parent();

		modal.modal('open');

		$('#btn-delete').off('click');

		$('#btn-delete').on("click", function(){
			var columnType = item.parent().attr('id');

			var columnPosition = $('#' + columnType + " .collection-item").index(item);

			list[columnType].splice(columnPosition,1);

			DB.setData(list);

			item.remove();
			modal.modal('close');

			index();
		})
	}
};

$( function() {
	columnType.forEach(function(type){
		var column_type = list[type] || [];

		column_type.forEach(function(inputVal){
			app.addJob(type, inputVal);
		})
	})

    $(".sort").sortable({
      connectWith: ".sort",

      placeholder: "ui-state-highlight",

      start: function (event,ui){
      	$(ui.item[0]).addClass('dragging');

      	ui.item.oldColumnType = ui.item[0].parentElement.getAttribute('id');

      	ui.item.oldItemPosition = ui.item.index();

      	index();
      },

      stop: function (event, ui){
      	$(ui.item[0]).removeClass('dragging');

	  	var item = ui.item;
	    var oldColumnType = item.oldColumnType;
	    var oldItemPosition = item.oldItemPosition;
	    var newColumnType = item[0].parentElement.getAttribute('id');
	    var newItemPosition = item.index();
	    //Remove item from old position
	    list[oldColumnType].splice(oldItemPosition,1);
	    //Add item to new position
	    list[newColumnType].splice(newItemPosition, 0, item[0].innerText);

	    //Store data to localStorage
	    DB.setData(list);
	    index();
      }
    });
});
