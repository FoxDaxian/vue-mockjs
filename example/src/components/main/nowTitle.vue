<style scoped lang="scss">
	.wrap{
		width: 100%;
		height: 30px;
		line-height: 30px;
		background-color: #FFF;
		>span{
			display: inline-block;
			width: 90px;
			text-align: center;
			font-size: 14px;
			color:#666666;
		}
		div.otherThing{
			overflow: hidden;
			position: relative;
			height: 100%;
			top:-30px;
			left:90px;
			font-size: 14px;
			white-space:nowrap;
			overflow:hidden;
			width: 275px;
			color:#0000CC;
			.touchTarget{
				position: absolute;
				height: 100%;
				top:0;
				span{
					user-select:none;
					-webkit-user-select:none;
					margin-right: 10px;
				}
			}
		}
	}
</style>

<template>
	<div class="wrap">
		<span>相关搜索：</span>
		<div class="otherThing">
			<div class="touchTarget" :style="{left:otL + 'px'}" ref="target">
				<span v-for="item in sumData">{{item.relevant}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				otL:0,
				tempX:0,
				sumData:""
			};
		},
		methods:{
			init(){
				const _this = this;
				let targetW;
				var timer = setInterval(function() {
					if( _this.$refs.target.offsetWidth ){
						targetW = _this.$refs.target.offsetWidth;
						_this.$refs.target.ontouchstart = function(e){
							const ev = e.targetTouches[0],
							downX = ev.clientX;
							this.ontouchmove = function(e) {
								const ev = e.targetTouches[0],
								moveX = ev.clientX;
								if( (moveX - downX) > 0 && this.offsetLeft > 0 ){
									return false;
								}
								if( (moveX - downX) < 0 && -this.offsetLeft > targetW - 280){
									return false;
								}
								_this.otL = moveX - downX + _this.tempX;
							}
						}
						window.ontouchend = function() {
							_this.tempX = _this.otL;
							_this.$refs.target.ontouchmove = _this.$refs.target.ontouchend = null;
						}
						clearInterval(timer);
					}
				}, 0);
			},
			getData(){
				this.$http.get("http://test.cn").then(
					(successMsg) => {
						this.sumData = Array.from(JSON.parse(successMsg.body).data)
					},
					(failMsg) => {
						alert('加载失败');
					}
					);
			},
		},
		mounted(){
			this.init();
			this.getData();
		}
	}
</script>