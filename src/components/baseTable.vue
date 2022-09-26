<template>
	<div class="h-100">
		<el-table :data="data" :height="tableStyle.height" border style="width: 100%">
			<template v-for="(item,index) in column">
				<el-table-column v-if="item.sequence" :type='item.type' :label="item.label" v-bind="item">
				</el-table-column>
				<el-table-column v-else-if="!item.type" :prop="item.prop" :label="item.label" v-bind="item">
				</el-table-column>
				<el-table-column v-else-if="item.type === 'function'" :label="item.label" v-bind="item">
					<template v-slot="scope">
						<span v-html="item.callback && item.callback(scope.row)"></span>
					</template>
				</el-table-column>
				<el-table-column v-else-if="item.type === 'slot'" :label="item.label" v-bind="item">
					<template v-slot="scope">
						<slot :name='item.slot_name' :row='scope.row'></slot>
					</template>
				</el-table-column>
			</template>
		</el-table>
		<el-pagination v-if="pager" @size-change="handleSizeChange" @current-change="handleCurrentChange"
			:current-page="page" :page-sizes="pageSizes" :page-size="size" :layout="layout" :total="total">
		</el-pagination>
	</div>

</template>

<script>
	export default {
		name: 'baseTable',
		props: {
			column: {
				type: Array,
				default: () => []
			},
			data: {
				type: Array,
				default: () => []
			},
			page: {
				type: [Number, String],
				default: 1
			},
			size: {
				type: [Number, String],
				default: 10
			},
			total: {
				type: [Number, String],
				default: 0
			},
			pageSizes: {
				type: Array,
				default: () => [10, 20, 30, 50]
			},
			layout: {
				type: String,
				default: 'total, sizes, prev, pager, next, jumper'
			},
			tableStyle: {
				type: Object,
				default: () => {}
			},
			pager: Boolean
		},
		methods: {
			handleCurrentChange(page){
				this.$emit("page",page)
			},
			handleSizeChange(size){
				this.$emit("size",size)
			}
		}
	}
</script>

<style>
</style>
