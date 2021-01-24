

import React from 'react';


class Tagbutton extends React.Component{




    constructor(){
        super()
        this.state ={
            initial:1,
            buttonW:0,
            clicked:0,
            buttonname:'',
            buttonInfo:{
                alignItems: 'center',
                display: 'flex',
                fontSize:'14px',
                justifyContent: 'center',
                verticalAlign:'center',
                textAlign:'center',
                width:'auto',
                color:'#fff',
                fontWeight:'bold',
                height:'45px',
                position:'absolute',
            },
            buttonContent:{
                transition:'0.15s ease-out all',
                width:'auto',
                height:'45px',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor:'',
                borderRadius: '6px',
                color:'',
                overflow: 'hidden',
                textAlign: 'center',
                display:'flex',
                cursor: 'pointer',
                justifyContent: 'center',
                marginRight:20,
                marginTop:6,
                float:'left',
            },
            buttoninsidebg:{
                transition:'0.15s ease-out all',
                width:'100%',
                height:'45px',
                float:'left',
                backgroundColor:'#999',
            },
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
        let bgc='#999'
        let fontcolor = '#fff'
        if(this.props.checked==1){
            bgc=this.props.bgcolor
            fontcolor = "#000"
        }else{
            bgc=''
            fontcolor = '#fff'
        }

        if(this.props.ButtonName){
            const btnW=this.props.ButtonName.length*20
            this.setState({
                buttonname:this.props.ButtonName,
                buttonContent:{
                    transition:'0.15s ease-out all',
                    width:btnW,
                    height:'45px',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor:'#fff',
                    borderRadius: '6px',
                    color:'#fff',
                    overflow: 'hidden',
                    textAlign: 'center',
                    display:'flex',
                    cursor: 'pointer',
                    justifyContent: 'center',
                    marginRight:0,
                    marginTop:6,
                    float:'left',
                },
                buttoninsidebg:{
                    transition:'0.15s ease-out all',
                    width:'100%',
                    height:'45px',
                    float:'left',
                    backgroundColor:'',
                },

                buttonInfo:{
                alignItems: 'center',
                display: 'flex',
                fontSize:'14px',
                justifyContent: 'center',
                verticalAlign:'center',
                textAlign:'center',
                width:'auto',
                color:fontcolor,
                fontWeight:'bold',
                height:'45px',
                position:'absolute',
            },
            })
        }

    }

    componentWillReceiveProps(){

        this.state.clicked=this.props.checked

        let bgc='#999'
        let fontcolor = '#fff'
        if(this.props.checked==1){
            bgc=this.props.bgcolor
            fontcolor='#000'
        }else{
            bgc=''
            fontcolor='#fff'
        }
        this.setState({
                buttoninsidebg:{
                    transition:'0.15s ease-out all',
                    width:'100%',
                    height:'45px',
                    float:'left',
                    backgroundColor:bgc,
                },

                buttonContent:{
                    transition:'0.15s ease-out all',
                    width:this.props.ButtonName.length*20,
                    height:'45px',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor: bgc,
                    borderRadius: '6px',
                    color:'#fff',
                    overflow: 'hidden',
                    textAlign: 'center',
                    display:'flex',
                    cursor: 'pointer',
                    justifyContent: 'center',
                    marginRight:0,
                    marginTop:6,
                    float:'left',
                },

                buttonInfo:{
                alignItems: 'center',
                display: 'flex',
                fontSize:'14px',
                justifyContent: 'center',
                verticalAlign:'center',
                textAlign:'center',
                width:'auto',
                color:fontcolor,
                fontWeight:'bold',
                height:'45px',
                position:'absolute',
            },

            }
        )


    }


    mouseEnter(event) {

        let bgc='#999'
        if(this.props.checked==1){
            bgc=this.props.bgcolor
        }else{
            bgc=''
        }

        this.setState({

            buttoninsidebg:{
                transition:'0.15s ease-out all',
                width:'100%',
                height:'45px',
                float:'left',
                backgroundColor:bgc,
            },

            buttonContent:{
                    transition:'0.15s ease-out all',
                    width:this.props.ButtonName.length*20,
                    height:'45px',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor:bgc,
                    borderRadius: '6px',
                    color:'#fff',
                    overflow: 'hidden',
                    textAlign: 'center',
                    display:'flex',
                    cursor: 'pointer',
                    justifyContent: 'center',
                    marginRight:0,
                    marginTop:6,
                    float:'left',
                },


            }
        )

    }

    mouseOut(event) {
        let bgc='#999'
        if(this.props.checked==1){
            bgc=this.props.bgcolor
        }else{
            bgc=''
        }
        this.setState({
            buttoninsidebg:{
                transition:'0.15s ease-out all',
                width:'100%',
                height:'45px',
                float:'left',
                backgroundColor:bgc,
            },

            buttonContent:{
                    transition:'0.15s ease-out all',
                    width:this.props.ButtonName.length*20,
                    height:'45px',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor:bgc,
                    borderRadius: '6px',
                    color:'#fff',
                    overflow: 'hidden',
                    textAlign: 'center',
                    display:'flex',
                    cursor: 'pointer',
                    justifyContent: 'center',
                    marginRight:0,
                    marginTop:6,
                    float:'left',
                },


            }
        )
    }

    mouseDown(event){


        let bgc='#999'
        let fontcolor = '#fff'
        if( this.state.clicked==0){
          this.setState({clicked:1})
            bgc=this.props.bgcolor
            fontcolor='#000'
        }else{
            this.setState({clicked:0})
            bgc=''
            fontcolor='#fff'
        }

        this.setState({
                buttoninsidebg:{
                    transition:'0.15s ease-out all',
                    width:'100%',
                    height:'45px',
                    float:'left',
                    backgroundColor:bgc,
                },

                buttonContent:{
                    transition:'0.15s ease-out all',
                    width:this.props.ButtonName.length*20,
                    height:'45px',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor:bgc,
                    borderRadius: '6px',
                    color:'#fff',
                    overflow: 'hidden',
                    textAlign: 'center',
                    display:'flex',
                    cursor: 'pointer',
                    justifyContent: 'center',
                    marginRight:20,
                    marginTop:6,
                    float:'left',
                },

                buttonInfo:{
                alignItems: 'center',
                display: 'flex',
                fontSize:'14px',
                justifyContent: 'center',
                verticalAlign:'center',
                textAlign:'center',
                width:'auto',
                color:fontcolor,
                fontWeight:'bold',
                height:'45px',
                position:'absolute',
            },

            }
        )

        this.props.action(this.props.ButtonName)

    }

    render(){

        // const styles={

        //     buttonInfo:{

        //         alignItems: 'center',
        //         display: 'flex',
        //         fontSize:'14px',
        //         justifyContent: 'center',
        //         verticalAlign:'center',
        //         textAlign:'center',
        //         width:'auto',
        //         color:'#000',
        //         fontWeight:'bold',
        //         height:'45px',
        //         position:'absolute',
        //     }

        // }

        return(
            <div style={this.state.buttonContent} onClick={()=>{this.mouseDown() }}  onMouseEnter={()=>{this.mouseEnter() }}  onMouseLeave={()=>{this.mouseOut() }}>

                <div  style={this.state.buttoninsidebg} >

                </div>
                <div style={this.state.buttonInfo} >
                    <div className='textunselect'>
                      {this.state.buttonname}
                    </div>
                </div>

            </div>
        )

    }
}



export default Tagbutton