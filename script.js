var menuButton = `<div>
<button type="button" id="me" class="kanbanFilter">Me</button>
<button type="button" id="Coworker" class="kanbanFilter">Coworker</button>
<button type="button" id="Cat" class="kanbanFilter">Cat</button>
<button type="button" id="showAll" class="kanbanFilter">All</button>
`;

function addMenuButton() {
  var people = $('.Facepile.Facepile--compact.projectHeaderFacepile-clarifiedNavigationFacepileClickable').children()
  var menuButton = "<div id='memberFilterButtons' class='extra-buttons'></div>";
  $(menuButton).prependTo('div.BoardHeader.Board-header');
  var container = $("#memberFilterButtons");
  container.append("<span class='prefix'>Filter by: </span>");
  for (var person of people) {
    var bgImage = $(person).css('background-image');
    var bg = bgImage.replace('url(','').replace(')','').replace(/\"/gi, "");
    var content = "";
    // var content = `<img src="${bg}" />`;
    var child = $(`<button type="button" data-style="${bg}" class="kanbanFilter kanbanFilterMember Avatar Avatar--small">${content}</button>`);
    child.css('background-image', bgImage);
    container.append(child);
  }
  var allChild = $(`<button type="button" id="showAll" class="kanbanFilter Avatar Avatar--small">All</button>`)
  allChild.css('background-image', "http://via.placeholder.com/27x27/ccc/010101?text=All");
  container.append(allChild);
}


$(function() {
  console.log("ready!");
  addMenuButton();

  //coworker
  $('button.kanbanFilterMember').click(function() {
    var dataStyle = $(this).attr('data-style');
    var dataStyleTrim = dataStyle.replace('_27x27.png','').replace('_60x60.png','');
    console.log('filtered Coworker!', dataStyle);
    //hide everything
    $('div.BoardCardWithCustomProperties-leftMetadata').closest('.SortableItem').hide();
    //show coworker
    $('[style*="'+dataStyleTrim+'_27x27.png"]').closest('.SortableItem').show();
    $('[style*="'+dataStyleTrim+'_60x60.png"]').closest('.SortableItem').show();
  });

  $('#showAll').click(function() {
		console.log('showing all!');
		$('div.BoardCardWithCustomProperties-leftMetadata').closest('.SortableItem').show();
  })

});