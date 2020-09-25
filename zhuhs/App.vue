<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}

	}
</script>

<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";

	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0px 40upx 0px;
		justify-content: space-between;
	}

	.nav-li {
		padding: 30upx;
		border-radius: 12upx;
		width: 45%;
		margin: 0 2.5% 40upx;
		background-image: url(https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png);
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}

	.nav-li::after {
		content: "";
		position: absolute;
		z-index: -1;
		background-color: inherit;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: -10%;
		border-radius: 10upx;
		opacity: 0.2;
		transform: scale(0.9, 0.9);
	}

	.nav-li.cur {
		color: #fff;
		background: rgb(94, 185, 94);
		box-shadow: 4upx 4upx 6upx rgba(94, 185, 94, 0.4);
	}

	.nav-title {
		font-size: 32upx;
		font-weight: 300;
	}

	.nav-title::first-letter {
		font-size: 40upx;
		margin-right: 4upx;
	}

	.nav-name {
		font-size: 28upx;
		text-transform: Capitalize;
		margin-top: 20upx;
		position: relative;
	}

	.nav-name::before {
		content: "";
		position: absolute;
		display: block;
		width: 40upx;
		height: 6upx;
		background: #fff;
		bottom: 0;
		right: 0;
		opacity: 0.5;
	}

	.nav-name::after {
		content: "";
		position: absolute;
		display: block;
		width: 100upx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40upx;
		opacity: 0.3;
	}

	.nav-name::first-letter {
		font-weight: bold;
		font-size: 36upx;
		margin-right: 1px;
	}

	.nav-li text {
		position: absolute;
		right: 30upx;
		top: 30upx;
		font-size: 52upx;
		width: 60upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
	}

	.text-light {
		font-weight: 300;
	}

	@keyframes show {
		0% {
			transform: translateY(-50px);
		}

		60% {
			transform: translateY(40upx);
		}

		100% {
			transform: translateY(0px);
		}
	}

	@-webkit-keyframes show {
		0% {
			transform: translateY(-50px);
		}

		60% {
			transform: translateY(40upx);
		}

		100% {
			transform: translateY(0px);
		}
	}
	page{
	  color: #2b2b2b;
	  background: #f9f9f9;
	}
	.text-default{
	  color: #2b2b2b;
	}
	.text-magi,
	.line-magi,
	.lines-magi {
		color: #0060e4;
	}
	.bg-white{
	  color: #2b2b2b;
	}
	.bg-magi {
	  background-color: #0060e4;
	  color: #ffffff;
	}
	.cu-btn.button-hover {
	  transform: translate(0, 0);
	}
	.cu-btn{
	  border-radius: 4rpx;
	  height: 90rpx;
	}
	.cu-btn::after, .action .cu-btn::after{
	  border-radius: 4rpx!important;
	}
	.cu-btn[class*="line"]::after{
	  border-width: 2rpx;
	}
	button{
	  font-weight: normal;
	}
	button:not([size='mini']){
	  /* width: auto!important; */
	  min-height: auto!important;
	}
	switch.magi[checked] .wx-switch-input, checkbox.magi[checked] .wx-checkbox-input,
	radio.magi[checked] .wx-radio-input {
	  border-color: #0060e4 !important;
	}
	switch.magi[checked] .wx-switch-input.wx-switch-input-checked,
	checkbox.magi[checked] .wx-checkbox-input, radio.magi[checked] .wx-radio-input {
	  background-color: #0060e4 !important;
	  color: #fff !important;
	}
	
	checkbox::before{
	  transition: all 0.1s ease-in-out 0s;
	}
	checkbox[checked] .wx-checkbox-input,checkbox.magi[checked] .wx-checkbox-input{
	  border-color: #0060e4 !important;
	  background-color: #fff !important;
	  color: #0060e4 !important;
	}
	checkbox[checked]::before{
	  content: "\E645"!important;
	  color: #0060e4!important;
	}
	radio.magi[checked] .wx-radio-input {
	  background-color: #0060e4 !important;
	  color: #fff !important;
	}
	checkbox[disabled]::before{
	  display: none;
	}
	checkbox .wx-checkbox-input{
	  width: 46rpx;
	  height: 46rpx;
	}
	
	.cu-dialog{
	  /* width: 500rpx; */
	  border-radius: 4rpx;
	  background: #fff;
	}
	.cu-dialog .cu-bar .action{
	  width: 100%;
	  padding: 0 40rpx;
	  margin: 0;
	}
	.cu-dialog .cu-bar .action .cu-btn{
	  flex: 1;
	  border-radius: 4rpx;
	  height: 70rpx;
	  margin-bottom: 40rpx;
	}
</style>
