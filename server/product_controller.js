module.exports = {

    create: (req, res) => {
        const dbInstance = req.app.get('db')
        const { shelf_id, bin_id, name, price, image } = req.body;

        dbInstance.add_item([ shelf_id, bin_id, name, price, image])
        .then( () => res.status(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops, couldn't add a product!"})
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
        const { name, price, image } = req.params;

        dbInstance.edit_item([ name, price, image ])
        .then( () => res.status(200) ) 
        .catch( err => {
            res.status(500).send({errorMessage: "Oops, you can't edit this!"})
            console.log(err)
        }) 
    },

    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id, number } = req.params;
        // console.log(id, number)
        dbInstance.delete_item( [id, +number] )
        .then( () => res.status(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops, you can't delete this!"})
            console.log(err)
        } )
    }

}