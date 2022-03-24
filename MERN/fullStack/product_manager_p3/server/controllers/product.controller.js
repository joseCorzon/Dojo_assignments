const Product = require('../models/product.model');

module.exports.helloWorld = (req,res)=>{
    res.json({msg:"hello world"})
}

module.exports.findAllProducts = (req,res)=>{
    Product.find()
    .then(allProducts=>{
        res.json({results: allProducts})
    })
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createProduct = (req,res)=>{
    Product.create(req.body)
    .then(newlyCreatedProduct =>{
        res.json({results: newlyCreatedProduct})
    })
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.getOneProduct = (req,res)=>{
    Product.findOne({_id: req.params.id})
    .then(foundProduct =>{
        res.json({results: foundProduct})
    })
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateOneProduct =(req,res)=>{
    Product.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then(updatedProduct=>{
            res.json({results: updatedProduct})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteOneProduct = (req,res)=>{
    Product.deleteOne({_id: req.params.id})
    .then(deletedProduct =>{
        res.json({results: deletedProduct})
    })
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}