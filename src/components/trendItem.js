

import React from 'react';


class trendItem extends React.Component{




    constructor(){
        super()
        this.state ={
            initial:1,
            itemid:'',
            itemContent:{
                transition:'0.15s ease-out all',
                width:'auto',
                height:'auto',
                borderStyle: 'solid',
                borderWidth: '0px',
                borderColor:'#000',
                backgroundColor:'',
                borderRadius: '6px',
                color:'#000',
                textAlign: 'center',
                display:'flex',
                cursor: 'pointer',
                justifyContent: 'center',
                marginRight:20,
                marginTop:10,
                left:0,
                top:0,
                position:'absolute',
                visibility:'hidden',

            }
        }

        this.changevalue =this.changevalue.bind(this)

    }

    changevalue(){

        this.setState(prevState=>{
            return{
                initial:prevState.initial +1
            }
        })
    }

    componentWillMount() {

        this.props.onRef(this)

        if(this.props.itemW){
            const itemW=this.props.itemW
            this.setState({
                itemContent:{
                    transition:'0.15s ease-out all',
                    width:itemW,
                    height:'auto',
                    borderStyle: 'solid',
                    borderWidth: '0px',
                    backgroundColor:'',
                    borderColor:'#000',
                    borderRadius: '6px',
                    color:'#000',
                    textAlign: 'center',
                    display:'flex',
                    cursor: 'pointer',
                    justifyContent: 'center',
                    marginRight:10,
                    marginTop:10,
                    left:this.props.left,
                    top:this.props.top,
                    position:'absolute',
                    visibility:this.props.visible,

                },
                itemid:this.props.itemid,

            })


        }

    }


    mouseEnter(event) {


    }

    mouseOut(event) {


    }

    mouseDown(event){
        this.props.action(this.props.itemTitle)
    }

    componentDidUpdate() {


    }

    //props update
    componentWillReceiveProps(){
       // console.log('props update'+this.props.left)
        if(this.props.itemW || this.props.left || this.props.top){
            const itemW=this.props.itemW
            this.setState({
                itemContent:{
                    transition:'0.15s ease-out all',
                    width:itemW,
                    height:'auto',
                    borderStyle: 'solid',
                    borderWidth: '0px',
                    backgroundColor:'',
                    borderColor:'#000',
                    borderRadius: '6px',
                    color:'#000',
                    textAlign: 'center',
                    display:'flex',
                    cursor: 'pointer',
                    justifyContent: 'center',
                    marginRight:10,
                    marginTop:10,
                    left:this.props.left,
                    top:this.props.top,
                    position:'absolute',
                    visibility:this.props.visible,

                },

            })
        }
    }

    myPos = (Posdata) => {




    }

    render(){

        const styles={

            buttonInfo:{

                alignItems: 'center',
                display: 'flex',
                fontSize:'17px',
                justifyContent: 'center',
                verticalAlign:'center',
                textAlign:'center',
                width:'100%',
                color:'#fff',
                fontWeight:'bold',
                height:'auto',
                marginTop:6



            }

        }

        return(
            <div style={this.state.itemContent} onClick={()=>{this.mouseDown() }} >
                <div  style={{width:'100%'}} >

                <img src={this.props.icon}  width={'100%'}/>

                <div style={styles.buttonInfo}>
                    {this.props.itemTitle}
                </div>


                </div>

            </div>
        )

    }
}



export default trendItem