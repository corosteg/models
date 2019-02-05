const { Schema } = require('mongoose');

/*
{
  "reviewerSurvey": {
    "perception": 2,
    "soft": "soft comment",
    "dropout": 3,
    "tech": "tech comment",
    "engagement": 1
  },
  "rubricResults": {
    "logic": 5,
    "architecture": 3,
    "communication": 4,
    "github": 5
    ...
  }
}
*/


module.exports = new Schema({
  // `projectid` debería ser un `ObjectId` que apunte al `project`????
  projectid: { type: String, required: true },
  // `uid` debería ser un `ObjectId` que apunte al `user`????
  uid: { type: String, required: true },
  // `cohortid` debería ser un `ObjectId` que apunte al `cohort`????
  cohortid: { type: String, required: true },
  // `rubric` hace referencia a la versión (major) de la rúbrica
  rubric: { type: String, enum: ['1', '2'] },
  // `reviewerSurvey` es el id de un objeto de tipo ReviewerSurvey
  reviewerSurvey: { type: String, required: true },
  createdBy: { type: String, required: true }, // `uid` de la evaluadora...
  createdAt: { type: Date, default: Date.now },
  reviewerSurveyResults: {}, // Map de Number o String????
  rubricResults: { type: Map, of: Number },
  notes: { type: String },
});
