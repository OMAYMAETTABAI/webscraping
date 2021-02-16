import axios from 'axios';
 

class ProductService {
    getProducts() {
        console.log('executed service')
        return axios.get(`http://localhost:8080`);
    }
}

export default new ProductService()