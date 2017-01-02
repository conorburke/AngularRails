import { Component } from '@angular/core';
import { Document } from './document';

@Component({ 
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})

export class DocumentsComponent {
  pageTitle: string = "Document Dashboard";

  documents: Document[] = [
    {
      title: "My first doc",
      description: "an angular experiment",
      file_url: 'www.google.com',
      updated_at: '1/1/2017',
      image_url: 'https://c2.staticflickr.com/6/5490/14525128103_08a505b99c_b.jpg'
    },
    {
      title: "My second doc",
      description: "an angular experiment",
      file_url: 'www.google.com',
      updated_at: '1/1/2017',
      image_url: 'https://c2.staticflickr.com/4/3925/15354675906_4a5a05d088_b.jpg'
    },
    {
      title: "My third doc",
      description: "an angular experiment",
      file_url: 'www.google.com',
      updated_at: '1/1/2017',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/STS-135_final_flyaround_of_ISS_1.jpg/500px-STS-135_final_flyaround_of_ISS_1.jpg'
    }

  ]
}
