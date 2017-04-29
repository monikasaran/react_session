let  MyDiv1 = React.createClass({

        getInitialState: function() {
          console.log("===> getInitialState") ;
           return {};
        },

        componentWillMount: function() {
          console.log("componentWillMount") ;

        },

         render: function() {
             console.log("render") ;
             return <div>JS is {this.props.name}</div>;
         },

        componentDidMount: function() {
            console.log("componentDidMount") ;
            console.log("prop: ",   this.props.name) ;
        },

         componentWillUnmount: function() {
             console.log("componentWillUnmount") ;
             console.log("prop: ",   this.props.name) ;
         }

    });

ReactDOM.render(<MyDiv1  name="the best"/>, document.getElementById('content') );
