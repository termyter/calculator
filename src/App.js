import React, {createRef} from "react";
import './App.css';

class App extends React.Component{
    constructor() {
        super();
        this.value = 0
        this.refOutput = React.createRef()
        this.buttons = [{val:'1'},{val: '2'},{val:'3'},{val:'4'},{val:'5'},{val:'6'},{val:'7'},{val:'8'},{val:'9'},{val:'0'},
            {val:'+'},{val:'-'},{val:'/'},{val:'*'},]
        this.operanion = [{val:'C'},{val:'='}]
        this.summ = ''
    }

    inpNumber(val){
        let str = val
        let output = this.refOutput.current

        this.setState({
            val: str
        })
        if (this.summ != ''){
            this.summ = ''
            output.value = ''
        }

        if (output.value == 0)
            output.value = ''
        output.value += str

        let last = output.value.length - 1
        console.log(output.value)

    }


    inpOperation(val){
        let output = this.refOutput.current
        if (val == 'C')
            output.value = ''
        if (val == '='){
            this.summ = eval(output.value)
            output.value = this.summ

        }

    }




    render() {
        return (
            <div className="App">
                    <div className={"output"}>
                        <input ref={this.refOutput} type="text" defaultValue={this.value}/>
                    </div>
                    <div className={"buttons"}>
                        {this.buttons.map (item => <button
                        onClick={() => this.inpNumber(item.val)}>{item.val}</button> )}
                        {this.operanion.map (item => <button className={"oper"}
                            onClick={() => this.inpOperation(item.val)}>{item.val}</button> )}
                    </div>
            </div>
        );
    }
}
// function App() {
//     const buttons = [{val:'1'},{val: '2'},{val:'3'},{val:'4'},{val:'5'},{val:'6'},{val:'7'},{val:'8'},{val:'9'},{val:'0'},
//         {val:'+'},{val:'-'},{val:'/'},{val:'*'},{val:'C'},{val:'='},]
//     let str = ''
//
//     function tapeNumber(str, val) {
//         str =+ val;
//         return str
//     }
//
// onClick={() => {tapeNumber(str,item.val)}}>{item.val}</button>)}
//     return (
//         <div className="App">
//             <div className="container">
//                 <div className={"output"}>
//                     <input ref={refOut} type="text" defaultValue={str}/>
//                 </div>
//                 <div className={"buttons"}>
//                     {buttons.map((item) => <button
//                     onClick={() => {tapeNumber(str,item.val)}}>{item.val}</button>)}
//                 </div>
//
//             </div>
//         </div>
//     );
// }
//
 export default App;
