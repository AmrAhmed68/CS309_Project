let products = [
      {
        id: '1',
        title : 'V14 Gen 2',
        description : 'Sleek, powerful, & secure .....',
        price: 14999,
        brand: 'Lenovo',
        images:'https://www.lenovo.com/medias/lenovo-laptops-v-series-v14-gen2-14inch-intel-series.png?context=bWFzdGVyfHJvb3R8NTI2ODR8aW1hZ2UvcG5nfGgzYi9oM2EvMTQxODY5MTkzMjk4MjIucG5nfGY1YjliYzUxOWQzMjhkMTNkNDg4ZjY0YTM0ZTIxZjgyOWFkYjE0MjYzZjIwMzNlNjRhN2VjMTA5ZDdjYzkxNzY'
      },
      {
        id: '2',
        title: 'V15 Gen 2',
        description: 'Perfect for remote work...',
        price: 10999,
        brand: 'Lenovo',
        images:'https://www.lenovo.com/medias/lenovo-laptops-thinkbook-series-c-thinkbook-15-gen-2-amd-series.png?context=bWFzdGVyfHJvb3R8OTY3MTR8aW1hZ2UvcG5nfGgxYS9oMGEvMTQxOTA0ODI5ODA4OTQucG5nfGRjYzA3ZTFlN2RiZTJiYzE2NjU1M2NkZmJkZWRlZDQ4YjQ2YjZlOTllOTExNjRkYTIzYTc2ZTQ2OWM4OTM3NDk'
     },
      {
        id: '3',
        title: '16p Gen 2',
        description: 'Robust security features...',
        price: 11700,
        brand:'Lenovo',
        images:'https://www.lenovo.com/medias/lenovo-laptop-thinkbook-16p-gen-2-16-amd-series-thumbnail.png?context=bWFzdGVyfHJvb3R8MTExNzA5fGltYWdlL3BuZ3xoYzAvaGJlLzE0MTkwNTQ3ODYxNTM0LnBuZ3w1MmQ0NGQyMWIzOTRkMDFhZDdmYmI1ZjhlMDQwZjY4NzI1ZmVhMTNhNjY3MGY0YzAwZTVlZTA3NzA5M2U4Njk5'
      }, 
      { 
      id: '4',
      title: '4G LTE',
      description: 'All-day battery life....',
      price: 13000,
      brand: 'Lenovo',
      images:'https://www.lenovo.com/medias/lenovo-laptop-ideapad-4g-series.png?context=bWFzdGVyfHJvb3R8MTA5MTgxfGltYWdlL3BuZ3xoZTkvaGZkLzE0MzM5NTc2ODg5Mzc0LnBuZ3wyNTIzNjFiN2EzMDA3Y2M5MDcwNmI1MzhjZTAwNjc5NjZmNzM4ODVlOWNhODNhNDgyMDk2YTgyZDk5ZGJjYjNk'
    }, 
    {
        id: '5',
        title: '5 Pro Gen 6',
        description: 'Up to AMD Ryzen™ 9-59...',
        price: 40000,
        brand:'Lenovo',
        images:'https://www.lenovo.com/medias/lenovo-laptops-ideapad-500-series-5-pro-gen-6-16-amd-front.png?context=bWFzdGVyfHJvb3R8ODY1MTV8aW1hZ2UvcG5nfGgzMi9oODYvMTQxOTA1NDQyNTcwNTQucG5nfGJkNGZhODdkMTdhMzk3ODdmNzJlZjI2N2JhNzMxZjBjZmE2MWE0ZTgzZWVmNDkzOWE2NWQyNzU2ODNjNTFmNzE'

      },{
        id: '6',
        title : 'T15p Gen 3',
        description : 'Choice of stunning display...',
        price: 14999,
        brand: 'Lenovo',
        images:'https://www.lenovo.com/medias/lenovo-laptops-thinkpad-t15p-gen-3-15-intel-series.png?context=bWFzdGVyfHJvb3R8NDcxMzQzfGltYWdlL3BuZ3xoZmEvaDQyLzE0NDYyNTc1MjgwMTU4LnBuZ3wyNGIzNWFlNWE0MjdkYTdiMmI1NThlZjM5NGI0OGNiM2U0MzgyYmY2MjY2MjEyZjQwNDFlYTFjYjkxZTA4YTkz'
     },
      {
        id: '7',
        title: 'P17 Gen 2',
        description: ' Amazing display options...',
        price: 12999,
        brand: 'Lenovo',
        images:
          'https://www.lenovo.com/medias/lenovo-laptops-thinkpad-t15p-gen-3-15-intel-series.png?context=bWFzdGVyfHJvb3R8NDcxMzQzfGltYWdlL3BuZ3xoZmEvaDQyLzE0NDYyNTc1MjgwMTU4LnBuZ3wyNGIzNWFlNWE0MjdkYTdiMmI1NThlZjM5NGI0OGNiM2U0MzgyYmY2MjY2MjEyZjQwNDFlYTFjYjkxZTA4YTkz'
     },
      {
        id: '8',
        title: 'Gaming 3i Gen 6',
        description: 'Powerful discrete graphics...',
        price: 19000,
        brand: 'Lenovo',
        images:'https://www.lenovo.com/medias/lenovo-laptop-ideapad-gaming-3i-gen-6-15-intel-series-thumbnail.png?context=bWFzdGVyfHJvb3R8ODc4NjR8aW1hZ2UvcG5nfGg4MS9oNGUvMTQxOTA0NTk1ODQ1NDIucG5nfDU3NTdhMWI5MjdhMTg0NWM5NjFiOGRlMjFhYWUyMmUwMzQ2ZTE5NDkwM2U0NWVhNDI2ZTU3MzIwNjA5ZDQ4YTI'

      }, 
      { 
      id: '9',
      title: 'Slim 7 Pro Gen 6',
      description: 'AMD Ryzen™ 5000 Series...',
      price: 23000,
      brand: 'Lenovo',
      images:'https://www.lenovo.com/medias/lenovo-laptop-yoga-slim-7-pro-gen-6-16-amd-series-thumbnail.png?context=bWFzdGVyfHJvb3R8MTAxMzcwfGltYWdlL3BuZ3xoYmIvaDljLzE0MTkyNDM0OTA1MTE4LnBuZ3wyYmVkZTY4ZmI4NDU2MTQwZDNiNmY1OGQzYzAwNTVmYmFmYjM0MTA2MzRkYWIwMDcyN2U2MGQ0MjNjN2IzYTcw'

    }, 
    {
        id: '10',
        title: 'V17 Gen 2',
        description: 'Massive display & numeric...',
        price: 35600,
        brand: 'Lenovo',
        images:'https://www.lenovo.com/medias/lenovo-laptops-v-series-v17-gen2-intel-series.png?context=bWFzdGVyfHJvb3R8NjYzMjR8aW1hZ2UvcG5nfGgwZi9oNzQvMTQzMjU2NDAwMzYzODIucG5nfGIyNTc3NzkxNTdmYzk3ZGI0ZDY1MzZiMjI3ZDViMWRhZDNmNDVjMjBlY2ExMjNmMDcxZWFiOWRiZjViMDZiYWI'

      }         
]

module.exports = products;