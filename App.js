 
            const parent = React.createElement("div", {id:"parent"},
                [ React.createElement("div", {id:"child"},[ React.createElement("h1", {},"Hello" ), React.createElement("h2", {},"Hello2" )]),
            
             React.createElement("div", {id:"child"},[ React.createElement("h1", {},"Hello" ), React.createElement("h2", {},"Hello2" )])])
 
 //const heading = React.createElement("h1", {id:"heading", className:"vijay"}, "Hello my react page");
 console.log(parent)
            const root = ReactDOM.createRoot(document.getElementById('root'));
            // console.log(root);
            // console.log( root.render(heading));
            root.render(parent);


