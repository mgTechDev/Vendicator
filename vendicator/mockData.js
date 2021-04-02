// MOCK DATA
const user = {
  firstName: 'Jose',
  lastName: 'Sanchez',
  profilePic: 'https://resources.premierleague.com/premierleague/photos/players/250x250/man134.png',
  city: 'San Diego',
  state: 'CA',
  email: 'jose@gmail.com',
};

const vendors = [
  {
    name: 'El Elote Loco',
    mobilityType: 'Mobile',
    locationType: 'Traveling Cart',
    category: 'food',
    slogan: 'Ricos elotes!!',
    description: 'Elotes frescos con todo el chile que quieran! Vengan probrar unos elotes riquisimos!',
    photos: [
      'https://thebottomline.as.ucsb.edu/wp-content/uploads/2016/10/eloteman_markLasa2WEB.jpg',
      'https://remezcla.com/wp-content/uploads/2017/07/Elotero.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MPOHVFwVdLyId9zmuWDKh4Y1vwrMpeWduxDuC1GA89cGucP2DTbQLx1R9Kq6BUq2cPI&usqp=CAU',
      'https://i.pinimg.com/736x/5c/22/46/5c2246d0ddbd6735c1674d4863ca48b8.jpg'
    ],
    online: false
  },
  {
    name: 'Fruta Buenisima',
    mobilityType: 'Stationary',
    locationType: 'Chavez Park',
    category: 'fruit',
    slogan: 'Las mejores frutas en San Diego',
    description: 'Hago fruta con sal limon y chile, como lo quieran. I make fruit with salt limon and chilly',
    photos: [
      'https://hispanickitchen-nglmedia.netdna-ssl.com/wp-content/uploads/2017/05/Mexican-Fruit-Cups-3-2-700x500.jpg',
      'https://animalgourmet.com/wp-content/uploads/2019/10/chamoy-casero2-e1570661909323.jpg',
      'https://www.piloncilloyvainilla.com/wp-content/uploads/2019/03/verduras-mexicanas-con-chamoy-6-of-6.jpg'
    ],
    online: false
  },
  {
    name: 'Chicharrones y Tamales Charros',
    mobilityType: 'Mobile',
    locationType: 'Near Prado Park',
    category: 'food',
    slogan: 'Los Chicharrones mas ricos',
    description: 'Tengo chicharrones ricos, y tamales frescos. I have delicious chicharrones, and fresh tamales.',
    photos: [
      'https://cdn2.celebritax.com/sites/default/files/styles/watermark_100/public/recetas/chicharrones.jpg',
      'https://mdyo8n9ckd3g81vs1qipy6bt-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/636707157597707046-Tony-s-Tamales-1920x1008.jpg',
      'https://blog.amigofoods.com/wp-content/uploads/2020/08/chicharron-fried-food.jpg'
    ],
    online: false
  },
  {
    name: 'Rosas Yard Sale',
    mobilityType: 'Stationary',
    locationType: 'House',
    category: 'garage sale',
    slogan: 'Yard sale!',
    description: 'Yard sale with a lot of usefule items. Some antiques, sports equipment, and much more!',
    photos: [
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Yard_Sale_Northern_CA_2005.JPG',
      'https://www.newcitymovers.com/content/uploads/2018/08/Yard-Sale.jpg'
    ],
    online: false
  },
  {
    name: 'Fitness At The Park',
    mobilityType: 'Stationary',
    locationType: 'Chavez Park',
    category: 'fitness',
    slogan: 'Workout outside',
    description: 'Come Workout at the park! I have all of the equipment you need, and all in the fresh air. We can workout as a group, or we can set up one on ones. ',
    photos: [
      'https://www.projectboldlife.com/images/2021/01/Holistic-Health-Trends-to-Watch-For-in-2021-featured.jpg',
      'https://articles.a1supplements.com/wp-content/uploads/2017/05/BPI-WorkOutside5-18.jpg',
      'https://wpcdn.us-east-1.vip.tn-cloud.net/www.kusi.com/content/uploads/2020/08/WORKING-OUT-OUTSIDE-COVID19.png',
      'https://media.gettyimages.com/photos/man-in-sports-clothing-working-out-outside-picture-id670815352'
    ],
    online: false
  },
];

const categories = ['food stand', 'photography', 'fitness', 'theater', 'concert', 'repair', 'yard sales', 'souvegnir stand', 'dessert stand']

const data = {
  user,
  vendors,
  categories
};

export default data;