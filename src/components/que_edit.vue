<template>
<div align="center" style="padding:10px;">
<div id="que_id" style="width:400px;">
<h4 align="center">Update Question List</h4>
<div class="form-group" style="text-align:center">
<input type="text" placeholder="Question">
</div>
<div class="form-group" style="text-align:center">
<input type="text" placeholder="Option 1" class="mb-3"><br>
<input type="text" placeholder="Option 2" class="mb-3"><br>
<input type="text" placeholder="Option 3" class="mb-3"><br>
<input type="text" placeholder="Option 4" ><br>
</div>
<div style="padding-right:70px;">
<select class="mb-3 ">
<option value="Beginner">Beginner</option>
<option value="Intermediate">Intermediate</option>
<option value="Hard">Hard</option>
</select><br>
</div>
<div class="form-group" style="text-align:center;">
<input type="text" placeholder="SID" class="mb-3"><br>
<input type="text" placeholder="Topic ID" class="mb-3"><br>
<input type="text" placeholder="Solution"><br>
</div>
<div style="text-align:center;">
Answer Key:<br>
A <input type="checkbox" value="A">
B <input type="checkbox" value="B">
C <input type="checkbox" value="C">
D <input type="checkbox" value="D">
</div>
<div style="text-align:center;padding:10px;">
  <b-button block variant="primary">Submit</b-button>
</div>

</div>
</div>
</template>