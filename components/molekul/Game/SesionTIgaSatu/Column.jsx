import { Droppable } from "react-beautiful-dnd";
import Choice from "./Choice";
import propTypes from "prop-types";

function Column({ image, choices }) {
  return (
    <div className="w-32 border rounded">
      <div className="w-full p-2">
        <img src={image.url} />
      </div>
      <Droppable droppableId={image.id}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="mt-2 w-full border-t text-center"
          >
            {choices.map((choice, index) => (
              <Choice key={choice.id} choice={choice} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

Column.propTypes = {
  image: propTypes.object,
  choices: propTypes.object,
};

export default Column;
