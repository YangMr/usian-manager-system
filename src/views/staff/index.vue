<template>
	<div class="mt-2">
		
		<i-base-table @page="handlePage" @size="handleSize" :tableStyle="tableStyle" :size="size" :page="page" :total="total" pager :column="column" :data="staffList">
			<template v-slot:operation="scope">
				<el-button size="mini" type="primary">编辑</el-button>
				<el-button size="mini" type="danger">删除</el-button>
			</template>
		</i-base-table>
		
	</div>
</template>

<script>
	import StaffApi from "../../api/staff.js"
	export default {
		name: "index",
		components: {
			"i-base-table": () => import("../../components/baseTable.vue"),
			"i-query-form": () => import("../../components/queryForm.vue"),
			"i-dialog": () => import("../../components/Dialog.vue")
		},
		data(){
			return {
				page : 1,
				size : 10,
				tableStyle : {
					height : "380"
				},
				queryFormParams : {
					username : '',
					name : ''
				},
				column : [
					{
						label : '序号',
						type : 'index',
						width : "60",
						sequence : true
					},
					{
						label : '账号',
						prop : 'username'
					},
					{
						label : '姓名',
						prop : 'name'
					},
					{
						label : '年龄',
						prop : 'age'
					},
					{
						label : '电话',
						prop : 'mobile'
					},
					{
						label : '薪酬',
						prop : 'salary'
					},
					{
						label : '入职时间',
						prop : 'entryDate'
					},
					{
						label : '操作',
						slot_name : 'operation',
						type : 'slot'
					}
				],
				total : 0,
				staffList : []
			}
		},
		created(){
			this.getStaffList()
		},
		methods : {
			async getStaffList(){
				try{
					const {count, rows} = await StaffApi.getStaffList(this.page,this.size, this.queryFormParams)
					this.total = count
					this.staffList = rows
				}catch(e){
					console.log(e.message)
				}
			},
			handlePage(page){
				this.page = page
				this.getStaffList()
			},
			handleSize(size){
				this.size =size
				this.getStaffList()
			}
		}
	};
</script>

<style scoped>

</style>
