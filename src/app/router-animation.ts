import { trigger, stagger, animate, style, group, query, transition } from "@angular/animations";

export const RollTop = [
    query(":enter", style({ position: "absolute", left: 0, right: 0, height: "*", transform: "translateY(100%)", opacity: 0 }), { optional: true }),
    query(":leave", style({ position: "absolute", left: 0, right: 0, height: "100vh", transform: "translateY(0%)", opacity: 1 }), { optional: true }),
    group([
      query(":leave", group([
        animate("0.5s ease-in-out", style({ opacity: 0 })),
        animate("1.3s ease-in-out", style({ transform: "translateY(-100%)" }))
      ]), {optional:true}),
      query(":enter", group([
        animate("0.5s ease-in-out", style({ opacity: 1 })),
        animate("1.3s ease-in-out", style({ transform: "translateY(0%)" })),
      ]), {optional:true})
    ])
  ]