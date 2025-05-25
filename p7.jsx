// import React,{ Component} from "react";
// import './App.css'
// class app extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             languages:[
//                {name:"python1",votes:0},
//                 {name:"python2",votes:0},
//             ]
//         };
//     }
//    vote=(i)=>{
//     let newlang=[...this.state.languages];
//     newlang[i].votes++;
//     this.setState({languages:newlang});
//    }
//    render(){
//     return(
// <>
//     <h1>voting system</h1>
//     <div className="languages">
//         {
//             this.state.languages.map((lang,i)=>
//             <div key={i} className="language">
//             <div className="voteCount">{lang.votes}</div>
//             <div className="languageName">{lang.name}</div>
//             <button onClick={()=>this.vote(i)}>Vote here</button>
//             </div>
//             )
//         }
//     </div>
// </>
//     );
//    }
// }
// export default app;
import React,{ Component} from "react";
import './App.css';
class app extends Component{
    constructor(props){
        super(props);
        this.state={
            languages:[
                {name:"python",votes:0},
                {name:"python1",votes:0},
                {name:"pytho2",votes:0}
            ]
        };
    }
    vote=(i)=>{
        let newlang=[...this.state.languages];
        newlang[i].votes++;
        this.setState({languages:newlang});
    }
    render(){
        return(
            <>
              
                <h2>VOTING SYSTEM</h2>
                <div className="languages">
                {
                    this.state.languages.map((lang,i)=>
                     <div key={i} className="language">
                      <div className="votescount">{lang.votes}</div>
                      <div className="langname">{lang.name}</div>
                      <button onClick={()=>this.vote(i)}>Vote here</button>
                     </div>
                    )
                }                
              </div>
            </>
        );
    }
}
export default app;