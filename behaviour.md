
algo
=====
- get link from twitter
- if link is already processed +1 it
- else goto urlencoder
- if link is already processed +1 it
- else check for title
- if no title, push to error array and skip
- if title is already processed +1 it
- else add new link




- socket.io: send link by link
- non blocking http calls to get urls



- sources:
- twitter
- delicious
- facebook
- google alerts?
- feedly?
- digg



- get language from google translate api
- inlcude language param in search




rich content:
check for schema.org - image, title, primaryContent, primaryImage
check for facebook opengraph
check for RSS feed
get one flickr img

tech:
feedly uses Apache HBase
