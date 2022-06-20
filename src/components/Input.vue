<template>
    <div>
        <form id="input" @submit="checkForm" novalidate="true" method="post" action="https://vuejs.org/">
            <div class="order0">
                <label for="fullname">Full Name *</label>
                <input type="text" id="fullname" class="form-input-name" v-model="fullname" name="fullname">
                <small v-for="error in errors" v-bind:key="error.name">{{ error }}</small>
            </div>

            <div class="order1">
                <label for="email">Email *</label>
                <input type="email" id="email" class="form-input-email" placeholder="foo@bar.com" v-model="email" name="email">
                <div>
                <small v-for="error in errors" v-bind:key="error.email">{{ error }}</small>
                </div>
            </div>

            <div class="form-pb order3">
                <label for="phone">Phone *</label>
                <input type="tel" id="phone" class="form-input-phone" placeholder="(83) 00000-0000" v-model="phone" name="phone">
                <small v-for="error in errors" v-bind:key="error.phone">{{ error }}</small>
            </div>

            <div class="order2">
                <label for="password">Password *</label>
                <input type="password" id="password" class="form-input-password" v-model="password" name="password">
                <small v-for="error in errors" v-bind:key="error.password">{{ error }}</small>
            </div>

            <div class="form-pb order4">
                <label for="birthday">Birthday *</label>
                <input type="date" id="birthday" class="form-input-birthday" value="yyyy/MM/dd" v-model="birthday" name="birthday">
                <small v-for="error in errors" v-bind:key="error.birthday">{{ error }}</small>
            </div>

        
                <div class="order5">
                    <label><input type="checkbox" class="form-input-inputbutton" id="contract-terms">I accept the terms and privacy</label>
                    <small v-for="error in errors" v-bind:key="error.contract-terms">{{ error }}</small>
                </div>
                <div class="order6">
                <button type="submit" class="form-input-button" id="button"><router-link :to="'/sucess'">Register</router-link></button>
                </div>
        </form>
    </div>
</template>

<script>
import Button from './Button.vue'

export default{
    name: 'Input',
    data(){
        return{
        errors: [],
        fullname: null,
        email: null,
        phone: null,
        password: null,
        birthday: null
        }
    }
}
    /*
    methods:{
        checkForm: function(e){
            e.preventDefault();
            this.errors = [];

            if (!this.validName(this.fullname)){
                this.errors.push('Fullname Invalid')
            }

            if (!this.validEmail(this.email)){
                this.errors.push('Email Invalid')
            }


            if (!this.validPhone(this.phone)){
                this.errors.push('Phone Invalid')
            }

            if (!this.validPassword(this.password)){
                this.errors.push('Password Invalid')
            }

           /* if (!this.validBirthday(this.birthday)){
                this.errors.push('Age Invalid')
            }

            let checkbox = document.getElementById('contract-terms')
            if(!checkbox.checked) {
                this.errors.push('You must accept the terms')
            }

            if(!this.errors.length) {
                return true;
            }        
        },
        validName: function (fullname) {
      var re = /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/;
      return re.test(fullname);
    },
        validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
        validPhone: function (phone) {
      var re = /^[0-9]{11}$/;
      return re.test(phone);
    },
        validPassword: function (password) {
        var re = /^[0-9]{6,9}$/;
        return re.test(password)
    },
       /* validBirthday: function (birthday) {
        
        }*/
  //  }
//}
 
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


small {
display: flex;
font-family: "Nunito", Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FF4B4B;
}

button{
    text-decoration: none;
    text-decoration-color: white;
}

a{
    text-decoration: none;
    color: white;
}

@media screen and (max-width: 600px) {

  label{
    font-family: "Nunito", Arial, Helvetica, sans-serif;
    display: flex;
    align-items: flex-end;
    color: #767676;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-top: 10px;
  }

.form-input-name, .form-input-email, .form-input-password{
box-sizing: border-box;
width: 330px;
height: 40px;
left: 36px;
top: 482px;
background: #FFFFFF;
border: 2px solid #AAAAAA;
border-radius: 4px;
}

.form-input-phone, .form-input-birthday{
box-sizing: border-box;
width: 155px;
height: 40px;
left: 36px;
top: 482px;
background: #FFFFFF;
border: 2px solid #AAAAAA;
border-radius: 4px;
}

.form-input-button{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px;
gap: 6px;
width: 332px;
height: 56px;
left: 36px;
top: 690px;
background: #0DBDBD;
border-radius: 10px;
margin-top: 70px;
margin-left: 90px;
}

    .order0{
        order:0;
        margin-left: 90px;
    }

    .order1{
        order:1;
        margin-left: 90px;
    }

    .order2{
        order:2;
        margin-left: 90px;
    }

    .order3{
        order:3;
        margin-left: 90px;
    }

    .order4{
        order: 4;
        margin-left: 20px;
    }

    .order5{
        order:5;
        margin-left: 90px;
    }

    .order6{
        order:6;
        margin-top: -55px;
    }

}
</style>