import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import Button from "../../../atom/Button";
import Fade from "react-reveal";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import Column from "./Column";

const feckSoal = {
  choices: {
    "choice-1": { id: "choice-1", content: "Tee" },
    "choice-2": { id: "choice-2", content: "Taa" },
    "choice-3": { id: "choice-3", content: "Ikan" },
    "choice-4": { id: "choice-4", content: "Coklat" },
  },
  images: {
    "image-1": {
      id: "image-1",
      url:
        "https://firebasestorage.googleapis.com/v0/b/d-lern.appspot.com/o/soal%2F001-tea.png?alt=media&token=291b2819-8403-4a0c-9d0b-5cc921b4e7ea",
      choiceIds: [],
    },
    "image-2": {
      id: "image-2",
      url:
        "https://firebasestorage.googleapis.com/v0/b/d-lern.appspot.com/o/soal%2F002-water.png?alt=media&token=c491cb33-7f10-4809-8248-4e55d973ec13",
      choiceIds: [],
    },
    "image-3": {
      id: "image-3",
      url:
        "https://firebasestorage.googleapis.com/v0/b/d-lern.appspot.com/o/soal%2F003-milk-bottle.png?alt=media&token=d8133634-42b9-4ab2-ba9a-aaf8419a2f00",
      choiceIds: [],
    },
    "image-4": {
      id: "image-4",
      url:
        "https://firebasestorage.googleapis.com/v0/b/d-lern.appspot.com/o/soal%2F004-chocolate.png?alt=media&token=905d4179-2ca7-47ea-a7dd-dfc7c391bd4c",
      choiceIds: [],
    },
    "image-5": {
      id: "image-5",
      url: "",
      choiceIds: ["choice-1", "choice-2", "choice-3", "choice-4"],
    },
  },
  imagesOrder: ["image-1", "image-2", "image-3", "image-4", "image-5"],
};

function SesionDuaDua({ question, handleClickAnswer, handleNextQuestions }) {
  const { soal, jawaban } = question;
  const [dataSoal, setDataSoal] = useState(soal);
  const [data, setData] = useState(feckSoal);

  // TODO: Melanjutkan function ketika user banar pada soal ni
  const handleClick = () => {
    handleNextQuestions();
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.images[source.droppableId];
    const finist = data.images[destination.droppableId];

    if (destination.droppableId !== "image-5") {
      if (finist.choiceIds.length === 1) {
        return;
      }
    }

    if (start === finist) {
      const newChoiceIds = Array.from(start.choiceIds);
      newChoiceIds.splice(source.index, 1);
      newChoiceIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        choiceIds: newChoiceIds,
      };

      const newData = {
        ...data,
        images: {
          ...data.images,
          [newColumn.id]: newColumn,
        },
      };

      setData(newData);
      return;
    }

    const newStartChoiceIds = Array.from(start.choiceIds);
    newStartChoiceIds.splice(source.index, 1);

    const newStart = {
      ...start,
      choiceIds: newStartChoiceIds,
    };

    const newFinistChoiceIds = Array.from(finist.choiceIds);
    newFinistChoiceIds.splice(destination.index, 0, draggableId);

    const newFinist = {
      ...finist,
      choiceIds: newFinistChoiceIds,
    };

    const newData = {
      ...data,
      images: {
        ...data.images,
        [newStart.id]: newStart,
        [newFinist.id]: newFinist,
      },
    };

    setData(newData);

    return;
  };

  return (
    <Fade>
      <main className="container w-screen lg:w-1/2 lg:px-28 mx-auto flex flex-col items-center p-5 relative">
        {true ? (
          <div className="w-full h-40 flex justify-center items-center">
            <h1 className="text-2xl text-gray-700">Semangat terus ya!!</h1>
          </div>
        ) : (
          <DragDropContext onDragEnd={onDragEnd}>
            <h1 className="col-span-2 text-lg text-gray-400 py-5">
              Pindahkan kata ke jawaban yang benar.
            </h1>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {data.imagesOrder.map((imageId) => {
                const image = data.images[imageId];
                const choices = image.choiceIds.map(
                  (choiceId) => data.choices[choiceId]
                );
                return (
                  <Column key={image.id} image={image} choices={choices} />
                );
              })}
            </div>
          </DragDropContext>
        )}
        <Button onClick={handleClick} hasShadow hasRounded isPrimary>
          Lanjut
        </Button>
      </main>
    </Fade>
  );
}

export default SesionDuaDua;
