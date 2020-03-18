<template>
	<view class="w100 mh100">
		<div :style="{height: statusBarHeight+'px'}" class='tab-status'></div>
		<div class='wrap flex_r'>
			<dSearch  class='flex1' :search='search'></dSearch>
		</div>
		<div class="list">
			
		</div>
	</view>
</template>

<script>
	import dSearch from '../../components/search.vue'
	export default {
		components:{dSearch},
		data(){
			return{
				statusBarHeight:getApp().globalData.system.statusBarHeight
			}
		},
		onLoad(){
			
		},
		methods:{
			search(kw){
				console.log(kw)
			}
		}
		
	}
</script>

<style scoped>
	.wrap{
		height: 44px;
	}
	.list{
		height: 3000rpx;
	}
</style>
