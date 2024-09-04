import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  foodDetail=[{
    id:1,
    foodName:"paneer",
    foodDetails:"Paneer masalaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    foodPrice:200,
    foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-CpeKUn9-hgPgHryIUYbqd27XdkNBJ3UsBJETZ8UJ&s",
  },

  {
    id:2,
    foodName:"Sandwich",
    foodDetails:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    foodPrice:200,
    foodImg:"https://plus.unsplash.com/premium_photo-1671559021919-19d9610c8cad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FuZHdpY2h8ZW58MHx8MHx8fDA%3D",
  },
  {
    id:3,
    foodName:"Halwa",
    foodDetails:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    foodPrice:200,
    foodImg:"https://media.istockphoto.com/id/1256953975/photo/indian-traditional-sweet-plain-semolinasuji-halwa-also-known-as-sweet-rava-sheera-or-shira.webp?b=1&s=170667a&w=0&k=20&c=Sl_2hu90giuEhUnt1Zo-mOaKuNivWsvDW8YhsfL7fCQ=",
  },
  {
    id:4,
    foodName:"pizza",
    foodDetails:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    foodPrice:200,
    foodImg:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id:5,
    foodName:"noodles",
    foodDetails:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    foodPrice:200,
    foodImg:"https://images.unsplash.com/photo-1607328874071-45a9cd600644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5vb2RsZXN8ZW58MHx8MHx8fDA%3D",
  },
]
}
