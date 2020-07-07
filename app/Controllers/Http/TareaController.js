'use strict'

const Tarea = use('App/Models/Tarea')
const Project = use('App/Models/Proyecto')

class TareaController {
  async create({auth,request,params}){
    const user = await auth.getUser()
    const {descripcion} = request.all()
    const {id} = params
    //const proyecto = await Project.find(id)
    const tarea = new Tarea();
    tarea.fill({
      descripcion,
      proyecto_id:id
    })
    await tarea.save()
    return tarea
  }
}

module.exports = TareaController
