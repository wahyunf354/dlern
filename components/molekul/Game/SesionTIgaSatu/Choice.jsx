import propTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";

function Choice({ choice, index }) {
  return (
    <Draggable draggableId={choice.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={` p-1 text-sm border rounded-sm m-1 ${
            snapshot.isDragging ? "border-green-900" : "border-gray-300"
          } bg-white flex`}
        >
          {choice.content}
        </div>
      )}
    </Draggable>
  );
}

Choice.propTypes = {
  choice: propTypes.object,
  index: propTypes.number,
};

export default Choice;
