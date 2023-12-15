const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
})
const saveInDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-com");

    const ProductModel = mongoose.model('products', productSchema);
    let data = new ProductModel({
        name: "redmi 12 5G",
        price: 12020,
        brand: "max",
        category: "phone"
    });
    let result = await data.save();
    console.log(result)
}
saveInDB();
const updateInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.updateOne(
        { name: "redmi 12 5G" },
        {
            $set: { price: 700, name: "max 8" }
        }
    )
    console.log(data);
}
updateInDB();

const deleteInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({ name: 'redmi 12 5G' });
    console.log(data);
}
deleteInDB();

const findInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find();
    console.log(data);
}
findInDB();