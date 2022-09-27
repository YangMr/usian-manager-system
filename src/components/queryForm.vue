<template>
	<div>
		<el-form :inline="true" ref="form" :model="value" class="demo-form-inline">
			<template v-for="(item,index) in formItem" >
				<el-form-item v-if="item.type === 'input'" :prop="item.prop">
					<el-input v-model="value[item.prop]" :placeholder="item.placeholder"></el-input>
				</el-form-item>
				
				<el-form-item v-if="item.type === 'slot'" :prop="item.prop">
					<slot :name="item.slot_name"></slot>
				</el-form-item>
			</template>
			
			
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'queryForm',
		props: {
			value: {
				type: Object,
				default: () => {}
			},
			formItem: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {

			}
		},
		methods: {
			handleResetForm(){
				this.$refs['form'].resetFields()
			}
		}
	}
</script>

<style>
</style>
