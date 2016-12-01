<style scoped lang="scss">
	.wrap{
		position: fixed;
		top:0;
		left:0;
		height: 100vh;
		width: 100vw;
		background-color: rgba(0,0,0,0.8);
		z-index:100;
		.switch{
			position: absolute;
			right:20px;
			top:20px;
			width: 50px;
			height: 20px;
			line-height: 18px;
			font-size: 16px;
			text-align: center;
			background-color: #A8A8A8;
			border:1px solid #c1c1c1;
			box-sizing:border-box;
			border-radius:4px;
		}
		.box{
			overflow:auto;
			position: absolute;
			bottom:20px;
			height: 85vh;
			width: 98%;
			margin-left: 1%;
			border-radius:5px;
			background-image: url("../../assets/bg.jpg");
			box-sizing:border-box;
			padding-top: 20px;
			.vertical{
				top:66%!important;
			}
			.innerBox{
				width: 90%;
				margin-left: 5%;
				padding-bottom: 20px;
				position: relative;
				top:50%;
				transform:translate(0,-50%);
				img{
					width: 100%;
				}
				p{
					font-size: 20px;
					margin-top: 10px;
					color:#fff;
				}
			}
			.lBtn{
				position: absolute;
				left: 2%;
				height: 100%;
				width: 20px;
				box-sizing:border-box;
				padding-top:33vh;
				z-index:100;
				font-size: 20px;
				color:#fff;
				span{
					position: fixed;
					width: 20px;
				}
			}
			.rBtn{
				position: absolute;
				right: 2%;
				height: 100%;
				width: 20px;
				box-sizing:border-box;
				padding-top:33vh;
				z-index:100;
				font-size: 20px;
				color:#fff;
				span{
					position: fixed;
					width: 20px;
					right:2.6%;
				}
			}
		}
	}
</style>

<template>
	<div class="wrap">
		<div class="switch" @click="toHide">关闭</div>
		<div class="box" ref="box">
			<div class="lBtn" @click="toPrev">
				<span>〈</span>
			</div>
			<div class="rBtn" @click="toNext">
				<span>〉</span>
			</div>
			<div class="innerBox" ref="iBox" :class="{vertical:classSwitch}">
				<img :src="tempData.image" alt="图片">
				<p class="name">名称：{{tempData.name}}</p>
				<p class="age">已存：{{tempData.age}}年</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				box:null,
				iBox:null,
				classSwitch:true,
				tempData:null,
			};
		},
		props:["nowData","sumData"],
		computed:{

		},
		methods:{
			toHide(){
				this.$emit("toHide",false);
			},
			init(){
				if( this.iBox.offsetHeight >= this.box.offsetHeight ){
					this.classSwitch = true;
				}else{
					this.classSwitch = false;
				}
			},
			toPrev(){
				if( this.tempData.index === 0){
					return false;
				}
				this.$set(this.tempData,"index",--this.tempData.index);
				this.sumData.map( ( el,i ) => {
					if( el.index === this.tempData.index ){
						this.$set(this.tempData,"age",el.age);
						this.$set(this.tempData,"height",el.height);
						this.$set(this.tempData,"image",el.image);
						this.$set(this.tempData,"index",el.index);
						this.$set(this.tempData,"name",el.name);
					}
				});
				this.$nextTick(function() {
					this.init();
				});
			},
			toNext(){
				if( this.tempData.index === this.sumData.length - 1){
					this.$emit("fromSip");
					return false;
				}
				this.$set(this.tempData,"index",++this.tempData.index);
				this.sumData.map( ( el,i ) => {
					if( el.index === this.tempData.index ){
						this.$set(this.tempData,"age",el.age);
						this.$set(this.tempData,"height",el.height);
						this.$set(this.tempData,"image",el.image);
						this.$set(this.tempData,"index",el.index);
						this.$set(this.tempData,"name",el.name);
					}
				});
				this.$nextTick(function() {
					this.init();
				});
			}
		},
		mounted(){
			this.box = this.$refs.box;
			this.iBox = this.$refs.iBox;
			this.init();
		},
		created(){
			let {age,name,index,image,height} = this.nowData;
			this.tempData = {age,name,index,image,height}
		}
	}
</script>