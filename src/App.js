/**
 *2020
 *yi
 *
 */


import React, { useRef,Component } from 'react';
import './components/global'
import './App.css';
import Tagbutton from "./components/Tagbutton";
import TrendItem from "./components/trendItem";
import closepng from "./asset/close.png"
import titlepng from "./asset/title-1.png"

const rootRef = React.createRef();



class App extends React.Component {

  constructor(dispatch,props){
    super(dispatch,props)
    this.state ={
      initall:0,
      winW:'100%',
      winH:'100%',
      categoryblockH:0,
      treadData:[],
      themeData:[],
      category: ['传感未来','大数据','环境为本','区块链','人工智能','生活方式','生物科技','未来机会','未来技术','虚拟现实','重置'],
      choosecategory:{'传感未来':0,'大数据':0,'环境为本':0,'区块链':0,'人工智能':0,'生活方式':0,'生物科技':0,'未来机会':0,'未来技术':0,'虚拟现实':0,'重置':0},
      tempchoose:[0,0,0,0,0,0,0,0,0,0,0],
     // theme:['行','建筑','健康','教育','金融','其他','人机交互','人文艺术','设计','食','消费','信息安全','衣','医疗','以人为本','职场','自动化'],
     // themeicon:['./images/ai3.png','./images/ai3.png','./images/ai3.png','./images/ai3.png','./images/ai3.png','./images/ai3.png','./images/ai3.png','./images/ai3.png','./images/ai3.png','./images/ai3.png','./images/ai3.png','./images/ai3.png','./images/ai3.png','./images/ai3.png','./images/ai3.png','./images/ai3.png','./images/ai3.png'],
      theme:['行','建筑','健康','教育','金融','其他','人机交互','人文艺术','设计','食','消费','信息安全','衣','医疗','以人为本','职场','自动化','社交'],
      themeicon:['./images/icon1.png','./images/icon2.png','./images/icon3.png','./images/icon4.png','./images/icon5.png','./images/icon6.png','./images/icon7.png','./images/icon8.png','./images/icon9.png','./images/icon10.png','./images/icon11.png','./images/icon12.png','./images/icon13.png','./images/icon14.png','./images/icon15.png','./images/icon16.png','./images/icon17.png','./images/icon18.png'],
      showthemeData:[],
      showpopup:'hidden',
      popupalpha:0,
      popupheioght:'30%',
      isFullScreen:false,
        contentTop:'100px',

    }


    this.handleresize =this.handleresize.bind(this)
    this.settle_Data =this.settle_Data.bind(this)
    this.click_event =this.click_event.bind(this)
      this.closepopup =this.closepopup.bind(this)



  }

  componentDidMount() {
      let newcategoryblockH = document.getElementById("categoryview")
      if(window.innerWidth<500){
          newcategoryblockH=newcategoryblockH.clientHeight
      }else {
          newcategoryblockH=0
      }

      let _contentTop=100

      console.log(document.getElementById("categoryview").clientHeight)

     _contentTop=(window.innerHeight-700)/2
      this.setState({
          categoryblockH:newcategoryblockH,
          contentTop:_contentTop,
      })

      document.addEventListener("keydown", this.onKeyDown)


  }

    onKeyDown = (e) => {

        switch( e.keyCode) {
            case 70://回车事件
                //alert(e.keyCode)
                this.fullScreen()
                break
        }
    }



    fullScreen = () => {
        if (!this.state.isFullScreen) {
            try {
                rootRef.current.requestFullscreen();
            }catch{
                console.log('not support')
            }
        }
    }


    exitFullScreen = () => {
        document.exitFullscreen();
    }



  handleresize(){

      let newcategoryblockH = document.getElementById("categoryview")

      if(window.innerWidth<500){
          newcategoryblockH=newcategoryblockH.clientHeight
      }else {
          newcategoryblockH=0
      }

    this.setState({
      winW:window.innerWidth,
      winH:window.innerHeight,
      categoryblockH:newcategoryblockH,
    },()=>{
      this.settle_Data(this.state.tempchoose)
    })
     console.log(newcategoryblockH)


      // 全屏
      if (document.fullscreenElement) {
          this.setState({ isFullScreen: true });
      }
      // 不是全屏
      else {
          this.setState({ isFullScreen: false });
      }


  }

