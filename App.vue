<script>
	export default {
		globalData: {
			text: 'text',
			userInfo:null,
			location:null,
			system:null
		},
		async onLaunch() {
			//当uni-app 初始化完成时触发（全局只触发一次）
			this.$uni(uni.getLocation)({type:'wgs84'}).then(res=>{
				this.globalData.location=res;
			})
			this.$uni(uni.login)({provider: 'weixin'}).then(async ({code})=>{
				console.log(this.globalData.text)
				
				let {data,msg,status} = await this.http(this.api['getuser'],{kw:12609})
				if(status==='error') return this.$uni(uni.showModal)({title:'提示',content:msg||'服务器错误'})
				this.globalData.userInfo=data;
				this.getUserInfoCallBack&&this.getUserInfoCallBack(data)
			})
			this.$uni(uni.getSystemInfo)().then(res=>{
				console.log(res)
				this.globalData.system=res;
			})
			
		},
		onShow: function() {
			//当 uni-app 启动，或从后台进入前台显示
			console.log('App Show')
		},
		onHide: function() {
			//当 uni-app 从前台进入后台
			console.log('App Hide')
		},
		onError: function(e) {
			console.log(e)
		},
		onUniNViewMessage: function(e) {
			console.log(e)
		},
		getUserInfoCallBack:()=>{}
	}
</script>

