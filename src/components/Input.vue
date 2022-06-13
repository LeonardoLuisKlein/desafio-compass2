<template>
    <div>
        <form>
            <div>
                <label for="fullname">Full Name *</label>
                <input type="text" id="fullname" class="form-input-name" required>
                <small>Teste</small>
            </div>

            <div>
                <label for="email">Email *</label>
                <input type="email" id="email" class="form-input-email" placeholder="foo@bar.com" required>
                <small>Teste</small>
            </div>

            <div class="form-pb">
                <label for="phone">Phone *</label>
                <input type="tel" id="phone" class="form-input-phone" placeholder="(83) 00000-0000" required>
                <small>Teste</small>
            </div>

            <div>
                <label for="password">Password *</label>
                <input type="password" id="password" class="form-input-password" required>
                <small>Teste</small>
            </div>

            <div class="form-pb">
                <label for="birthday">Birthday *</label>
                <input type="date" id="birthday" class="form-input-birthday" value="yyyy/MM/dd" required>
                <small>Teste</small>
            </div>

            <div class="Down">
                <div>
                    <label><input type="checkbox" required class="form-input-inputbutton">I accept the terms and privacy</label>
                    <small>Teste</small>
                </div>
        
                <input type="submit" value="Register" class="form-input-button" id="button">
            </div>
        </form>
    </div>
</template>

<script>

</script>

<style scoped>
  form{
    display: flex;
    flex-wrap: wrap;
    margin-left: 51px;
    flex-direction: row;
  }

  label{
    font-family: "Nunito", Arial, Helvetica, sans-serif;
    display: flex;
    align-items: flex-end;
    color: #767676;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-top: 50px;
  }

.form-input-name{
    box-sizing: border-box;
    width: 515px;
    height: 40px;
    left: 238px;
    top: 533px;
    background: #FFFFFF;
    border: 2px solid #AAAAAA;
    border-radius: 4px;

}

  .form-input-email{
    box-sizing: border-box;
    width: 330px;
    height: 40px;
    left: 237px;
    top: 645px;
    background: #FFFFFF;
    border: 2px solid #AAAAAA;
    border-radius: 4px;
  }

  .form-input-phone{
    box-sizing: border-box;
    width: 164px;
    height: 40px;
    background: #FFFFFF;
    border: 2px solid #AAAAAA;
    border-radius: 4px;
    flex: none;
}

.form-input-password{
    box-sizing: border-box;
    width: 330px;
    height: 40px;
    left: 237px;
    top: 745px;
    background: #FFFFFF;
    border: 2px solid #AAAAAA;
    border-radius: 4px;
}

.form-input-birthday{
    box-sizing: border-box;
    width: 164px;
    height: 40px;
    background: #FFFFFF;
    border: 2px solid #AAAAAA;
    border-radius: 4px;
}

.form-input-inputbutton{
    /*display: flex;*/
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    background: #0DBDBD;
    accent-color: #0dbdbd;
    border: 2px solid #0DBDBD;
    color: white;
    border-radius: 2px;
}

.form-pb{
    margin-left: 20px
    
}

.form-input-button{
   /* display: flex; */
    padding: 0px 12px;
    gap: 6px;
    width: 81px;
    height: 40px;
    left: 670px;
    top: 941px;
    background: #0DBDBD;
    border-radius: 10px;
    color: white;
    border:none;
    cursor: pointer;
    margin-left: 220px;
    margin-top: 50px
}

.Down{
    display: flex;
    align-items: space-between;
    justify-content: space-between;
}

small {
display: flex;
font-family: "Nunito", Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FF4B4B;
}
</style>