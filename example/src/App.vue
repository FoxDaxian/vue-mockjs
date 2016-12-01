<style scoped lang="scss">
	#app{
		.showOut-enter-active{
			animation:my_in 0.7s ease-in-out;
			-webkit-animation:my_in 0.7s ease-in-out;
			-moz-animation:my_in 0.7s ease-in-out;
			-o-animation:my_in 0.7s ease-in-out;
			-ms-animation:my_in 0.7s ease-in-out;
		}
		.showOut-leave-active{
			animation:my_out 0.6s ease-in-out;
			-webkit-animation:my_out 0.6s ease-in-out;
			-moz-animation:my_out 0.6s ease-in-out;
			-o-animation:my_out 0.6s ease-in-out;
			-ms-animation:my_out 0.6s ease-in-out;
		}
		@keyframes my_in{
			0%{
				transform:translate(375px) scale(0.6,0.6);
				-webkit-transform:translate(375px) scale(0.6,0.6);
				-moz-transform:translate(375px) scale(0.6,0.6);
				-ms-transform:translate(375px) scale(0.6,0.6);
				-o-transform:translate(375px) scale(0.6,0.6);
			}
			70%{
				transform:translate(0px) scale(0.7,0.7);
				-webkit-transform:translate(0px) scale(0.7,0.7);
				-moz-transform:translate(0px) scale(0.7,0.7);
				-ms-transform:translate(0px) scale(0.7,0.7);
				-o-transform:translate(0px) scale(0.7,0.7);
			}
			100%{
				transform:translate(0px) scale(1,1);
				-webkit-transform:translate(0px) scale(1,1);
				-moz-transform:translate(0px) scale(1,1);
				-ms-transform:translate(0px) scale(1,1);
				-o-transform:translate(0px) scale(1,1);
			}
		}
		@-webkit-keyframes my_in{
			0%{
				transform:translate(375px) scale(0.6,0.6);
				-webkit-transform:translate(375px) scale(0.6,0.6);
				-moz-transform:translate(375px) scale(0.6,0.6);
				-ms-transform:translate(375px) scale(0.6,0.6);
				-o-transform:translate(375px) scale(0.6,0.6);
			}
			70%{
				transform:translate(0px) scale(0.7,0.7);
				-webkit-transform:translate(0px) scale(0.7,0.7);
				-moz-transform:translate(0px) scale(0.7,0.7);
				-ms-transform:translate(0px) scale(0.7,0.7);
				-o-transform:translate(0px) scale(0.7,0.7);
			}
			100%{
				transform:translate(0px) scale(1,1);
				-webkit-transform:translate(0px) scale(1,1);
				-moz-transform:translate(0px) scale(1,1);
				-ms-transform:translate(0px) scale(1,1);
				-o-transform:translate(0px) scale(1,1);
			}
		}
		@-moz-keyframes my_in{
			0%{
				transform:translate(375px) scale(0.6,0.6);
				-webkit-transform:translate(375px) scale(0.6,0.6);
				-moz-transform:translate(375px) scale(0.6,0.6);
				-ms-transform:translate(375px) scale(0.6,0.6);
				-o-transform:translate(375px) scale(0.6,0.6);
			}
			70%{
				transform:translate(0px) scale(0.7,0.7);
				-webkit-transform:translate(0px) scale(0.7,0.7);
				-moz-transform:translate(0px) scale(0.7,0.7);
				-ms-transform:translate(0px) scale(0.7,0.7);
				-o-transform:translate(0px) scale(0.7,0.7);
			}
			100%{
				transform:translate(0px) scale(1,1);
				-webkit-transform:translate(0px) scale(1,1);
				-moz-transform:translate(0px) scale(1,1);
				-ms-transform:translate(0px) scale(1,1);
				-o-transform:translate(0px) scale(1,1);
			}
		}
		@-ms-keyframes my_in{
			0%{
				transform:translate(375px) scale(0.6,0.6);
				-webkit-transform:translate(375px) scale(0.6,0.6);
				-moz-transform:translate(375px) scale(0.6,0.6);
				-ms-transform:translate(375px) scale(0.6,0.6);
				-o-transform:translate(375px) scale(0.6,0.6);
			}
			70%{
				transform:translate(0px) scale(0.7,0.7);
				-webkit-transform:translate(0px) scale(0.7,0.7);
				-moz-transform:translate(0px) scale(0.7,0.7);
				-ms-transform:translate(0px) scale(0.7,0.7);
				-o-transform:translate(0px) scale(0.7,0.7);
			}
			100%{
				transform:translate(0px) scale(1,1);
				-webkit-transform:translate(0px) scale(1,1);
				-moz-transform:translate(0px) scale(1,1);
				-ms-transform:translate(0px) scale(1,1);
				-o-transform:translate(0px) scale(1,1);
			}
		}
		@-o-keyframes my_in{
			0%{
				transform:translate(375px) scale(0.6,0.6);
				-webkit-transform:translate(375px) scale(0.6,0.6);
				-moz-transform:translate(375px) scale(0.6,0.6);
				-ms-transform:translate(375px) scale(0.6,0.6);
				-o-transform:translate(375px) scale(0.6,0.6);
			}
			70%{
				transform:translate(0px) scale(0.7,0.7);
				-webkit-transform:translate(0px) scale(0.7,0.7);
				-moz-transform:translate(0px) scale(0.7,0.7);
				-ms-transform:translate(0px) scale(0.7,0.7);
				-o-transform:translate(0px) scale(0.7,0.7);
			}
			100%{
				transform:translate(0px) scale(1,1);
				-webkit-transform:translate(0px) scale(1,1);
				-moz-transform:translate(0px) scale(1,1);
				-ms-transform:translate(0px) scale(1,1);
				-o-transform:translate(0px) scale(1,1);
			}
		}
		@keyframes my_out{
			0%{
				transform:translate(0px);
				-webkit-transform:translate(0px);
				-moz-transform:translate(0px);
				-ms-transform:translate(0px);
				-o-transform:translate(0px);
			}
			100%{
				transform:translate(-375px);
				-webkit-transform:translate(-375px);
				-moz-transform:translate(-375px);
				-ms-transform:translate(-375px);
				-o-transform:translate(-375px);
			}
		}
		@-webkit-keyframes my_out{
			0%{
				transform:translate(0px);
				-webkit-transform:translate(0px);
				-moz-transform:translate(0px);
				-ms-transform:translate(0px);
				-o-transform:translate(0px);
			}
			100%{
				transform:translate(-375px);
				-webkit-transform:translate(-375px);
				-moz-transform:translate(-375px);
				-ms-transform:translate(-375px);
				-o-transform:translate(-375px);
			}
		}
		@-moz-keyframes my_out{
			0%{
				transform:translate(0px);
				-webkit-transform:translate(0px);
				-moz-transform:translate(0px);
				-ms-transform:translate(0px);
				-o-transform:translate(0px);
			}
			100%{
				transform:translate(-375px);
				-webkit-transform:translate(-375px);
				-moz-transform:translate(-375px);
				-ms-transform:translate(-375px);
				-o-transform:translate(-375px);
			}
		}
		@-ms-keyframes my_out{
			0%{
				transform:translate(0px);
				-webkit-transform:translate(0px);
				-moz-transform:translate(0px);
				-ms-transform:translate(0px);
				-o-transform:translate(0px);
			}
			100%{
				transform:translate(-375px);
				-webkit-transform:translate(-375px);
				-moz-transform:translate(-375px);
				-ms-transform:translate(-375px);
				-o-transform:translate(-375px);
			}
		}
		@-o-keyframes my_out{
			0%{
				transform:translate(0px);
				-webkit-transform:translate(0px);
				-moz-transform:translate(0px);
				-ms-transform:translate(0px);
				-o-transform:translate(0px);
			}
			100%{
				transform:translate(-375px);
				-webkit-transform:translate(-375px);
				-moz-transform:translate(-375px);
				-ms-transform:translate(-375px);
				-o-transform:translate(-375px);
			}
		}
	}
</style>

<template>
	<div id="app">
		<transition name="showOut" mode="out-in">
			<keep-alive>
				<component :is="switchCom" v-on:appSwitch="change_inTo"></component>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
	import subject from 'components/main/main_index'
	import oa from 'components/oAnimation/oa'
	export default {
		name: 'app',
		data:function() {
			return {
				forInTo:true,
			};
		},
		computed:{
			switchCom(){
				return this.forInTo ? oa : subject;
			}
		},
		methods:{
			change_inTo(data){
				this.forInTo = data;
			}
		},
		components: {
			oa,
			subject,
		},
		mounted(){

		}
	}
</script>
