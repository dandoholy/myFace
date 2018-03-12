json.extract! photo, :uploader_id
json.image_url asset_path(post.image.url(:original))
