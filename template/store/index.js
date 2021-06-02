import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {  
		login:uni.getStorageSync('login')?true:false,  
		token: uni.getStorageSync('token')||'', 
		username:uni.getStorageSync('username')||'',
		user_id:uni.getStorageSync('user_id')||'',
		suerInfo:{},
		factoryList:[],
	},  
	getters: {
	    getuserInfo(state) {
	      return state.suerInfo
	    },
		getUserName(state){
			return state.username;
		}
	},
	mutations:{
		['LOGIN'](state, provider){
			
			state.login = true;  
			uni.setStorageSync('login', true);
			
			state.token = provider.token;   
			uni.setStorageSync('token', provider.token);
			
			state.user_id = provider.user_id;
			uni.setStorageSync('user_id', provider.user_id);
			
			state.username = provider.username;
			uni.setStorageSync('username', provider.username);
			
		},
		['LOGOUT'](state){
			state.login = false;  
			uni.setStorageSync('login', false);
			
			state.token = '';  
			uni.setStorageSync('token', '');
			
			state.user_id = '';
			uni.setStorageSync('user_id', '');
			
			state.username = '';
			uni.setStorageSync('username', '');
			
			uni.showToast({
			    title: '您已退出登录，请重新登录',
			    duration: 3000,
				icon:"none"
			});
			
		},
		['SETUSERINFO'](state, data) {
		  state.suerInfo = data;
		},
		['FACTORYLIST'](state, data){
			state.factoryList = data;
		}
	},
	actions: {
	    setUserInfo({commit}, data) {
	      commit("SETUSERINFO", data);
	    },
		
		login({commit}, data){
			commit('LOGIN',data)
		},
		logout({commit}){
			commit('LOGOUT')
		},
		//设置厂房列表
		setfactoryList({commit}, data){
			commit('FACTORYLIST',data)
		}
	},
})
export default store;