<style lang="less">
	/*每个页面公共css */
	.nodata-box {
	  width: 100%;
	  margin-top: 60rpx;
	  text-align: center;
	  font-size: 30rpx;
	  color: #999;
	}
	
	.nodata-box .img {
	  width: 180px;
	  height: 180px;
	  margin-left: -17rpx;
	}
	
	.nodata-box .text {
	  margin-top: 20rpx;
	}
	
	.flex_r {
	  display: flex;
	  flex-direction: row;
	  justify-content: flex-start;
	  align-items: center;
	}
	
	.flex_r_start {
	  display: flex;
	  flex-direction: row;
	  justify-content: flex-start;
	  align-items: flex-start;
	}
	
	.flex_r_center {
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  justify-content: center;
	}
	
	.flex_r_between {
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  justify-content: space-between;
	}
	
	.flex_r_between_start {
	  display: flex;
	  flex-direction: row;
	  align-items: flex-start;
	  justify-content: space-between;
	}
	
	.flex_r_around {
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  justify-content: space-around;
	}
	
	.flex_r_end {
	  display: flex;
	  flex-direction: row;
	  align-items: flex-end;
	  justify-content: space-around;
	}
	
	.flex_c {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: flex-start;
	}
	
	.flex_c_start {
	  display: flex;
	  flex-direction: column;
	  align-items: flex-start;
	  justify-content: center;
	}
	
	.flex_c_center {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	}
	
	.flex_c_between {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: space-between;
	}
	
	.flex_c_end {
	  display: flex;
	  flex-direction: column;
	  align-items: flex-end;
	  justify-content: space-between;
	}
	
	.flex_c_jend {
	  display: flex;
	  flex-direction: column;
	  align-items: flex-start;
	  justify-content: flex-end;
	}
	
	.f_s {
	  flex-shrink: 0;
	}
	
	.f {
	  flex: 1;
	}
	
	.fw800 {
	  font-weight: 800;
	}
	
	.fw400 {
	  font-weight: 400;
	}
	
	.fgray {
	  color: rgba(144, 151, 163, 1);
	}
	
	.fbule {
	  color: rgba(47, 116, 251, 1);
	}
	
	.forange {
	  color: rgba(255, 96, 27, 1);
	}
	
	.f12 {
	  font-size: 24rpx;
	}
	
	.f14 {
	  font-size: 28rpx;
	}
	
	.f16 {
	  font-size: 32rpx;
	}
	
	.line1 {
	  line-height: 1;
	}
	
	.line40 {
	  line-height: 40rpx;
	}
	
	.fdefault {
	  color: rgba(18, 33, 62, 1);
	}
	
	.fellipsis {
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.flimit2 {
	  word-wrap: break-word;
	  word-break: break-all;
	  display: -webkit-box;
	  -webkit-line-clamp: 2;
	  -webkit-box-orient: vertical;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.flimit3 {
	  word-wrap: break-word;
	  word-break: break-all;
	  display: -webkit-box;
	  -webkit-line-clamp: 3;
	  -webkit-box-orient: vertical;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.flimit4 {
	  word-wrap: break-word;
	  word-break: break-all;
	  display: -webkit-box;
	  -webkit-line-clamp: 4;
	  -webkit-box-orient: vertical;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.g_item {
	  padding: 30rpx 40rpx;
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	  align-items: center;
	  background: white;
	}
	
	.g_item label {
	  height: 32rpx;
	  font-size: 32rpx;
	  font-weight: 800;
	  color: rgba(18, 33, 62, 1);
	  line-height: 32rpx;
	  flex-shrink: 0;
	  background: white;
	}
	
	.g_item    input {
	  margin-left: 40rpx;
	  padding: 10rpx 0;
	  color: rgba(18, 33, 62, 1);
	  height: 32rpx;
	  flex: 1;
	  font-size: 32rpx;
	  font-weight: 400;
	  line-height: 32rpx;
	  background: white;
	}
	
	.g_item    input::placeholder {
	  color: rgba(204, 204, 204, 1);
	  font-size: 32rpx;
	}
	
	.more {
	  box-sizing: border-box;
	}
	
	.more::after {
	  content: '';
	  display: inline-block;
	  width: 20rpx;
	  height: 22rpx;
	  color: #9097a3;
	  background: url("https://sysweet-demo.oss-cn-beijing.aliyuncs.com/zongdai/images/rarrow2.png") right center/12rpx 22rpx no-repeat;
	}
	
	.b_b {
	  border-bottom: 1rpx solid #eee;
	}
	
	.flex0 {
	  flex-shrink: 0;
	}
	
	.flex1 {
	  flex: 1;
	}
	
	.ellipsis {
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  padding-right: 30rpx;
	}
	
	.line_20 {
	  width: 100vw;
	  height: 20rpx;
	  background: rgba(243, 243, 246, 1);
	}
	
	.h_title {
	  font-size: 32rpx;
	  font-weight: 800;
	  color: rgba(18, 33, 62, 1);
	  height: 32rpx;
	  line-height: 32rpx;
	}
	
	.fw800 {
	  font-weight: 800;
	}
	
	.fwhite {
	  color: white;
	}
	
	.fblack {
	  color: #12213e;
	}
	
	.fgray {
	  color: rgba(149, 148, 158, 1);
	}
	
	.fblue {
	  color: rgba(55, 120, 255, 1);
	}
	
	.forange {
	  color: #ff601bff;
	}
	
	.f24 {
	  font-size: 24rpx;
	  height: 24rpx;
	  line-height: 24rpx;
	}
	
	.f26 {
	  font-size: 26rpx;
	  height: 26rpx;
	  line-height: 26rpx;
	}
	
	.f28 {
	  font-size: 28rpx;
	  height: 28rpx;
	  line-height: 28rpx;
	}
	
	.f20 {
	  font-size: 20rpx;
	  height: 20rpx;
	  line-height: 20rpx;
	}
	
	.f30 {
	  font-size: 30rpx;
	  height: 30rpx;
	  line-height: 30rpx;
	}
	
	.f32 {
	  font-size: 32rpx;
	  height: 32rpx;
	  line-height: 32rpx;
	}
	
	.f34 {
	  font-size: 34rpx;
	  height: 34rpx;
	  line-height: 34rpx;
	}
	
	.f56 {
	  font-size: 56rpx;
	  height: 56rpx;
	  line-height: 56rpx;
	}
	
	.margin8 {
	  margin-top: 8rpx;
	}
	
	.margin10 {
	  margin-top: 10rpx;
	}
	
	.margin12 {
	  margin-top: 12rpx;
	}
	
	.margin14 {
	  margin-top: 14rpx;
	}
	
	.margin16 {
	  margin-top: 16rpx;
	}
	
	.margin18 {
	  margin-top: 18rpx;
	}
	
	.margin20 {
	  margin-top: 20rpx;
	}
	
	.margin22 {
	  margin-top: 22rpx;
	}
	
	.margin24 {
	  margin-top: 24rpx;
	}
	
	.margin26 {
	  margin-top: 26rpx;
	}
	
	.margin28 {
	  margin-top: 28rpx;
	}
	
	.margin30 {
	  margin-top: 30rpx;
	}
	
	.margin40 {
	  margin-top: 40rpx;
	}
	.margin68 {
	  margin-top: 68rpx;
	}
	.pl {
	  padding-left: 40rpx;
	}
	
	.pr {
	  padding-right: 40rpx;
	}
	
	.pt {
	  padding-top: 40rpx;
	}
	
	.pb {
	  padding-bottom: 40rpx;
	}
	
	.h_item {
	  padding: 0 40rpx;
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	  align-items: center;
	  background: white;
	}
	
	.h_item .label {
	  height: 32rpx;
	  font-size: 32rpx;
	  min-width: 128rpx;
	  font-weight: 800;
	  color: rgba(18, 33, 62, 1);
	  line-height: 32rpx;
	  flex-shrink: 0;
	  background: white;
	}
	
	.h_item input {
	  margin-left: 40rpx;
	  padding: 35rpx 0;
	  color: rgba(18, 33, 62, 1);
	  height: 32rpx;
	  flex: 1;
	  font-size: 32rpx;
	  line-height: 32rpx;
	  background: white;
	}
	
	.h_item .input {
	  margin-left: 40rpx;
	  color: rgba(18, 33, 62, 1);
	  flex: 1;
	  font-size: 32rpx;
	  font-weight: 400;
	  line-height: 32rpx;
	  display: flex;
	  align-items: center;
	}
	
	.more_b {
	  padding-right: 18rpx;
	  background: url("https://sysweet-demo.oss-cn-beijing.aliyuncs.com/zongdai/images/rarrow2.png") right center/12rpx 22rpx no-repeat;
	}
	
	.b_b {
	  border-bottom: 1rpx solid #eee;
	}
	
	.foot_btn {
	  position: fixed;
	  bottom: 0;
	  left: 0;
	  width: 750rpx;
	  height: 140rpx;
	  background: rgba(255, 255, 255, 1);
	  box-shadow: 0px -6px 16px 0px rgba(0, 0, 0, 0.06);
	  z-index: 99;
	}
	
	.foot_btn .btn {
	  width: 670rpx;
	  height: 90rpx;
	  margin: 25rpx auto;
	  background: linear-gradient(90deg, rgba(115, 161, 255, 1) 0%, rgba(40, 107, 245, 1) 100%);
	  border-radius: 8rpx;
	  color: white;
	  font-size: 32rpx;
	  text-align: center;
	  line-height: 90rpx;
	}
	.udefault{
	  border: none;
	  outline-style: none;
	  background: white;
	  padding: 0;
	  margin: 0;
	  border-radius: 0;
	}
	.udefault::after{
	  border: none;
	  border-radius: 0;
	}
	.tc{
	  text-align: center;
	}
	//搜索图标
	.search_ic {
	  position: relative;
	  display: inline-block;
	  width: 12px;
	  height: 12px;
	  text-align: center;
	  border: 1px solid #ccc;
	  border-radius: 50%;
	  transform: rotate(-45deg);
	  &::after {
	    content: "";
	    display: inline-block;
	    width: 1px;
	    height: 4px;
	    background-color: #ccc;
	  }
	}
	//三角图标
	.triangle_b::after {
	  content: "";
	  display: inline-block;
	  margin-left: 4PX;
	  vertical-align: middle;
	  border: 8px solid transparent;
	  border-top-color: rgba(18, 33, 62, 1);
	  border-bottom-width: 0;
	}
	.w100{
		width: 100vw;
	}
	.mh100{
		min-height: 100vh;
	}
	.over-hidden{
		overflow: hidden;
	}
</style>
