import React from "react";

console.log("hit boarddd");
// debugger;
// class Board extends React.Component {
    
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         hi: "hi"
//     //     }
//     // }

//     render() {
//         // debugger;
//         console.log("hiiiiiiii");

        
//         return(
//             <div>
//                 <p>Yoooooooooooooooooooooooooo</p>
//                 <p>{this.state.hi}</p>
//                 {console.log(this.state.hi)}
//             </div>
//         )
//     }

// }


// export default Board;

const Board = (props) => {
    return(
        <div>{JSON.stringify(props)}</div>
    )
}

export default Board;