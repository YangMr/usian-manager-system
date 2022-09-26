<template>
	<div class="mt-2">
		<base-table @size="handleSize" @page='handlePage' pager :total="total" :page="page" :size="size" :tableData="supplierList" :columns="columns"></base-table>
	</div>
</template>

<script>
	import BaseTable from "../../components/baseTable"
	import SupplierApi from "../../api/supplier"
	export default {
		name: "supplier",
		data() {
			return {
				columns : [
					{
						type : 'index',
						label : '序号',
						width : '180'
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
						type : 'action',
						actions : [
							{
								type : 'primary',
								text : '编辑'
							},
							{
								type : 'danger',
								text : '删除'
							}
						]
					}
				],
				page: 1,
				size: 10,
				queryFormParams: {
					name: "", // 供应商名称
					linkman: "", // 联系人名称
					mobile: "" // 手机号
				},
				total : 0,
				supplierList : []
			}
		},
		created() {
			this.getSupplierList()
		},
		components:{
			BaseTable
		},
		methods: {
			async getSupplierList() {
				try {
					const {total, rows} = await SupplierApi.getSupplierList(this.page, this.size, this.queryFormParams)
					console.log("Response=>", rows)
					this.total = total
					this.supplierList = rows
				} catch (e) {
					//TODO handle the exception
					console.log(e.message)
				}
			},
			handleSize(size){
				this.size = size
				this.getSupplierList()
			},
			handlePage(page){
				this.page = page
				this.getSupplierList()
			}
		}
	};
</script>

<style scoped>

</style>
