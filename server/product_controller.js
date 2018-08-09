module.exports = {

    getShelf: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        
        dbInstance.get_shelf( [id] )
        .then( (items) => res.status(200).send(items) )
        .catch( err => {
            res.status(401).send({errorMessage: "Oops, you can't see this!"})
            console.log(err)
        })
    },

    create: (req, res) => {
        const dbInstance = req.app.get('db')
        const { id, addproduct } = req.params;
        const { name, price, image } = req.body;

        dbInstance.add_item([ id, +addproduct, name, price, image ])
        .then( (bin) => res.status(200).send(bin) )
        .catch( err => {
            res.status(401).send({errorMessage: "Oops, couldn't add a product!"})
            console.log(err)
        })
    },

    view: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id, number } = req.params;
        
        dbInstance.view_item( [id, +number] )
        .then( item => res.status(200).send(item) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops, you can't see this!"})
            console.log(err)
        })
    },

    edit: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id, number } = req.params;
        const { name, price, image } = req.body;

        console.log(req.body)

        dbInstance.edit_item([ name, price, image, id, +number ])
        .then( (item) => res.status(200).send(item) ) 
        .catch( err => {
            res.status(400).send({errorMessage: "Oops, you can't edit this!"})
            console.log(err)
        }) 
    },

    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id, number } = req.params;

        dbInstance.delete_item( [id, +number] )
        .then( () => res.status(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops, you can't delete this!"})
            console.log(err)
        } )
    }

}