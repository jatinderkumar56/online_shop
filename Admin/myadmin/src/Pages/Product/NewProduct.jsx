// import React, { useState } from "react";
// import "./NewProduct.css";
// import app from "../../Components/Chart/firebase";
// // import { getStorage, ref } from "firebase/storage";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { Category } from "@mui/icons-material";
// import { addProducts } from "../../Redux/ApiCall";
// import { useDispatch } from "react-redux";
// export default function NewProduct() {
//  const dispatch = useDispatch();
//   const [input,setInput]= useState({});
//   const [file,setimgFile]= useState(null);
//   const [cat,setCat]= useState([]);

//   const handleChange=(e)=>{
//      setInput(prev=>{
//       return {...prev,[e.target.name]:e.target.value}
//      })
//   }
//   const handleCategories=(e)=>{
//     setCat(e.target.value.split(","));

//   }
//   const handleFileUpload=(e)=>{
//     setCat(e.target.value.split(","));

//   }
//   const handleclick= async(e)=>{
//   e.preventDefault();
//   const data = new FormData()
//   console.log('data',data)
//   data.append("file",file)
//   data.append("upload_preset","kumarone")
//   data.append("cloud_name","diqs9rn5l")
//   const res = await fetch("https://api.cloudinary.com/v1_1/diqs9rn5l/image/upload",{
//     method:"POST",
//     body:data
//   })
//   const uploadedImageURL = await res.json() 
//   console.log(uploadedImageURL.url)
//    const product =({...input, img:uploadedImageURL.url, categories:cat})
//    addProducts( product,dispatch )
//   }
//   // console.log(input)
//   return (
//     <div className="newProduct">
//       <h1 className="newProductTitle">New Product</h1>
//       <form className="AddproductForm">
//         <div className="AddproductItem">
//           <label>Image</label>
         
//           <input type="file" id="file" onChange={e=>setimgFile(e.target.files[0])} />
//         </div>
//         <div className="AddproductItem">
//           <label>Title</label>
//           <input name="title" type="text" placeholder="Air Pods" onChange={handleChange}/>
//         </div>
//         <div className="AddproductItem">
//         <label>Price</label>
//         <input name="price" type="text" placeholder="1000" onChange={handleChange}/>
//       </div>
//       <div className="AddproductItem">
//       <label>Description</label>
//       <input name="desc" type="text" placeholder="description..." onChange={handleChange}/>
//     </div>
//     <div className="AddproductItem">
//     <label>Categories</label>
//     <input type="text" placeholder="Jeans, skirt.." onChange={handleCategories} />
//   </div>
//         <div className="AddproductItem">
//           <label>Stock</label>
//        <select name="inStock" onChange={handleChange}>
//        <option value="true">Yes</option>
//        <option value="false">No</option>
//        </select>
//         </div>
        
//         <button onClick={handleclick} className="updateclass">Create</button>
//       </form>
//     </div>
//   );
// }
import React, { useState } from "react";
import "./NewProduct.css";
import { addProducts } from "../../Redux/ApiCall";
import { useDispatch } from "react-redux";

export default function NewProduct() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const [file, setImgFile] = useState(null);
  const [cat, setCat] = useState([]);

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCategories = (e) => {
    setCat(e.target.value.split(",").map(c => c.trim()));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select an image.");
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "kumarone");
    data.append("cloud_name", "diqs9rn5l");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/diqs9rn5l/image/upload", {
        method: "POST",
        body: data,
      });

      const uploadedImageURL = await res.json();

      if (!uploadedImageURL?.url) {
        throw new Error("Image upload failed");
      }

      const product = {
        ...input,
        img: uploadedImageURL.url,
        categories: cat,
      };

      // Make sure addProducts is async or returns a promise
      await addProducts(product, dispatch);

      alert("Product created successfully!");
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Failed to create product.");
    }
  };

  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="AddproductForm">
        <div className="AddproductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={(e) => setImgFile(e.target.files[0])} />
        </div>
        <div className="AddproductItem">
          <label>Title</label>
          <input name="title" type="text" placeholder="Air Pods" onChange={handleChange} />
        </div>
        <div className="AddproductItem">
          <label>Price</label>
          <input name="price" type="text" placeholder="1000" onChange={handleChange} />
        </div>
        <div className="AddproductItem">
          <label>Description</label>
          <input name="desc" type="text" placeholder="description..." onChange={handleChange} />
        </div>
        <div className="AddproductItem">
          <label>Categories</label>
          <input type="text" placeholder="Jeans, skirt.." onChange={handleCategories} />
        </div>
        <div className="AddproductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button onClick={handleClick} className="updateclass">Create</button>
      </form>
    </div>
  );
}

