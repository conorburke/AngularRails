import { Component } from '@angular/core';
import { Document } from './document';

@Component({ 
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
  pageTitle: string = "Document Dashboard";

  documents: Document[] = [
    {
      title: "My first doc",
      description: "an angular experiment",
      file_url: 'www.google.com',
      updated_at: '1/1/2017',
      image_url: 'www.google.com'
    },
    {
      title: "My second doc",
      description: "an angular experiment",
      file_url: 'www.google.com',
      updated_at: '1/1/2017',
      image_url: 'www.google.com'
    },
    {
      title: "My third doc",
      description: "an angular experiment",
      file_url: 'www.google.com',
      updated_at: '1/1/2017',
      image_url: 'www.google.com'
    }

  ]
}
