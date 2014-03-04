# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Dicom::Application.config.secret_key_base = 'bad9bc102cc10260773b2fffdc4b3453000fff1192c878582ff81b292bd7daacd222c1d85c53c82a76c87edaf2e30bfd2459ef2d3a9e0ebd6069a13b2c6496fc'
