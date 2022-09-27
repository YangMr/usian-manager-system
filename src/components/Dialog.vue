<template>
	<el-dialog title="收货地址" :visible.sync="visible">
	  <el-form :model="value" :label-width="labelWidth">
	    <el-form-item label="活动名称" >
	      <el-input v-model="value.name" autocomplete="off"></el-input>
	    </el-form-item>
	    <el-form-item label="活动区域">
	      <el-select v-model="value.region" placeholder="请选择活动区域">
	        <el-option label="区域一" value="shanghai"></el-option>
	        <el-option label="区域二" value="beijing"></el-option>
	      </el-select>
	    </el-form-item>
	  </el-form>
	  <div slot="footer" class="dialog-footer">
	    <el-button @click="visible = false">取 消</el-button>
	    <el-button type="primary" @click="visible = false">确 定</el-button>
	  </div>
	</el-dialog>
</template>

<script>
	export default {
		name : 'dialog',
		props : {
			value : {
				type : Object,
				default : () => {}
			},
			dialogVisible : {
				type : Boolean,
				default : false
			},
			labelWidth : {
				type : String,
				default : '80px'
			}
		},
		
		computed : {
			visible : {
				get(){
					return this.dialogVisible
				},
				set(val){
					this.$emit("update:dialogVisible",val)
				}
			}
		}
	}
</script>

<style>
</style>