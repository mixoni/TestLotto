var React = require("react");
var ReactDOM = require("react-dom");
var Circle = require('../components/Circle');

 class Animation extends React.Component {    
    constructor(props){
        super(props);
        this.state = {
                    showMe: "No"                   
        };
        
    }   

    componentDidMount(){
        let $this = this;
        setTimeout(function(){ 
                     $this.setState({ showMe : "Yes" });
                }, 1000);  
    }
 
    propTypes: {
        onComplete: React.PropTypes.func,
        onTimerExpired:React.PropTypes.func
    }

    render() {
        return(
            <div> 
                <div className="col-md-12">
				    <div className="col-md-4 put-left">
					    <div className="row row-2">
						    <div className="col-md-12">
                                <Circle list={[0]} className="ball-logo" id="ball-logo"/> 
                                <Circle list={[0]} className="ball-game" id="ball-game-2" />                                                
                                <Circle list={[0]} className="ball-game" id="ball-game-3" />                                                
                                <Circle list={[0]} className="ball-game" id="ball-game-4" />                                                
                                <Circle list={[0]} className="ball-game" id="ball-game-5" />                                                
						    </div>
					    </div>
					    <div className="row row-10">
						    <div className="col-md-12">
						    </div>
					    </div>
				    </div>
				    <div className="col-md-8 put-right">
					    <div className="row row-9">
						    <div show-me={this.state.showMe} className="col-md-12">
                                <Circle list={[0]} className="center-circle" id="center" /> 
                                <Circle list={[0]} className="center-circle-outside" id="center-outside" /> 
                                <Circle list={this.props.numbers} onComplete = {this.props.onComplete} animation={true} className="ball-circle" id="ball"/> 
						    </div>
					    </div>
					    <div className="row row-3">
						    <div className="col-md-12">
                                    {this.props.numbers.map((object, i) => <Circle list={[0]} dataBadge={i+1} className="ball-numbers" key={i}/>)}                                                                                                                                     
						    </div>
					    </div>
				    </div>
			    </div>
            </div> 
        )        
    }
}

module.exports = Animation;