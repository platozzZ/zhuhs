<template>
	<form @submit="formSubmit">
		<view class="bg-zhu flex flex-direction align-center padding-tb-xl">
			<view class="text-left title padding-lr" v-if="userInfo">
				{{'住划算 - ' +  userInfo.username}}
			</view>
			<view class="cu-card response">
				<view class="cu-item">
				  <view class="cu-list menu">
					<view class="cu-item">
					  <view class="action text-df">联系方式：</view>
					  <view class="content">
						<input placeholder="请输入入住人手机号" type="number" maxlength="11" name="contact_mobile" :value="art.contact_mobile"></input>
					  </view>
					</view>
					<view class="cu-item">
					  <view class="action text-df">入住城市：</view>
					  <view class="content text-right" @tap="showPicker">
						<input class="input" name="city_name" :value="art.city_name" hidden></input>
						{{art.city_name?art.city_name:'请选择入住城市'}}
					  </view>
					  
					</view>
					<view class="cu-item">
					  <view class="action text-df">入住日期：</view>
					  <view class="content">
						<view class="flex flex-direction justify-center align-end calendar" @tap="toCalendar" :data-start="art.start_date" :data-end="art.end_date">
						  <view class="padding-top-sm padding-bottom-xs">{{art.start_date?art.start_date:'请选择入住日期'}}</view>
						  <view class="padding-top-xs padding-bottom-sm">{{art.end_date?art.end_date:'请选择离店日期'}}</view>
						</view>
						<input hidden name="start_date" :value="art.start_date"></input>
						<input hidden name="end_date" :value="art.end_date"></input>
					  </view>
					</view>
					<view class="cu-item">
					  <view class="action text-df">入住人数：</view>
					  <view class="content">
						<input placeholder="请输入入住人数" type="number" name="person_capacity" :value="art.person_capacity"></input>
					  </view>
					</view>
					<view class="padding">
					  <view class="action text-df">备注：</view>
					  <view class="">
						<textarea placeholder="" name="description" class="textarea margin-top-xs padding-sm" maxlength="1000" :value="art.description" placeholder="请填写特殊需求" />
					  </view>
					</view>
					<view class="cu-item index-btn">
					  <!-- <button class="cu-btn bg-magi margin-tb-xl" open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber" form-type="submit" wx:if="{{!isLogin}}">开始找房</button> -->
					  <button class="cu-btn bg-magi margin-tb-xl" form-type="submit">开始找房</button>
					</view>
				  </view>
				</view>
			</view>
		</view>
		<input type="text" name="koc_id" :value="art.koc_id" hidden />
		<w-picker 
		    mode="region"
		    :defaultVal="['北京市','北京市']"
			:hideArea="true"
		    @confirm="onConfirm" 
			@cancel="onCancel"
		    ref="region" 
		    themeColor="#0060e4">
		</w-picker>
		    <!-- :areaCode="['33','3301','330108']" -->
		    <!-- :hideArea="true" -->
	</form>
</template>

