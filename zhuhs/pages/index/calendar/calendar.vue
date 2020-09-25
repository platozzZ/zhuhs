<template>
	<view>
		<good-date-picker ref="goodDatePicker" @change="changeDate" :option="option"></good-date-picker>
	</view>
</template>

<script>
	import GoodDatePicker from '@/components/good-date-picker/good-date-picker.vue'
	export default {
		components: {
		    GoodDatePicker
		},
		data() {
			return {
				data: '',
				//页面模式-区间模式配置：
				option: {
					currentRangeStartDate: '2019-11-11', //根据实际业务需求设置的区间选择默认显示初始时间，可为空,默认今天
					currentRangeEndDate: '2019-11-12', //根据实际业务需求设置的默认区间选择显示结束时间，可为空，默认明天
					initStartDate: '', //可选起始时间，可为空,默认今天
					initEndDate: '', //可选结束时间，可为空,默认4个月后
					isRange: true, //是否开启范围选择，默认false
					isModal:false,//是否弹窗模式，默认false
					isShowSubmit:true,//页面模式中是否显示页面模式底部的确定按钮，默认false
				}
			}
		},
		onLoad(e){
			console.log(e)
			if(e.start){
				// this.data = e.data;
				this.option.currentRangeStartDate = e.start
				this.option.currentRangeEndDate = e.end
			}
		},
		methods: {
			changeDate(e) { //单选择完日期回调，
				console.log(e);
				uni.setStorageSync('dateObj', e); //在前一个页面onShow接受
				var pages = getCurrentPages();
				var currPage = pages[pages.length - 1]; //当前页面
				var prevPage = pages[pages.length - 2]; //上一个页面
				//可以打印prevPage看看
				console.log(prevPage)
				//h5的写法
				prevPage.art.start_date = e.startDate
				prevPage.art.end_date = e.endDate
				// prevPage.nick_name='aaaaa'
				//小程序的写法 具体要怎么写可以打印一下prevPage看一下
				// prevPage.$vm.nick_name='aaaaa'
				uni.navigateBack();
			},
		}
	}
</script>

<style>

</style>
