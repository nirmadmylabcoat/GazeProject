// import house images
import model5a from '/images/model5a.jpg';
import model7a from '/images/model7a.jpg';
import model8a from '/images/model8a.jpg';
import model9a from '/images/model9a.jpg';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import model5b from '/images/model5b.jpg';
import model7b from '/images/model7b.jpg';
import model8b from '/images/model8b.jpg';
import model9b from '/images/model9b.jpg';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

const housesData = [
    {
      id: 1,
      gender: 'men',
      type: 'shirts',
      name: 'Denim Full Sleeve Shirt',
      description: ' ',
      image: model5a,
      imageHover: model5b,
      price: '1199',
    },
    {
      id: 2,
      gender: 'men',
      type: 'SHIRTS',
      name: 'Casual Printed Shirt',
      description: 'Casual Printed Shirt',
      image: model7a,
      imageHover: model7b,
      price: '1499',
    },
    {
      id: 3,
      gender: 'men',
      type: 'shirts',
      name: 'Off White Button Up Shirt',
      description: 'Off White Button Up Shirt',
      image: model8a,
      imageHover: model8b,
      price: '799',
    },
    {
      id: 4,
      gender: 'men',
      type: 'oversized t-shirts',
      name: 'Rugrats Oversized Tee',
      description: 'Rugrats Oversized Tee',
      image: model9a, 
      imageHover: model9b,
      price: '799',
    },
    {
      id: 5,
      type: 'House',
      name: 'House 5',
      description:
        'In a serene garden setting, this elegant home exudes timeless charm and tranquility. From the inviting entrance to the sunlit living spaces, every detail speaks of sophistication. The gourmet kitchen and cozy master suite offer comfort and luxury, while outdoor areas beckon for relaxation and al fresco dining. Welcome to a dreamy retreat where every moment is a testament to refined living.',
      image: House5,
      imageLg: House5Lg,
      country: 'United States',
      address: '28 Westport Dr. Warminster, PA 18974',
      bedrooms: '5',
      bathrooms: '3',
      surface: '4200 sq ft',
      year: '2015',
      price: '210000',
      gender: 'women',
      agent: {
        image: Agent5,
        name: 'Grover Robinson',
        phone: '0123 456 78910',
      },
    },
    {
      id: 6,
      type: 'House',
      name: 'House 6',
      description:
        'In a serene garden setting, this elegant home exudes timeless charm and tranquility. From the inviting entrance to the sunlit living spaces, every detail speaks of sophistication. The gourmet kitchen and cozy master suite offer comfort and luxury, while outdoor areas beckon for relaxation and al fresco dining. Welcome to a dreamy retreat where every moment is a testament to refined living.',
      image: House6,
      imageLg: House6Lg,
      country: 'Canada',
      address: '32 Pawnee Street Butte, MT 59701',
      bedrooms: '6',
      bathrooms: '3',
      surface: '6200 sq ft',
      year: '2014',
      price: '220000',
      gender: 'women',
      agent: {
        image: Agent6,
        name: 'Karen Sorensen',
        phone: '0123 456 78910',
      },
    },
    {
      id: 7,
      type: 'Apartment',
      name: 'Apartment 1',
      description:
        'In a serene garden setting, this elegant home exudes timeless charm and tranquility. From the inviting entrance to the sunlit living spaces, every detail speaks of sophistication. The gourmet kitchen and cozy master suite offer comfort and luxury, while outdoor areas beckon for relaxation and al fresco dining. Welcome to a dreamy retreat where every moment is a testament to refined living.',
      image: Apartment1,
      imageLg: Apartment1Lg,
      country: 'Canada',
      address: '32 Pawnee Street Butte, MT 59701',
      bedrooms: '2',
      bathrooms: '1',
      surface: '1200 sq ft',
      year: '2012',
      price: '20000',
      gender: 'women',
      agent: {
        image: Agent7,
        name: 'Jawhar Shamil Naser',
        phone: '0123 456 78910',
      },
    },
    {
      id: 8,
      type: 'Apartment',
      name: 'Apartment 2',
      description:
        'In a serene garden setting, this elegant home exudes timeless charm and tranquility. From the inviting entrance to the sunlit living spaces, every detail speaks of sophistication. The gourmet kitchen and cozy master suite offer comfort and luxury, while outdoor areas beckon for relaxation and al fresco dining. Welcome to a dreamy retreat where every moment is a testament to refined living.',
      image: Apartment2,
      imageLg: Apartment2Lg,
      country: 'United States',
      address: '28 Westport Dr. Warminster, PA 18974',
      bedrooms: '3',
      bathrooms: '1',
      surface: '1000 sq ft',
      year: '2011',
      price: '30000',
      agent: {
        image: Agent8,
        name: 'Juana Douglass',
        phone: '0123 456 78910',
      },
    },
    {
      id: 9,
      type: 'Apartment',
      name: 'Apartment 3',
      description:
        'In a serene garden setting, this elegant home exudes timeless charm and tranquility. From the inviting entrance to the sunlit living spaces, every detail speaks of sophistication. The gourmet kitchen and cozy master suite offer comfort and luxury, while outdoor areas beckon for relaxation and al fresco dining. Welcome to a dreamy retreat where every moment is a testament to refined living.',
      image: Apartment3,
      imageLg: Apartment3Lg,
      country: 'United States',
      address: '84 Woodland St. Cocoa, FL 32927',
      bedrooms: '2',
      bathrooms: '1',
      surface: '1100 sq ft',
      year: '2011',
      price: '40000',
      agent: {
        image: Agent9,
        name: 'Jerry Schenck',
        phone: '0123 456 78910',
      },
    },
    {
      id: 10,
      type: 'House',
      name: 'House 7',
      description:
        'In a serene garden setting, this elegant home exudes timeless charm and tranquility. From the inviting entrance to the sunlit living spaces, every detail speaks of sophistication. The gourmet kitchen and cozy master suite offer comfort and luxury, while outdoor areas beckon for relaxation and al fresco dining. Welcome to a dreamy retreat where every moment is a testament to refined living.',
      image: House7,
      imageLg: House7Lg,
      country: 'Canada',
      address: '7240C Argyle St. Lawndale, CA 90260',
      bedrooms: '5',
      bathrooms: '3',
      surface: '3200 sq ft',
      year: '2015',
      price: '117000',
      agent: {
        image: Agent10,
        name: 'Vera Levesque',
        phone: '0123 456 78910',
      },
    },
    {
      id: 11,
      type: 'House',
      name: 'House 8',
      description:
        'In a serene garden setting, this elegant home exudes timeless charm and tranquility. From the inviting entrance to the sunlit living spaces, every detail speaks of sophistication. The gourmet kitchen and cozy master suite offer comfort and luxury, while outdoor areas beckon for relaxation and al fresco dining. Welcome to a dreamy retreat where every moment is a testament to refined living.',
      image: House8,
      imageLg: House8Lg,
      country: 'Canada',
      address: '798 Talbot St. Bridgewater, NJ 08807',
      bedrooms: '7',
      bathrooms: '2',
      surface: '2200 sq ft',
      year: '2019',
      price: '145000',
      agent: {
        image: Agent11,
        name: 'Sofia Gomes',
        phone: '0123 456 78910',
      },
    },
    {
      id: 12,
      type: 'House',
      name: 'House 9',
      description:
        'In a serene garden setting, this elegant home exudes timeless charm and tranquility. From the inviting entrance to the sunlit living spaces, every detail speaks of sophistication. The gourmet kitchen and cozy master suite offer comfort and luxury, while outdoor areas beckon for relaxation and al fresco dining. Welcome to a dreamy retreat where every moment is a testament to refined living.',
      image: House9,
      imageLg: House9Lg,
      country: 'United States',
      address: '2 Glen Creek St. Alexandria, VA 22304',
      bedrooms: '4',
      bathrooms: '4',
      surface: '4600 sq ft',
      year: '2015',
      price: '139000',
      agent: {
        image: Agent12,
        name: 'Raymond Hood',
        phone: '0123 456 78910',
      },
    },
    {
      id: 13,
      type: 'House',
      name: 'House 10',
      description:
        'In a serene garden setting, this elegant home exudes timeless charm and tranquility. From the inviting entrance to the sunlit living spaces, every detail speaks of sophistication. The gourmet kitchen and cozy master suite offer comfort and luxury, while outdoor areas beckon for relaxation and al fresco dining. Welcome to a dreamy retreat where every moment is a testament to refined living.',
      image: House10,
      imageLg: House10Lg,
      country: 'Canada',
      address: '84 Woodland St. Cocoa, FL 32927',
      bedrooms: '5',
      bathrooms: '2',
      surface: '5200 sq ft',
      year: '2014',
      price: '180000',
      agent: {
        image: Agent1,
        name: 'Patricia Tullert',
        phone: '0123 456 78910',
      },
    },
    {
      id: 14,
      type: 'House',
      name: 'House 11',
      description:
        'In a serene garden setting, this elegant home exudes timeless charm and tranquility. From the inviting entrance to the sunlit living spaces, every detail speaks of sophistication. The gourmet kitchen and cozy master suite offer comfort and luxury, while outdoor areas beckon for relaxation and al fresco dining. Welcome to a dreamy retreat where every moment is a testament to refined living.',
      image: House11,
      imageLg: House11Lg,
      country: 'United States',
      address: '28 Westport Dr. Warminster, PA 18974',
      bedrooms: '5',
      bathrooms: '2',
      surface: '3200 sq ft',
      year: '2011',
      price: '213000',
      agent: {
        image: Agent2,
        name: 'Daryl Hawker',
        phone: '0123 456 78910',
      },
    },
    {
      id: 15,
      type: 'House',
      name: 'House 12',
      description:
        'In a serene garden setting, this elegant home exudes timeless charm and tranquility. From the inviting entrance to the sunlit living spaces, every detail speaks of sophistication. The gourmet kitchen and cozy master suite offer comfort and luxury, while outdoor areas beckon for relaxation and al fresco dining. Welcome to a dreamy retreat where every moment is a testament to refined living.',
      image: House12,
      imageLg: House12Lg,
      country: 'Canada',
      address: '32 Pawnee Street Butte, MT 59701',
      bedrooms: '4',
      bathrooms: '3',
      surface: '5200 sq ft',
      year: '2013',
      price: '221000',
      agent: {
        image: Agent3,
        name: 'Amado Smith',
        phone: '0123 456 78910',
      },
    },
    {
      id: 16,
      type: 'Apartment',
      name: 'Apartment 16',
      description:
        'In a serene garden setting, this elegant home exudes timeless charm and tranquility. From the inviting entrance to the sunlit living spaces, every detail speaks of sophistication. The gourmet kitchen and cozy master suite offer comfort and luxury, while outdoor areas beckon for relaxation and al fresco dining. Welcome to a dreamy retreat where every moment is a testament to refined living.',
      image: Apartment4,
      imageLg: Apartment4Lg,
      country: 'Canada',
      address: '32 Pawnee Street Butte, MT 59701',
      bedrooms: '2',
      bathrooms: '1',
      surface: '1300 sq ft',
      year: '2011',
      price: '21000',
      agent: {
        image: Agent4,
        name: 'Kaitlyn Gonzalez',
        phone: '0123 456 78910',
      },
    },
    {
      id: 17,
      type: 'Apartment',
      name: 'Apartment 17',
      description:
        'In a serene garden setting, this elegant home exudes timeless charm and tranquility. From the inviting entrance to the sunlit living spaces, every detail speaks of sophistication. The gourmet kitchen and cozy master suite offer comfort and luxury, while outdoor areas beckon for relaxation and al fresco dining. Welcome to a dreamy retreat where every moment is a testament to refined living.',
      image: Apartment5,
      imageLg: Apartment5Lg,
      country: 'United States',
      address: '28 Westport Dr. Warminster, PA 18974',
      bedrooms: '3',
      bathrooms: '1',
      surface: '1000 sq ft',
      year: '2012',
      price: '32000',
      agent: {
        image: Agent5,
        name: 'Grover Robinson',
        phone: '0123 456 78910',
      },
    },
    {
      id: 18,
      type: 'Apartment',
      name: 'Apartment 18',
      description:
        'In a serene garden setting, this elegant home exudes timeless charm and tranquility. From the inviting entrance to the sunlit living spaces, every detail speaks of sophistication. The gourmet kitchen and cozy master suite offer comfort and luxury, while outdoor areas beckon for relaxation and al fresco dining. Welcome to a dreamy retreat where every moment is a testament to refined living.',
      image: Apartment6,
      imageLg: Apartment6Lg,
      country: 'Canada',
      address: '84 Woodland St. Cocoa, FL 32927',
      bedrooms: '3',
      bathrooms: '1',
      surface: '1200 sq ft',
      year: '2010',
      price: '38000',
      agent: {
        image: Agent6,
        name: 'Karen Sorensen',
        phone: '0123 456 78910',
      },
    },
  ];
export default housesData;