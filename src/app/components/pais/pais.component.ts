import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-pais",
  templateUrl: "./pais.component.html",
  styleUrls: ["./pais.component.css"]
})
export class PaisComponent implements OnInit {
  @Input() nombre: string;
  @Input() imagen: string;

  constructor(private readonly router: Router) {}

  ngOnInit() {}

  navegar(equipo: string) {
    this.router.navigate(["equipo", equipo]);
  }
}
