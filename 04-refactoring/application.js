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

var Badge = React.createClass({displayName: "Badge",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      // create an instance of thumbnail {...thumbnailProps} pass in entire object
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))

    });

    return React.createElement("div", null, 
      list
    )

  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return  React.createElement("div", {className: "thumbnail"}, 
    React.createElement("img", {src: this.props.imgURL}), 
    React.createElement("div", {className: "caption"}, 
      React.createElement("h3", null, this.props.header), 
      React.createElement("p", null, this.props.description), 
      React.createElement("p", null, 
        React.createElement(Badge, {title: this.props.title, number: this.props.number})
      )
    )
  )
  }
});
