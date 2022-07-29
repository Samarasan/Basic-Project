import MeetupItems from "./MeetupItems";
import lists from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={lists.list}>
      {props.data.map((e) => {
        return (
          <MeetupItems
            key={e.id}
            id={e.id}
            image={e.image}
            address={e.Address}
            title={e.title}
            description={e.desc}
          />
        );
      })}
    </ul>
  );
}

export default MeetupList;
