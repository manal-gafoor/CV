import { Component, Input } from '@angular/core';
import { 
  frontEnd, 
  backEnd, 
  ideTools, 
  designTools, 
  versionControl, 
  planning, 
  optimization, 
  problemSolving, 
  comms } from './boilerplate';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  frontEnd = frontEnd;
  backEnd = backEnd;
  ideTools = ideTools;
  designTools = designTools;
  versionControl = versionControl;
  planning = planning;
  optimization = optimization;
  problemSolving = problemSolving;
  comms = comms;
}
