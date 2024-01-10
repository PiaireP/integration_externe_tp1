import { Router } from 'express'
import { LegumesServices } from './legumes.service'
import { BadRequestException, NotFoundException } from '../../utils/exceptions'

//Le routeur
const LegumesController = Router()

//Service nécéssaire
const service = new LegumesServices()

// trouve tou les légumes
LegumesController.get('/', (req, res) => {
  return res
    .status(200)
    .json(service.findAll())
})

//Trouve un legume en particulier par id
LegumesController.get('/id=:id', (req, res) => {
  const id = Number(req.params.id)

  if (!Number.isInteger(id)) {
    throw new BadRequestException('ID non valide')
  }

  const legume = service.finOneById(id)

  if (!legume) {
    throw new NotFoundException('Animal introuvable')
  }

  return res
    .status(200)
    .json(legume)
})

//Trouve un legume en particulier par nom
LegumesController.get('/name=:name', (req, res) => {
  const name = String(req.params.name)

  const legume = service.findOneByName(name)

  if (!legume) {
    throw new NotFoundException('Animal introuvable')
  }

  return res
    .status(200)
    .json(legume)
})

export { LegumesController }