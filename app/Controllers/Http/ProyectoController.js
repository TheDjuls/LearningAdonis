'use strict'

const Project = use('App/Models/Proyecto')

class ProyectoController {

  //Lista de todos los poryectos
  async index({auth}) {
    const user = await auth.getUser()
    return await user.proyectos().fetch()
  }

  async create({auth, request}) {
    const user = await auth.getUser()
    const {nombre} = request.all()
    const proyecto = new Project()
    proyecto.fill({
      nombre
    })
    await user.proyectos().save(proyecto)
    return proyecto
  }

  async destroy({auth, response, params}) {
    const user = await auth.getUser()
    const {id} = params
    const proyecto = await Project.find(id)
    if (proyecto.user_id!=user.id){
      return response.status(403).json({
        mensaje:"Este usuario no esta autorizado"
      })
    }
    await proyecto.delete()
    return proyecto
  }

  async update({auth,params,request}){
    const user = await auth.getUser()
    const {id} = params
    const nombre = request.body.nombre
    const proyecto = await Project.find(id)
    // se puede hacer merge con el dato asi
    //proyecto.merge(request.only('nombre'))
    // o tomar del body
    proyecto.merge({nombre:aux})
    proyecto.save()
    return proyecto
  }

}

module.exports = ProyectoController
