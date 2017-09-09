import { trigger, stagger, animate, keyframes, style, group, query, transition } from "@angular/animations";

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

export const Jelly = [
    query(":enter", style({transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}), { optional: true }),
    group([
      query(":enter", group([
        animate("2s", keyframes([
		  style({ transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0 }),
		  style({ transform: "matrix3d(1.316, 0, 0, 0, 0, 1.407, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.034 }),
		  style({ transform: "matrix3d(1.45, 0, 0, 0, 0, 1.599, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.047 }),
		  style({ transform: "matrix3d(1.659, 0, 0, 0, 0, 1.893, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.0681 }),
		  style({ transform: "matrix3d(1.883, 0, 0, 0, 0, 2.168, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.0941 }),
		  style({ transform: "matrix3d(1.942, 0, 0, 0, 0, 2.226, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.102 }),
		  style({ transform: "matrix3d(2.123, 0, 0, 0, 0, 2.332, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.136 }),
		  style({ transform: "matrix3d(2.141, 0, 0, 0, 0, 2.331, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.141 }),
		  style({ transform: "matrix3d(2.208, 0, 0, 0, 0, 2.239, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.175 }),
		  style({ transform: "matrix3d(2.212, 0, 0, 0, 0, 2.187, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.187 }),
		  style({ transform: "matrix3d(2.196, 0, 0, 0, 0, 2.069, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.213 }),
		  style({ transform: "matrix3d(2.151, 0, 0, 0, 0, 1.96, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.243 }),
		  style({ transform: "matrix3d(2.134, 0, 0, 0, 0, 1.938, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.252 }),
		  style({ transform: "matrix3d(2.063, 0, 0, 0, 0, 1.897, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.290 }),
		  style({ transform: "matrix3d(2.048, 0, 0, 0, 0, 1.899, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.299 }),
		  style({ transform: "matrix3d(1.979, 0, 0, 0, 0, 1.962, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.355 }),
		  style({ transform: "matrix3d(1.972, 0, 0, 0, 0, 1.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.367 }),
		  style({ transform: "matrix3d(1.961, 0, 0, 0, 0, 2.022, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.41 }),
		  style({ transform: "matrix3d(1.966, 0, 0, 0, 0, 2.032, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.44 }),
		  style({ transform: "matrix3d(1.991, 0, 0, 0, 0, 2.006, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.52 }),
		  style({ transform: "matrix3d(2.006, 0, 0, 0, 0, 1.99, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.598 }),
		  style({ transform: "matrix3d(2.007, 0, 0, 0, 0, 1.992, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.632 }),
		  style({ transform: "matrix3d(2.001, 0, 0, 0, 0, 2.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.752 }),
		  style({ transform: "matrix3d(1.999, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.854 }),
		  style({ transform: "matrix3d(1.999, 0, 0, 0, 0, 1.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 0.906 }),
		  style({ transform: "matrix3d(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", offset: 1 })
		]))
      ]), {optional:true})
    ])
  ]