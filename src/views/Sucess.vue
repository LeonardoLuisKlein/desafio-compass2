<template>
    <div clas="sucess">
        <img src="../intern.png">
        <h1>Sucess!</h1>
        <input type="submit" value="Go back!" @submit="gohome">
    </div>
</template>

<script>
export default{
    name:'Sucess',
    methods(){
        gohome()

        
    }

}


</script>

<style scoped>
    h1{
    display: flex;
    font-size: 2.25em;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    }

    img{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto
    }

input{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 12px;
    gap: 6px;
    width: 269px;
    height: 177px;
    left: 389px;
    top: 767px;
    background: #0DBDBD;
    border-radius: 10px;
    color: white;
    font-family: "Nunito", Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 18px;
    border: #0DBDBD;
    margin: 300px auto;
    cursor: pointer;
    }


    @media screen and (max-width: 600px) {
input{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 12px;
    gap: 6px;
    width: 327px;
    height: 75px;
    left: 580px;
    top: 581px;
    background: #0DBDBD;
    border-radius: 10px;
        }

img{
    margin-top: 10px;
}
h1{
    margin-top: 10px;
}
    }
</style>
