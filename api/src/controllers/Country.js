

class Country{
    async getCountries(req,res,next){
        const {nombre} = req.body;
        try {
            
        } catch (error) {
            next(error);
        }
    }
}