  componentWillMount() {

    window.addEventListener('resize', this.handleresize);







      fetch('./trend.json', {
         method: "GET",
         headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         },
         })
          .then(response => response.json())//Promise
          .then(data => {

            this.setState({
              treadData: data.data,
              winW:window.innerWidth,
              winH:window.innerHeight,

            },()=>{

              this.settle_Data(this.state.tempchoose)

            })


        })



  }


  componentDidUpdate(){

  }

  //close component
  componentWillUnmount(){
    window.removeEventListener("resize", this.handleresize)
  }


  //props update
  componentWillReceiveProps(){

  }

  settle_Data(tempchoose){

    let show_item_num=7
    let item_top_space=120
    let item_w = 860 / show_item_num
    let left_pos = (this.state.winW - (item_w + 30) * show_item_num) / 2
    let newtempData = []
    let item_top =  item_top_space+this.state.categoryblockH



      let item_left = left_pos
    let i = 1
    let newthemeData=[]





      //Set theme icon
      this.state.theme.map((item, key) => {

          if (key % show_item_num == 0) {
              i = 1
              item_top += item_w + 60
              item_left = left_pos
          } else {
              item_left = left_pos + i * (item_w + 40)
              i += 1
          }

          const newthemeicon = {
              index: key,
              theme: item,
              left: item_left,
              top: item_top,
              width: item_w,
              visible: 'visible',
          }

          newthemeData.push(newthemeicon)

      })






      //If checked trend button
       let tempchoosetrend=[]

       for(let i=0;i<tempchoose.length;i++){
         if(tempchoose[i]==1){
           tempchoosetrend.push(this.state.category[i])
         }
       }


      if(tempchoosetrend.length>0) {

        let temptheme=[]
        let k=0
            i=0
            item_top=item_top_space+this.state.categoryblockH


        this.state.treadData.map((item, key) => {
           if(tempchoosetrend.includes(item.category)) {
              temptheme.push(item.themeicon)
           }
        })


          temptheme=Array.from(new Set(temptheme))

         if(temptheme.length<show_item_num)left_pos = (this.state.winW - (item_w + 20) * temptheme.length) / 2


          let newtempthemeData=this.state.themeData
          this.state.theme.map((themeitem, key) => {


              if (temptheme.includes(themeitem)) {

                  if (k % show_item_num == 0) {
                      i = 1
                      item_top += item_w + 60
                      item_left = left_pos
                  } else {
                      item_left = left_pos + i * (item_w + 40)
                      i += 1
                  }
                  k += 1

                  newtempthemeData[key]={
                      index: key,
                      theme: themeitem,
                      left: item_left,
                      top: item_top,
                      width: item_w,
                      visible: 'visible',
                  }

              }else{

                  newtempthemeData[key]={
                      index: key,
                      theme: themeitem,
                      left: (this.state.winW-item_w)/2,
                      top: this.state.winH,
                      width: item_w,
                      visible: 'hidden',
                  }

              }

          })


           this.setState({
               initall: 0,
           },()=>{
               this.setState({themeData:newtempthemeData})
           })



     }else{

          this.setState({
              initall: 1,
              themeData:newthemeData,
          },()=>{
              this.setState({themeData:newthemeData})
          })

      }


    }




  click_event(tag){


    if(tag=='重置'){
       let renewtempchoose=[0,0,0,0,0,0,0,0,0,0,0]
       let newchoosecat=this.state.choosecategory
       for(var i=0;i<this.state.tempchoose.length;i++){
         if(this.state.tempchoose[i]==1){
           newchoosecat[this.state.category[i]]=0
         }
       }

          this.setState({
            tempchoose:renewtempchoose,
            choosecategory:newchoosecat,
          },()=>{
           // console.log(newchoosecat)
            this.settle_Data(renewtempchoose)

          })



      return
    }

    let newchoosecat=this.state.choosecategory

    if(newchoosecat[tag]==1){
      newchoosecat[tag]=0

    }else{
      newchoosecat[tag]=1
    }


    this.setState({
      choosecategory:newchoosecat
    },()=>{
      let newtempchoose=this.state.tempchoose
      for(let i=0;i<this.state.category.length;i++){
        if(this.state.category[i]==tag){
          (newtempchoose[i]==1)?(newtempchoose[i]=0):(newtempchoose[i]=1)

        }
      }

      this.setState({
        tempchoose:newtempchoose
      },()=>{
        //console.log(newtempchoose)
        this.settle_Data(newtempchoose)

      })

    })

  }


  onRef = (ref) => {
    this.child = ref
  }


  item_click_event(picktheme){


      let tempchoosetrend=[]
      let popupData=[]
      for(let i=0;i<this.state.tempchoose.length;i++){
          if(this.state.tempchoose[i]==1){
              tempchoosetrend.push(this.state.category[i])
          }
      }


          this.state.treadData.map((item, key) => {
              if(tempchoosetrend.length>0) {
                 if(tempchoosetrend.includes(item.category)) {
                    if(item.themeicon==picktheme){
                        item.displayyear='yes'
                        popupData.push(item)
                    }
                 }
              }else{
                    if(item.themeicon==picktheme){
                        item.displayyear='yes'
                        popupData.push(item)
                   }
              }
          })

      //sort year 2015-2020
      let sortpopupData=this.bubblesort(popupData)

      console.log(sortpopupData.length)
      let newpopupheioght=sortpopupData.length*140
      //if(window.innerWidth<1000)newpopupheioght=sortpopupData.length*window.innerWidth/2
      newpopupheioght='auto'
      this.setState({
          showthemeData:sortpopupData,
          popupheioght:newpopupheioght
      },()=>{
         // console.log(this.state.showthemeData)
          this.setState({
              showpopup:'visible',
              popupalpha:1,
          })


      })


  }

    bubblesort(arr){
        let len = arr.length;
        for( let i = 0; i < len; i ++){
            for( let j = 0; j < len - i - 1; j ++){
                if(arr[j].year > arr[j + 1].year) {
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;

                }else if(arr[j].year == arr[j + 1].year){

                    arr[j + 1].displayyear +='no'

                }
            }
        }
        return arr;
    }



    closepopup(){
          this.setState({
              showpopup:'hidden',
              popupheioght:'5%',
              popupalpha:0,
          })

    }






  render(){


    return(

        <div  className='contentView' ref={rootRef} >

          <div className='viewbg'>
              <video src="./media/WorkReel_BG.mp4" autoPlay="autoPlay" loop="loop"  muted="muted"  style={{width:'120%',height:'100%',paddingLeft:0,left:0}} >

              </video>

          </div>

          <div style={{position:'absolute',backgroundColor:'',width:'100%',top:this.state.contentTop}}>
          <div className='Topheadline'>
          </div>
          <div className='Subheadline'>
           <img src={titlepng}    width={'980'} />
          </div>

          <div className='Centerblock' id='categoryview'>
            <div style={{maxWidth:'80%',width:'980px',height:'audo',display:'flex',justifyContent: 'space-between',paddingBottom:0,backgroundColor:''}}>

              <Tagbutton ButtonName={'传感未来'} checked={this.state.choosecategory['传感未来']} bgcolor={'#BFDDE2'} action={this.click_event}/>
              <Tagbutton ButtonName={'大数据'} checked={this.state.choosecategory['大数据']} bgcolor={'#BFDDE2'} action={this.click_event} />
              <Tagbutton ButtonName={'环境为本'} checked={this.state.choosecategory['环境为本']} bgcolor={'#BFDDE2'} action={this.click_event} />
              <Tagbutton ButtonName={'区块链'} checked={this.state.choosecategory['区块链']} bgcolor={'#BFDDE2'} action={this.click_event} />
              <Tagbutton ButtonName={'人工智能'} checked={this.state.choosecategory['人工智能']} bgcolor={'#BFDDE2'} action={this.click_event} />
              <Tagbutton ButtonName={'生活方式'} checked={this.state.choosecategory['生活方式']} bgcolor={'#BFDDE2'} action={this.click_event} />
              <Tagbutton ButtonName={'生物科技'} checked={this.state.choosecategory['生物科技']} bgcolor={'#BFDDE2'} action={this.click_event} />
              <Tagbutton ButtonName={'未来机会'} checked={this.state.choosecategory['未来机会']} bgcolor={'#BFDDE2'} action={this.click_event} />
              <Tagbutton ButtonName={'未来技术'} checked={this.state.choosecategory['未来技术']} bgcolor={'#BFDDE2'} action={this.click_event} />
              <Tagbutton ButtonName={'虚拟现实'} checked={this.state.choosecategory['虚拟现实']} bgcolor={'#BFDDE2'} action={this.click_event} />



            </div>
          </div>

          <div className='Centerblock'>
            <div style={{maxWidth:'80%',width:'860',height:'audo',paddingBottom:0,backgroundColor:'#666'}}>

              {

                this.state.themeData.map((item, key) => {


                    return (

                        <TrendItem  onRef={this.onRef}  key={key} itemid={item.index} itemTitle={item.theme} action={this.item_click_event.bind(this)} icon={this.state.themeicon[key]} itemW={item.width} visible={item.visible} left={item.left} top={item.top}/>
                    )

                })
              }


          </div>

          </div>
          </div>

            <div className='popupView' style={{visibility:this.state.showpopup,transition:'0.15s ease-out all',opacity:this.state.popupalpha}}>
                <div className='popupViewbg' onClick={()=>{this.closepopup() }}>
                </div>
                <div className='popupcontent' style={{transition:'0.25s ease-out all',height:this.state.popupheioght}}>
                    <div style={{width:'100%',height:'40px',textAlign:'right'}}>
                        <img src={closepng}  style={{paddingRight:12,paddingTop:12}}   width={'40vh'} onClick={()=>{this.closepopup() }} />
                    </div>
                    <div className='scrollcontent' >

                        {
                            this.state.showthemeData.map((item, key) => {
                                return(
                                    <div key={key} className='Linerblock' style={{  paddingBottom:20,paddingTop:10}}>
                                           <div key={key} className='Centerblock'  >

                                                <div className='themeyear'>
                                                    <div className='textunselect'>
                                                     {(item.displayyear=="yes")?(item.year):('')}
                                                    </div>
                                                </div>
                                                <div className='themetext'>
                                                    <div className='textunselect'>
                                                     {item.headline}
                                                    </div>
                                                </div>

                                           </div>

                                            <div   className='Centerblock' style={{height:1}} >

                                            </div>
                                        </div>


                                )
                            })
                        }



                    </div>



                </div>

            </div>

            <div className='resetbutton' >
                <Tagbutton ButtonName={'重置'} checked={this.state.choosecategory['重置']} bgcolor={'#fff1c1'} action={this.click_event} />

            </div>

        </div>
    )

  }

}




export default App;