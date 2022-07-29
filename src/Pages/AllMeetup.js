import { useState, useEffect } from "react";
import MeetupList from "../Components/MeetsUp/MeetupList";
import axios from "axios";


// const Dummy = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

function AllMeetup() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadMeetup, setLoadMeetup] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://fir-test-f878d-default-rtdb.firebaseio.com/meetup.json")
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .then((data) => {
        const newValue = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          newValue.push(meetup);
        }
        setIsLoading(false);
        setLoadMeetup(newValue);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading..</p>
      </section>
    );
  }
  return (
    <div>
      {/* <ul>
        {Dummy.map((data) => {
          return <li>{data.title}</li>;
        })}
      </ul> */}
      <MeetupList data={loadMeetup} />
    </div>
  );
}

export default AllMeetup;
