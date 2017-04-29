

    var UserName = React.createClass({
        render: function() {
            return <div>name:  {this.props.name}</div>;
        }
    });

    var User = React.createClass({
        render: function() {
            return <div>
                     <h3>City: {this.props.user.city}</h3>
                         <UserName name={this.props.user.name} />
                    </div>;
        }
    });


    var user = { name: 'Ram', city: 'Bangalore' };  

    ReactDOM.render(<User user={user} />, document.getElementById('content'));