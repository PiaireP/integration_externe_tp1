import { ProductFromFouquerayServices } from '../fouqueraygregate/productfouqueray.service'


const fouquerayService = new ProductFromFouquerayServices();

export class FouquerayDoThisServices {
    async findBio(legume: string): Promise<any>{
        try {
            return new Promise(async (resolve, reject) => {
                const liste = await fouquerayService.findAllProduct()
                const contiensLegume = liste.some((nom: string) => nom.includes(legume));
                resolve(contiensLegume)
        })} catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }

    }    
}
