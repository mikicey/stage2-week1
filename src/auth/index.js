export const pushError = (fn,prop,msg) => {
    fn(prev => {return{
        ...prev, [prop]: {
            ...prev[prop], errMsg: msg
        }
    }}
    )
}

export const emailChecker = (email) => {
     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

      // return setLoginForm(prev => {return {
      //   ...prev, email : {
      //     ...prev.email, errMsg : "Email isnt registered yet"
      //   }
      // }})

            // return setLoginForm(prev => {return {
      //   ...prev, password : {
      //     ...prev.password, errMsg : "Password invalid"
      //   }
      // }})

            // return setRegisterForm(prev => {
      //   return {
      //     ...prev,
      //     name : {
      //       ...prev.name,
      //       errMsg: "Name cannot be empty"
      //     }
      //   }
      // })

            // return setRegisterForm(prev => {
      //   return {
      //     ...prev,
      //     email : {
      //       ...prev.email,
      //       errMsg: "Email format incorrect"
      //     }
      //   }
      // })

    //   return setRegisterForm(prev => {
    //     return {
    //       ...prev,
    //       password : {
    //         ...prev.password,
    //         errMsg: "Minimal Password length is 8"
    //       }
    //     }
    //   })

    // return setRegisterForm(prev => {
    //     return {
    //       ...prev,
    //       email : {
    //         ...prev.email,
    //         errMsg: "Email already registered"
    //       }
    //     }
    //   })
