<template>
  <div id="hello">
  
  <div id="sub_list" align="right">
    <b-button v-b-modal.modal-1 variant="success">Add Subject</b-button>
    <b-modal id="modal-1" title="ADD SUBJECT DETAILS" hide-footer>
    <table>
    <tr><td>Subject ID</td><td><input type="text" v-model="sid"></td></tr>
    <tr><td>Subject Name</td><td><input type="text" v-model="sname" ></td></tr>
    <tr><td>Class</td><td><input type="text" v-model="cls"></td></tr>
    <tr><td>Board</td><td><input type="text" v-model="brd"></td></tr>
    <tr><td><button @click="addTableRow()">ADD SUBJECT</button></td></tr>
    
    </table>
  </b-modal>
<b-button  @click="deleteTableRow()" variant="danger">Remove</b-button>
<br>
<h3 align="center" style="color:#001a06">Subjects List</h3>
<table  class="table table-striped" striped id="sub_id">
<thead style="background:#b8b894">
<th>Subject ID</th>
<th>Subject Name</th>
<th>Class</th>
<th>Board</th>
<th>Action</th>
<th>Remove Subject</th>

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
 <td><b-form-checkbox checked="check_value='true"></b-form-checkbox></td>
  
</tr>
</table>
</div>
  </div>

</template>

<script>
export default {
  name: 'subject',
  data () {
    return {
         sid:'',
         sname:'',
         cls:'',
         brd:'',
         rowData:[],
         row_len:'0',
         check_value:false
    }
  },
  methods:{
    addTableRow: function () { 
       var my_object = {
        sid:this.sid,
        sname:this.sname,
        cls:this.cls,
        brd: this.brd,
        check_value:this.check_value


      };
      this.rowData.push(my_object);
      this.$bvModal.hide('modal-1');
   },
    deleteTableRow: function() { 
            alert("hiii");
            row_len = rowData.length;
            alert(row_len);
            for(var i=0; i<row_len; i++) 
            {
                row = rowData[i];
                if(row.check_value==true)
                {
                    del=this.rowData.splice(i, 1);
                    row_len--;
                    return del;
                }
            }

    
      
   }
	}

}
</script>
<style scoped>
#sub_list{
  padding:10px;
}
</style>

