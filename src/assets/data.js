import p1_imgg from '../assets/p1_imgg.jfif'
import p2_img from '../assets/p2_img.jfif'
import p3_img from '../assets/p3_img.avif'
import p4_img from '../assets/p4_img.jfif'

let data_product= [
     {
            id: 1,
            name: "Skirt",
            category: "women",
            image: p1_imgg,
            new_price: 50.0,
            old_price: 80.5
        },
    
        { id: 2, name: "Dress", category: "men", image:p2_img, new_price: 60.0, old_price: 90.5 },
        { id: 3, name: "Sharara", category: "women", image:p3_img, new_price: 70.0, old_price: 125.0 },
        { id: 4, name: "Balloon Dress", category: "men", image: p4_img, new_price: 90.0, old_price: 140.0 }
]

export default data_product;