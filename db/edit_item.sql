UPDATE shelfie
SET item_name = $1, item_price = $2, item_image = $3
WHERE shelf_id = $4 and bin_id = $5;