<template>
	<div class="mt-2">
		<i-queryForm ref="queryForm" @search="handleQueryForm" :formItem="formItem" v-model.sync="queryFormParams">
			<template v-slot:query>
				<el-button type="primary" @click="handleQueryForm">查询</el-button>
				<el-button type="primary" @click="handleOpenDialog">新增</el-button>
				<el-button @click="handleReset">重置</el-button>
			</template>
		</i-queryForm>

		<i-table @page="handlePage" @size="handleSize" pager :total="total" :page="page" :size="size"
			:tableStyle="tableStyle" :data="supplierList" :column="column">
			<template v-slot:opteration="scope">
				<el-button type='primary' size="mini" @click="handleOpenDialog(scope.row.id)">编辑</el-button>
				<el-button type='danger' size="mini" @click="handleDelete(scope.row.id)">删除</el-button>
			</template>
		</i-table>

		<i-dialog :dialogRules="dialogRules" :dialogConfig="dialogConfig" labelWidth="120px"
			:dialogFormItem="dialogFormItem" :dialogVisible.sync='dialogVisible' v-model.sync="dialogForm"
			@submit="handleSubmit">
		</i-dialog>
	</div>
</template>

<script>
	import SupplierApi from "../../api/supplier"
	export default {
		name: 'supplier',
		components: {
			"i-table": () => import("../../components/baseTable"),
			"i-queryForm": () => import("../../components/queryForm"),
			"i-dialog": () => import("../../components/Dialog")
		},
		data() {
			return {
				dialogVisible: false,
				page: 1,
				size: 10,
				dialogForm: {
					name: '',
					linkman: '',
					remark: '',
					mobile: ''
				},
				dialogConfig: {
					title: '供应商新增',
					width: '500px',
					formWidth: '400'
				},
				dialogRules: {
					name: [{
						required: true,
						message: '供应商不能为空',
						trigger: 'blur'
					}],
					linkman: [{
						required: true,
						message: '联系人不能为空',
						trigger: 'blur'
					}]
				},
				dialogFormItem: [{
						label: '供应商名称',
						type: 'input',
						prop: 'name',
					},
					{
						label: '联系人',
						type: 'input',
						prop: 'linkman'
					},
					{
						label: '联系电话',
						type: 'input',
						prop: 'mobile'
					},
					{
						label: '备注',
						type: 'input',
						prop: 'remark'
					}
				],
				queryFormParams: {
					name: '',
					linkman: '',
					mobile: ''
				},
				rules: {},
				formItem: [{
						type: 'input',
						placeholder: '供应商名称',
						prop: 'name'
					},
					{
						type: 'input',
						placeholder: '联系人',
						prop: 'linkman'
					},
					{
						type: 'input',
						placeholder: '联系电话',
						prop: 'mobile'
					},
					{
						type: 'slot',
						slot_name: 'query'
					}
				],
				total: 0,
				supplierList: [],
				tableStyle: {
					height: 380
				},
				column: [{
						type: 'index',
						label: '序号',
						sequence: true,
						width: '60'
					},
					{
						label: '供应商名称',
						prop: 'name'
					},
					{
						label: '联系人',
						prop: 'linkman'
					},
					{
						label: '联系电话',
						prop: 'mobile'
					},
					{
						label: '备注',
						prop: 'remark'
					},
					{
						label: '操作',
						slot_name: 'opteration',
						type: 'slot'
					}
				]
			}
		},
		created() {
			this.getSupperList()
		},
		methods: {
			async getSupperList() {
				try {
					const {
						rows,
						count
					} = await SupplierApi.getSupplierList(this.page, this.size, this.queryFormParams)
					this.total = count
					this.supplierList = rows
				} catch (e) {
					//TODO handle the exception
					console.log(e.message)
				}
			},
			handlePage(page) {
				this.page = page
				this.getSupperList()
			},
			handleSize(size) {
				this.size = size
				this.getSupperList()
			},
			handleQueryForm() {
				this.page = 1
				this.getSupperList()
			},
			handleReset() {
				this.$refs["queryForm"].handleResetForm()
			},
			handleOpenDialog(id) {
				this.dialogVisible = true

				if (typeof id === 'number') {
					this.handleFind(id)
					this.dialogConfig.title = '供应商编辑'
					return
				}

				this.dialogConfig.title = '供应商新增'
			},
			handleSubmit() {
				if (this.dialogForm.id) {
					this.handleEdit()
				} else {
					this.handleAdd()
				}
			},
			async handleAdd() {
				try {
					const resposne = await SupplierApi.addSupplier(this.dialogForm)
					this.dialogVisible = false
					this.$message.success('新增成功')
					this.getSupperList()
				} catch (e) {
					console.log(e.message)
				}

			},
			async handleEdit() {
				try {
					const response = await SupplierApi.editSupplier(this.dialogForm.id, this.dialogForm)
					this.dialogVisible = false
					this.$message.success('编辑成功')
					this.getSupperList()
				} catch (e) {
					console.log(e.message)
				}
			},
			async handleFind(id) {
				try {
					const supplier = await SupplierApi.findSupplier(id)
					this.dialogForm = supplier
				} catch (e) {
					console.log(e.message)
				}
			},
		    handleDelete(id) {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(async () => {
					try {
						this.page = 1
						this.handleReset()
						const response = await SupplierApi.deleteSupplier(id)
						this.$message.success('删除成功')
						this.getSupperList()
					} catch (e) {
						console.log(e.message)
					}
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});

			}
		}
	}
</script>

<style scoped>

</style>
