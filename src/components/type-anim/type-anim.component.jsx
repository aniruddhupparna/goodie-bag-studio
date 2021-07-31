import React from "react";
import './type-anim.styles.css';

class TypeAnim extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lineNo: 0,
            charPosn: 0,
            line: "",
            traversed: false
        }
        this.interval = '';
    }

    setTraversed = () => {
        const {lineNo, charPosn, traversed} = this.state;
        const {textList} = this.props;
        if (!traversed) {
            const traversedLine = charPosn === textList[lineNo]?.length
            this.setState({
                traversed: traversedLine
            })
        }
    }

    setLineNo = ()=> {
        const {lineNo, charPosn, traversed} = this.state;
        const {textList} = this.props;
        if(traversed && (charPosn === 0) && lineNo < textList.length) {
            this.setState({
                lineNo: lineNo + 1,
                charPosn: 0,
                line: '',
                traversed: false
            })
        }
    }

    typeAnim=()=> {
        const {lineNo, charPosn, traversed} = this.state;
        const {textList} = this.props;
        const newCharPosn = charPosn + (traversed ? -1 : 1);
        this.setTraversed();
        if (newCharPosn >= 0) {
            this.setState({
                line: textList[lineNo]?.slice(0, newCharPosn),
                charPosn: newCharPosn
            });
        }
        this.setLineNo();
    }

    componentDidMount() {
        this.interval = setInterval(this.typeAnim , this.props.typingInterval)
    }

    render() {
        return (
            <div className="landing-title type-anim">
                {this.state.line}
                <div className="caret">|</div></div>
        )
    }
}

export default TypeAnim;