import { bathrooms } from "../../Components/Album/Photos/Bathrooms";
import { doublerooms } from "../../Components/Album/Photos/DoubleRooms";
import { twinbedrooms } from "../../Components/Album/Photos/TwinBedrooms";
import { singlerooms } from "../../Components/Album/Photos/SingleRooms";
import { triplerooms } from "../../Components/Album/Photos/TripleRooms";

const rooms = [
  {
    src: singlerooms[0].src,
    name: "Single Rooms",
    path: "singlerooms",
    data: singlerooms
  },
  {
    src: doublerooms[0].src,
    name: "Double Rooms",
    path: "doublerooms",
    data: doublerooms
  },
  {
    src: twinbedrooms[0].src,
    name: "Twin Bedrooms",
    path: "twinbedrooms",
    data: twinbedrooms
  },
  {
    src: triplerooms[0].src,
    name: "Triple Rooms",
    path: "triplerooms",
    data: triplerooms
  },
  {
    src: bathrooms[0].src,
    name: "Bathrooms",
    path: "bathrooms",
    data: bathrooms
  }
];

export default rooms;
