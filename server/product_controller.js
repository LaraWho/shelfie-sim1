module.exports = {

    create: (req, res) => {
        const dbInstance = req.app.get('db')
        const { name, price, image, shelf_id, bin_id } = req.body;

        dbInstance.add_item([ name, price, image, shelf_id, bin_id ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops, couldn't add a product!"})
            console.log(err)
        })
    },

    view: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id, number } = req.params;
        //dbInstance.view_item([shelf_id, bin_id])
        
        dbInstance.view_item( [id, +number] )
        .then( item => res.status(200).send(item) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops, you can't see this!"})
            console.log(err)
        })
    },

    edit: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req.params;

        dbInstance.edit_item([ params.id, query.desc ])
        .then( () => res.sendStatus(200) ) 
        .catch( err => {
            res.status(500).send({errorMessage: "Oops, you can't edit this!"})
            console.log(err)
        }) 
    },

    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req.params;

        dbInstance.delete_item( params.id )
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops, you can't delete this!"})
            console.log(err)
        } )
    }

}