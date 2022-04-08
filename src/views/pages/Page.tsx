import {defineComponent, reactive} from "vue";
import s from './page.module.scss';

type columnData = {
    date: string,
    name: string,
    age: number,
    address: string,
    status: string,
}

export default defineComponent({
  setup() {
      const statusList = reactive([
          {code:'0', name:'报名失败', type:'warning'},
          {code:'1', name:'已报名', type:''},
          {code:'2', name:'未报名', type:'info'},
          {code:'3', name:'报名通过', type:'success'},
      ])
      const tableData:columnData[] = reactive([
          {date:'2019-01-01', name:'张三', age:18, address:'北京', status:'1'},
          {date:'2019-01-02', name:'李四', age:19, address:'上海', status:'2'},
          {date:'2019-01-03', name:'王五', age:20, address:'广州', status:'3'},
          {date:'2019-01-04', name:'赵六', age:21, address:'深圳', status:'0'},
      ])
      // const slots = {
      //     default: (props: { row:columnData }) => (<el-tag type={statusList.find(item => item.code === props.row.status)?.type}>{statusList.find(item => item.code === props.row.status)?.name}</el-tag>)
      // }
    return () => (
      <div class={s.wrapper}>
        <span class={s.title}>人员注册信息</span>
        <el-table style={{width: '100%'}} data={tableData}>
          <el-table-column type={'selection'} width={55}></el-table-column>
          <el-table-column prop={'name'} label={'姓名'} width={120}></el-table-column>
          <el-table-column prop={'age'} label={'年龄'} width={120}></el-table-column>
          <el-table-column prop={'status'} label={'状态'} width={120} v-slots={
              {default: (props: { row:columnData }) => (<el-tag type={statusList.find(item => item.code === props.row.status)?.type}>{statusList.find(item => item.code === props.row.status)?.name}</el-tag>)}
          }></el-table-column>
          <el-table-column prop={'date'} label={'日期'} width={120}></el-table-column>
          <el-table-column prop={'address'} label={'地址'} width={120}></el-table-column>
        </el-table>
      </div>
    );
  },
});