<template>
<div class="topics">
<div id="sub_list" align="right" class="p-5 mb-1">
    <b-button v-b-modal.modal-1 variant="success">Add Topic</b-button>
    <b-modal id="modal-1" title="ADD TOPIC DETAILS" hide-footer>
    <table>
    <tr><td>Topic ID</td><td><input type="text" v-model="tid"></td></tr>
    <tr><td>Subject Name</td><td><input type="text" v-model="tname" ></td></tr>
    <tr><td><button @click="addTableRow()">ADD TOPIC</button></td></tr>
    
    </table>
  </b-modal>
  <b-button  @click="deleteTableRow()" variant="danger">Remove</b-button>

<br>
<h3 align="center" style="color:#001a06">Topic List</h3>
<table  class="table table-striped " striped id="sub_id">
<thead style="background:#b8b894">
<th>Topic ID</th>
<th>Topic Name</th>
<th>Action</th>
<th>Remove Topic</th>

</thead>
<tr v-for="item in topic_detail" :key="item.tid">
  
  <td>{{ item.tid}}</td>
  <td>{{ item.tname}}</td>
  
<td><b-button v-b-modal.modal-2>Edit</b-button>
    <b-modal id="modal-2" title="EDIT TOPIC DETAILS">
    <table>
    <tr><td>Topic ID</td><td><input type="text" v-model="tid"></td></tr>
    <tr><td>Topic Name</td><td><input type="text" v-model="tname" ></td></tr>
    </table>
  </b-modal></td>
  
 <td><b-form-checkbox checked="check_value='true"></b-form-checkbox></td>
  
</tr>
</table>
</div>
  
</div>
</template>
<script>
export default {
  name: 'topic'
}
</script>