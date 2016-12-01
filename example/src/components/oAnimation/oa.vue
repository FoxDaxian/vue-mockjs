<style scoped lang="scss">
	.wrap{
		position: relative;
		height: 100vh;
		box-sizing:border-box;
		padding-top: 0px;
		.logo{
			position: relative;
			height: 300px;
			perspective: 500;
			-webkit-perspective: 500;
			-moz-perspective: 500;
			-ms-perspective: 500;
			-o-perspective: 500;
			.img_wrap{
				@keyframes myRotate{
					from{
						transform: rotateY(0deg);
						-webkit-transform: rotateY(0deg);
						-moz-transform: rotateY(0deg);
						-ms-transform: rotateY(0deg);
						-o-transform: rotateY(0deg);
					}
					to{
						transform: rotateY(360deg);
						-webkit-transform: rotateY(360deg);
						-moz-transform: rotateY(360deg);
						-ms-transform: rotateY(360deg);
						-o-transform: rotateY(360deg);
					}
				}
				@-webkit-keyframes myRotate{
					from{
						transform: rotateY(0deg);
						-webkit-transform: rotateY(0deg);
						-moz-transform: rotateY(0deg);
						-ms-transform: rotateY(0deg);
						-o-transform: rotateY(0deg);
					}
					to{
						transform: rotateY(360deg);
						-webkit-transform: rotateY(360deg);
						-moz-transform: rotateY(360deg);
						-ms-transform: rotateY(360deg);
						-o-transform: rotateY(360deg);
					}
				}
				@-moz-keyframes myRotate{
					from{
						transform: rotateY(0deg);
						-webkit-transform: rotateY(0deg);
						-moz-transform: rotateY(0deg);
						-ms-transform: rotateY(0deg);
						-o-transform: rotateY(0deg);
					}
					to{
						transform: rotateY(360deg);
						-webkit-transform: rotateY(360deg);
						-moz-transform: rotateY(360deg);
						-ms-transform: rotateY(360deg);
						-o-transform: rotateY(360deg);
					}
				}
				@-ms-keyframes myRotate{
					from{
						transform: rotateY(0deg);
						-webkit-transform: rotateY(0deg);
						-moz-transform: rotateY(0deg);
						-ms-transform: rotateY(0deg);
						-o-transform: rotateY(0deg);
					}
					to{
						transform: rotateY(360deg);
						-webkit-transform: rotateY(360deg);
						-moz-transform: rotateY(360deg);
						-ms-transform: rotateY(360deg);
						-o-transform: rotateY(360deg);
					}
				}
				@-o-keyframes myRotate{
					from{
						transform: rotateY(0deg);
						-webkit-transform: rotateY(0deg);
						-moz-transform: rotateY(0deg);
						-ms-transform: rotateY(0deg);
						-o-transform: rotateY(0deg);
					}
					to{
						transform: rotateY(360deg);
						-webkit-transform: rotateY(360deg);
						-moz-transform: rotateY(360deg);
						-ms-transform: rotateY(360deg);
						-o-transform: rotateY(360deg);
					}
				}
				animation:myRotate 1.3s linear infinite;
				-webkit-animation:myRotate 1.3s linear infinite;
				-moz-animation:myRotate 1.3s linear infinite;
				box-sizing:border-box;
				padding-top: 50px;
				transform-origin:50% 0px;
				-webkit-transform-origin:50% 0px;
				-moz-transform-origin:50% 0px;
				-ms-transform-origin:50% 0px;
				-o-transform-origin:50% 0px;
				transform-style: preserve-3d;
				-webkit-transform-style: preserve-3d;
				-moz-transform-style: preserve-3d;
				-ms-transform-style: preserve-3d;
				-o-transform-style: preserve-3d;
				.box{
					&:after{
						content:"";
						position: absolute;
						bottom:-50px;
						height: 1px;
						left: 30px;
						right: 30px;
						border-radius:14px;
						background-color: #000;
					}
					position: absolute;
					width: 100px;
					left:50%;
					margin-left: -50px;
					>img{
						display: block;
						width: 100px;
						margin:0 auto;
					}
					>img:nth-of-type(1){
						position: relative;
						top:1px;
						transform:rotate(180deg);
						-webkit-transform:rotate(180deg);
						-moz-transform:rotate(180deg);
						-ms-transform:rotate(180deg);
						-o-transform:rotate(180deg);
					}
				}
			}
			p{
				box-sizing:border-box;
				position: absolute;
				bottom:-36px;
				width: 100%;
				text-align: center;
				height: 50px;
				font-size: 30px;
				line-height: 50px;
				&:after{
					content:"";
					position: absolute;
					z-index:-1;
					box-sizing:border-box;
					top:-175px;
					left: 50%;
					margin-left: -50%;
					width: 100%;
					height: 0;
					border:150px solid transparent;
					border-bottom:25px solid #B5B5B5;
				}
			}
		}
		.btn{
			position: absolute;
			color:#fff;
			left: 50px;
			right: 50px;
			height: 50px;
			line-height: 50px;
			text-align: center;
			font-size: 30px;
			margin-top: 150px;
			border:1px solid #ccc;
			background: linear-gradient(to right,rgba(249,38,89,0.4),rgba(22,163,233,0.9));
			background: -webkit-linear-gradient(to right,rgba(249,38,89,0.4),rgba(22,163,233,0.9));
			background: -moz-linear-gradient(to right,rgba(249,38,89,0.4),rgba(22,163,233,0.9));
			background: -ms-linear-gradient(to right,rgba(249,38,89,0.4),rgba(22,163,233,0.9));
			background: -o-linear-gradient(to right,rgba(249,38,89,0.4),rgba(22,163,233,0.9));
			animation:bgpX 2s linear infinite;
			-webkit-animation:bgpX 2s linear infinite;
			-moz-animation:bgpX 2s linear infinite;
			-ms-animation:bgpX 2s linear infinite;
			-o-animation:bgpX 2s linear infinite;
			@keyframes bgpX{
				from{
					background-position: 0 0;
				}
				to{
					background-position: 550px 0;
				}
			}
			@-webkit-keyframes bgpX{
				from{
					background-position: 0 0;
				}
				to{
					background-position: 550px 0;
				}
			}
			@-moz-keyframes bgpX{
				from{
					background-position: 0 0;
				}
				to{
					background-position: 550px 0;
				}
			}
			@-ms-keyframes bgpX{
				from{
					background-position: 0 0;
				}
				to{
					background-position: 550px 0;
				}
			}
			@-o-keyframes bgpX{
				from{
					background-position: 0 0;
				}
				to{
					background-position: 550px 0;
				}
			}
		}
	}
</style>

<template>
	<div class="wrap">
		<div class="logo">
			<div class="img_wrap">
				<div class="box" v-for=" i in 1" :style="{transform:'rotateY(' + i + 'deg)'}">
					<img src="../../assets/logo.png" alt="logo">
					<img src="../../assets/logo.png" alt="logo">
				</div>
			</div>
			<p>VUE &amp; mockjs</p>
		</div>
		<div @click="toGoin" class="btn">进去就出不来了哦</div>
	</div>
</template>

<script>
	export default{
		methods:{
			toGoin(){
				this.$emit("appSwitch",false);
			}
		},
		computed:{

		}
	}
</script>