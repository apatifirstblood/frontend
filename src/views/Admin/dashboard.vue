<template>
   <div class="admin-dashboard col-sm-10">
    <user-info></user-info>
        <div class="inner">
            <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Eth Address</th>
                    <th scope="col">FBX Address</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Parth Kamdar</td>
                    <td>pkamdar@firstblood.io</td>
                    <td>@#dfg123234234DFSDFsd</td>
                    <td>FBX@#dfg123234234DFSDFsd</td>
                    <td><button class="btn-fb-chain">Verify</button></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Parth Kamdar</td>
                    <td>pkamdar@firstblood.io</td>
                    <td>@#dfg123234234DFSDFsd</td>
                    <td>FBX@#dfg123234234DFSDFsd</td>
                    <td><button class="btn-fb-chain">Verify</button></td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    computed:{

    },
    mounted(){

    }
}
</script>
<style scoped>
.inner{
    max-width: 90%;
    width: 90%;
    height: auto;
}
tr{
    height: 60px;
}
td, th{
    line-height: 60px;
}
.btn-fb-chain{
    margin-top: 5px;
    height: 50px;
    line-height: 10px !important;
}
</style>