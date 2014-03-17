// 'https://www.googleapis.com/language/translate/v2/detect?q=' +
// req.params.id + '&key=' + process.env.GOGL_API_KEY

cleanup
=======
- top ten
- if more than 100 links in active, retire oldest 10 links > part of the update routine


sources
=======
- twitter
- google+
- newspapers...
- delicious
- facebook
- good reads
- google alerts?
- feedly?
- digg
- users can add sources!!!
- user can sign their buzzr up to newsletters!!!!


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
- WebCrawling with Apache Nutch


exclude
=======
job offers?
'akamai error'
'for sale', 'to rent', 'to let' => unless in buzzr topic?
'50% sale' => get rid of offers and promotions?


pro version: realtime
=====================
- socket.io: send link by link
