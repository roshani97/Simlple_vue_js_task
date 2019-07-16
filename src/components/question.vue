<template>
<div class="que">
<div id="que_list" align="right" class="p-5 mb-1">
    <b-button v-b-modal.modal-1 variant="success">Add Question</b-button>
    <b-modal id="modal-1" title="ADD QUESTION DETAILS" hide-footer>
    <table>
    <tr><td>Question Name</td><td><input type="text" v-model="qname"></td></tr>
    <tr><td>Subject ID</td><td><input type="text" v-model="sid" ></td></tr>
    <tr><td><button @click="addTableRow()">ADD QUESTION</button></td></tr>
    
    </table>
  </b-modal>
  <b-button  @click="deleteTableRow()" variant="danger">Remove</b-button>

<br>
<h3 align="center" style="color:#001a06">Question List</h3>
<table  class="table table-striped " striped id="sub_id">
<thead style="background:#b8b894">
<th>Question Name</th>
<th>Subject ID</th>
<th>Status</th>
<th>Action</th>
<th>Remove Topic</th>

</thead>
<tr v-for="item in que_detail" :key="item.sid">
  
  <td>{{ item.qname}}</td>
  <td>{{ item.sid}}</td>
  <td>{{item.status}}</td>
  
<td><b-button  v-b-modal.modal-2>Edit</b-button>
    <b-modal id="modal-2" title="EDIT TOPIC DETAILS">
    <table>
    <tr><td>Question</td><td><input type="text" v-model="qname"></td></tr>
    <tr><td>Subject Id</td><td><input type="text" v-model="sid" ></td></tr>
    </table>
  </b-modal>
  <b-button variant="success">Verify</b-button>
  <b-button variant="primary ">Preview</b-button>

  </td>
  
 <td><b-form-checkbox checked="check_value='true"></b-form-checkbox></td>
  
</tr>
</table>
</div>
  
</div>
</template>
<script>
export default {
  name: 'question',
  data () {
    return {
         sid:'',
         qname:'',
         status:'',
         que_detail:[],
         row_len:'0',

    }
  },
  methods:{
    addTableRow: function () { 
       var my_object = {
        sid:this.sid,
        qname:this.qname,
        status:this.status
      };
      this.que_detail.push(my_object);
      this.$bvModal.hide('modal-1');
   },
    deleteTableRow: function() { 
            this.que_detail.pop();
    }
	}

}
</script>
