// task 2.4

var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        img: './img/hpotter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'film o królu sawanny',
        img: './img/lionking.jpg'
    },
    {
        id: 3,
        title: 'Pulp Fiction',
        desc: 'film o życiu',
        img: './img/pulpfiction.jpg'
    },
    {
        id: 4,
        title: 'Łowca Androidów',
        desc: 'film science fiction',
        img: './img/lowca.jpg'
    },
    {
        id: 5,
        title: 'Krótki film o miłości',
        desc: 'jak w tytule',
        img: './img/kfom.jpg'
    }
];

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function(){
    return React.createElement('h4', {}, this.props.title)
  },
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
  render: function(){
    return React.createElement('p', {}, this.props.desc)
  },
});

var MovieImage = React.createClass({
  propTypes: {
    img: React.PropTypes.string.isRequired,
  },       
  render: function(){
    return React.createElement('img', {src: this.props.img})
  },
});

var MovieClass = React.createClass({
  propTypes: {
    movieElem: React.PropTypes.object.isRequired,
  },
  render: function(){
    return (
      React.createElement('li', {key: this.props.movieElem.id},
        React.createElement(MovieTitle, {title: this.props.movieElem.title}),
        React.createElement(MovieDescription, {desc: this.props.movieElem.desc}),
        React.createElement(MovieImage, {img: this.props.movieElem.img})
      )
    )
  },
});

var MoviesList = React.createClass({
  propTypes: {
    moviesData: React.PropTypes.object.isRequired,
  },
  render: function(){
    var movies = this.props.moviesData.map(function(movie){
      return React.createElement(MovieClass, {movieElem: movie, key: movie.id})
    });
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, 'Lista filmów'),
        React.createElement('ol', {}, movies)
      )
    )
  },
});

var app = React.createElement(MoviesList, {moviesData: movies});
ReactDOM.render(app, document.getElementById('app'));