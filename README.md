# web3_gateway

# Problem:
How to let the average user resolve Web3 domains ( like .crypto ) easily.

# Current Solution:
The current solution is to install a browser plugin. The problem is that the plugin is so slow and unreliable that Web3 is not currently usable. Another problem is that the plugin only affects the browser you install it in. You have to install a plugin separately for each browser, and even then, you can't access the Web3 domain from outside the browsers ( say, from the command line ).


# New Solution:
A caching DNS server that looks up domains on the polygon blockchain.

This software makes web3 more accessible by resolving web3 domains, such as .crypto, to IP addresses in a fast and efficient manner.

To be able to resolve a .crypto domain to an IP address, one would have to run this DNS server and add its IP address to the bottom of one's DNS server chain.

All the usual web2 domains, such as .com, would continue to function as usual. Lookups for .crypto would fall to our server.

This simple DNS change could be done via a thin app.


***Dedication:*** Melody Sandy

—Ashwin Dixit <ashwin at ownlifeful dot com>
