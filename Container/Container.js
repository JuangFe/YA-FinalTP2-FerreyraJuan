import Controller from "../Controller/Controller.js"
import Service from "../Services/Sevice.js"

const service= new Service()
const controller= new Controller(service)


export  default controller