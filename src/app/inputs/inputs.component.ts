import { Component } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  

  addTask() {
    console.log("Agregar tarea")
    const inputTitle = document.getElementById('input-ul') as HTMLInputElement | null;

    const taskTitle = inputTitle?.value;
    console.log(taskTitle)
    

    const inputDesc = document.getElementById('desc-ul') as HTMLInputElement | null;

    const taskDesc = inputDesc?.value;
    console.log(taskDesc)

  }

  async getCats() {
    const response = await fetch("https://catfact.ninja/fact");
    const jsonData = await response.json();
    return jsonData;
  }

  

  seeCat(cat: { fact: any; }){
    console.log(cat.fact)
}

  addCatsk(){
    let json=this.getCats();
    console.log(json.then(this.seeCat))
  }

  addLink()
  {
    window.open("https://www.youtube.com/watch?v=jIQ6UV2onyI&t=32s")
  }
}


