main algo
=========
- get link from twitter
- if link is already processed +1 it
- else goto urlencoder
- if link is already processed +1 it
- else check for title
- if no title, push to error array and skip
- if title is already processed +1 it
- else add new link




pro veriosn: realtime
======================
- socket.io: send link by link
- non blocking http calls to get urls




sources
=======
- twitter
- delicious
- facebook
- google alerts?
- feedly?
- digg
- users can add sources!!!



improvments
===========
- get language from google translate api




rich content:
=============
check for schema.org - image, title, primaryContent, primaryImage
check for facebook opengraph
check for RSS feed
get one flickr img
PDFs ?



tech:
=====
- Feedly uses Apache HBase
