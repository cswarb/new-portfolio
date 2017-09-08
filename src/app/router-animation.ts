import { trigger, stagger, animate, style, group, query, transition } from "@angular/animations";

export const slideLeft = [
    query(":leave", style({ position: "absolute", left: 0, right: 0 ,transform: "translate3d(0%,0,0)" }), {optional:true}),
    query(":enter", style({ position: "absolute", left: 0, right: 0, transform: "translate3d(-100%,0,0)" }), {optional:true}),
    group([
      query(":leave", group([
        animate("500ms cubic-bezier(.35,0,.25,1)", style({ transform: "translate3d(100%,0,0)" })), // y: "-100%"
      ]), {optional:true}),
      query(":enter", group([
        animate("500ms cubic-bezier(.35,0,.25,1)", style({ transform: "translate3d(0%,0,0)" })),
      ]), {optional:true})
    ])
  ]