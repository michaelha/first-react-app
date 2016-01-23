var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      // create an instance of thumbnail {...thumbnailProps} pass in entire object
      return <Thumbnail {...thumbnailProps} />

    });

    return <div>
      {list}
    </div>

  }
});
