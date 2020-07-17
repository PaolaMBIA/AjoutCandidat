import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/candidat-service.service';

@Component({
  selector: 'app-list-candidat',
  templateUrl: './list-candidat.component.html',
  styleUrls: ['./list-candidat.component.css']
})


export class ListCandidatComponent implements OnInit {
  
  Candidat:any = [];

  constructor(private apiService: ApiService) { 
    this.readCandidat();
  }

  ngOnInit() {}

  readCandidat(){
    this.apiService.getCandidats().subscribe((data) => {
     this.Candidat = data;
    })    
  }

}