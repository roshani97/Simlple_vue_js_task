<template>
<div id="edit" align="center">
<h3 align="center" style="padding-top:20px;" >Updating a Question</h3>
<div style="float:right; margin-right:380px;width:200px;">
<b-dropdown id="dropdown-1" text="Beginner" class="m-md-2 pl-5 pr-5" >
    <b-dropdown-item>Beginner</b-dropdown-item>
    <b-dropdown-item>Intermediate</b-dropdown-item>
    <b-dropdown-item>Hard</b-dropdown-item>
  </b-dropdown>
</div>
  <div style="padding:50px;height:400px;width:700px;margin:60px;background:#A1A0A0" align="center">
      <b-input-group >
        <b-form-input style="border-radius:5px" placeholder="Question"></b-form-input>
        <b-input-group-append>
          <b-form-input style="border-radius:5px;width:60%;" placeholder="Upload Image" class="ml-5 "></b-form-input>
        </b-input-group-append>
      </b-input-group>
      <b-input-group >
        <b-form-input class="mt-3" placeholder="Option 1" style="border-radius:5px;"></b-form-input>
        <b-input-group-append>
          <b-form-input style="border-radius:5px;width:70%;" placeholder="Upload Image" class=" mt-3 ml-2 "></b-form-input>
        </b-input-group-append>

        <b-form-input class="mt-3" placeholder="Option 2" style="border-radius:5px;"></b-form-input>
        <b-input-group-append>
          <b-form-input style="border-radius:5px;width:70%;" placeholder="Upload Image" class=" mt-3 ml-2 "></b-form-input>
        </b-input-group-append>
      </b-input-group>

      <b-input-group >
        <b-form-input class="mt-3" placeholder="Option 3" style="border-radius:5px;"></b-form-input>
        <b-input-group-append>
          <b-form-input style="border-radius:5px;width:70%;" placeholder="Upload Image" class=" mt-3 ml-2 "></b-form-input>
        </b-input-group-append>

        <b-form-input class="mt-3" placeholder="Option 4" style="border-radius:5px;"></b-form-input>
        <b-input-group-append>
          <b-form-input style="border-radius:5px;width:70%;" placeholder="Upload Image" class=" mt-3 ml-2 "></b-form-input>
        </b-input-group-append>
      </b-input-group>

      <table align="left">
        <tr>
          <td><label class="pt-3 pr-3" style="font-weight:bold">SID</label></td>
          <td><input class="mt-3 mr-5" style="border-radius:0px"></td>
          <td><label class="pt-3 pr-3" style="font-weight:bold">Answer Keys:</label></td>
        </tr>
        <tr>
          <td><label class="pt-3 pr-3" style="font-weight:bold">Topic ID</label></td>
          <td><input class="mt-2 mr-5" style="border-radius:0px"></td>
          <td>
            <label style="font-size:18px;font-weight:bold">A</label><input type="checkbox" id="ch1" class=" ml-2 mr-2 ">
            <label style="font-size:18px;font-weight:bold">B</label><input type="checkbox" class="ml-2 mr-2" style="width: 18px;height: 18px;" >
            <label style="font-size:18px;font-weight:bold">C</label><input type="checkbox" class="ml-2 mr-2" style="width: 18px;height: 18px;" >
            <label style="font-size:18px;font-weight:bold">D</label><input type="checkbox" class="ml-2" style="width: 18px;height: 18px;" >
          </td>
        </tr>
        <tr>
          <td><label class="pt-3 pr-3" style="font-weight:bold">Solutions</label></td>
          <td><input class="mt-2 mr-5" style="border-radius:0px"></td>
          <td><b-button class="mr-5 ml-5 pl-5 pr-5 " variant="primary"> Submit</b-button></td>

        </tr>
      </table>
</div>


</div>
</template>

<style scoped>
#ch1 {
background: #353546;
width: 18px;
height:18px;
border-radius: 1px
}
</style>
>