<style scoped lang="scss">
	.wrap{
		background-color: #f1f1f1;
		width: 100%;
		height: 100vh;
		box-sizing:border-box;
		margin-top: -80px;
		padding-top: 80px;
		position: absolute;
		z-index:-1;
		overflow:auto;
		.scrollBlock{
			position: fixed;
			right:2px;
			border-radius:14px;
			width: 5px;
			background-color: #A8A8A8;
			transition:opacity 0.5s;
			-webkit-transition:opacity 0.5s;
			-moz-transition:opacity 0.5s;
			-ms-transition:opacity 0.5s;
			-o-transition:opacity 0.5s;
		}
		.div{
			float:left;
			margin-left: 2.6%;
			width: 30%;
			.box{
				width: 100%;
				position: relative;
				box-sizing:border-box;
				border-radius:5px;
				background-color: #FFF;
				margin-bottom: 5px;
				text-align: center;
				padding-bottom: 5px;
				margin-top: 10px;
				padding-top: 10px;
				border:1px solid #cccccc;
				img{
					width: 90%;
					border:1px solid #000;
				}
				p{
					font-size: 0.7rem;
					text-align:left;
					box-sizing:border-box;
					padding-left: 5%;
					left: 5%;
					font-family: "宋体";
					margin-top: 5px;
				}
			}
		}
	}
</style>

