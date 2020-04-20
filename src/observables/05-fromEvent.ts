import { fromEvent } from 'rxjs';



const src1$ = fromEvent <MouseEvent>( document, 'click');
const src2$ = fromEvent <KeyboardEvent>( document, 'keyup');

const observer = { 
    next:val => console.log('next', val)
 };

 src1$.subscribe(ev =>{ 
    console.log(ev.x);
    console.log(ev.y);
});

 src2$.subscribe(evento =>  { 
     console.log(evento.key);
  });
 