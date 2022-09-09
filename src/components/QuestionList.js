import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({listOfQuestions, onDelete, onUpdate}) {

  const listQuestions = listOfQuestions.map((question) => {
    return (
      <React.Fragment key={question.id}>
        <QuestionItem 
          question={question} 
          onDelete={onDelete}
          onUpdate={onUpdate}  
        />
      </React.Fragment>
    )
  })


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{listQuestions}</ul>
    </section>
  );
}

export default QuestionList;
