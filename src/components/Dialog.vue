<template>
	<el-dialog :title="dialogConfig.title" :width="dialogConfig.width" :visible.sync="visible">
		<el-form :rules='dialogRules' ref="dialogForm" :model="value" :label-width="labelWidth" :style="{width : `${dialogConfig.formWidth}px`}">
			<template v-for="(item,index) in dialogFormItem">
				<el-form-item v-bind="item" :label="item.label">
					<el-input v-model="value[item.prop]" autocomplete="off"></el-input>
				</el-form-item>
			</template>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="visible = false">取 消</el-button>
			<el-button type="primary" @click="handleSubmit">确 定</el-button>
		</div>
	</el-dialog>
</template>

<script>
	export default {
		name: 'index',
		props: {
			value: {
				type: Object,
				default: () => {}
			},
			dialogVisible: {
				type: Boolean,
				default: false
			},
			labelWidth: {
				type: String,
				default: '80px'
			},
			dialogFormItem: {
				type: Array,
				default: () => []
			},
			dialogConfig : {
				type : Object,
				default : () => {}
			},
			dialogRules : {
				type : Object,
				default : () => {}
			}
		},

		computed: {
			visible: {
				get() {
					return this.dialogVisible
				},
				set(val) {
					this.$emit("update:dialogVisible", val)
				}
			}
		},
		
		methods : {
			handleSubmit(){
				this.$refs['dialogForm'].validate(valid=>{
					if(!valid) return
					this.$emit("submit")
				})
			}
		}
	}
</script>

<style>
</style>
