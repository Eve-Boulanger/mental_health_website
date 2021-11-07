import pin1 from "./Pages/images/pin1.JPG";
import pin2 from "./Pages/images/pin2.JPG";
import pin3 from "./Pages/images/pin3.JPG";
import patch1 from "./Pages/images/patch1.JPG";
import patch2 from "./Pages/images/patch2.JPG";
import patch3 from "./Pages/images/patch3.JPG";
import hat1 from "./Pages/images/hat1.JPG";
import hat2 from "./Pages/images/hat2.JPG";
import hat3 from "./Pages/images/hat3.JPG";


const items = [
    { id:1, name:"Patch", price:5.99, 
      stock: 100, cart: false,
      imgPath1: patch1,  
      imgPath2: patch2,
      imgPath3: patch3
    },
    { id:2, name:"Pin", price:7.99,
      stock: 100, cart: false,
      imgPath1: pin1,  
      imgPath2: pin2,
      imgPath3: pin3
    },
    { id:3, name:"Hat", price:10.99,
      stock: 100, cart: false,
      imgPath1: hat1,  
      imgPath2: hat2,
      imgPath3: hat3
    }
  ]

export default items