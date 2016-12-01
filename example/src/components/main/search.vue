<style scoped lang="scss">
	.wrap{
		box-sizing:border-box;
		border:1px solid #cccccc;
		background-color: #f0f0f0;
		height: 50px;
		line-height: 50px;
		display:flex;
		-webkit-display:flex;
		-moz-display:flex;
		-ms-display:flex;
		justify-content:space-around;
		-webkit-justify-content:space-around;
		-moz-justify-content:space-around;
		-ms-justify-content:space-around;
		.joke{

		}
		.searchImg{
			&:after{
				left: 5px!important;
			}
		}
		.hasWord{
			&:after{
				left: 5px!important;
			}
		}
		.search{
			position: relative;
			&:after{
				content:"";
				position: absolute;
				top:21px;
				left: 154px;
				width: 15px;
				height: 10px;
				background-image: url("../../assets/magnifier.png");
				background-size: 100% 100%;
				background-repeat: no-repeat;

			}
			input{
				box-sizing:border-box;
				height: 26px;
				margin-top: 12px;
				width: 270px;
				appearance:none;
				-webkit-appearance:none;
				border:1px solid #cccccc;
				border-radius:0px;
				outline:none;
				&::-webkit-input-placeholder{
					color:#cccccc;
					text-align: center;
					line-height: 16px;
				}
			}
			.phstyle{
				padding-left: 20px;
				&::-webkit-input-placeholder{
					text-align:left!important;
				}
			}
			.inputHasWord{
				padding-left: 20px;
			}
			.clear{
				position: absolute;
				height: 15px;
				width: 15px;
				top:18px;
				right:10px;
				border-radius:14px;
				line-height: 13px;
				text-align: center;
				background-color: rgba(0,0,0,0.5);
				color:#fff;
				display: none;
			}
			.clearSwitch{
				display:block;
			}
		}
		.category{

		}
	}
</style>

<template>
	<div class="wrap">
		<div class="joke" @click="jokeFn">逗你的</div>
		<div class="search" :class="{searchImg:phstyleSwitch,hasWord:hasWordSwitch}">
			<input type="text" placeholder="搜索" @focus="inputFocus" @blur="inputBlur" :class="{phstyle:phstyleSwitch,inputHasWord:hasWordSwitch}" v-model="searchText" ref="input">
			<div class="clear" :class="{clearSwitch:hasWordSwitch}" @click="toClear">x</div>
		</div>
		<div class="category">搜索</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				searchText:"",
				phstyleSwitch:false
			};
		},
		methods:{
			inputFocus(){
				this.phstyleSwitch = true;
			},
			inputBlur(){
				this.phstyleSwitch = false;
			},
			toClear(){
				this.$refs.input.focus();
				this.searchText = "";
			},
			jokeFn(){
				this.$emit("main-indexFn",true);
			}
		},
		computed:{
			hasWordSwitch(){
				if( this.searchText !== ""){
					return true;
				}
				return false;
			}
		}
	}
</script>