<template>
	<div class="mt-2">
		<i-table @page="handlePage" @size="handleSize" pager :total="total" :page="page" :size="size" :tableStyle="tableStyle" :data="supplierList" :column="column">
			<template v-slot:opteration="scope">
				<el-button type='primary'>编辑</el-button>
				<el-button type='danger'>删除</el-button>
			</template>
		</i-table>
	</div>
</template>

<script>
	import SupplierApi from "../../api/supplier"
	export default {
		name: 'supplier',
		components : {
			"i-table" : ()=> import("../../components/baseTable.vue")
		},
		data() {
			return {
				page : 1,
				size : 10,
				queryFormParams : {
					name : '',
					linkman : '',
					mobile : ''
				},
				total : 0,
				supplierList : [],
				tableStyle : {
					height : 380
				},
				column : [
					{
						type : 'index',
						label : '序号',
						sequence : true,
						width : '60'
					},
					{
						label : '供应商名称',
						prop : 'name'
					},
					{
						label : '联系人',
						prop : 'linkman'
					},
					{
						label : '联系电话',
						prop : 'mobile'
					},
					{
						label : '备注',
						prop : 'remark'
					},
					{
						label : '操作',
						slot_name : 'opteration',
						type : 'slot'
					}
				]
			}
		},
		created(){
			this.getSupperList()
		},
		methods : {
			async getSupperList(){
				try{
					const {rows, total} = await SupplierApi.getSupplierList(this.page, this.size, this.queryFormParams)
					this.total = total
					this.supplierList = rows
				}catch(e){
					//TODO handle the exception
					console.log(e.message)
				}
			},
			handlePage(page){
				this.page = page
				this.getSupperList()
			},
			handleSize(size){
				this.size = size
				this.getSupperList()
			}
		}
	}
</script>

<style scoped>

</style>
