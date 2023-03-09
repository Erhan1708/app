export const DEFAULT_IMG = '/default-store-350x350.jpg'

export const navBar = [
   {
      id: 1,
      title: 'Home',
      path: '/'
   },
   {
      id: 2,
      title: 'All products',
      path: '/products'
   },
   {
      id: 3,
      title: 'Support',
      path: '/support'
   }
]

export const footerNavBar = [
   {
      
   }
]

export const list = [
   {
      id:1,
      name: 'По Умолчанию',
      sortProperty: ''
   },
   {
      id:2,
      name: 'Рейтинг (низкая>высокая)',
      sortProperty:'-rating',
   },
   {
      id:3,
      name: 'Рейтинг (высокая>низкая)',
      sortProperty:'rating',
   },
   {
      id:4,
      name: 'Цена (низкая>высокая)',
      sortProperty:'-price',
   },
   {
      id:5,
      name: 'Цена (высокая>низкая)',
      sortProperty:'price',
   },
   {
      id:6,
      name:'Сначала новинки',
      sortProperty:'productConditionStatus',
   }
]