<script>
	import WxValidate from '@/utils/WxValidate.js'
	import wPicker from "@/components/w-picker/w-picker.vue";
	import { getData, formSubmit } from '@/utils/api.js'
	export default {
		components:{
			wPicker
		},
		data() {
			return {
				art: {
					koc_id: "",
					city_name: "",
					start_date: "",
					end_date: "",
					max_price: "",
					person_capacity: "1",
					description: "",
				},
				userInfo: ''
			}
		},
		onLoad(options){
			let thisUrl = window.location.href
			// var testurl = 'https://test01zhuna.magi.link/zhuna/h5/demand.html?koc_id=123693826249393210'
			// console.log(this.getQueryString(url))
			console.log(thisUrl)
			console.log(location.href)
			this.getQueryString(thisUrl)
			this.initValidate()
			
		},
		methods: {
			getQueryString(url){
			    var obj = {};
			    var args = url.split('?');
			    if(args[0] == url) return obj;
			    var arr = args[1].split('&');
			    for(var i = 0;i< arr.length;i++){
			        var arg = arr[i].split('=');
			        obj[arg[0]] = arg[1];
			    }
				console.log(obj)
				this.art.koc_id = obj.koc_id
				this.getData(obj.koc_id)
			    // return obj;
			},
			formSubmit(e){
				let value = e.detail.value
				console.log(e)
				console.log(value)
				if (!this.WxValidate.checkForm(value)) {
					const error = this.WxValidate.errorList[0]
					console.log(error)
					this.showToast(error.msg)
					return false
				} else {
					console.log(value)
					this.addForm(value)
				}
			},
			addForm(e){
				formSubmit(e).then(res => {
					console.log(res)
					console.log(res.data)
					if(res.data.rlt_code == 'S_0000'){
						uni.showToast({
							title: '提交成功',
							icon: 'success'
						})
					} else {
						this.showToast(res.data.rlt_msg) 
					}
					// this.showToast('提交成功')
					// success
				}).catch(err => {
					console.log(err.rlt_msg)
					this.showToast(err.rlt_msg)
					// error
					// err 有可能是 Error 对象，也有可能是 您自己定义的内容，处理的时候您需要自己判断
					// 一个通用的错误提示组件就可以完成
				})
			},
			toCalendar(e){
				console.log(e)
				uni.navigateTo({
					url: 'calendar/calendar?start=' + this.art.start_date + '&end=' + this.art.end_date
				})
			},
			showPicker(e){
				console.log(e)
				console.log(this.$refs)
				this.$refs.region.show()
			},
			onConfirm(e){
				console.log(e)
				this.art.city_name = e.checkArr[1]
			},
			getData(e){
				getData({koc_id: e}).then(res => {
					console.log(res)
					// success
					this.userInfo = res.data.data
				}).catch(err => {
					// error
					// err 有可能是 Error 对象，也有可能是 您自己定义的内容，处理的时候您需要自己判断
					// 一个通用的错误提示组件就可以完成
				})
			},
			
			showToast(e) {
				uni.showToast({
					title: e,
					icon: 'none',
					mask: true,
					duration: 2000
				})
			}, 
			initValidate(e) {
			    // 验证字段的规则
			    const rules = {
					contact_mobile: {
						required: true,
						tel: true,
					},
					city_name: {
						required: true,
					},
					start_date: {
						required: true,
					},
					end_date: {
						required: true,
					},
					koc_id: {
						required: true,
					}
			    }
			    const messages = {
					contact_mobile: {
						required: '手机号不能为空',
						tel: '请输入正确的手机号',
					},
					city_name: {
						required: '请选择入住城市',
					},
					start_date: {
						required: '请选择入住日期',
					},
					end_date: {
						required: '请选择离店日期',
					},
					koc_id: {
						required: '请重新输入网址刷新重试',
					}
			    }
			    // 创建实例对象
			    this.WxValidate = new WxValidate(rules, messages)
			},
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
	}
	.bg-zhu{
	  background: linear-gradient( rgb(60, 74, 233) 0%,rgb(68,82,240) 50%, rgb( 60,136,241));
	  width: 100%;
	  height: 100%;
	}
	.content input {
	  font-size: 28rpx;
	  text-align: right;
	}
	.content .input {
	  width: 100%;
	  height: 100%;
	}
	.price input{
	  text-align: center;
	  width: 140rpx;
	}
	.cu-list.menu>.cu-item::after {
	  width: calc(200% - 60rpx);
	  left: 30rpx;

	}
	.textarea{
	  width: 100%;
	  height: 160rpx;
	  background: #cecece;
	}

	.index-btn .cu-btn{
	  width: 100%;
	  height: 90rpx;
	}
	.index-price{
	  white-space: nowrap;
	}
	
	.cu-list.menu>.cu-item .content>view.calendar{
	  align-items: end!important;
	}
	.cu-list.menu>.cu-item .content>view.calendar view{
	  width: 100%;
	  text-align: right;
	}
	.title{
		width: 100%;
		color: #fff;
	}
</style>
