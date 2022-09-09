import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [listOfQuestions, setListOfQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        setListOfQuestions(data)
      })
  }, [])

  function onDelete(id) {
    const updatedQuestions = listOfQuestions.filter((question) => {
      return (question.id === id ? false : true)
    })
    setListOfQuestions(updatedQuestions)
  }

  function onUpdate(updatedItem) {
    const updatedQuestions = listOfQuestions.map((question) => {
      return (question.id === updatedItem.id ? updatedItem : question)
    })
    setListOfQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm 
          setQuestions={setListOfQuestions}
          questions={listOfQuestions}
        /> : 
        <QuestionList 
          listOfQuestions={listOfQuestions}
          onDelete={onDelete}  
          onUpdate={onUpdate}
        />
      }
    </main>
  );
}

export default App;
