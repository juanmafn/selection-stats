import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-paises",
  templateUrl: "./paises.component.html",
  styleUrls: ["./paises.component.css"]
})
export class PaisesComponent implements OnInit {
  paises: any[];

  constructor() {
    this.paises = [
      {
        nombre: "España",
        imagen:
          "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
      },
      {
        nombre: "Italia",
        imagen:
          "https://banderade.info/wp-content/uploads/2018/12/bandera-de-italia.gif"
      },
      {
        nombre: "Alemania",
        imagen:
          "https://www.francobordo.com/images/productos/bandera-alemania-1-6596.jpg"
      },
      {
        nombre: "Finlandia",
        imagen:
          "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg"
      }
    ];
  }

  ngOnInit() {}
}
