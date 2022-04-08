import {defineComponent, reactive, ref} from "vue";
import s from './page.module.scss';
import {ElTable} from 'element-plus'
import {tableData} from "@/mock/tableData";

type columnData = {
    date: string,
    name: string,
    age: number,
    address: string,
    status: string,
}

export default defineComponent({
  setup(props, context) {
      const statusList = reactive([
          {code:'0', name:'报名失败', type:'warning'},
          {code:'1', name:'已报名', type:''},
          {code:'2', name:'未报名', type:'info'},
          {code:'3', name:'报名通过', type:'success'},
      ])
      const data:columnData[] = tableData
      const slots = {
          default: (props: { row:columnData }) => (<el-tag type={statusList.find(item => item.code === props.row.status)?.type}>{statusList.find(item => item.code === props.row.status)?.name}</el-tag>)
      }

      const tableRef = ref<InstanceType<typeof ElTable> | null>(null)
      const tableWrapper = ref<InstanceType<typeof HTMLElement> | null>(null)
      const columnWidth = ref(0)
      setTimeout(()=>{
          const wrapWidth = tableWrapper.value?.clientWidth || 0
          const sum = Object.keys(data[0])?.length
          columnWidth.value = (wrapWidth - 55) / sum
      })

      const currentPage = ref(1)
      const total = ref(0)
      const currentSize = ref(10)
      total.value = data.length
    return () => (
      <div class={s.wrapper} ref={tableWrapper}>
        <span class={s.title}>人员注册信息</span>
        <el-table data={data} border ref={tableRef} class={s.table}>
          <el-table-column type={'selection'} width={55} align={'center'}></el-table-column>
          <el-table-column prop={'name'} label={'姓名'} width={columnWidth.value} sortable align={'center'}></el-table-column>
          <el-table-column prop={'age'} label={'年龄'} width={columnWidth.value} sortable align={'center'}></el-table-column>
          <el-table-column prop={'status'} label={'状态'} sortable align={'center'} width={columnWidth.value} v-slots={slots.default}></el-table-column>
          <el-table-column prop={'date'} label={'日期'} width={columnWidth.value} sortable align={'center'}></el-table-column>
          <el-table-column prop={'address'} label={'地址'} width={columnWidth.value} sortable align={'center'}></el-table-column>
        </el-table>
          <el-pagination handleSizeChange={console.log('123',currentSize.value, currentPage.value)} handleCurrentChange={console.log('456',currentSize.value, currentPage.value)} pageSizes={[10,20,30,40]} pageSize={currentSize.value} total={total.value} layout={'sizes, prev, pager, next, jumper, ->, total, slot'}></el-pagination>
      </div>
    );
  },
});