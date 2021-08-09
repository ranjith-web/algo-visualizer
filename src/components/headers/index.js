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
      // <header className="headers">
      //   <h1 align="center">Sorting Visualizer</h1>
      //   <nav>
      //     <div className="row">
      //         <div className="col gap-2 d-sm-flex" id="newArray">
      //             <button type="button" className="btn btn-outline-success btn-dark newArray" onClick={this.props.action.generateRandomArray}>New Array</button>
      //         </div>
      //         <div className="col" id="input">
      //             <span id="size">Size
      //                 <input 
      //                 id="arr_size"
      //                 type="range"
      //                 min="0"
      //                 max="100"
      //                 onChange={this.props.action.handleLength} disabled={this.props.sorting} />
      //             </span>
      //             <span id="speed">Speed
      //                 <input id="speed_input" type="range" min="20" max="300" onChange={this.props.action.handleSpeed} disabled={this.props.sorting}/>
      //             </span>
      //         </div>
      //         <div className="col gap-2 d-sm-flex justify-content-end">
      //             <button type="button" className="btn btn-outline-primary btn-dark bubbleSort" onClick={this.props.action.handleSort} disabled={this.props.sorting}>Bubble Sort</button>
      //             <button type="button" className="btn btn-outline-primary btn-dark selectionSort" onClick={this.props.action.handleSort} disabled={this.props.sorting}>Selection Sort</button>
      //             <button type="button" className="btn btn-outline-primary btn-dark insertionSort" onClick={this.props.action.handleSort} disabled={this.props.sorting}>Insertion Sort</button>
      //             <button type="button" className="btn btn-outline-primary btn-dark quickSort" onClick={this.props.action.handleSort} disabled={this.props.sorting}>Quick Sort</button>
      //             <button type="button" className="btn btn-outline-primary btn-dark mergeSort" onClick={this.props.action.handleSort} disabled={this.props.sorting}>Merge Sort</button>
      //         </div>
      //     </div>
      //   </nav>
      // </header>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a id="refreshButton" className="navbar-brand" href="#">Sorting Visualizer</a>
        </div>
        <ul className="nav navbar-nav">
           {/* <li className={`dropdown ${this.state.active ? 'open': ''}`} onFocus={this.onAlgoMenuClick} onBlur={this.onAlgoMenuClick}> */}
           <li className={`dropdown ${this.state.active ? 'open': ''}`} onClick={this.onAlgoMenuClick} >
             <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">Algorithms
             <span className="caret"></span></a>
             <ul className="dropdown-menu">
               <li id="startButtonDijkstra" className="navbar-inverse navbar-nav" onClick={this.props.action.handleSort} disabled={this.props.sorting}><a href="#">Bubble Sort</a></li>
               <li id="startButtonAStar2" className="navbar-inverse navbar-nav" onClick={this.props.action.handleSort} disabled={this.props.sorting}><a href="#">Selection Sort</a></li>
               <li id="startButtonGreedy" className="navbar-inverse navbar-nav" onClick={this.props.action.handleSort} disabled={this.props.sorting}><a href="#">Insertion Sort</a></li>
               <li id="startButtonAStar" className="navbar-inverse navbar-nav" onClick={this.props.action.handleSort} disabled={this.props.sorting}><a href="#">Merge Sort</a></li>
               <li id="startButtonAStar3" className="navbar-inverse navbar-nav" onClick={this.props.action.handleSort} disabled={this.props.sorting}><a href="#">Quick Sort</a></li>
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
