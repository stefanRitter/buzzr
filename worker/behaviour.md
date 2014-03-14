warning: possible EventEmitter memory leak detected. 11 listeners added. Use emitter.setMaxListeners() to increase limit.
Trace
    at Socket.EventEmitter.addListener (events.js:160:15)
    at Socket.Readable.on (_stream_readable.js:689:33)
    at Socket.EventEmitter.once (events.js:185:8)
    at Request.onResponse (/home/stefan/buzzr/node_modules/request/request.js:713:25)
    at ClientRequest.g (events.js:180:16)
    at ClientRequest.EventEmitter.emit (events.js:95:17)
    at HTTPParser.parserOnIncomingClient [as onIncoming] (http.js:1688:21)
    at HTTPParser.parserOnHeadersComplete [as onHeadersComplete] (http.js:121:23)
    at Socket.socketOnData [as ondata] (http.js:1583:20)
    at TCP.onread (net.js:527:27)


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


exclude
=======
job offers?
'akamai error'
'for sale', 'to rent', 'to let' => unless in buzzr topic?
'50% sale' => get rid of offers and promotions?


pro version: realtime
=====================
- socket.io: send link by link
