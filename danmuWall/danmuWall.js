Vue.component("danmu-wall",{
    template:"#danmuWall",
    props:['danmuList'],
    data:function(){
        return {
            danmuContent:'',
            top:0
        }
    },
    methods:{
        sendDanmu:function(){
            var top = Math.round(Math.random()*200);
            //this.top =`top:${Math.round(Math.random()*200)}px`;
            console.log(this.top)
            document.styleSheets[0].cssRules[9].cssRules[0].style.top=top+'px';
            document.styleSheets[0].cssRules[9].cssRules[1].style.top=top+'px';
            this.danmuList.push({
                content:this.danmuContent
            })
        },
        cleanScreen:function(){
            
            this.danmuList.splice(0,this.danmuList.length)
        }
    }
})

new Vue({
    el:"#app",
    data:{
        danmuList:[
            {content:'11223344'}
        ]
    }
})