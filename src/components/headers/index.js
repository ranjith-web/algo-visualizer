import { Component } from 'react';
import "./styles.css";

class Headers extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: false
    }
    console.log(this.props.sorting)
  }
  handleChange = (evt) => {
    const range = Math.floor((parseInt(evt.target.value) + 3) * 1.65);
    console.log(evt.target.value, range)
  }
  onAlgoMenuClick = () => {
    this.setState({active: !this.state.active});
  }
  render() {
    return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <span id="refreshButton" className="navbar-brand" >Sorting Visualizer</span>
        </div>
        <ul className="nav navbar-nav">
           <li className={`dropdown ${this.state.active ? 'open': ''}`} onClick={this.onAlgoMenuClick} >
             <span className="dropdown-toggle nav-header" data-toggle="dropdown" aria-expanded="false">Algorithms
             <span className="caret"></span></span>
             <ul className="dropdown-menu">
               <li id="startButtonDijkstra" className="navbar-inverse navbar-nav" onClick={this.props.action.handleSort} disabled={this.props.sorting}><span>Bubble Sort</span></li>
               <li id="startButtonAStar2" className="navbar-inverse navbar-nav" onClick={this.props.action.handleSort} disabled={this.props.sorting}><span>Selection Sort</span></li>
               <li id="startButtonGreedy" className="navbar-inverse navbar-nav" onClick={this.props.action.handleSort} disabled={this.props.sorting}><span>Insertion Sort</span></li>
               <li id="startButtonAStar" className="navbar-inverse navbar-nav" onClick={this.props.action.handleSort} disabled={this.props.sorting}><span>Merge Sort</span></li>
               <li id="startButtonAStar3" className="navbar-inverse navbar-nav" onClick={this.props.action.handleSort} disabled={this.props.sorting}><span>Quick Sort</span></li>
             </ul>
           </li>
         </ul>
         <div className="variation-control col" id="input">
            <span id="size">Size
              <input 
                id="arr_size"
                type="range"
                min="0"
                max="100"
                onChange={this.props.action.handleLength} disabled={this.props.sorting} />
            </span>
            <span id="speed">Speed
                <input id="speed_input" type="range" min="20" max="300" onChange={this.props.action.handleSpeed} disabled={this.props.sorting}/>
            </span>
        </div>
      </div>
     </nav>
    )
  }
}

export default Headers;
