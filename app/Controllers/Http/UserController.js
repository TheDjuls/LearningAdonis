'use strict'
const User = use('App/Models/User')

class UserController {

  //metodo para loguearse
  async login({request,auth}){
    const {email,password} = request.all()
    const token = await auth.attempt(email,password)
    return token
  }

  //metodo para crear usuario
  async store({request}) {
    const {email, password} = request.all()
    const user = await User.create({
      username:email,
      email,
      password
    })
    return this.login(...arguments)
  }


}

module.exports = UserController
