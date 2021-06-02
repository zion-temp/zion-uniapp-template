<template>
	<view class="container">
		<uni-link :href="href" :text="href"></uni-link>
		<u-button type="primary">{{login}}</u-button>
		<u-button type="success">按钮</u-button>
		<view style="width: 100%; height:500upx"><l-echart ref="chart"></l-echart></view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'; 
	// import * as THREE from "three";
	import * as echarts from '@/uni_modules/lime-echart/components/lime-echart/echarts';
	import lEchart from '@/uni_modules/lime-echart/components/lime-echart/';
	export default {
		components: {lEchart},
		computed: {
			...mapState(['login']),  
		},
		data() {
			return {
				href: 'baidu',
				option: {
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [150, 230, 224, 218, 135, 147, 260],
						type: 'line'
					}]
				}
			}
		},
		mounted(){
			this.$refs.chart.init(config => {
				const { canvas } = config;
				const chart = echarts.init(canvas, null, config);
				chart.setOption(this.option);
				return chart;
			});
		},
		onLoad() {
			// console.log(THREE)
		},
		methods: {
		
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
