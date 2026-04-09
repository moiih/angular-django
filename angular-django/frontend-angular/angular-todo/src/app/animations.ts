import { animate, state, style, transition, trigger } from '@angular/animations';


export let fadeIn =   trigger('fadeIn', [
    

    // transition('void => *',  [      // Basic Fade In Effect
    //     style({ background: 'white', opacity: 0 }),
    //     animate(600, style({ background: 'white', opacity: 1 }))
    //     // animate(2000)
    //   ]),      

    transition('void => *',  [      // Slide From Right To Left Effect
      style({ background: 'white', opacity: 0, marginLeft: 50 }),
      animate(500, style({ background: 'white', opacity: 1, marginLeft: 0 }))
      // animate(2000)
    ]),      


    // state('void', style({ opacity: 0 })),    // Fade In Effect (with 'state()' option)
    // transition(':enter, :leave', [
    //     animate(500),
    // ]),

  ]);