var options = {
  thumbnailData:

  [{
  title: 'Read More',
  number: 32,
  imgURL:'http://placehold.it/500x300',
  header: 'Header Title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue in arcu quis malesuada. Etiam eu nulla magna. Sed vel nunc ipsum.'
},
{
title: 'Browse More',
number: 42,
imgURL:'http://placehold.it/500x300',
header: 'Header Title 2',
description: 'Hahaha ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue in arcu quis malesuada. Etiam eu nulla magna. Sed vel nunc ipsum.'
},{
title: 'Try This',
number: 32,
imgURL:'http://placehold.it/500x300',
header: 'Header Title',
description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue in arcu quis malesuada. Etiam eu nulla magna. Sed vel nunc ipsum.'
}


]}

// ask react to render this class
var element = React.createElement(ThumbnailList, options);

// when we ask react to render this class, we will tell it
// where to place the rendered element in the dom
//ReactDOM.render(element1, document.body);
ReactDOM.render(element, document.querySelector('.target'));
