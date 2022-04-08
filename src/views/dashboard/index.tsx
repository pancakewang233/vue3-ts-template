import { defineComponent,ref,onMounted } from "vue";
import * as echarts from "echarts";
import {tableData} from "@/mock/tableData";
export default defineComponent({
    setup() {
        const main = ref<HTMLElement | null>(null)
        onMounted(() => {
            init()
        })
        const init=()=>{
            // 基于准备好的dom，初始化echarts实例
            const myChart = echarts.init(main.value!);
            const xData = tableData.map(item => item.name)
            const yData = tableData.map(item => item.age)
            // 指定图表的配置项和数据
            const option = {
                title: {
                    text: '互联网医院人员信息'
                },
                tooltip: {},
                legend: {
                    data: ['年龄']
                },
                xAxis: {
                    data: xData
                },
                yAxis: {},
                series: [
                    {
                        name: '年龄',
                        type: 'line',
                        data: yData
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
        return {main}
    },
    render(){
        return (<div ref="main" style="width: 100%; height: 400px"></div>)
    }
});
