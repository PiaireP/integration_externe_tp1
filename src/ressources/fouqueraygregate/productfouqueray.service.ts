import https from 'https';

export class ProductFromFouquerayServices {
    findAllProduct(): undefined | Promise<any> {
        try {
            return new Promise((resolve, reject) => {
                const url = `https://opendata.agencebio.org/api/gouv/operateurs/?nom=AGATHE%20FOUQUERAY`;
                https.get(url, (response) => {
                    let data = '';
                    response.on('data', (chunk) => {
                        data += chunk;
                    });

                    response.on('end', () => {
                        try {
                            try {
                                const parsedData = JSON.parse(data);
                                const companyNames = parsedData.items
                                const productions = companyNames[0].productions
                                const noms = productions.map((production: { nom: string }) => production.nom.toLocaleLowerCase());
                                
                                resolve(noms);
                            } catch (e) {
                                reject(e);
                            }
                        } catch (e) {
                            reject(e);
                        }
                    });
                }).on('error', (err) => {
                    reject(err);
                });
        })} catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }}

}
