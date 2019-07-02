<template>
<div id="hello">
<b-button v-b-modal.modal-1 >Add</b-button>
    <b-modal id="modal-1" title="ADD SUBJECT DETAILS" hide-footer>
    <table>
    <tr><td>Subject ID</td><td><input type="text" v-model="sid"></td></tr>
    <tr><td>Subject Name</td><td><input type="text" v-model="sname" ></td></tr>
    <tr><td>Class</td><td><input type="text" v-model="cls"></td></tr>
    <tr><td>Board</td><td><input type="text" v-model="brd"></td></tr>
    <tr><td><button @click="addTableRow()">ADD SUBJECT</button></td></tr>
    
    </table>
  </b-modal>
<b-button  @click="deleteTableRow()">Remove</b-button>
<br>
<table  class="table table-striped">
<thead>
<th>Subject ID</th>
<th>Subject Name</th>
<th>Class</th>
<th>Board</th>
<th>Action</th>
</thead>
<tr>
<tr v-for="item in rowData" :key="item.sid">
  <td>{{ item.sid}}</td>
  <td>{{ item.sname}}</td>
  <td>{{ item.cls }}</td>
  <td>{{ item.brd }}</td>
<td><b-button v-b-modal.modal-2>Edit</b-button>
    <b-modal id="modal-2" title="EDIT SUBJECT DETAILS">
    <table>
    <tr><td>Subject ID</td><td><input type="text" v-model="sid"></td></tr>
    <tr><td>Subject Name</td><td><input type="text" v-model="sname" ></td></tr>
    <tr><td>Class</td><td><input type="text" v-model="cls"></td></tr>
    <tr><td>Board</td><td><input type="text" v-model="brd"></td></tr>
    </table>
  </b-modal></td>
</tr>
</table>
</div>

</template>

<script>
import login from '@/components/login'
export default {
  name: 'HelloWorld',
  data () {
    return {
         sid:'01',
         sname:'english',
         cls:'10th',
         brd:'SSC',
         rowData:[]
    }
  },
  methods:{
    addTableRow: function () { 
       var my_object = {
        sid:this.sid,
        sname:this.sname,
        cls:this.cls,
        brd: this.brd

      };
      this.rowData.push(my_object);
      this.$bvModal.hide('modal-1');
   },
    deleteTableRow: function() { 
    this.rowData.pop();
    alert("Subject Deleted Successfully!!!!");
      
   }
	}

}
</script>


