
let  userIsSignedIn = true;

let  SignIn = React.createClass({
    render: function() {
        return <a href="#">Sign in</a>;
    }
});

let  UserMenu = React.createClass({
    render: function() {
        return <ul className="usermenu">
                    <li>Android</li>
                    <li>iOS</li>
                    <li>Windows</li>
               </ul>;
    }
});


let  MyApp = React.createClass({
    render: function() {
    //  return <div>{ userIsSignedIn ? <UserMenu /> : <SignIn /> }</div>; //alt.

        if (userIsSignedIn){ return <div> <UserMenu /></div> ;}
        else {return <div> <SignIn  /></div> ;}


    }
});

ReactDOM.render(<MyApp />, document.getElementById("content"));