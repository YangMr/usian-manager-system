<template>
	<div>
		<el-table :data="tableData" height="250" border style="width: 100%">
			<template v-for="(item,index) in columns">
				<el-table-column v-if="item.type && item.type !== 'action'" v-bind="item" :type="item.type"  :label="item.label" >
				</el-table-column>
				<el-table-column v-else-if="!item.type" v-bind="item"  :prop="item.prop" :label="item.label" >
				</el-table-column>
				<el-table-column v-bind="item" v-else-if="item.type === 'action'" :label="item.label">
					<template v-slot="scope">
						<el-button :type="action.type" v-for="(action,index) in item.actions" :key="index">{{action.text}}</el-button>
					</template>
				</el-table-column>
			</template>
		</el-table>
		<el-pagination
			  v-if="pager"
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="page"
		      :page-sizes="pageSizes"
		      :page-size="size"
		      :layout="layout"
		      :total="total">
		    </el-pagination>
	</div>
	
</template>

<script>
	export default {
		name : 'baseTable',
		props : {
			tableData : {
				type : Array,
				default : () => []
			},
			columns : {
				type : Array,
				default : () => []
			},
			page : {
				type : [Number,String],
				default : 1
			},
			size : {
				type : [Number,String],
				default : 10
			},
			total : {
				type : [Number,String],
				default : 0
			},
			pageSizes : {
				type : Array,
				default : () => [10,20,30,50]
			},
			layout : {
				type : String,
				default : 'total, sizes, prev, pager, next, jumper'
			},
			pager : Boolean
		},
		methods : {
			handleSizeChange(size){
				this.$emit('size',size)
			},
			handleCurrentChange(page){
				this.$emit('page',page)
			}
		}
	}
</script>

<style>
</style>