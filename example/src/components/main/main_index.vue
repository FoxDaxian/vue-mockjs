<style scoped lang="scss">
	.wrap{
		position: relative;
	}
</style>

<template>
	<div class="wrap">
		<show-img-play v-if="sipSwitch" v-on:toHide="toHideFn" :now-data="nowData" :sum-data="sumData" v-on:fromSip="toWaterfall"></show-img-play>
		<search v-on:main-indexFn="toAppFn"></search>
		<now-title></now-title>
		<waterfall v-on:toShow="toShow" :toLoad="toWaterVal"></waterfall>
	</div>
</template>

<script>
	import search from './search'
	import nowTitle from './nowTitle'
	import waterfall from './waterfall'
	import showImgPlay from './showImgPlay'
	export default{
		data(){
			return{
				sipSwitch:false,
				//当前的数据对象
				nowData:"",
				//总的数据对象
				sumData:"",
				toWaterVal:0
			};
		},
		components:{
			search,waterfall,nowTitle,showImgPlay
		},
		methods:{
			toWaterfall(){
				this.toWaterVal += 1;
			},
			toAppFn(arg){
				this.$emit("appSwitch",arg);				
			},
			toShow(arg,sumD,nowD){
				this.nowData = nowD;
				this.sumData = sumD;
				this.sipSwitch = arg;
			},
			toHideFn(arg){
				this.sipSwitch = arg;
			}
		},
	}
</script>