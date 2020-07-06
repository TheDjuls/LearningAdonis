'use strict'

class UserController {
  store({request}) {
    const {username, password} = request.all()
    const user = User.create({
      username,
      email: username,
      password
    })
    return user
  }


}

module.exports = UserController
