import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acedemicsdetails',
  templateUrl: './acedemicsdetails.component.html',
  styleUrls: ['./acedemicsdetails.component.css']
})
export class AcedemicsdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  acdemics = [{name:"ssc",percentage:"80%"},{name:"hsc",percentage:"90%"},{name:"collage",percentage:"60%"},]
}
