import Img1 from "../assets/profile.jpeg";
import Img2 from "../assets/profile1.jpeg";

export const data = [
   {
      name: 'Caressa Jessalin',
      description: "Lorem ipsum dolor sit am...",
      profileImg: Img1,
      id: 1
   },
   {
      name: 'Letty Bride',
      description: "Lorem ipsum dolor sit am...",
      profileImg: Img2,
      id: 2
   }
];

export const chats = [
   {
      userInfo: {
         username: "Caressa Jessalin",
         proImg: Img1
      },
      chat: {
         sender: ["Hello!", "Yes, my order according to application. Thank you", "Are you Therese"],
         receiver: ["Hello👋", "Your order according to application yes?", "How can I help You?"], 
      }
   },
   {
      userInfo: {
         username: "Letty Bride",
         proImg: Img2
      },
      chat: {
         sender: ["Hello!", "Yes, my order according to application. Thank you", "Are you Therese"],
         receiver: ["Hello👋", "Your order according to application yes?", "How can I help You?"], 
      }
   }
]