<template>
	<div class="wrap" ref="wrap" @scroll="scrollFn">
		<div class="scrollBlock" :style="{top:scrollBlockTop + 'px',height:scrollBlockH + 'px',opacity:ScrollBlockOpacity}" ref="scrollBlock"></div>
		<div class="left div" ref="left">
			<div class="box" v-for="item in leftGroup" @click="showPlay(item)">
				<img :src="item.image" alt="图片">
				<p>名称：{{item.name}}</p>
				<p>已存：{{item.age}}年</p>
			</div>
		</div>
		<div class="middle div" ref="middle">
			<div class="box" v-for="item in middleGroup" @click="showPlay(item)">
				<img :src="item.image" alt="图片">
				<p>名称：{{item.name}}</p>
				<p>已存：{{item.age}}年</p>
			</div>
		</div>
		<div class="right div" ref="right">
			<div class="box" v-for="item in rightGroup" @click="showPlay(item)">
				<img :src="item.image" alt="图片">
				<p>名称：{{item.name}}</p>
				<p>已存：{{item.age}}年</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				//总的数据
				mainData:"",
				//总的缓存过的图片
				imgArr:[],
				//分组
				leftGroup:[],
				middleGroup:[],
				rightGroup:[],
				//定时器开关
				onoff:false,
				//容器的宽
				divW:0,
				//初始的高度和目标
				hArr:[],
				//滚动能否加载
				canScroll:false,
				//滚动条的高
				scrollBlockH:50,
				//是否显示滚动条
				ScrollBlockOpacity:0,
				//是否显示滚动条的定时器
				ScrollInterval:null,
				//上次滚动条的top值
				tempScrollTop:0,
				//根据高度的定时器
				ScrollBlockInterval:null,
				//展示用的总数据
				showBigImgData:[],
				//展示用的索引值
				index:0,
				//用于判断展示能否加载
				sipSwitch:false,
			};
		},
		props:["toLoad"],
		watch:{
			toLoad(){
				console.log(this.sipSwitch);
				if( this.sipSwitch ){
					this.sipSwitch = false;
					this.getData();
				}
			},
			scrollBlockH(){
				this.ScrollBlockOpacity = 1;
				if( this.ScrollBlockInterval === null ){
					this.ScrollBlockInterval = setInterval(() => {
						if( this.canScroll ){
							this.ScrollBlockOpacity = 0;
							clearInterval(this.ScrollBlockInterval);
							this.ScrollBlockInterval = null;
						}
					}, 0);
				}
			}
		},
		computed:{
			scrollBlockH(){
				let temp = Array.from(this.hArr),
				maxH = temp.sort( (a,b) => {
					return a.h - b.h;
				})[2];
				if( maxH !== undefined ){
					if( maxH.h > this.$refs.wrap.offsetHeight - 100 ){
						return parseInt((this.$refs.wrap.offsetHeight - 100) * (this.$refs.wrap.offsetHeight - 100) / maxH.h);
					}else{
						return 0;
					}
				}else{
					return 0;
				}
			},
			scrollBlockTop(){
				let temp = Array.from(this.hArr),
				maxH = temp.sort( (a,b) => {
					return a.h - b.h;
				})[2];
				if( this.$refs.wrap !== undefined ){
					return parseInt((this.$refs.wrap.scrollTop) * (this.$refs.wrap.offsetHeight - 80) / (maxH.targetName.offsetHeight)) + 80;
				}else{
					return 80;
				}
			}
		},
		methods:{
			init(){
				let hArr = this.hArr;
				let time = setInterval( () => {
					if( this.imgArr[0] ){
						let temp = this.imgArr.shift();
						hArr.sort( (a,b) => {
							return a.h - b.h;
						});
						hArr[0].target.push(temp);
						hArr[0].h += temp.height;
					}
					if( this.onoff ){
						clearInterval(time);
						this.onoff = false;
						this.canScroll = true;
						this.sipSwitch = true;
					}
				}, 0);
			},
			loadImgs(){
				let len = this.mainData.length,
				tempArr = [];
				for( let i = 0; i < len; i++){
					let img = new Image(),
					timer;
					img.src = this.mainData[i].image;
					timer = setInterval( () => {
						if( img.width && img.height ){
							clearInterval(timer);
							tempArr.push(1);
							this.showBigImgData.push({
								image:img.src,
								name:this.mainData[i].name,
								age:this.mainData[i].age,
								height:(img.height * this.divW) / img.width,
								index:this.index
							});
							this.imgArr.push({
								image:img.src,
								name:this.mainData[i].name,
								age:this.mainData[i].age,
								height:(img.height * this.divW) / img.width,
								index:this.index
							});
							this.index++;
							if( parseInt(tempArr.length) === parseInt(len) ){
								this.onoff = true;
								tempArr = null;
							}
						}else{

						}
					}, 16);
				}
			},
			getData(url = "http://test.cn"){
				this.$http.get(url).then(
					(successMsg) => {
						this.mainData = Array.from(JSON.parse(successMsg.body).data)
						this.loadImgs();
						//这里启动加载图片，将来下拉刷新也是调用这个init方法
						this.init();
					},
					(failMsg) => {
						alert('加载失败');
					}
					);
			},
			scrollFn(e){
				let target = this.hArr.sort( (a,b) => {
					return a.h - b.h;
				}),
				lowTarget = target[0],
				minEls = Array.from(lowTarget.targetName.children);
				if( this.canScroll ){
					if( this.$refs.wrap.scrollTop + 500 > minEls[minEls.length - 1].offsetTop - minEls[minEls.length - 1].offsetHeight / 3 ){
						this.canScroll = false;
						this.getData();
					}
				}
				//利用定时器来显示和隐藏滚动条
				this.ScrollBlockOpacity = 1;
				this.tempScrollTop = this.scrollBlockTop;
				if( this.ScrollInterval === null ){
					this.ScrollInterval = setInterval(() => {
						if( this.scrollBlockTop - this.tempScrollTop <= 1){
							this.ScrollBlockOpacity = 0;
							clearInterval(this.ScrollInterval);
							this.ScrollInterval = null;
						}
					}, 1000);
				}
			},
			showPlay(arg){
				this.$emit("toShow",true,this.showBigImgData,arg);
			}
		},
		mounted(){
			this.hArr = [
			{h:0,target:this.leftGroup,targetName:this.$refs.left},
			{h:0,target:this.middleGroup,targetName:this.$refs.middle},
			{h:0,target:this.rightGroup,targetName:this.$refs.right},
			];
			this.divW = this.$refs.left.offsetWidth;
			this.getData();
		},
	}
</script>