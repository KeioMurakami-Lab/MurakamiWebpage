//$(window).load(function () {
   /* $.get('data/sample.csv',function(data){
        var csv = $.csv()(data);
        var item = '';

        $(csv).each(function(index){
                item += '<li class="list-item">';
                item += '<p class="date">' + this[0] + '</p>';
                item += '<p class="title"><a href="' + this[1] + '">' + this[2] + '</a></p>';
                item += '<p class="body">' + this[3] + '</p>';
                item += '</li>';
	})
	//$("#itemlist").append(itemlist);
    //});
//});
/*var item = 'aaaaaaaaaaabaaaaaaaaaa';
var elem = document.getElementById("itemlist");
elem.insertAdjacentHTML("afterbegin",item);*/
$(function() {

  function parseCsv(data) {
    // CSVを配列で読み込む
    var csv = $.csv.toArrays(data);

    var insert = '';
    $(csv).each(function(i) {
      if (this.length > 0) {
        insert += '<tr>';
        $(this).each(function() {
            insert += '<td>' + this + '</td>';
        });
        insert += '</tr>';
      }
      var target = (i === 0) ? "thead" : "tbody";
      $("#itemlist "+target).append(insert);
      insert = "";
    });
  }

  // CSVの読み込み
  $.get('sample.csv', parseCsv, 'text');

});