import React from 'react';
import mockExamData from '../utils/mockExamData';
import './ExamDetails.css';

function ExamDetails() {
  return (
    <div className="exam-details-container">
      <h2>Exam Details</h2>
      <table>
        <thead>
          <tr>
            <th>Exam Name</th>
            <th>Duration</th>
            <th>Selection Mode</th>
            <th>Questions</th>
          </tr>
        </thead>
        <tbody>
          {mockExamData.map((exam, index) => (
            <tr key={index}>
              <td>{exam.examName}</td>
              <td>{exam.duration}</td>
              <td>{exam.selectionMode}</td>
              <td>{exam.questions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExamDetails;
