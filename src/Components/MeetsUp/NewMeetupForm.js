import formcss from "./NewMeetupForm.module.css";
import { useRef } from "react";
import Card from "../ui/Card";

function NewMeetupForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const AddressRef = useRef();
  const descriptionRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const newTitile = titleRef.current.value;
    const newImage = imageRef.current.value;
    const newAddress = AddressRef.current.value;
    const newDesc = descriptionRef.current.value;
    const newForm = {
        title:newTitile,
        image:newImage,
        Address:newAddress,
        desc:newDesc
    }
    props.meetupdata(newForm)
}

  return (
    <Card>
      <form className={formcss.form} onSubmit={submitHandler}>
        <div className={formcss.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            ref={titleRef}
            required
          />
        </div>
        <div className={formcss.control}>
          <label htmlFor="imageurl">Image Url</label>
          <input
            type="url"
            required
            id="image"
            placeholder="URL"
            ref={imageRef}
          />
        </div>
        <div className={formcss.control}>
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            required
            id="address"
            placeholder="Address"
            ref={AddressRef}
          />
        </div>
        <div className={formcss.control}>
          <label htmlFor="description">Description</label>
          <textarea
            row="5"
            required
            id="desc"
            placeholder="Description"
            ref={descriptionRef}
          />
        </div>
      </form>
      <div className={formcss.actions}>
        <button onClick={submitHandler}>Submit</button>
      </div>
    </Card>
  );
}

export default NewMeetupForm;
