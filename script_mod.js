// Task 2.4 - ćwiczenie z modułu

var GalleryItem = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.image.name),
        React.createElement('img', {src: this.props.image.src})
      )
    )
  },
});

var image = {
  name: 'Kotek',
  src: 'https://i.pinimg.com/236x/59/63/ac/5963acde18f448016278e51875210a50.jpg'
};

var element = React.createElement(GalleryItem, {image: image});
ReactDOM.render(element, document.getElementById('app'));