import type { Legume } from '../../../types/legumes'
import { legumes } from '../../data'

export class LegumesServices {

  //Trouve tout nos légumes
  findAll(): Legume[] {
    return legumes
  }

  /**
   * Trouve un legume en particulier
   * @param id - ID unique de legume
   */
  finOneById(id: number): Legume | undefined {
    const search = legumes.find(legume => legume.id === id)
    return search;
  }

  /**
   * Trouve un legume en particulier
   * @param name - nom du légume
   */
  findOneByName(name: string): Legume | undefined {
    const search = legumes.find(legume => legume.name.toLowerCase()  === name.toLocaleLowerCase())
    return search;
  }
}
