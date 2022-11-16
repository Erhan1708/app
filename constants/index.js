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
   //'По Умолчанию', 'Рейтинг (низкая>высокая)', 'Рейтинг (высокая>низкая)', 'Цена (низкая>высокая)', 'Цена (высокая>низкая)', 'Сначала новинки'

   {
      name: 'По Умолчанию',
      sortProperty: ''
   },
   {
      name: 'Рейтинг (низкая>высокая)',
      sortProperty:'-rating',
   },
   {
      name: 'Рейтинг (высокая>низкая)',
      sortProperty:'rating',
   },
   {
      name: 'Цена (низкая>высокая)',
      sortProperty:'-price',
   },
   {
      name: 'Цена (высокая>низкая)',
      sortProperty:'price',
   },
   {
      name:'Сначала новинки',
      sortProperty:'productConditionStatus',
   }
]