import NewMeetupForm from "../Components/MeetsUp/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetsup() {
  const navigate = useNavigate()
  function dataHandler(meetup) {
    fetch("https://fir-test-f878d-default-rtdb.firebaseio.com/meetup.json", {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }
  return (
    <div>
      <NewMeetupForm meetupdata={dataHandler} />
    </div>
  );
}

export default NewMeetsup;
