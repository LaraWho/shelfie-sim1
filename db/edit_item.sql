UPDATE shelfie
SET item_name = $1, item_price = $2, item_image = $3
WHERE bin_id = $4 and shelf_id = $5;