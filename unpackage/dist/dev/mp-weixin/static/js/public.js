class Global {
  constructor(){
	
  }
  getUser(){
    const app = getApp();
    return new Promise(resolve=>{
      if (app.globalData.userInfo) {
        return resolve(app.globalData.userInfo)
      } else {
        app.getUserInfoCallBack =(res)=>{
          return resolve(res);
        };
      }
    })
  }
}
export default Global;