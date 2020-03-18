<template>
	<view class="flex_r search">
		<view class="search_ic sicon"></view>
		<input class="f28 flex1" @confirm="onSearch" confirm-type="search" type="text" :value="kw" :placeholder="placeholder"/>
		<view v-if="tag" class="tag">{{tag}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				kw:''
			};
		},
		props:{
			placeholder:{
				type:String,
				default:'请输入搜索内容'
			},
			search:{
				type:Function,
				require:true
			},
			tag:{
				type:String,
				required:false
			}
			
		},
		methods:{
			onSearch(){
				this.search(kw)
			}
		}
	}
</script>

<style lang="less" scoped>
	.search{
		width:100%;
		height:64rpx;
		background:rgba(243,243,246,1);
		border-radius:32rpx;
		.sicon{
			margin-left: 34rpx;
		}
		input{
			margin-left: 16rpx;
		}
		.tag{
			padding: 6rpx 12rpx;
		}
	}
</style>
