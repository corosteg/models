const mongoose = require('mongoose');


// TODO: Must validate that `version`, `parserVersion` and `rubric` are semver
// compatible version strings.


const ProjectSchema = new mongoose.Schema({
  slug: { type: String, required: true },
  repo: { type: String, required: true },
  path: { type: String, required: true },
  version: { type: String, required: true },
  parserVersion: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  prefix: Number,
  title: { type: String, required: true },
  locale: { type: String, required: true },
  track: { type: String, required: true },
  rubric: { type: String, required: true, default: '2.0.0' },
  skills: { type: Map, of: Number }, // ???
});


const Project = mongoose.model('Project', ProjectSchema);


module.exports = Project;
module.exports.Project = Project;
module.exports.ProjectSchema = ProjectSchema;
