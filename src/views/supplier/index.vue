<template>
	<div class="mt-2">
		<i-queryForm ref="queryForm"  @search="handleQueryForm" :formItem="formItem" v-model.sync="queryFormParams">
			<template v-slot:query>
				<el-button type="primary" @click="handleQueryForm">查询</el-button>
				<el-button type="primary" @click="handleOpenDialog">新增</el-button>
				<el-button @click="handleReset">重置</el-button>
			</template>
		</i-queryForm>
		
		<i-table @page="handlePage" @size="handleSize" pager :total="total" :page="page" :size="size" :tableStyle="tableStyle" :data="supplierList" :column="column">
			<template v-slot:opteration="scope">
				<el-button type='primary'>编辑</el-button>
				<el-button type='danger'>删除</el-button>
			</template>
		</i-table>
		
		<i-dialog :dialogVisible.sync='dialogVisible' v-model.sync="dialogForm"></i-dialog>
	</div>
</template>

<script>
	import SupplierApi from "../../api/supplier"
	export default {
		name: 'supplier',
		components : {
			"i-table" : ()=> import("../../components/baseTable"),
			"i-queryForm" : () => import("../../components/queryForm"),
			"i-dialog" : () => import("../../components/Dialog")
		},
		data() {
			return {
				dialogVisible : true,
				page : 1,
				size : 10,
				dialogForm : {
					
				},
				queryFormParams : {
					name : '',
					linkman : '',
					mobile : ''
				},
				rules : {},
				formItem :  [
					{
						type : 'input',
						placeholder : '供应商名称',
						prop : 'linkman'
					},
					{
						type : 'input',
						placeholder : '联系人',
						prop : 'name'
					},
					{
						type : 'input',
						placeholder : '联系电话',
						prop : 'mobile'
					},
					{
						type : 'slot',
						slot_name : 'query'
					}
				],
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
			},
			handleQueryForm(){
				this.page = 1
				this.getSupperList()
			},
			handleReset(){
				this.$refs["queryForm"].handleResetForm()
			},
			handleOpenDialog(){
				this.dialogVisible = true
			}
		}
	}
</script>

<style scoped>

</style>
