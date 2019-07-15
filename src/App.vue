<template>
<div class="app">
<div id="navi1">
     <b-navbar  type="dark" variant="dark" >
    <b-navbar-nav  class="w-100  mb-1" >
      <b-navbar-brand href="#">Welcome</b-navbar-brand>

          </b-navbar-nav>
      <b-navbar-nav>
      <b-nav-item href="#" to="/subject" class="pl-5 mb-1" >Subjects</b-nav-item>
      <b-nav-item href="#" to="/topic" class="pl-5 mb-1">Topics</b-nav-item>
      <b-nav-item href="#"  class="pl-5 mb-1">Questions</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Utilities" class="pl-5 mb-1">
        <b-dropdown-item href="#">list1</b-dropdown-item>
        <b-dropdown-item href="#">list2</b-dropdown-item>
        <b-dropdown-item href="#">list3</b-dropdown-item>
        <b-dropdown-item href="#">list</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="Page" class="pl-5 mb-1">
          <b-dropdown-item href="#">p1</b-dropdown-item>
          <b-dropdown-item href="#">p2</b-dropdown-item>
          <b-dropdown-item href="#">p3</b-dropdown-item>
          <b-dropdown-item href="#">p4</b-dropdown-item>
        </b-nav-item-dropdown>

      <b-nav-item href="#" class="pl-5 mb-1">Table</b-nav-item>
      <b-nav-item href="#" class="pl-5 mb-1">Chart</b-nav-item>
      <b-nav-item href="#" class="pl-5 mb-1">Logout</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
  
  </div>
  <div id="navi2">
  <div>
  <b-navbar type="light" variant="light">
    <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
  </b-navbar>
</div>
  </div>

<router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>


</style>
